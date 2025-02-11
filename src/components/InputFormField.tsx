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

// export class InputFormField extends React.Component<InputFormFieldProps> {
export const InputFormField: React.FC<InputFormFieldProps> = ({
  onChange,
  form,
  currentField,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("TEST GUI 1:", event);
    const { name, value } = event.target;
    console.log("TEST GUI 2:", name);
    console.log("TEST GUI 3:", value);
    const numericValue = !isNaN(Number(value)) ? Number(value) : value;
    console.log("TEST GUI 4:", numericValue);
    // this.props.onChange({ [name]: numericValue });
  };

  // render() {
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
                  // this.handleChange(event);
                }}
              />
            </FormControl>
            <MdEuroSymbol className="relative top-2 text-blue-700" size={25} />
          </div>
          <FormMessage />
          <div className="text-xs text-gray-500 mt-2">
            {currentField.description}
          </div>
        </FormItem>
      )}
    />
  );
  // }
};
