"use client";

import { Pie, PieChart } from "recharts";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { MontantFormat } from "@/features/MontantFormat";
import { CardChildHeader } from "@/features/theme/CardUtils";
import { AmortissementGlobalType } from "../simulateur.schema";

export type DataProps = {
  data: AmortissementGlobalType;
};

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

export function PieDepenses(props: DataProps) {
  const chartData = [
    { label: "credit", value: props.data.credit, fill: "var(--color-credit)" },
    { label: "ir", value: props.data.ir, fill: "var(--color-ir)" },
    { label: "ps", value: props.data.ps, fill: "var(--color-ps)" },
    {
      label: "foncier",
      value: props.data.foncier,
      fill: "var(--color-foncier)",
    },
    { label: "copro", value: props.data.copro, fill: "var(--color-copro)" },
  ];

  const depensesTotal =
    props.data.credit +
    props.data.ir +
    props.data.ps +
    props.data.foncier +
    props.data.copro;

  return (
    <Card className="flex flex-col rounded-3xl px-4 lg:px-6 m-4 h-fit">
      <CardChildHeader title="Répartition des dépenses" />
      <CardContent className="flex flex-col pb-0">
        <div className="py-2 mt-4 mx-auto">
          <Badge className="text-lg lg:text-xl font-medium rounded-3xl px-5 py-1 mt-1 hover:bg-white bg-white text-red-600 border border-red-600">
            <MontantFormat value={depensesTotal} />
          </Badge>
        </div>
        <div>
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
        </div>
      </CardContent>
    </Card>
  );
}
