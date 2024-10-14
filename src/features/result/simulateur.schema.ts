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

export const ResultatMensuel = z.object({
  annee: z.number(),
  mois: z.string(),
  pretRestant: z.number(),
  interetsPret: z.number(),
  pretAvecInterets: z.number(),
  Mensualite: z.number(),
  resultat: z.string(),
});
export type ResultatMensuelType = z.infer<typeof ResultatMensuel>;
