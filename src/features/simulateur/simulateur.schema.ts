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
  typeLocation: z.string(),
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

export const AmortissementSchema = z.object({
  taux: z.number(),
  montant: z.number(),
});
export const AmortissementGlobalSchema = z.object({
  annee: z.string(),
  loyersAnnuel: z.number(),
  vacanceLocative: z.number(),
  credit: z.number(),
  ir: z.number(),
  ps: z.number(),
  foncier: z.number(),
  copro: z.number(),
  amortissementImmo: AmortissementSchema,
  amortissementTravaux: AmortissementSchema,
  amortissementMobilier: AmortissementSchema,
  cashflow: z.number(),
});
export type AmortissementGlobalType = z.infer<typeof AmortissementGlobalSchema>;

export const ResultSchema = z.object({
  rentabiliteBrute: z.number(),
  rentabiliteNette: z.number(),
  rentabiliteNetteNette: z.number(),
  montantPret: z.number(),
  // resultatsMensuel: z.array(AmortissementGlobalSchema),
  resultatsAnnuel: z.array(AmortissementGlobalSchema),
  resultatsMobile: z.array(AmortissementGlobalSchema),
  mensualites: z.number(),
  cashflowBrut: z.number(),
  fraisBancaires: z.number(),
  coutPret: z.number(),
});
export type ResultType = z.infer<typeof ResultSchema>;

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
  label: z.string().optional(),
  sliderLabelPrefix: z.string().optional(),
  sliderLabelSuffix: z.string().optional(),
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
