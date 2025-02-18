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
  nbMoisLocParAn: z.number(),
  fraisNotaire: z.number({
    message: "Renseignez un nombre valide",
  }),
  montantTravaux: z.number({
    message: "Renseignez un nombre valide",
  }),
  montantMobilier: z.number({
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
  tauxAssurancePret: z.number(),
  regimeFiscal: z.string(),
  tmi: z.string(),
});
export type DataType = z.infer<typeof DataSchema>;

export const ResultatMensuel = z.object({
  annee: z.number(),
  mois: z.string(),
  pretRestant: z.number(),
  interetsPret: z.number(),
});
export const ResultatGlobal = z.object({
  annee: z.number(),
  mois: z.string(),
  pretRestant: z.number(),
  interetsPret: z.number(),
  resultatsMensuel: z.array(ResultatMensuel),
});
export type ResultatGlobalType = z.infer<typeof ResultatGlobal>;

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

export const FeedbackSchema = z.object({
  email: z.string(),
  name: z.string(),
  feedback: z.string(),
});
export type FeedbackType = z.infer<typeof FeedbackSchema>;

export const FormFieldSchema = z.object({
  slug: z.string(),
  label: z.string(),
  min: z.number().optional(),
  max: z.number().optional(),
  step: z.number().optional(),
  value: z.number().optional(),
  description: z.string(),
  component: z.enum(["input", "select", "slider"]),
  type: z.enum(["text", "number", "password", "email"]).optional(),
  select: z
    .object({
      placeholder: z.string(),
      items: z.array(
        z.object({
          slug: z.string(),
          name: z.string(),
        })
      ),
    })
    .optional(),
});
export type FormFieldType = z.infer<typeof FormFieldSchema>;
