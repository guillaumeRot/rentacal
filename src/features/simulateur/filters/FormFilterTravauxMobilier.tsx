"use client";

import { InputFormField } from "@/components/InputFormField";
import { LayoutFilters } from "@/components/layout";

export const FormFilterTravauxMobilier = () => {
  const fields = [
    {
      slug: "montantTravaux",
      label: "Montant des travaux",
      description: "Le coût des rénovations ou améliorations du bien.",
      component: "input",
      type: "number",
    },
    {
      slug: "montantMobilier",
      label: "Montant du mobilier",
      description: "La valeur des meubles achetés pour équiper le logement.",
      component: "input",
      type: "number",
    },
  ] as const;

  return (
    <LayoutFilters className="lg:grid lg:grid-cols-2 lg:gap-x-30 lg:gap-y-3 lg:max-w-5xl">
      {fields.map((field, index) => (
        <div key={index}>
          <InputFormField currentField={field} />
        </div>
      ))}
    </LayoutFilters>
  );
};
