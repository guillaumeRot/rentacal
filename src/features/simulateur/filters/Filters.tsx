import { Card, CardContent } from "@/components/ui/card";
// import React , FormFieldfrom "react";
// import { FormField } from "@/components/ui/form";
import { useState } from "react";
import { FormProvider, useForm, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { DataSchema, DataType } from "../simulateur.schema";
import { FormFilterAchat } from "./FormFilterAchat";
import { FormFilterRevenusDepenses } from "./FormFilterRevenusDepenses";

interface FiltersProps {
  onSubmit: (data: any) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
}

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
          <FormFilterAchat />
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
          <FormFilterRevenusDepenses />
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

  const { currentStep } = state;
  const setCurrentStep = (index: number) => {
    setState({ currentStep: index });
  };

  const methods = useForm<DataType>();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: DataType) => {
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
                {/* <FormFilterAchat register={register} /> */}
                <div className="mt-10 mb-4 min-h-50">
                  {steps[currentStep].component}
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
            </FormProvider>
          </div>
        </CardContent>
      </Card>
    </div>
  );
  // }
}
