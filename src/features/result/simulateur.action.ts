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
    };
  });

function getRentabiliteBrute(values: DataType) {
  return ((values.loyersTotal * 12) / values.prixAchat) * 100;
}

function getRentabiliteNette(values: DataType) {
  let montantFraisNotaire = values.prixAchat * (values.fraisNotaire / 100);
  return (
    ((values.loyersTotal * 12) / (values.prixAchat + montantFraisNotaire)) * 100
  );
}
