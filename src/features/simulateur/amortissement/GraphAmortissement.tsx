"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// export type DataProps = {
//   data: {
//     annee: string;
//     mensualitesAnnuelles: number;
//     cashflowNetNet: number;
//   }[];
// };

const chartData = [
  { annee: "1", mensualitesAnnuelles: 300, cashflowNetNet: 50 },
  { annee: "1", mensualitesAnnuelles: 300, cashflowNetNet: 50 },
  { annee: "1", mensualitesAnnuelles: 300, cashflowNetNet: 50 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  cashflowNetNet: {
    label: "Cashflow",
    color: "hsl(var(--chart-2))",
  },
  mensualitesAnnuelles: {
    label: "Mensualites",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function GraphAmortissement() {
  return (
    <Card className="m-5">
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="fillCashflow" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-cashflowNetNet)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-cashflowNetNet)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMensualites" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mensualitesAnnuelles)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mensualitesAnnuelles)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
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
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return value + "e année";
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mensualitesAnnuelles"
              type="natural"
              fill="url(#fillMensualites)"
              stroke="var(--color-mensualitesAnnuelles)"
              stackId="a"
            />
            <Area
              dataKey="cashflowNetNet"
              type="natural"
              fill="url(#fillCashflow)"
              stroke="var(--color-cashflowNetNet)"
              stackId="a"
            />

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
