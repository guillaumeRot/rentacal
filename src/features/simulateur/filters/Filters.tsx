import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { DataSchema } from "../simulateur.schema";
import { FormFilterAchat } from "./FormFilterAchat";
import { FormFilterFinancement } from "./FormFilterFinancement";
import { FormFilterRevenusDepenses } from "./FormFilterRevenusDepenses";
import { FormFilterTravauxMobilier } from "./FormFilterTravauxMobilier";

interface FiltersProps {
  onSubmit: (data: any) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
}

export class Filters extends React.Component<FiltersProps> {
  state = {
    currentStep: 0,
    formData: {
      step1: {},
      step2: {},
      step3: {},
    },
  };

  steps = [
    {
      title: "Achat",
      component: (
        <div>
          <h2 className="text-lg lg:text-xl text-center">
            Dépenses liées à l'achat
          </h2>
          <FormFilterAchat onChange={() => {}} form={this.props.form} />
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
          <FormFilterRevenusDepenses
            onChange={() => {}}
            form={this.props.form}
          />
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
          <FormFilterTravauxMobilier
            onChange={() => {}}
            form={this.props.form}
          />
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
          <FormFilterFinancement onChange={() => {}} form={this.props.form} />
        </div>
      ),
    },
  ];

  setCurrentStep = (index: number) => {
    this.setState({ currentStep: index });
  };

  render() {
    const { currentStep } = this.state;

    return (
      <>
        <Card className="rounded-3xl w-full border-2 p-1">
          <CardContent className="flex flex-row rounded-3xl">
            {this.steps.map((step, index) => (
              <div
                key={index}
                onClick={() => this.setCurrentStep(index)}
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
              <div className="mt-10 mb-4 min-h-50">
                {this.steps[currentStep].component}
              </div>
              <div className="flex justify-between">
                <button
                  onClick={() => this.props.onSubmit(this.state.formData)}
                  className="cursor-pointer text-white mx-auto py-3 px-8 text-center rounded-full text-md bg-blue-700 mb-5 hover:bg-blue-800"
                >
                  Calculer
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    );
  }
}
