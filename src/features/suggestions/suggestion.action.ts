"use server";

import { action } from "@/lib/safe-actions";
import { prisma } from "@/prisma";
import { SuggestionSchema } from "./suggestion.schema";

export const sendSuggestion = action
  .schema(SuggestionSchema)
  .outputSchema(SuggestionSchema)
  .action(async (parsedInput) => {
    const suggestion = await prisma.suggestion.create({
      data: {
        email: parsedInput.parsedInput.email,
        suggestion: parsedInput.parsedInput.suggestion,
      },
    });
    return suggestion;
  });
