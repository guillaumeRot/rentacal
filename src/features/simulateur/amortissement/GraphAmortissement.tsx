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
const chartData = [
  { annee: "1", interet: 250, pret: 260 },
  { annee: "2", interet: 240, pret: 270 },
  { annee: "3", interet: 230, pret: 280 },
  { annee: "4", interet: 220, pret: 290 },
  { annee: "5", interet: 210, pret: 300 },
  { annee: "6", interet: 200, pret: 310 },
  { annee: "7", interet: 190, pret: 320 },
  { annee: "8", interet: 180, pret: 330 },
  { annee: "9", interet: 170, pret: 340 },
  { annee: "10", interet: 160, pret: 350 },
  { annee: "11", interet: 150, pret: 360 },
  { annee: "12", interet: 140, pret: 370 },
  { annee: "13", interet: 130, pret: 380 },
  { annee: "14", interet: 120, pret: 390 },
  { annee: "15", interet: 110, pret: 400 },
  { annee: "16", interet: 100, pret: 410 },
  { annee: "17", interet: 90, pret: 420 },
  { annee: "18", interet: 80, pret: 430 },
  { annee: "19", interet: 70, pret: 440 },
  { annee: "20", interet: 60, pret: 450 },
  { annee: "21", interet: 50, pret: 460 },
  { annee: "22", interet: 40, pret: 470 },
  { annee: "23", interet: 35, pret: 475 },
  { annee: "24", interet: 30, pret: 480 },
  { annee: "25", interet: 25, pret: 485 },
  { annee: "26", interet: 20, pret: 490 },
  { annee: "27", interet: 18, pret: 492 },
  { annee: "28", interet: 15, pret: 495 },
  { annee: "29", interet: 5, pret: 505 },
  { annee: "30", interet: 1, pret: 509 },
];

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

export function Component() {
  return (
    <Card className="m-5">
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={chartData}>
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
