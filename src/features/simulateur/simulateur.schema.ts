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

export const ResultatMensuel = z.object({
  annee: z.number(),
  mois: z.string(),
  pretRestant: z.number(),
  interetsPret: z.number(),
  mensualite: z.number(),
  resultat: z.number(),
});
export type ResultatMensuelType = z.infer<typeof ResultatMensuel>;

export const ResultSchema = z.object({
  rentabiliteBrute: z.number(),
  rentabiliteNette: z.number(),
  montantPret: z.number(),
  resultatsMensuel: z.array(ResultatMensuel),
  fraisBancaires: z.number(),
  coutPret: z.number(),
});
