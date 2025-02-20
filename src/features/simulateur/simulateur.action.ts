"use server";

import { action } from "@/lib/safe-actions";
import {
  AmortissementType,
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
let resultatsAnnuel: AmortissementType[] = [];
let montantPret: number = 0;
let sommeFraisBancaire: number = 0;

export const calculRentabilite = action
  .schema(DataSchema)
  .outputSchema(ResultSchema)
  .action(async (parsedInput) => {
    let montantPret = getMontantPret(parsedInput.parsedInput);
    let mensualites = getMensualite(parsedInput.parsedInput, montantPret);
    return {
      rentabiliteBrute: getRentabiliteBrute(
        parsedInput.parsedInput.loyersTotal,
        montantPret,
        parsedInput.parsedInput.nbMoisLocParAn
      ),
      rentabiliteNette: getRentabiliteNette(
        parsedInput.parsedInput,
        montantPret,
        parsedInput.parsedInput.nbMoisLocParAn
      ),
      rentabiliteNetteNette: getRentabiliteNetteNette(
        parsedInput.parsedInput,
        montantPret,
        parsedInput.parsedInput.nbMoisLocParAn
      ),
      montantPret: montantPret,
      resultatsMensuel: getResultatsGlobal(
        parsedInput.parsedInput,
        mensualites,
        montantPret
      ),
      resultatsAnnuel: getResultatsAnnuel(
        parsedInput.parsedInput,
        mensualites,
        montantPret
      ),
      mensualites: mensualites,
      cashflowBrut: parsedInput.parsedInput.loyersTotal - mensualites,
      fraisBancaires: getSommeFraisBancaires(resultatsGlobal),
      coutPret: getCoutPret(montantPret, sommeFraisBancaire),
    };
  });

function getRentabiliteBrute(
  loyersTotal: number,
  montantPret: number,
  nbMoisLocParAn: number
) {
  return ((loyersTotal * nbMoisLocParAn) / montantPret) * 100;
}

function getRentabiliteNette(
  values: DataType,
  montantPret: number,
  nbMoisLocParAn: number
) {
  return (
    ((values.loyersTotal * nbMoisLocParAn -
      values.impotsFoncier -
      values.chargesCopro) /
      montantPret) *
    100
  );
}

function getRentabiliteNetteNette(
  values: DataType,
  montantPret: number,
  nbMoisLocParAn: number
) {
  var loyersAnnuel = values.loyersTotal * nbMoisLocParAn;
  if (values.regimeFiscal == "lmnpMicroBIC") {
    var revenuNetImposable = 0;
    if (values.typeLocation == "meublee") {
      // Abattement de 50%
      revenuNetImposable = loyersAnnuel * 0.5;
    } else if (values.typeLocation == "nue") {
      // Abattement de 30%
      revenuNetImposable = loyersAnnuel * 0.7;
    }

    // Impots sur le revenu
    var ir = (revenuNetImposable * Number(values.tmi)) / 100;
    // Prelevements sociaux = 17,2% du revenus net imposable
    var ps = revenuNetImposable * 0.172;

    var revenuNetNetAnnuel =
      loyersAnnuel - values.impotsFoncier - values.chargesCopro - ir - ps;

    var rentabiliteNetteNette = (revenuNetNetAnnuel / montantPret) * 100;
    return rentabiliteNetteNette;
  } else if (values.regimeFiscal == "lmnpReel") {
    // La part immobilière amortissable est 80% du bien car on enlève la part du terrain (20%)
    var partImmoAmortissable = montantPret * 0.8;

    // Le taux annuel amortissable pour l'immobilier et les travaux est calculé en fonction de la durée du prêt
    var tauxAmortissementAnnuel = 1 / values.dureePret;
    var amortissementImmoAnnuel =
      partImmoAmortissable * tauxAmortissementAnnuel;
    var amortissementTravauxAnnuel =
      values.montantTravaux * tauxAmortissementAnnuel;

    // Le mobilier est amortissable sur 10 ans maximum, soit 10% par an
    // Si le prêt est inférieur à 10 ans, alors on l'amorti sur la durée du prêt
    var tauxAmortissementMobilier = 0.1;
    if (values.dureePret < 10) {
      tauxAmortissementMobilier = 1 / values.dureePret;
    }
    var amortissementMobilierAnnuel =
      values.montantMobilier * tauxAmortissementMobilier;

    // Amortissement total déductible
    var amortissementTotal =
      amortissementImmoAnnuel +
      amortissementTravauxAnnuel +
      amortissementMobilierAnnuel;

    var resultatFiscal =
      loyersAnnuel -
      values.impotsFoncier -
      values.chargesCopro -
      amortissementTotal;
    if (resultatFiscal < 0) {
      resultatFiscal = 0;
    }

    // Impots sur le revenu
    var ir = (resultatFiscal * Number(values.tmi)) / 100;

    // Prelevements sociaux = 17,2% du résultat fiscal
    var ps = resultatFiscal * 0.172;

    var revenuNetNetAnnuel =
      loyersAnnuel - values.impotsFoncier - values.chargesCopro - ir - ps;
    var rentabiliteNetteNette = (revenuNetNetAnnuel / montantPret) * 100;
    return rentabiliteNetteNette;
  }
  return 0;
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
  montantPret: number
) {
  resultatsAnnuel = [];
  let pretRestant = montantPret;
  let pretRembourse = 0;
  // for (let cptAnnee = 1; cptAnnee <= values.dureePret; cptAnnee++) {
  for (let cptAnnee = 1; cptAnnee <= 30; cptAnnee++) {
    let interetsAnneeN = 0;
    let pretRestantFinAnneeN = 0;
    let mensualitesAnnuelles = 0;

    for (let cptMois = 1; cptMois <= 12; cptMois++) {
      const interetsMensuel = getMontantInteretsMensuel(
        pretRestant,
        getTauxInteretMensuel(values.tauxPret)
      );
      interetsAnneeN = interetsAnneeN + interetsMensuel;

      pretRembourse = mensualites - interetsMensuel;
      pretRestant = pretRestant - pretRembourse;
      if (cptMois == 12) {
        pretRestantFinAnneeN = pretRestant;
      }
      if (pretRestant > 0) {
        mensualitesAnnuelles = mensualitesAnnuelles + mensualites;
      }
    }

    let cashflowNetNet = values.loyersTotal * 12 - mensualitesAnnuelles;

    resultatsAnnuel.push({
      annee: cptAnnee.toString(),
      interet: interetsAnneeN,
      pret: pretRestantFinAnneeN,
      loyers: values.loyersTotal * 12,
      cashflowNetNet: cashflowNetNet,
      mensualitesAnnuelles: mensualitesAnnuelles,
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
