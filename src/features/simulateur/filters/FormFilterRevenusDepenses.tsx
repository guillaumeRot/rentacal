"use client";

import { InputFormField } from "@/components/InputFormField";
// import { FormFilters } from "@/components/layout";
import { SelectFormField } from "@/components/SelectFormField";
import { SliderFormField } from "@/components/SliderFormField";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
      slug: "nbMoisLocParAn",
      label: "mois de location / an",
      description:
        "Correspond à la vacance locative. Utile pour simuler le nombre de mois où le montant des loyers sera perçu sur l'année ",
      type: SliderFormField,
    },
    {
      slug: "chargesCopro",
      label: "Charges de copropriété",
      description: "Le montant des charges dû à la copropriété par année",
      type: InputFormField,
    },
    {
      slug: "regimeFiscal",
      label: "Régime fiscal",
      description: "Le régime fiscal choisi pour déclarer votre investissement",
      type: SelectFormField,
      children: (
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="lmnpReel">LMNP Réel</SelectItem>
              <SelectItem value="lmnpMicroBic">LMNP Micro BIC</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
    {
      slug: "tmi",
      label: "TMI",
      description: "Le taux marginal d'imposition auquel vous êtes assujetti.",
      type: SelectFormField,
      children: (
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="-" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="0">
                0% - Revenus inférieurs à 10 084€/an
              </SelectItem>
              <SelectItem value="11">
                11% - Revenus inférieurs à 25 710€/an
              </SelectItem>
              <SelectItem value="30">
                30% - Revenus inférieurs à 73 516€/an
              </SelectItem>
              <SelectItem value="41">
                41% - Revenus inférieurs à 158 122€/an
              </SelectItem>
              <SelectItem value="45">
                45% - Revenus supérieurs à 158 122€/an
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
  ];

  render() {
    return (
      <div></div>
      // <Form {...this.props.form}>
      //   <FormFilters className="lg:grid lg:grid-cols-2 lg:gap-x-30 lg:gap-y-3 lg:max-w-5xl">
      //     {this.fields.map((field, index) => (
      //       <div key={index}>
      //         {field.type === InputFormField && (
      //           <InputFormField
      //             onChange={this.props.onChange}
      //             form={this.props.form}
      //             currentField={field}
      //           />
      //         )}
      //         {field.type === SliderFormField && (
      //           <SliderFormField
      //             onChange={this.props.onChange}
      //             form={this.props.form}
      //             currentField={field}
      //           />
      //         )}
      //         {field.type === SelectFormField && (
      //           <SelectFormField
      //             onChange={this.props.onChange}
      //             form={this.props.form}
      //             currentField={field}
      //           >
      //             {field.children}
      //           </SelectFormField>
      //         )}
      //       </div>
      //     ))}
      //   </FormFilters>
      // </Form>
    );
  }
}
