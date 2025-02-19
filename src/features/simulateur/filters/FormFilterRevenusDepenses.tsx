"use client";

import { InputFormField } from "@/components/InputFormField";
import { LayoutFilters } from "@/components/layout";
import { SelectFormField } from "@/components/SelectFormField";
import { SliderFormField } from "@/components/SliderFormField";

export const FormFilterRevenusDepenses = () => {
  const fields = [
    {
      slug: "loyersTotal",
      label: "Somme des loyers mensuels",
      description: "Le total des loyers perçus chaque mois pour ce bien.",
      component: "input",
      type: "number",
    },
    {
      slug: "impotsFoncier",
      label: "Impôts fonciers",
      description: "La taxe annuelle que vous payez en tant que propriétaire.",
      component: "input",
      type: "number",
    },
    {
      slug: "nbMoisLocParAn",
      sliderLabelSuffix: "mois de location / an",
      description: "La période où le logement est occupé et génère des loyers.",
      component: "slider",
      type: "number",
      min: 0,
      max: 12,
      step: 1,
    },
    {
      slug: "chargesCopro",
      label: "Charges de copropriété",
      description:
        "Les frais liés à l’entretien des parties communes de l’immeuble.",
      component: "input",
      type: "number",
    },
    {
      slug: "regimeFiscal",
      label: "Régime fiscal",
      description: "Le type d’imposition appliqué à vos revenus locatifs.",
      component: "select",
      select: {
        placeholder: "Choisir un régime fiscale",
        items: [
          { slug: "lmnpReel", name: "LMNP Réel" },
          { slug: "lmnpMicroBIC", name: "LMNP Micro BIC" },
        ] as { slug: string; name: string }[],
      },
    },
    {
      slug: "tmi",
      label: "TMI",
      description:
        "Le taux d’imposition appliqué à la dernière tranche de vos revenus.",
      component: "select",
      select: {
        placeholder: "Choisir un TMI",
        items: [
          { slug: "0", name: "0% - Revenu net inférieur à 10 084 €/an" },
          { slug: "11", name: "11% - Revenu net inférieur à 25 710 €/an" },
          { slug: "30", name: "30% - Revenu net inférieur à 73 516 €/an" },
          { slug: "41", name: "41% - Revenu net inférieur à 158 122 €/an" },
          { slug: "45", name: "45% - Revenu net supérieur à 158 122 €/an" },
        ] as { slug: string; name: string }[],
      },
    },
    {
      slug: "typeLocation",
      label: "Type de location",
      description:
        "Choisissez si le logement est loué vide ou avec des meubles, ce qui impacte la fiscalité.",
      component: "select",
      select: {
        placeholder: "Choisir un type de location",
        items: [
          { slug: "nue", name: "Location nue" },
          { slug: "meublee", name: "Location meublée" },
        ] as { slug: string; name: string }[],
      },
    },
  ] as const;

  return (
    <LayoutFilters className="lg:grid lg:grid-cols-2 lg:gap-x-30 lg:gap-y-3 lg:max-w-5xl">
      {fields.map((field, index) => (
        <div key={index}>
          {field.component === "input" && (
            <InputFormField currentField={field} />
          )}
          {field.component === "slider" && (
            <SliderFormField currentField={field} />
          )}
          {field.component === "select" && (
            <SelectFormField currentField={field} />
          )}
        </div>
      ))}
    </LayoutFilters>
  );
};
