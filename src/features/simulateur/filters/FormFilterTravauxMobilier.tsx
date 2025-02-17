"use client";

import { InputFormField } from "@/components/InputFormField";
import { LayoutFilters } from "@/components/layout";

export const FormFilterTravauxMobilier = () => {
  const fields = [
    {
      slug: "montantTravaux",
      label: "Montant des travaux",
      description: "Le montant total estimés des travaux",
      type: "input",
      inputType: "number",
    },
    {
      slug: "montantMobilier",
      label: "Montant du mobilier",
      description: "Le montant total des meubles et autres appareils",
      type: "input",
      inputType: "number",
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
