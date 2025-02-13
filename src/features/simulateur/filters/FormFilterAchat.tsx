"use client";

import { InputFormField } from "@/components/InputFormField";
import { LayoutFilters } from "@/components/layout";

export const FormFilterAchat = () => {
  const fields = [
    {
      slug: "prixAchat",
      label: "Prix d'achat",
      description: "Le prix du bien net vendeur",
      inputType: "number",
      type: "input",
    },
    {
      slug: "fraisNotaires",
      label: "Frais notaires",
      description: "Les honoraires du notaire",
      inputType: "number",
      type: "input",
    },
    {
      slug: "fraisAgence",
      label: "Frais d'agence",
      description: "Les frais de l'agence immobilière",
      inputType: "number",
      type: "input",
    },
  ] as const;

  return (
    <LayoutFilters>
      {fields.map((field, index) => (
        <InputFormField key={index} currentField={field} />
      ))}
    </LayoutFilters>
  );
};
