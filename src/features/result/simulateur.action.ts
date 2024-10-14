"use server";

import { action } from "@/lib/safe-actions";
import { DataSchema, DataType, ResultSchema } from "./simulateur.schema";

export const calculRentabilite = action
  .schema(DataSchema)
  .outputSchema(ResultSchema)
  .action(async (parsedInput) => {
    return {
      rentabiliteBrute: getRentabiliteBrute(parsedInput.parsedInput).toFixed(2),
      rentabiliteNette: getRentabiliteNette(parsedInput.parsedInput).toFixed(2),
      montantPret: getMontantPret(parsedInput.parsedInput),
      resultatsMensuel: getResultatsMensuel(parsedInput.parsedInput),
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
  return (
    values.prixAchat +
    values.montantTravaux +
    getMontantFraisNotaires(values.prixAchat, values.fraisNotaire)
  );
}

function getMontantFraisNotaires(prixAchat: number, fraisNotaire: number) {
  return prixAchat * (fraisNotaire / 100);
}

function getResultatsMensuel(values: DataType) {
  return [
    {
      annee: 1,
      mois: "Janvier",
      pretRestant: 150000,
      interetsPret: 565,
      pretAvecInterets: 165000,
      Mensualite: 765,
      resultat: "+ 255 €",
    },
    {
      annee: 2,
      mois: "Janvier",
      pretRestant: 145000,
      interetsPret: 550,
      pretAvecInterets: 162000,
      Mensualite: 763,
      resultat: "+ 258 €",
    },
  ];
}
