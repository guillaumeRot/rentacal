import { Card, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
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
  };

  steps = [
    {
      title: "Achat",
      component: (
        <div>
          <h2 className="text-lg lg:text-xl text-center">
            Dépenses liées à l'achat
          </h2>
          <FormFilterAchat
            onChange={this.props.onSubmit}
            form={this.props.form}
          />
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
            onChange={this.props.onSubmit}
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
              <Form {...this.props.form}>
                <form
                  className="space-y-3"
                  onSubmit={this.props.form.handleSubmit(this.props.onSubmit)}
                >
                  {/* <FormField
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
                    /> */}
                  {/* <Button
                      className="mx-auto block px-6 py-2 rounded-full text-sm text-semibold bg-blue-900 hover:bg-blue-800 hover:ring-3 ring-transparent ring-offset-2 transition"
                      type="submit"
                    >
                      <span className="text-white">S'inscrire</span>
                    </Button> */}
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
              </Form>
            </div>
          </CardContent>
        </Card>
      </>
    );
  }
}
