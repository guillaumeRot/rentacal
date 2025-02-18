"use client";

import {
  DataType,
  FormFieldType,
} from "@/features/simulateur/simulateur.schema";
import { useFormContext } from "react-hook-form";
import { MdEuroSymbol } from "react-icons/md";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

type InputFormFieldProps = {
  currentField: FormFieldType;
};

export const InputFormField = (props: InputFormFieldProps) => {
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log("TEST GUI 1:", event);
  //   const { name, value } = event.target;
  //   console.log("TEST GUI 2:", name);
  //   console.log("TEST GUI 3:", value);
  //   const numericValue = !isNaN(Number(value)) ? Number(value) : value;
  //   console.log("TEST GUI 4:", numericValue);
  //   // this.props.onChange({ [name]: numericValue });
  // };

  // function getNumericValue(event) {
  //   console.log("TEST GUI 1:", event);
  //   const { name, value } = event.target;
  //   console.log("TEST GUI 2:", name);
  //   console.log("TEST GUI 3:", value);
  //   const numericValue = !isNaN(Number(value)) ? Number(value) : value;
  //   console.log("TEST GUI 4:", numericValue);
  //   return numericValue;
  // }

  const { register } = useFormContext();

  return (
    <FormField
      name={props.currentField.slug as keyof DataType}
      render={() => (
        <FormItem>
          <FormLabel>{props.currentField.label}</FormLabel>
          <div className="flex mt-3">
            <FormControl>
              <Input
                id={props.currentField.slug}
                defaultValue={props.currentField.value}
                {...register(props.currentField.slug as keyof DataType, {
                  valueAsNumber:
                    props.currentField.type == "number" ? true : false,
                })}
                {...props.currentField}
              />
            </FormControl>
            <MdEuroSymbol
              className="relative top-2 text-blue-700 ml-1"
              size={25}
            />
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
