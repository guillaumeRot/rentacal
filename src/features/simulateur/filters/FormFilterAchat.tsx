"use client";

import { InputFormField } from "@/components/InputFormField";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { DataSchema, DataType } from "../simulateur.schema";

type FormFilterAchatProps = {
  onChange: (updatedValues: Partial<DataType>) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
};

export class FormFilterAchat extends React.Component<FormFilterAchatProps> {
  fields = [
    {
      slug: "prixAchat",
      label: "Prix d'achat",
      description: "Le prix du bien net vendeur",
    },
    {
      slug: "fraisNotaires",
      label: "Frais notaires",
      description: "Les honoraires du notaire",
    },
    {
      slug: "fraisAgence",
      label: "Frais d'agence",
      description: "Les frais de l'agence immobilière",
    },
  ];

  render() {
    return (
      <>
        {this.fields.map((field, index) => (
          <InputFormField
            key={index}
            onChange={this.props.onChange}
            form={this.props.form}
            currentField={field}
          />
        ))}
      </>
      // <Form {...this.props.form}>
      // <LayoutFilters>
      // <>
      /* {this.fields.map((field, index) => (
            <InputFormField
              key={index}
              onChange={this.props.onChange}
              form={this.props.form}
              currentField={field}
            />
          ))} */
      // </>
      // </LayoutFilters>
      // {/* </FormFilters> */}
      // </Form>
    );
  }
}
