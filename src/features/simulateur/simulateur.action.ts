"use server";

import { action } from "@/lib/safe-actions";
import {
  AmortissementGlobalType,
  DataSchema,
  DataType,
  ResultatGlobalType,
  ResultSchema,
} from "./simulateur.schema";

const mapMoisByIndex: Record<number, string> = {
  1: "Janvier",
  2: "Février",
  3: "Mars",
  4: "Avril",
  5: "Mai",
  6: "Juin",
  7: "Juillet",
  8: "Août",
  9: "Septembre",
  10: "Octobre",
  11: "Novembre",
  12: "Décembre",
};

let resultatsGlobal: ResultatGlobalType[] = [];
let resultatsAnnuel: AmortissementGlobalType[] = [];
let montantPret: number = 0;
let sommeFraisBancaire: number = 0;

export const calculRentabilite = action
  .schema(DataSchema)
  .outputSchema(ResultSchema)
  .action(async (parsedInput) => {
    let montantPret = getMontantPret(parsedInput.parsedInput);
    let mensualites = getMensualite(parsedInput.parsedInput, montantPret);

    let regimeFiscal = parsedInput.parsedInput.regimeFiscal;
    let rentabiliteNetteNette = 0;
    let revenuImposable = 0;
    let loyersAnnuel =
      parsedInput.parsedInput.loyersTotal *
      parsedInput.parsedInput.nbMoisLocParAn;

    if (regimeFiscal == "lmnpMicroBIC") {
      revenuImposable = getRevenuNetImposableMicroBIC(
        parsedInput.parsedInput,
        loyersAnnuel
      );
      rentabiliteNetteNette = getRentabiliteNetteNetteMicroBIC(
        parsedInput.parsedInput,
        montantPret,
        revenuImposable,
        loyersAnnuel
      );
    } else if (regimeFiscal == "lmnpReel") {
      revenuImposable = getRevenuFiscalReel(
        parsedInput.parsedInput,
        loyersAnnuel,
        1
      );
      rentabiliteNetteNette = getRentabiliteNetteNetteReel(
        parsedInput.parsedInput,
        montantPret,
        revenuImposable,
        loyersAnnuel
      );
    }

    return {
      rentabiliteBrute: getRentabiliteBrute(loyersAnnuel, montantPret),
      rentabiliteNette: getRentabiliteNette(
        parsedInput.parsedInput,
        montantPret,
        loyersAnnuel
      ),
      rentabiliteNetteNette: rentabiliteNetteNette,
      montantPret: montantPret,
      resultatsMensuel: getResultatsGlobal(
        parsedInput.parsedInput,
        mensualites,
        montantPret
      ),
      resultatsAnnuel: getResultatsAnnuel(
        parsedInput.parsedInput,
        mensualites,
        montantPret,
        revenuImposable,
        loyersAnnuel
      ),
      mensualites: mensualites,
      cashflowBrut: parsedInput.parsedInput.loyersTotal - mensualites,
      fraisBancaires: getSommeFraisBancaires(resultatsGlobal),
      coutPret: getCoutPret(montantPret, sommeFraisBancaire),
    };
  });

function getRentabiliteBrute(loyersAnnuel: number, montantPret: number) {
  return (loyersAnnuel / montantPret) * 100;
}

function getRentabiliteNette(
  values: DataType,
  montantPret: number,
  loyersAnnuel: number
) {
  return (
    ((loyersAnnuel - values.impotsFoncier - values.chargesCopro) /
      montantPret) *
    100
  );
}

function getIR(revenuImposable: number, tmi: string) {
  return (revenuImposable * Number(tmi)) / 100;
}

function getPS(revenuImposable: number) {
  return revenuImposable * 0.172;
}

// Revenus imposable annuel en micro-BIC
function getRevenuNetImposableMicroBIC(values: DataType, loyersAnnuel: number) {
  var revenuNetImposable = 0;
  if (values.typeLocation == "meublee") {
    // Abattement de 50%
    revenuNetImposable = loyersAnnuel * 0.5;
  } else if (values.typeLocation == "nue") {
    // Abattement de 30%
    revenuNetImposable = loyersAnnuel * 0.7;
  }
  return revenuNetImposable;
}

function getTauxAmortissementAnnuel(dureePret: number, annee: number) {
  if (annee > dureePret) {
    return 0;
  }
  return 1 / dureePret;
}

// La part immo amortissable est 80% du prix du bien car un enlève la part du terrain (20%)
function getAmortissementImmo(values: DataType, annee: number) {
  // La part immobilière amortissable est 80% du bien car on enlève la part du terrain (20%)
  let partImmoAmortissable = values.prixAchat * 0.8;

  // Le taux annuel amortissable pour l'immobilier est calculé en fonction de la durée du prêt
  let tauxAmortissementAnnuel = getTauxAmortissementAnnuel(
    values.dureePret,
    annee
  );
  let amortissementImmoAnnuel = partImmoAmortissable * tauxAmortissementAnnuel;
  return { taux: tauxAmortissementAnnuel, montant: amortissementImmoAnnuel };
}

function getAmortissementTravaux(values: DataType, annee: number) {
  // Le taux annuel amortissable pour les travaux est calculé en fonction de la durée du prêt
  let tauxAmortissementAnnuel = getTauxAmortissementAnnuel(
    values.dureePret,
    annee
  );
  let amortissementTravauxAnnuel =
    values.montantTravaux * tauxAmortissementAnnuel;
  if (values.montantTravaux == 0) {
    tauxAmortissementAnnuel = 0;
  }
  return { taux: tauxAmortissementAnnuel, montant: amortissementTravauxAnnuel };
}

// Le mobilier est amortissable sur 10 ans maximum, soit 10% par an
// Si le prêt est inférieur à 10 ans, alors on l'amorti sur la durée du prêt
function getTauxAmortissementMobilier(dureePret: number, annee: number) {
  if (dureePret < 10 && annee < dureePret) {
    return 1 / dureePret;
  } else if (dureePret == 10) {
    return 0.1;
  }
  return 0;
}

function getAmortissementMobilier(values: DataType, annee: number) {
  let tauxAmortissementMobilier = getTauxAmortissementMobilier(
    values.dureePret,
    annee
  );
  var amortissementMobilierAnnuel =
    values.montantMobilier * tauxAmortissementMobilier;
  return {
    taux: tauxAmortissementMobilier,
    montant: amortissementMobilierAnnuel,
  };
}

// Resultat fiscal annuel au réel
function getRevenuFiscalReel(
  values: DataType,
  loyersAnnuel: number,
  annee: number
) {
  let amortissementImmo = getAmortissementImmo(values, annee);
  let amortissementTravaux = getAmortissementTravaux(values, annee);
  let amortissementMobilier = getAmortissementMobilier(values, annee);

  // Amortissement total déductible
  var amortissementTotal =
    amortissementImmo.montant +
    amortissementTravaux.montant +
    amortissementMobilier.montant;

  var resultatFiscal =
    loyersAnnuel -
    values.impotsFoncier -
    values.chargesCopro -
    amortissementTotal;
  if (resultatFiscal < 0) {
    resultatFiscal = 0;
  }
  return resultatFiscal;
}

function getRentabiliteNetteNetteMicroBIC(
  values: DataType,
  montantPret: number,
  revenuNetImposable: number,
  loyersAnnuel: number
) {
  // Impots sur le revenu
  var ir = getIR(revenuNetImposable, values.tmi);
  // Prelevements sociaux = 17,2% du revenus net imposable
  var ps = getPS(revenuNetImposable);

  var revenuNetNetAnnuel =
    loyersAnnuel - values.impotsFoncier - values.chargesCopro - ir - ps;

  var rentabiliteNetteNette = (revenuNetNetAnnuel / montantPret) * 100;
  return rentabiliteNetteNette;
}

function getRentabiliteNetteNetteReel(
  values: DataType,
  montantPret: number,
  resultatFiscal: number,
  loyersAnnuel: number
) {
  // Impots sur le revenu
  var ir = getIR(resultatFiscal, values.tmi);

  // Prelevements sociaux = 17,2% du résultat fiscal
  var ps = getPS(resultatFiscal);

  var revenuNetNetAnnuel =
    loyersAnnuel - values.impotsFoncier - values.chargesCopro - ir - ps;
  var rentabiliteNetteNette = (revenuNetNetAnnuel / montantPret) * 100;
  return rentabiliteNetteNette;
}

function getMontantPret(values: DataType) {
  montantPret =
    values.prixAchat +
    values.montantTravaux +
    values.montantMobilier +
    values.fraisAgence +
    values.fraisNotaire -
    values.apport;
  return montantPret;
}

function getResultatsGlobal(
  values: DataType,
  mensualites: number,
  montantPret: number
) {
  resultatsGlobal = [];
  let pretRestant = montantPret;
  let pretRembourse = 0;
  for (let cptAnnee = 1; cptAnnee <= values.dureePret; cptAnnee++) {
    let resultatsMensuel = [];

    for (let cptMois = 1; cptMois <= 12; cptMois++) {
      const interetsPret = getMontantInteretsMensuel(
        pretRestant,
        getTauxInteretMensuel(values.tauxPret)
      );

      resultatsMensuel.push({
        annee: cptAnnee,
        mois: mapMoisByIndex[cptMois],
        pretRestant: pretRestant,
        interetsPret: interetsPret,
      });

      pretRembourse = mensualites - interetsPret;
      pretRestant = pretRestant - pretRembourse;
    }

    resultatsGlobal.push({
      annee: resultatsMensuel[0].annee,
      mois: resultatsMensuel[0].mois,
      pretRestant: resultatsMensuel[0].pretRestant,
      interetsPret: resultatsMensuel[0].interetsPret,
      resultatsMensuel: resultatsMensuel,
    });
  }
  return resultatsGlobal;
}

function getResultatsAnnuel(
  values: DataType,
  mensualites: number,
  montantPret: number,
  revenuImposable: number,
  loyersAnnuel: number
) {
  resultatsAnnuel = [];
  for (let cptAnnee = 1; cptAnnee <= 30; cptAnnee++) {
    let mensualitesAnnuelles = 0;

    for (let cptMois = 1; cptMois <= 12; cptMois++) {
      if (cptAnnee <= values.dureePret) {
        mensualitesAnnuelles = mensualitesAnnuelles + mensualites;
      } else {
        // Passage au micro-BIC après crédit car plus interessant
        revenuImposable = getRevenuNetImposableMicroBIC(values, loyersAnnuel);
      }
    }

    let ps = getPS(revenuImposable);
    let ir = getIR(revenuImposable, values.tmi);
    let cashflowNetNet = loyersAnnuel - mensualitesAnnuelles - ps - ir;

    resultatsAnnuel.push({
      annee: cptAnnee.toString(),
      loyersAnnuel: loyersAnnuel,
      vacanceLocative: values.nbMoisLocParAn,
      credit: mensualitesAnnuelles,
      ps: getPS(revenuImposable),
      ir: getIR(revenuImposable, values.tmi),
      foncier: values.impotsFoncier,
      copro: values.chargesCopro,
      amortissementImmo: getAmortissementImmo(values, cptAnnee),
      amortissementTravaux: getAmortissementTravaux(values, cptAnnee),
      amortissementMobilier: getAmortissementMobilier(values, cptAnnee),
      cashflow: cashflowNetNet,
    });
  }
  console.log("TEST GUI:", resultatsAnnuel);
  return resultatsAnnuel;
}

function getTauxInteretMensuel(tauxInteretAnnuel: number) {
  return tauxInteretAnnuel / (12 * 100);
}

function getMontantInteretsMensuel(
  pretRestant: number,
  tauxInteretsMensuel: number
) {
  return pretRestant * tauxInteretsMensuel;
}

function getNbMensualites(nbAnnuites: number) {
  return nbAnnuites * 12;
}

function getMensualite(values: DataType, montantPret: number) {
  const tauxInteretMensuel = getTauxInteretMensuel(values.tauxPret);
  const nbMensualites = getNbMensualites(values.dureePret);
  // const montantAssuranceMensuel = getMontantAssuranceMensuel(
  //   values.tauxAssurancePret,
  //   montantPret
  // );

  const numerateur =
    tauxInteretMensuel * Math.pow(1 + tauxInteretMensuel, nbMensualites);
  const denominateur = Math.pow(1 + tauxInteretMensuel, nbMensualites) - 1;
  const division = numerateur / denominateur;
  const mensualitesHorsAss = montantPret * division;
  return mensualitesHorsAss;
}

function getSommeFraisBancaires(resultatsMensuel: ResultatGlobalType[]) {
  sommeFraisBancaire = resultatsMensuel.reduce(
    (accumulator, product) => accumulator + product.interetsPret,
    0
  );
  return sommeFraisBancaire;
}

function getCoutPret(montantPret: number, fraisBancaire: number) {
  return montantPret + fraisBancaire;
}

function getMontantAssuranceMensuel(
  tauxAssurance: number,
  montantPret: number
) {
  return (montantPret * (tauxAssurance / 100)) / 12;
}
