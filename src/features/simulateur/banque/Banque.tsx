"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { TbPigMoney } from "react-icons/tb";
import { Label, Pie, PieChart } from "recharts";

export function Component() {
  const chartData = [
    {
      browser: "montantPret",
      visitors: 200000,
      fill: "var(--color-montantPret)",
    },
    {
      browser: "fraisBancaire",
      visitors: 53600,
      fill: "var(--color-fraisBancaire)",
    },
  ];

  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    montantPret: {
      label: "Montant du prêt",
      color: "hsl(var(--chart-1))",
    },
    fraisBancaire: {
      label: "Frais bancaire",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col rounded-3xl my-2 lg:my-6 mx-5">
      <CardHeader className="items-center pb-0">
        <CardTitle>
          <div className="flex text-gray-700">
            <TbPigMoney size={25} />
            <div className="flex items-center">
              <h1 className="ml-2 text-sm font-medium">Coût emprunt</h1>
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0 grid grid-cols-2">
        {/*  items-center" */}
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px]"
        >
          <PieChart>
            <ChartLegend content={<ChartLegendContent />} />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={90}
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
                          y={(viewBox.cy || 0) - 20}
                          className="fill-muted-foreground"
                        >
                          Coût du prêt
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-foreground text-2xl font-bold"
                        >
                          10 253 600 €
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <Card className="rounded-3xl p-10 m-10 grid grid-cols-2 h-fit">
          <span className="text-center py-2">Montant Pret</span>
          <span className="text-center py-2">200 000 €</span>
          <span className="text-center py-2">Frais Bancaires</span>
          <span className="text-center py-2">53 600 €</span>
          <span className="text-center pb-2 pt-6 font-semibold">
            Coût du prêt
          </span>
          <span className="text-center pb-2 pt-6 font-semibold">253 600 €</span>
        </Card>
      </CardContent>
    </Card>
  );
}

export function Banque() {
  return (
    <Card className="rounded-3xl w-full border-2 grid grid-cols-1 bg-blue-50">
      {/* <CardBanque
        montantPret="200000"
        fraisBancaires="53600"
        coutPret="10 253 600"
      /> */}
      <Component />
    </Card>
  );
}
