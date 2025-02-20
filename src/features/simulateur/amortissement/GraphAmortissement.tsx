"use client";

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
import { AmortissementType } from "../simulateur.schema";

export type DataProps = {
  data: AmortissementType[];
};

const chartData = [
  { annee: "1", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "2", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "3", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "4", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "5", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "6", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "7", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "8", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "9", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "10", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "11", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "12", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "13", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "14", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "15", pret: 300, ps: 50, ir: 50, cashflow: 100 },
  { annee: "16", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "17", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "18", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "19", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "20", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "21", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "22", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "23", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "24", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "25", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "26", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "27", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "28", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "29", pret: 0, ps: 100, ir: 100, cashflow: 300 },
  { annee: "30", pret: 0, ps: 100, ir: 100, cashflow: 300 },
];

const chartConfig = {
  pret: {
    label: "Crédit",
    color: "hsl(var(--chart-1))",
  },
  ps: {
    label: "Prel. Soc.",
    color: "hsl(var(--chart-5))",
  },
  ir: {
    label: "Imp. Rev",
    color: "hsl(var(--chart-4))",
  },
  cashflow: {
    label: "Cashflow",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function GraphAmortissement(props: DataProps) {
  return (
    <Card className="m-5">
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="max-h-[350px] w-full">
          <BarChart accessibilityLayer data={props.data}>
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
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="pret"
              stackId="a"
              fill="var(--color-pret)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="ps"
              stackId="a"
              fill="var(--color-ps)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="ir"
              stackId="a"
              fill="var(--color-ir)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="cashflow"
              stackId="a"
              fill="var(--color-cashflow)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
