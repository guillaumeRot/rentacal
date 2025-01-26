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
      title: "Mode",
      component: (
        <div className="mt-4 mb-4">
          <h2 className="text-lg lg:text-xl text-center">Mode de simulation</h2>
          {/* Ajoutez vos champs de formulaire ici */}
        </div>
      ),
    },
    {
      title: "Achat",
      component: (
        <div className="step-content">
          <h2>Préférences</h2>
          {/* Ajoutez vos champs de formulaire ici */}
        </div>
      ),
    },
    {
      title: "Revenus et dépenses",
      component: (
        <div className="step-content">
          <h2>Confirmation</h2>
          {/* Ajoutez vos champs de formulaire ici */}
        </div>
      ),
    },
    {
      title: "Travaux et mobilier",
      component: (
        <div className="step-content">
          <h2>Confirmation</h2>
          {/* Ajoutez vos champs de formulaire ici */}
        </div>
      ),
    },
    {
      title: "Financement",
      component: (
        <div className="step-content">
          <h2>Confirmation</h2>
          {/* Ajoutez vos champs de formulaire ici */}
        </div>
      ),
    },
  ];

  handleNext = () => {
    if (this.state.currentStep < this.steps.length - 1) {
      this.setState({ currentStep: this.state.currentStep + 1 });
    }
  };

  handlePrevious = () => {
    if (this.state.currentStep > 0) {
      this.setState({ currentStep: this.state.currentStep - 1 });
    }
  };

  render() {
    const { currentStep } = this.state;

    return (
      <Card className="rounded-3xl w-full border-blue-600">
        {/* <CardHeader>
        <CardTitle className="text-blue-600">Frais bancaires</CardTitle>
      </CardHeader> */}
        <CardContent className="grid text-sm lg:text-md font-medium">
          <div className="w-full mx-auto p-4">
            <div className="flex justify-between mb-6">
              {this.steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex-1 text-center p-2 border-b border-solid ${
                    index === currentStep ? "border-blue-600 text-blue-600" : ""
                  }
                         ${
                           index < currentStep
                             ? "completed border-green-600 text-green-600"
                             : ""
                         }`}
                >
                  {step.title}
                </div>
              ))}
            </div>
            <div className="mt-4 mb-4 min-h-200">
              {this.steps[currentStep].component}
            </div>
            <div className="navigation-buttons">
              <button
                onClick={this.handlePrevious}
                disabled={currentStep === 0}
                className="btn-previous"
              >
                Précédent
              </button>

              {currentStep === this.steps.length - 1 ? (
                <button
                  onClick={() => this.props.onSubmit(this.state.formData)}
                  className="btn-submit"
                >
                  Soumettre
                </button>
              ) : (
                <button onClick={this.handleNext} className="btn-next">
                  Suivant
                </button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
