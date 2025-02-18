"use client";

import { PropsWithChildren } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  DataType,
  FormFieldType,
} from "../features/simulateur/simulateur.schema";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SelectFormFieldProps = PropsWithChildren & {
  currentField: FormFieldType;
};

export const SelectFormField = (props: SelectFormFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={props.currentField.slug as keyof DataType}
      render={({ field: { value, onChange } }) => (
        <FormItem>
          <FormLabel>{props.currentField.label}</FormLabel>
          <div className="flex mt-5">
            <FormControl>
              <Controller
                name={props.currentField.slug as keyof DataType}
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger>
                      <SelectValue
                        placeholder={props.currentField.select?.placeholder}
                      />
                    </SelectTrigger>
                    <SelectContent>
                      {props.currentField.select?.items.map(
                        (item, itemIndex) => (
                          <SelectItem key={itemIndex} value={item.slug}>
                            {item.name}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                )}
              />
            </FormControl>
          </div>
          <FormMessage />
          <div className="text-xs text-gray-500 mt-2">
            {props.currentField.description}
          </div>
        </FormItem>
      )}
    />
  );
};
