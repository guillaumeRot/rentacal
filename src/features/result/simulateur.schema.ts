import { z } from "zod";

export const DataSchema = z.object({
  prixAchat: z.number(),
  dureePret: z.number(),
  tauxPret: z.number(),
  loyersTotal: z.number(),
  fraisNotaire: z.number(),
  montantTravaux: z.number(),
  impotsFoncier: z.number(),
  chargesCopro: z.number(),
});
export type DataType = z.infer<typeof DataSchema>;

export const ResultSchema = z.object({
  rentabiliteBrute: z.string(),
  rentabiliteNette: z.string(),
  montantPret: z.number(),
});
