"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CardChildHeader } from "@/features/theme/CardUtils";
const chartData = [
  { browser: "Crédit", depenses: 750, fill: "var(--color-credit)" },
  { browser: "Imp. Rev.", depenses: 100, fill: "var(--color-ir)" },
  { browser: "Prel. Soc.", depenses: 80, fill: "var(--color-ps)" },
];

const chartConfig = {
  depenses: {
    label: "Dépenses",
  },
  credit: {
    label: "Crédit",
    color: "hsl(var(--chart-1))",
  },
  ir: {
    label: "Impôts revenu",
    color: "hsl(var(--chart-2))",
  },
  ps: {
    label: "Prélèvement sociaux",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

export function Component() {
  const totalDepenses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.depenses, 0);
  }, []);

  return (
    <Card className="flex flex-col rounded-3xl m-4">
      <CardChildHeader title="Répartition des dépenses" />
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="depenses"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalDepenses.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Dépenses
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
