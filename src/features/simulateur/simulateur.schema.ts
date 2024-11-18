import { z } from "zod";

export const DataSchema = z.object({
  prixAchat: z.number({
    message: "Renseignez un nombre valide",
  }),
  fraisAgence: z.number({
    message: "Renseignez un nombre valide",
  }),
  dureePret: z.number(),
  tauxPret: z.number(),
  loyersTotal: z.number({
    message: "Renseignez un nombre valide",
  }),
  fraisNotaire: z.number(),
  montantTravaux: z.number({
    message: "Renseignez un nombre valide",
  }),
  impotsFoncier: z.number({
    message: "Renseignez un nombre valide",
  }),
  chargesCopro: z.number({
    message: "Renseignez un nombre valide",
  }),
  apport: z.number({
    message: "Renseignez un nombre valide",
  }),
});
export type DataType = z.infer<typeof DataSchema>;

export const ResultatMensuel = z.object({
  annee: z.number(),
  mois: z.string(),
  pretRestant: z.number(),
  interetsPret: z.number(),
});
export type ResultatMensuelType = z.infer<typeof ResultatMensuel>;

export const ResultSchema = z.object({
  rentabiliteBrute: z.number(),
  rentabiliteNette: z.number(),
  montantPret: z.number(),
  resultatsMensuel: z.array(ResultatMensuel),
  mensualites: z.number(),
  cashflowBrut: z.number(),
  fraisBancaires: z.number(),
  coutPret: z.number(),
});

export const AccessSchema = z.object({
  email: z.string().optional(),
});
export type AccessType = z.infer<typeof AccessSchema>;
