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
  // onChange: (updatedValues: Partial<DataType>) => void;
  // form: UseFormReturn<z.infer<typeof DataSchema>>;
  currentField: FormFieldType;
};

export const SliderFormField = (props: SliderFormFieldProps) => {
  // handleSliderChange = (name: keyof DataType, value: number) => {
  //   this.props.onChange({ [name]: value });
  // };

  const { register, control } = useFormContext();

  return (
    <FormField
      name={props.currentField.slug as keyof DataType}
      render={() => (
        <FormItem>
          {/* <FormLabel>{props.currentField.label}</FormLabel>
          <div className="flex mt-3"> */}
          <FormControl>
            <Controller
              name={props.currentField.slug as keyof DataType}
              control={control}
              render={({ field }) => (
                <div>
                  <FormLabel>
                    {field.value} {props.currentField.label}
                  </FormLabel>
                  <div className="flex mt-3">
                    <Slider
                      value={[field.value]} // Le slider attend un tableau
                      onValueChange={(value) => field.onChange(value[0])} // Met à jour le formulaire
                      min={props.currentField.min}
                      max={props.currentField.max}
                      step={props.currentField.step}
                    />
                  </div>
                </div>
              )}
            />
          </FormControl>
          {/* </div> */}
          <FormMessage />
          <div className="text-xs text-gray-500 mt-2">
            {props.currentField.description}
          </div>
        </FormItem>
      )}
    />
  );

  // render() {
  //   return (
  //     <FormField
  //       control={this.props.form.control}
  //       name={this.props.currentField.slug as keyof DataType}
  //       render={({ field: { value, onChange } }) => (
  //         <FormItem>
  //           <FormLabel>
  //             {value} {this.props.currentField.label}
  //           </FormLabel>
  //           <div className="flex mt-5">
  //             <FormControl>
  //               <Slider
  //                 min={0}
  //                 max={12}
  //                 step={1}
  //                 value={[value]}
  //                 onValueChange={(value) => {
  //                   onChange(value[0]);
  //                   this.handleSliderChange(
  //                     this.props.currentField.slug as keyof DataType,
  //                     value[0]
  //                   );
  //                 }}
  //               />
  //             </FormControl>
  //           </div>
  //           <FormMessage />
  //           <div className="text-xs text-gray-500 mt-2">
  //             {this.props.currentField.description}
  //           </div>
  //         </FormItem>
  //       )}
  //     />
  //   );
  // }
};
