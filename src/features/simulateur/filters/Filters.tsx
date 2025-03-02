import { Card, CardContent } from "@/components/ui/card";
// import React , FormFieldfrom "react";
// import { FormField } from "@/components/ui/form";
import { useState } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { DataSchema } from "../simulateur.schema";
import { FormFilterAchat } from "./FormFilterAchat";
import { FormFilterFinancement } from "./FormFilterFinancement";
import { FormFilterRevenusDepenses } from "./FormFilterRevenusDepenses";
import { FormFilterTravauxMobilier } from "./FormFilterTravauxMobilier";

interface FiltersProps {
  handleSubmit: (data: any) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
  isLoaded: boolean;
}

export default function Filters(props: FiltersProps) {
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
          <FormFilterTravauxMobilier />
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
          <FormFilterFinancement />
        </div>
      ),
    },
  ];

  const { currentStep } = state;
  const setCurrentStep = (index: number) => {
    setState({ currentStep: index });
  };

  let cursor = "cursor-pointer";
  if (!props.isLoaded) {
    cursor = "cursor-not-allowed";
  }

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

      <Card className="rounded-3xl w-full border-2 mt-2">
        <CardContent className="grid text-sm lg:text-md font-medium p-0">
          <div className="w-full mx-auto">
            <FormProvider {...props.form}>
              <form onSubmit={props.handleSubmit} className="space-y-4">
                <div className="mt-10 mb-4 min-h-50">
                  {steps[currentStep].component}
                </div>
                <div className="flex justify-between">
                  <button
                    type="submit"
                    className={`text-white mx-auto py-3 px-8 text-center rounded-full text-md bg-blue-700 mb-5 hover:bg-blue-800 ${cursor}`}
                    disabled={!props.isLoaded}
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
}
