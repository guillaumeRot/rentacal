"use server";

import { action } from "@/lib/safe-actions";
import {
  DataSchema,
  DataType,
  ResultatMensuelType,
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

let resultatsMensuel: ResultatMensuelType[] = [];
let montantPret: number = 0;
let sommeFraisBancaire: number = 0;

export const calculRentabilite = action
  .schema(DataSchema)
  .outputSchema(ResultSchema)
  .action(async (parsedInput) => {
    return {
      rentabiliteBrute: getRentabiliteBrute(parsedInput.parsedInput).toFixed(2),
      rentabiliteNette: getRentabiliteNette(parsedInput.parsedInput).toFixed(2),
      montantPret: getMontantPret(parsedInput.parsedInput),
      resultatsMensuel: getResultatsMensuel(parsedInput.parsedInput),
      fraisBancaires: getSommeFraisBancaires(resultatsMensuel).toFixed(2),
      coutPret: getCoutPret(montantPret, sommeFraisBancaire).toFixed(2),
    };
  });

function getRentabiliteBrute(values: DataType) {
  return ((values.loyersTotal * 12) / values.prixAchat) * 100;
}

function getRentabiliteNette(values: DataType) {
  let montantFraisNotaire = getMontantFraisNotaires(
    values.prixAchat,
    values.fraisNotaire
  );
  return (
    ((values.loyersTotal * 12) / (values.prixAchat + montantFraisNotaire)) * 100
  );
}

function getMontantPret(values: DataType) {
  montantPret =
    values.prixAchat +
    values.montantTravaux +
    getMontantFraisNotaires(values.prixAchat, values.fraisNotaire);
  return montantPret;
}

function getMontantFraisNotaires(prixAchat: number, fraisNotaire: number) {
  return prixAchat * (fraisNotaire / 100);
}

function getResultatsMensuel(values: DataType) {
  let pretRestant = values.prixAchat;
  let pretRembourse = 0;
  for (let cptAnnee = 1; cptAnnee <= values.dureePret; cptAnnee++) {
    for (let cptMois = 1; cptMois <= 12; cptMois++) {
      let mensualite = getMensualite(values);
      let interetsPret = getMontantInteretsMensuel(
        pretRestant,
        getTauxInteretMensuel(values.tauxPret)
      );

      resultatsMensuel.push({
        annee: cptAnnee,
        mois: mapMoisByIndex[cptMois],
        pretRestant: pretRestant.toFixed(2),
        interetsPret: interetsPret.toFixed(2),
        Mensualite: mensualite.toFixed(2),
        resultat: (values.loyersTotal - mensualite).toFixed(2),
      });

      pretRembourse = mensualite - interetsPret;
      pretRestant = pretRestant - pretRembourse;
    }
  }
  return resultatsMensuel;
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

function getMensualite(values: DataType) {
  let tauxInteretMensuel = getTauxInteretMensuel(values.tauxPret);
  let nbMensualites = getNbMensualites(values.dureePret);
  return (
    (values.prixAchat * tauxInteretMensuel) /
    (1 - Math.pow(1 + tauxInteretMensuel, -nbMensualites))
  );
}

function getSommeFraisBancaires(resultatsMensuel: ResultatMensuelType[]) {
  sommeFraisBancaire = resultatsMensuel.reduce(
    (accumulator, product) => accumulator + parseFloat(product.interetsPret),
    0
  );
  return sommeFraisBancaire;
}

function getCoutPret(montantPret: number, fraisBancaire: number) {
  return montantPret + fraisBancaire;
}
