"use client";

import { InputFormField } from "@/components/InputFormField";
import { FormFilters } from "@/components/layout";
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
      label: "Prix d'achat",
      description: "Le prix du bien net vendeur",
      type: InputFormField,
    },
    {
      slug: "impotsFoncier",
      label: "Frais notaires",
      description: "Les honoraires du notaire",
      type: InputFormField,
    },
    {
      slug: "chargesCopro",
      label: "Frais d'agence",
      description: "Les frais de l'agence immobilière",
      type: InputFormField,
    },
    {
      slug: "nbMoisLocParAn",
      label: "Frais d'agence",
      description: "Les frais de l'agence immobilière",
      type: InputFormField,
    },
  ];

  render() {
    return (
      <Form {...this.props.form}>
        <FormFilters>
          {this.fields.map((field, index) => (
            <InputFormField
              key={index}
              onChange={this.props.onChange}
              form={this.props.form}
              currentField={field}
            />
          ))}
        </FormFilters>
      </Form>
    );
  }
}
