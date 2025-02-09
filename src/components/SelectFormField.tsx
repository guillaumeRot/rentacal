"use client";

import React from "react";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type FormFieldType = {
  slug: string;
  label: string;
  description: string;
};

type SliderFormFieldProps = {
  onChange: (updatedValues: Partial<DataType>) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
  currentField: FormFieldType;
};

export class SelectFormField extends React.Component<SliderFormFieldProps> {
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
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a fruit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="lmnpReel">LMNP Réel</SelectItem>
                      <SelectItem value="lmnpMicroBic">
                        LMNP Micro BIC
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
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
