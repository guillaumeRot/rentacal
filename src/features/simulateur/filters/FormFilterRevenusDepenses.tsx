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
      description: "Le montant total des loyers perçus par mois",
      type: "input",
      inputType: "number",
    },
    {
      slug: "impotsFoncier",
      label: "Impôts fonciers",
      description: "Le montant des impôts fonciers à payer par année",
      type: "input",
      inputType: "number",
    },
    {
      slug: "nbMoisLocParAn",
      label: "mois de location / an",
      description:
        "Correspond à la vacance locative. Utile pour simuler le nombre de mois où le montant des loyers sera perçu sur l'année ",
      type: "slider",
      inputType: "number",
      min: 0,
      max: 12,
      step: 1,
    },
    {
      slug: "chargesCopro",
      label: "Charges de copropriété",
      description: "Le montant des charges dû à la copropriété par année",
      type: "input",
      inputType: "number",
    },
    {
      slug: "regimeFiscal",
      label: "Régime fiscal",
      description: "Le régime fiscal choisi pour déclarer votre investissement",
      type: "select",
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
      description: "Le taux marginal d'imposition auquel vous êtes assujetti.",
      type: "select",
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
  ] as const;

  return (
    <LayoutFilters className="lg:grid lg:grid-cols-2 lg:gap-x-30 lg:gap-y-3 lg:max-w-5xl">
      {fields.map((field, index) => (
        <div key={index}>
          {field.type === "input" && <InputFormField currentField={field} />}
          {field.type === "slider" && <SliderFormField currentField={field} />}
          {field.type === "select" && <SelectFormField currentField={field} />}
        </div>
      ))}
    </LayoutFilters>
  );
};
