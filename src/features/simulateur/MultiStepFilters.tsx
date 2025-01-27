import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface MultiStepFiltersProps {
  onSubmit: (data: any) => void;
}

export class MultiStepFilters extends React.Component<MultiStepFiltersProps> {
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
        <div className="step-content">
          <h2 className="text-lg lg:text-xl text-center">
            Dépenses liées à l'achat
          </h2>
          {/* Ajoutez vos champs de formulaire ici */}
        </div>
      ),
    },
    {
      title: "Revenus et dépenses",
      component: (
        <div className="step-content">
          <h2 className="text-lg lg:text-xl text-center">
            Revenus et dépenses réguliers
          </h2>
          {/* Ajoutez vos champs de formulaire ici */}
        </div>
      ),
    },
    {
      title: "Travaux et mobilier",
      component: (
        <div className="step-content">
          <h2 className="text-lg lg:text-xl text-center">
            Coût des travaux et du mobilier
          </h2>
          {/* Ajoutez vos champs de formulaire ici */}
        </div>
      ),
    },
    {
      title: "Financement",
      component: (
        <div className="step-content">
          <h2 className="text-lg lg:text-xl text-center">
            Informations relatives au crédit
          </h2>
          {/* Ajoutez vos champs de formulaire ici */}
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
      <Card className="rounded-3xl w-full border-blue-700">
        <CardContent className="grid text-sm lg:text-md font-medium p-0">
          <div className="w-full mx-auto">
            <div className="flex justify-between mb-6">
              {this.steps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => this.setCurrentStep(index)}
                  className={`flex-1 text-center p-4 border-b border-solid cursor-pointer ${
                    index === currentStep
                      ? "border-blue-700 bg-blue-700 text-white rounded-t-3xl"
                      : "border-blue-700 text-blue-800"
                  }`}
                >
                  {step.title}
                </div>
              ))}
            </div>
            <div className="mt-10 mb-4 min-h-70 text-blue-800">
              {this.steps[currentStep].component}
            </div>
            <div className="flex justify-between mt-5">
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
    );
  }
}
