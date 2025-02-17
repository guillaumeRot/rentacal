"use client";

import { InputFormField } from "@/components/InputFormField";
import { LayoutFilters } from "@/components/layout";
import { SliderFormField } from "@/components/SliderFormField";

export const FormFilterFinancement = () => {
  const fields = [
    {
      slug: "dureePret",
      label: "Durée du prêt :",
      description: "La durée totale du prêt en année(s)",
      type: "slider",
    },
    {
      slug: "tauxPret",
      label: "Taux du prêt :",
      description: "Le taux fixe du prêt",
      type: "slider",
    },
    {
      slug: "tauxAssurancePret",
      label: "Assurance du prêt : ",
      description: "Le taux de l'assurance du prêt",
      type: "slider",
    },
    {
      slug: "apport",
      label: "Apport",
      description: "L'apport globale pour le financement de l'opération",
      type: "input",
      inputType: "number",
    },
  ] as const;

  return (
    <LayoutFilters className="lg:grid lg:grid-cols-2 lg:gap-x-30 lg:gap-y-3 lg:max-w-5xl">
      {fields.map((field, index) => (
        <div key={index}>
          {field.type === "input" && <InputFormField currentField={field} />}
          {field.type === "slider" && <SliderFormField currentField={field} />}
        </div>
      ))}
    </LayoutFilters>
  );
};
