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
