import { z } from "zod";

export const ParametresSchema = z.object({
  id: z.string(),
  userId: z.string(),
  nbMoisLocParAn: z.number().nullable(),
  dureePret: z.number().nullable(),
  tauxPret: z.number().nullable(),
  assurancePret: z.number().nullable(),
  apport: z.number().nullable(),
});
export type ParametresType = z.infer<typeof ParametresSchema>;
