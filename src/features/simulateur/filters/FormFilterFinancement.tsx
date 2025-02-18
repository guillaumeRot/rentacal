"use client";

import { InputFormField } from "@/components/InputFormField";
import { LayoutFilters } from "@/components/layout";
import { SliderFormField } from "@/components/SliderFormField";

export const FormFilterFinancement = () => {
  const fields = [
    {
      slug: "dureePret",
      sliderLabelPrefix: "Durée du prêt :",
      sliderLabelSuffix: "an(s)",
      description: "La durée totale du prêt en année(s)",
      component: "slider",
      min: 0,
      max: 30,
      step: 1,
    },
    {
      slug: "tauxPret",
      sliderLabelPrefix: "Taux du prêt :",
      sliderLabelSuffix: "%",
      description: "Le taux fixe du prêt",
      component: "slider",
      min: 0,
      max: 10,
      step: 0.1,
    },
    {
      slug: "tauxAssurancePret",
      sliderLabelPrefix: "Assurance du prêt : ",
      sliderLabelSuffix: "%",
      description: "Le taux de l'assurance du prêt",
      component: "slider",
      min: 0,
      max: 10,
      step: 0.1,
    },
    {
      slug: "apport",
      label: "Apport",
      description: "L'apport globale pour le financement de l'opération",
      component: "input",
      type: "number",
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
        </div>
      ))}
    </LayoutFilters>
  );
};
