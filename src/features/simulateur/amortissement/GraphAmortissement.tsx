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

export type DataProps = {
  data: {
    annee: string;
    interet: number;
    pret: number;
  }[];
};

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  pret: {
    label: "Prêt",
    color: "hsl(var(--chart-2))",
  },
  interet: {
    label: "Intêrets",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function GraphAmortissement(props: DataProps) {
  return (
    <Card className="m-5">
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={props.data}>
            <defs>
              <linearGradient id="fillPret" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-pret)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-pret)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillInterets" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-interet)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-interet)"
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
              dataKey="interet"
              type="natural"
              fill="url(#fillInterets)"
              stroke="var(--color-interet)"
              stackId="a"
            />
            <Area
              dataKey="pret"
              type="natural"
              fill="url(#fillPret)"
              stroke="var(--color-pret)"
              stackId="a"
            />

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
