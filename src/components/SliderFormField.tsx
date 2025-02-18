"use client";

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
import { Slider } from "./ui/slider";

type SliderFormFieldProps = {
  currentField: FormFieldType;
};

export const SliderFormField = (props: SliderFormFieldProps) => {
  const { control } = useFormContext();

  return (
    <FormField
      name={props.currentField.slug as keyof DataType}
      render={() => (
        <FormItem>
          <FormControl>
            <Controller
              name={props.currentField.slug as keyof DataType}
              control={control}
              render={({ field }) => (
                <div>
                  <FormLabel>
                    {props.currentField.sliderLabelPrefix} {field.value}{" "}
                    {props.currentField.sliderLabelSuffix}
                  </FormLabel>
                  <div className="flex mt-3">
                    <Slider
                      value={[field.value]}
                      onValueChange={(value) => field.onChange(value[0])}
                      min={props.currentField.min}
                      max={props.currentField.max}
                      step={props.currentField.step}
                    />
                  </div>
                </div>
              )}
            />
          </FormControl>
          <FormMessage />
          <div className="text-xs text-gray-500 mt-2">
            {props.currentField.description}
          </div>
        </FormItem>
      )}
    />
  );
};
