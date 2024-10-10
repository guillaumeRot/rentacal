"use server";

import { action } from "@/lib/safe-actions";
import { DataSchema, ResultSchema } from "./simulateur.schema";

export const calculRentabilite = action
  .schema(DataSchema)
  .outputSchema(ResultSchema)
  .action(async (parsedInput) => {
    console.log("TEST GUI - calculRentabilite: ", parsedInput);
    const rentabiliteBrute =
      ((parsedInput.parsedInput.loyersTotal * 12) /
        parsedInput.parsedInput.prixAchat) *
      100;
    return {
      rentabiliteBrute: rentabiliteBrute,
    };
  });
