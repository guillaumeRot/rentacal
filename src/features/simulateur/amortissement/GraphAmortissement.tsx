"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AmortissementGlobalType } from "../simulateur.schema";

export type DataProps = {
  data: AmortissementGlobalType[];
};

// const chartData = [
//   { annee: "1", credit: 300, ps: 50, ir: 50, cashflow: -200 },
//   { annee: "2", credit: 300, ps: 50, ir: 50, cashflow: -400 },
//   { annee: "3", credit: 300, ps: 50, ir: 50, cashflow: -400 },
//   { annee: "4", credit: 300, ps: 50, ir: 50, cashflow: -400 },
//   { annee: "5", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "6", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "7", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "8", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "9", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "10", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "11", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "12", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "13", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "14", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "15", credit: 300, ps: 50, ir: 50, cashflow: 100 },
//   { annee: "16", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "17", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "18", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "19", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "20", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "21", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "22", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "23", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "24", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "25", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "26", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "27", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "28", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "29", credit: 0, ps: 100, ir: 100, cashflow: 300 },
//   { annee: "30", credit: 0, ps: 100, ir: 100, cashflow: 300 },
// ];

const chartConfig = {
  cashflow: {
    label: "Cashflow",
    color: "hsl(var(--chart-2))",
  },
  credit: {
    label: "Crédit",
    color: "hsl(var(--chart-1))",
  },
  ir: {
    label: "Impôts rev.",
    color: "hsl(var(--chart-5))",
  },
  ps: {
    label: "Prelev. soc.",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export function GraphAmortissement(props: DataProps) {
  const [state, setState] = React.useState({
    currentStep: 0,
  });

  const steps = [
    {
      slug: "cashflow",
      title: "Cashflow",
    },
    {
      slug: "depenses",
      title: "Dépenses",
    },
  ];

  const { currentStep } = state;
  const setCurrentStep = (index: number) => {
    setState({ currentStep: index });
  };

  return (
    <div className="m-5">
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
      <Card className="mt-2 rounded-3xl">
        <CardContent className="px-2 sm:p-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[250px] w-full"
          >
            <BarChart
              accessibilityLayer
              data={props.data}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="annee"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  return value + "e année";
                }}
              />
              <ChartTooltip
                content={
                  <ChartTooltipContent
                    className="w-[150px]"
                    labelFormatter={(value) => {
                      if (value == 1) {
                        return "1ère année";
                      }
                      return value + "e année";
                    }}
                  />
                }
              />
              <ChartLegend content={<ChartLegendContent />} />
              {steps[currentStep].slug == "depenses" && (
                <Bar
                  dataKey="credit"
                  stackId="a"
                  fill={`var(--color-credit)`}
                />
              )}
              {steps[currentStep].slug == "depenses" && (
                <Bar dataKey="ir" stackId="a" fill={`var(--color-ir)`} />
              )}
              {steps[currentStep].slug == "depenses" && (
                <Bar
                  dataKey="ps"
                  stackId="a"
                  fill={`var(--color-ps)`}
                  radius={[4, 4, 0, 0]}
                />
              )}
              {steps[currentStep].slug == "cashflow" && (
                <Bar
                  dataKey="cashflow"
                  stackId="b"
                  fill={`var(--color-cashflow)`}
                  radius={[4, 4, 0, 0]}
                />
              )}
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
