"use server";

import { action } from "@/lib/safe-actions";
import { DataSchema, DataType, ResultSchema } from "./simulateur.schema";

export const calculRentabilite = action
  .schema(DataSchema)
  .outputSchema(ResultSchema)
  .action(async (parsedInput) => {
    return {
      rentabiliteBrute: getRentabiliteBrute(parsedInput.parsedInput),
      rentabiliteNette: getRentabiliteNette(parsedInput.parsedInput),
    };
  });

function getRentabiliteBrute(values: DataType) {
  return ((values.loyersTotal * 12) / values.prixAchat) * 100;
}

function getRentabiliteNette(values: DataType) {
  return ((values.loyersTotal * 12) / values.prixAchat) * 100;
}
