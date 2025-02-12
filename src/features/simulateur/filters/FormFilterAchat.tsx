"use client";

import { InputFormField } from "@/components/InputFormField";
import { UseFormRegister } from "react-hook-form";
import { FormValues } from "./Filters";

type FormFilterAchatProps = {
  // onChange: (updatedValues: Partial<DataType>) => void;
  // form: UseFormReturn<z.infer<typeof DataSchema>>;
  register: UseFormRegister<FormValues>;
};

// export class FormFilterAchat extends React.Component<FormFilterAchatProps> {
export const FormFilterAchat = (props: FormFilterAchatProps) => {
  const fields = [
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

  // render() {
  return (
    // <Input
    //   id="email"
    //   type="email"
    //   placeholder="Entrez votre email"
    //   {...props.register("email", { required: "L'email est requis" })}
    // />
    <div>
      {fields.map((field, index) => (
        <InputFormField
          key={index}
          register={props.register}
          // onChange={this.props.onChange}
          // form={this.props.form}
          currentField={field}
        />
      ))}
    </div>
    // <Form {...this.props.form}>
    // <LayoutFilters>
    // <>
    /* {this.fields.map((field, index) => (
            <InputFormField
              key={index}
              onChange={this.props.onChange}
              form={this.props.form}
              currentField={field}
            />
          ))} */
    // </>
    // </LayoutFilters>
    // {/* </FormFilters> */}
    // </Form>
  );
  // }
};
