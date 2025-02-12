"use client";

import { FormValues } from "@/features/simulateur/filters/Filters";
import { UseFormRegister } from "react-hook-form";
import { Input } from "./ui/input";

type FormFieldType = {
  slug: string;
  label: string;
  description: string;
};

type InputFormFieldProps = {
  // onChange: (updatedValues: Partial<DataType>) => void;
  // form: UseFormReturn<z.infer<typeof DataSchema>>;
  currentField: FormFieldType;
  register: UseFormRegister<FormValues>;
};

// export class InputFormField extends React.Component<InputFormFieldProps> {
// export const InputFormField: React.FC<InputFormFieldProps> = ({
//   onChange,
//   form,
//   currentField,
// }) => {
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

  // render() {
  return (
    <Input
      id="email"
      type="email"
      placeholder="Entrez votre email"
      {...props.register(props.currentField.slug as keyof FormValues, {
        required: "L'email est requis",
      })}
    />
    // <FormField
    //   control={form.control}
    //   name={currentField.slug as keyof DataType}
    //   render={({ field }) => (
    //     <FormItem>
    //       <FormLabel>{currentField.label}</FormLabel>
    //       <div className="flex mt-3">
    //         <FormControl>
    //           <Input
    //             type="number"
    //             placeholder="0"
    //             {...field}
    //             className="mr-2"
    //             onChange={(event) => {
    //               field.onChange(event);
    //               // this.handleChange(event);
    //             }}
    //           />
    //         </FormControl>
    //         <MdEuroSymbol className="relative top-2 text-blue-700" size={25} />
    //       </div>
    //       <FormMessage />
    //       <div className="text-xs text-gray-500 mt-2">
    //         {currentField.description}
    //       </div>
    //     </FormItem>
    //   )}
    // />
  );
  // }
};
