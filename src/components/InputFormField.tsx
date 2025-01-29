"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { MdEuroSymbol } from "react-icons/md";
import { z } from "zod";
import { DataSchema, DataType } from "../features/simulateur/simulateur.schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

type FormFieldType = {
  slug: string;
  label: string;
  description: string;
};

type InputFormFieldProps = {
  onChange: (updatedValues: Partial<DataType>) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
  currentField: FormFieldType;
};

export class InputFormField extends React.Component<InputFormFieldProps> {
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const numericValue = !isNaN(Number(value)) ? Number(value) : value;
    this.props.onChange({ [name]: numericValue });
  };

  render() {
    return (
      <FormField
        control={this.props.form.control}
        name={this.props.currentField.slug as keyof DataType}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{this.props.currentField.label}</FormLabel>
            <div className="flex mt-3">
              <FormControl>
                <Input
                  type="number"
                  placeholder="0"
                  {...field}
                  className="mr-2"
                  onChange={(event) => {
                    field.onChange(event);
                    this.handleChange(event);
                  }}
                />
              </FormControl>
              <MdEuroSymbol
                className="relative top-2 text-blue-700"
                size={25}
              />
            </div>
            <FormMessage />
            <div className="text-xs">{this.props.currentField.description}</div>
          </FormItem>
        )}
      />
    );
  }
}
