"use client";

import { InputFormField } from "@/components/InputFormField";
import { FormFilters } from "@/components/layout";
import { SliderFormField } from "@/components/SliderFormField";
import { Form } from "@/components/ui/form";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { DataSchema, DataType } from "../simulateur.schema";

type FormFilterFinancementProps = {
  onChange: (updatedValues: Partial<DataType>) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
};

export class FormFilterFinancement extends React.Component<FormFilterFinancementProps> {
  fields = [
    {
      slug: "dureePret",
      label: "Durée du prêt :",
      description: "La durée totale du prêt en année(s)",
      type: SliderFormField,
    },
    {
      slug: "tauxPret",
      label: "Taux du prêt :",
      description: "Le taux fixe du prêt",
      type: SliderFormField,
    },
    {
      slug: "tauxAssurancePret",
      label: "Assurance du prêt : ",
      description: "Le taux de l'assurance du prêt",
      type: SliderFormField,
    },
    {
      slug: "apport",
      label: "Apport",
      description: "L'apport globale pour le financement de l'opération",
      type: InputFormField,
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
