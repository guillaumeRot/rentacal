"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { MdEuroSymbol } from "react-icons/md";
import { z } from "zod";
import { DataSchema, DataType } from "./simulateur.schema";

type FormFieldType = {
  slug: string;
  label: string;
  description: string;
};

type FieldAchatComponentProps = {
  onChange: (updatedValues: Partial<DataType>) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
  currentField: FormFieldType;
};

function FieldAchatComponent({
  onChange,
  form,
  currentField,
}: FieldAchatComponentProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const numericValue = !isNaN(Number(value)) ? Number(value) : value;
    onChange({ [name]: numericValue });
  };

  return (
    <FormField
      control={form.control}
      name={currentField.slug as keyof DataType}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{currentField.label}</FormLabel>
          <div className="flex mt-3">
            <FormControl>
              <Input
                type="number"
                placeholder="0"
                {...field}
                className="mr-2"
                onChange={(event) => {
                  field.onChange(event);
                  handleChange(event);
                }}
              />
            </FormControl>
            <MdEuroSymbol className="relative top-2 text-blue-700" size={25} />
          </div>
          <FormMessage />
          <div className="text-xs">{currentField.description}</div>
        </FormItem>
      )}
    />
  );
}

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
      <Form {...this.props.form}>
        <form className="justify-between mx-auto py-10 px-30 flex flex-row">
          {this.fields.map((field, index) => (
            <FieldAchatComponent
              key={index}
              onChange={this.props.onChange}
              form={this.props.form}
              currentField={field}
            />
          ))}
          {/* <FormField
          control={form.control}
          name="prixAchat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prix d&apos;achat</FormLabel>
              <div className="flex pt-3">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0"
                    {...field}
                    className="mr-2 max-w-50"
                    onChange={(event) => {
                      field.onChange(event);
                      handleChange(event);
                    }}
                  />
                </FormControl>
                <MdEuroSymbol
                  className="relative top-2 text-blue-700"
                  size={25}
                />
              </div>
              <FormMessage />
              <div className="text-xs">
                Le prix d'achat est le prix du bien net vendeur
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fraisAgence"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frais d'agence</FormLabel>
              <div className="flex pt-3">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0"
                    {...field}
                    className="mr-2"
                    onChange={(event) => {
                      field.onChange(event);
                      handleChange(event);
                    }}
                  />
                </FormControl>
                <MdEuroSymbol
                  className="relative top-2 text-blue-700"
                  size={25}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fraisNotaire"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frais de notaire</FormLabel>
              <div className="flex pt-3">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0"
                    {...field}
                    className="mr-2"
                    onChange={(event) => {
                      field.onChange(event);
                      handleChange(event);
                    }}
                  />
                </FormControl>
                <MdEuroSymbol
                  className="relative top-2 text-blue-700"
                  size={25}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        </form>
      </Form>
    );
  }
}
