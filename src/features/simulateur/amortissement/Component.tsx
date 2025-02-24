"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, Cell, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { annee: "1", pret: 300, ps: 50, ir: 50, cashflow: -200 },
  { annee: "2", pret: 300, ps: 50, ir: 50, cashflow: -400 },
  { annee: "3", pret: 300, ps: 50, ir: 50, cashflow: -400 },
  { annee: "4", pret: 300, ps: 50, ir: 50, cashflow: -400 },
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
  cashflow: {
    label: "Cashflow",
    color: "hsl(var(--chart-2))",
  },
  depenses: {
    label: "Dépenses",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function Component() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>("cashflow");

  const total = React.useMemo(
    () => ({
      cashflow: chartData.reduce((acc, curr) => acc + curr.cashflow, 0),
      depenses: chartData.reduce(
        (acc, curr) => acc + curr.pret + curr.ir + curr.ps,
        0
      ),
    }),
    []
  );

  return (
    <Card className="m-5">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Line Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["cashflow", "depenses"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6 cursor-pointer"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        {/* <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Line
              dataKey={activeChart}
              type="monotone"
              stroke={`var(--color-${activeChart})`}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer> */}
        <ChartContainer config={chartConfig} className="max-h-[280px] w-full">
          <BarChart accessibilityLayer data={chartData}>
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
                  labelFormatter={(value) => {
                    // if (value == 1) {
                    //   return "1ère année";
                    // }
                    return value + "e année";
                  }}
                  indicator="dot"
                />
              }
            />
            <ChartLegend content={<ChartLegendContent />} />
            {/* <Bar
              dataKey="pret"
              stackId="a"
              fill="var(--color-pret)"
              radius={[0, 0, 0, 0]}
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
              radius={[4, 4, 0, 0]}
            /> */}
            {/* <Bar
              dataKey="cashflow"
              stackId="a"
              fill="var(--color-cashflow)"
              radius={[4, 4, 0, 0]}
            /> */}
            {activeChart == "depenses" && (
              <Bar dataKey="pret" stackId="a" radius={[0, 0, 0, 0]}>
                {chartData.map((item) => (
                  <Cell key={item.annee} fill={`var(--color-${activeChart})`} />
                ))}
              </Bar>
            )}
            {activeChart == "depenses" && (
              <Bar dataKey="ir" stackId="a" radius={[0, 0, 0, 0]}>
                {chartData.map((item) => (
                  <Cell key={item.annee} fill="hsl(var(--chart-5))" />
                ))}
              </Bar>
            )}
            {activeChart == "depenses" && (
              <Bar dataKey="ps" stackId="a" radius={[4, 4, 0, 0]}>
                {chartData.map((item) => (
                  <Cell key={item.annee} fill="hsl(var(--chart-4))" />
                ))}
              </Bar>
            )}
            {activeChart == "cashflow" && (
              <Bar dataKey="cashflow" stackId="b" radius={[4, 4, 0, 0]}>
                {chartData.map((item) => (
                  <Cell
                    key={item.annee}
                    fill={
                      activeChart == "cashflow" && item[activeChart] > 0
                        ? "hsl(var(--chart-2))"
                        : "hsl(var(--chart-1))"
                    }
                  />
                ))}
              </Bar>
            )}
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
