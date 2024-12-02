import { z } from "zod";

export const ParametresSchema = z.object({
  id: z.string(),
  userId: z.string(),
  nbMoisLocParAn: z.number(),
  dureePret: z.number(),
  tauxPret: z.number(),
  assurancePret: z.number(),
  apport: z.number(),
});
export type ParametresType = z.infer<typeof ParametresSchema>;
