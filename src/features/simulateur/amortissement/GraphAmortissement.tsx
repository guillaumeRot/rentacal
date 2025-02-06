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
  { annee: "1", desktop: 178, mobile: 200 },
  { annee: "2", desktop: 470, mobile: 410 },
  { annee: "3", desktop: 103, mobile: 160 },
  { annee: "4", desktop: 439, mobile: 380 },
  { annee: "5", desktop: 88, mobile: 140 },
  { annee: "6", desktop: 294, mobile: 250 },
  { annee: "7", desktop: 323, mobile: 370 },
  { annee: "8", desktop: 385, mobile: 320 },
  { annee: "9", desktop: 438, mobile: 480 },
  { annee: "10", desktop: 155, mobile: 200 },
  { annee: "11", desktop: 92, mobile: 150 },
  { annee: "12", desktop: 492, mobile: 420 },
  { annee: "13", desktop: 81, mobile: 130 },
  { annee: "14", desktop: 426, mobile: 380 },
  { annee: "15", desktop: 307, mobile: 350 },
  { annee: "16", desktop: 371, mobile: 310 },
  { annee: "17", desktop: 475, mobile: 520 },
  { annee: "18", desktop: 107, mobile: 170 },
  { annee: "19", desktop: 341, mobile: 290 },
  { annee: "20", desktop: 408, mobile: 450 },
  { annee: "21", desktop: 169, mobile: 210 },
  { annee: "22", desktop: 317, mobile: 270 },
  { annee: "23", desktop: 480, mobile: 530 },
  { annee: "24", desktop: 132, mobile: 180 },
  { annee: "25", desktop: 141, mobile: 190 },
  { annee: "26", desktop: 434, mobile: 380 },
  { annee: "27", desktop: 448, mobile: 490 },
  { annee: "28", desktop: 149, mobile: 200 },
  { annee: "29", desktop: 103, mobile: 160 },
  { annee: "30", desktop: 446, mobile: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
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
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
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
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
