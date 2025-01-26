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
      <Card className="rounded-3xl w-full border-blue-600">
        <CardContent className="grid text-sm lg:text-md font-medium">
          <div className="w-full mx-auto p-4">
            <div className="flex justify-between mb-6">
              {this.steps.map((step, index) => (
                <div
                  key={index}
                  onClick={() => this.setCurrentStep(index)}
                  className={`flex-1 text-center p-2 border-b border-solid cursor-pointer ${
                    index === currentStep ? "border-blue-600 text-blue-600" : ""
                  }`}
                >
                  {step.title}
                </div>
              ))}
            </div>
            <div className="mt-4 mb-4 min-h-50">
              {this.steps[currentStep].component}
            </div>
            <div className="flex justify-between mt-5">
              <button
                onClick={() => this.props.onSubmit(this.state.formData)}
                className="cursor-pointer text-white mx-auto py-2 px-4 text-center rounded-full duration-150 text-white text-md bg-blue-900 mb-5 hover:bg-blue-800 hover:ring-3 ring-transparent ring-offset-2 transition"
              >
                Soumettre
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
