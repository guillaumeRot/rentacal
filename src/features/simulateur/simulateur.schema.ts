import { z } from "zod";

export const DataSchema = z.object({
  prixAchat: z.number({
    message: "Renseignez un nombre valide",
  }),
  dureePret: z.number(),
  tauxPret: z.number(),
  loyersTotal: z.number({
    message: "Renseignez un nombre valide",
  }),
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

export const AccessSchema = z.object({
  email: z.string().optional(),
});
export type AccessType = z.infer<typeof AccessSchema>;
