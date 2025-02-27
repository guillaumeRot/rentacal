"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { CardChildHeader } from "@/features/theme/CardUtils";
const chartData = [
  { label: "credit", value: 275, fill: "var(--color-credit)" },
  { label: "ir", value: 200, fill: "var(--color-ir)" },
  { label: "ps", value: 187, fill: "var(--color-ps)" },
  { label: "foncier", value: 173, fill: "var(--color-foncier)" },
  { label: "copro", value: 90, fill: "var(--color-copro)" },
];

const chartConfig = {
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
  foncier: {
    label: "Impôt foncier",
    color: "hsl(var(--chart-4))",
  },
  copro: {
    label: "Charges copropriété",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function Component() {
  return (
    <Card className="flex flex-col">
      <CardChildHeader title="Répartition des dépenses" />
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="value" />
            <ChartLegend
              content={<ChartLegendContent nameKey="label" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
