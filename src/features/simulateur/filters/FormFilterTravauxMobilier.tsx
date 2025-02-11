"use client";

import { InputFormField } from "@/components/InputFormField";
// import { FormFilters } from "@/components/layout";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { DataSchema, DataType } from "../simulateur.schema";

type FormFilterTravauxMobilierProps = {
  onChange: (updatedValues: Partial<DataType>) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
};

export class FormFilterTravauxMobilier extends React.Component<FormFilterTravauxMobilierProps> {
  fields = [
    {
      slug: "montantTravaux",
      label: "Montant des travaux",
      description: "Le montant total estimés des travaux",
      type: InputFormField,
    },
    {
      slug: "montantMobilier",
      label: "Montant du mobilier",
      description: "Le montant total des meubles et autres appareils",
      type: InputFormField,
    },
  ];

  render() {
    return (
      <div></div>
      // <Form {...this.props.form}>
      //   <FormFilters className="lg:max-w-4xl">
      //     {this.fields.map((field, index) => (
      //       <InputFormField
      //         key={index}
      //         onChange={this.props.onChange}
      //         form={this.props.form}
      //         currentField={field}
      //       />
      //     ))}
      //   </FormFilters>
      // </Form>
    );
  }
}
