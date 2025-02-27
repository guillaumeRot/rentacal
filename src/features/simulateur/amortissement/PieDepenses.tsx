"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { CardChildHeader } from "@/features/theme/CardUtils";
import { AmortissementGlobalType } from "../simulateur.schema";

export type DataProps = {
  data: AmortissementGlobalType;
};

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
  foncier: {
    label: "Impôts foncier",
    color: "hsl(var(--chart-4))",
  },
  copro: {
    label: "Charges copropriété",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PieDepenses(props: DataProps) {
  const chartData = [
    {
      label: "Crédit",
      depenses: props.data.credit,
      fill: "var(--color-credit)",
    },
    {
      label: "Impôts revenu",
      depenses: props.data.ir,
      fill: "var(--color-ir)",
    },
    {
      label: "Prélèvement sociaux",
      depenses: props.data.ps,
      fill: "var(--color-ps)",
    },
    {
      label: "Impôt foncier",
      depenses: props.data.foncier,
      fill: "var(--color-foncier)",
    },
    {
      label: "Charges copropriété",
      depenses: props.data.copro,
      fill: "var(--color-copro)",
    },
  ];

  const totalDepenses = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.depenses, 0);
  }, []);

  return (
    <Card className="flex flex-col rounded-3xl m-4">
      <CardChildHeader title="Répartition des dépenses" />
      <CardContent className="flex flex-col pb-0 w-full">
        {/* <div className="py-2 mt-4 mx-auto">
          <Badge className="text-lg lg:text-xl font-medium rounded-3xl px-5 py-1 mt-1 hover:bg-white bg-white text-red-600 border border-red-600">
            <MontantFormat value={totalDepenses} />
          </Badge>
        </div> */}
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
              nameKey="label"
              innerRadius={60}
              strokeWidth={5}
            >
              {/* <Label
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
                          y={(viewBox.cy || 0) - 24}
                          className="fill-muted-foreground"
                        >
                          Dépenses
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="text-2xl font-bold fill-red-600"
                        >
                          {numericFormatter(totalDepenses.toString(), {
                            decimalScale: 2,
                            decimalSeparator: ",",
                            thousandSeparator: " ",
                            fixedDecimalScale: true,
                            suffix: " €",
                          })}
                        </tspan>
                      </text>
                    );
                  }
                }}
              /> */}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
