"use client";

import React, { PropsWithChildren } from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { DataSchema, DataType } from "../features/simulateur/simulateur.schema";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

type FormFieldType = {
  slug: string;
  label: string;
  description: string;
};

type SelectFormFieldProps = PropsWithChildren & {
  onChange: (updatedValues: Partial<DataType>) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
  currentField: FormFieldType;
};

export class SelectFormField extends React.Component<SelectFormFieldProps> {
  // handleSliderChange = (name: keyof DataType, value: number) => {
  //   this.props.onChange({ [name]: value });
  // };

  render() {
    return (
      <FormField
        control={this.props.form.control}
        name={this.props.currentField.slug as keyof DataType}
        render={({ field: { value, onChange } }) => (
          <FormItem>
            <FormLabel>
              {value} {this.props.currentField.label}
            </FormLabel>
            <div className="flex mt-5">
              <FormControl>{this.props.children}</FormControl>
            </div>
            <FormMessage />
            <div className="text-xs text-gray-500 mt-2">
              {this.props.currentField.description}
            </div>
          </FormItem>
        )}
      />
    );
  }
}
