import { Card, CardContent } from "@/components/ui/card";
// import React , FormFieldfrom "react";
import { Button } from "@/components/ui/button";
// import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { DataSchema } from "../simulateur.schema";

interface FiltersProps {
  onSubmit: (data: any) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
}

type FormValues = {
  email: string;
};

// export class Filters extends React.Component<FiltersProps> {
export default function Filters() {
  const [state, setState] = useState({
    currentStep: 0,
  });

  const steps = [
    {
      title: "Achat",
      component: (
        <div>
          <h2 className="text-lg lg:text-xl text-center">
            Dépenses liées à l'achat
          </h2>
          {/* <FormFilterAchat
            onChange={this.props.onSubmit}
            form={this.props.form}
          /> */}
        </div>
      ),
    },
    {
      title: "Dépenses et revenus",
      component: (
        <div>
          <h2 className="text-lg lg:text-xl text-center">
            Dépenses et revenus réguliers
          </h2>
          {/* <FormFilterRevenusDepenses
            onChange={this.props.onSubmit}
            form={this.props.form}
          /> */}
        </div>
      ),
    },
    {
      title: "Travaux et mobilier",
      component: (
        <div>
          <h2 className="text-lg lg:text-xl text-center">
            Coût des travaux et du mobilier
          </h2>
          {/* <FormFilterTravauxMobilier
            onChange={() => {}}
            form={this.props.form}
          /> */}
        </div>
      ),
    },
    {
      title: "Emprunt",
      component: (
        <div>
          <h2 className="text-lg lg:text-xl text-center">
            Informations relatives au crédit
          </h2>
          {/* <FormFilterFinancement onChange={() => {}} form={this.props.form} /> */}
        </div>
      ),
    },
  ];

  const setCurrentStep = (index: number) => {
    setState({ currentStep: index });
  };

  const methods = useForm<FormValues>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  // render() {
  const { currentStep } = state;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <div>
      <Card className="rounded-3xl w-full border-2 p-1">
        <CardContent className="flex flex-row rounded-3xl">
          {steps.map((step, index) => (
            <div
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`flex-1 flex items-center justify-center text-center p-2 lg:p-3 cursor-pointer text-xs lg:text-sm
                  ${
                    index === currentStep
                      ? "border-blue-700 bg-blue-700 text-white rounded-3xl"
                      : "border-blue-700 text-gray-600"
                  }`}
            >
              {step.title}
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-3xl w-full border-2">
        <CardContent className="grid text-sm lg:text-md font-medium p-0">
          <div className="w-full mx-auto">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* <FormField name="email" /> */}
                <Input
                  id="email"
                  type="email"
                  placeholder="Entrez votre email"
                  {...register("email", { required: "L'email est requis" })}
                />
                <Button type="submit">S'inscrire</Button>
              </form>
            </FormProvider>
            {/* <Form {...this.props.form}>
                <form
                  className="space-y-3"
                  onSubmit={this.props.form.handleSubmit(this.props.onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field: { value, onChange } }) => (
                      <FormItem>
                        <FormLabel>Mot de passe</FormLabel>
                        <div className="flex">
                          <FormControl>
                            <Input
                              type="password"
                              placeholder=""
                              className="mr-2"
                              value={value}
                              onChange={(event) => {
                                const newValue = event.target.value || "";
                                onChange(newValue);
                                setAccountValues((prev) => ({
                                  ...prev,
                                  password: newValue,
                                }));
                              }}
                            />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    className="mx-auto block px-6 py-2 rounded-full text-sm text-semibold bg-blue-900 hover:bg-blue-800 hover:ring-3 ring-transparent ring-offset-2 transition"
                    type="submit"
                  >
                    <span className="text-white">S'inscrire</span>
                  </Button>
                  <div className="mt-10 mb-4 min-h-50">
                    {this.steps[currentStep].component}
                  </div>
                  <div className="flex justify-between">
                    <button
                      type="submit"
                      // onClick={() => this.props.onSubmit(this.props.onSubmit)}
                      className="cursor-pointer text-white mx-auto py-3 px-8 text-center rounded-full text-md bg-blue-700 mb-5 hover:bg-blue-800"
                    >
                      Calculer
                    </button>
                  </div>
                </form>
              </Form> */}
          </div>
        </CardContent>
      </Card>
    </div>
  );
  // }
}

// function FormField({ name }: { name: keyof FormValues }) {
//   const {
//     register,
//     formState: { errors },
//   } = useForm();

//   return (
//     <div className="flex flex-col space-y-2">
//       <Label htmlFor={name}>Email</Label>
//       <Input
//         id={name}
//         type="email"
//         placeholder="Entrez votre email"
//         {...register(name, { required: "L'email est requis" })}
//       />
//     </div>
//   );
// }
