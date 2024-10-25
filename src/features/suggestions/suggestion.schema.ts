import { z } from "zod";

export const SuggestionSchema = z.object({
  email: z.string(),
  suggestion: z.string(),
});
export type SuggestionType = z.infer<typeof SuggestionSchema>;
