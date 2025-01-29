"use client";

import { InputFormField } from "@/components/InputFormField";
import { FormFilters } from "@/components/layout";
import { SliderFormField } from "@/components/SliderFormField";
import { Form } from "@/components/ui/form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { DataSchema, DataType } from "../simulateur.schema";

type FormFilterRevenusDepensesProps = {
  onChange: (updatedValues: Partial<DataType>) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
};

export class FormFilterRevenusDepenses extends React.Component<FormFilterRevenusDepensesProps> {
  fields = [
    {
      slug: "loyersTotal",
      label: "Somme des loyers mensuels",
      description: "Le montant total des loyers perçus par mois",
      type: InputFormField,
    },
    {
      slug: "impotsFoncier",
      label: "Impôts fonciers",
      description: "Le montant des impôts fonciers à payer par année",
      type: InputFormField,
    },
    {
      slug: "chargesCopro",
      label: "Charges de copropriété",
      description: "Le montant des charges dû à la copropriété par année",
      type: InputFormField,
    },
    {
      slug: "nbMoisLocParAn",
      label: "mois de location / an",
      description:
        "Correspond à la vacance locative. Utile pour simuler le nombre de mois où le montant des loyers sera perçu sur l'année ",
      type: SliderFormField,
    },
  ];

  render() {
    return (
      <Form {...this.props.form}>
        <FormFilters className="lg:grid lg:grid-cols-2 lg:gap-x-30 lg:gap-y-3 lg:max-w-5xl">
          {this.fields.map((field, index) => (
            <div key={index}>
              {field.type === InputFormField && (
                <InputFormField
                  onChange={this.props.onChange}
                  form={this.props.form}
                  currentField={field}
                />
              )}
              {field.type === SliderFormField && (
                <SliderFormField
                  onChange={this.props.onChange}
                  form={this.props.form}
                  currentField={field}
                />
              )}
            </div>
          ))}
        </FormFilters>
      </Form>
    );
  }
}
