"use client";

import { InputFormField } from "@/components/InputFormField";
import { LayoutFilters } from "@/components/layout";

export const FormFilterAchat = () => {
  const fields = [
    {
      slug: "prixAchat",
      label: "Prix d'achat",
      description:
        "Le coût du bien que vous achetez, hors frais supplémentaires.",
      type: "number",
      component: "input",
    },
    {
      slug: "fraisNotaire",
      label: "Frais notaires",
      description:
        "Les frais obligatoires pour officialiser l’achat chez le notaire.",
      type: "number",
      component: "input",
    },
    {
      slug: "fraisAgence",
      label: "Frais d'agence",
      description:
        "La commission versée si vous passez par une agence pour acheter.",
      type: "number",
      component: "input",
    },
  ] as const;

  return (
    <LayoutFilters className="lg:grid lg:grid-cols-3 lg:gap-x-15 lg:gap-y-3 lg:max-w-6xl">
      {fields.map((field, index) => (
        <InputFormField key={index} currentField={field} />
      ))}
    </LayoutFilters>
  );
};
