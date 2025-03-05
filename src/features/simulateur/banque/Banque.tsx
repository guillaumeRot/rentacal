"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MontantFormat } from "@/features/MontantFormat";
import { CardChild, CardChildHeader } from "@/features/theme/CardUtils";
import { TbPigMoney } from "react-icons/tb";
import { Pie, PieChart } from "recharts";

export type BanqueProps = {
  montantPret?: number | 0;
  fraisBancaires?: number | 0;
};

export const Banque = (props: BanqueProps) => {
  const chartData = [
    {
      label: "montantPret",
      value: props.montantPret,
      fill: "var(--color-montantPret)",
    },
    {
      label: "fraisBancaire",
      value: props.fraisBancaires,
      fill: "var(--color-fraisBancaire)",
    },
  ];

  const chartConfig = {
    montantPret: {
      label: "Montant du prêt",
      color: "hsl(var(--chart-2))",
    },
    fraisBancaire: {
      label: "Frais bancaire",
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <div className="grid grid-cols-1">
      {/* <Card className="flex flex-col rounded-3xl px-4 lg:px-6 m-4 h-fit"> */}
      <CardChild className="flex flex-col px-4 lg:px-6 h-fit">
        <CardChildHeader icon={<TbPigMoney size={25} />} title="Coût emprunt" />
        <CardContent className="flex flex-col pb-0">
          <div className="flex-1 pb-0 grid grid-cols-1 lg:grid-cols-2 items-center">
            {props.montantPret && (
              <div>
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto aspect-square max-h-[300px]"
                >
                  <PieChart>
                    <Pie data={chartData} dataKey="value" innerRadius={55} />
                    <ChartLegend
                      content={<ChartLegendContent nameKey="label" />}
                      className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent nameKey="label" />}
                    />
                  </PieChart>
                </ChartContainer>
              </div>
            )}
            <Card className="rounded-3xl p-4 lg:p-10 m-4 lg:m-10 grid grid-cols-2 h-fit text-sm lg:text-md">
              <span className="text-center py-2">Montant Pret</span>
              <span className="text-center py-2">
                <MontantFormat value={props.montantPret} />
              </span>
              <span className="text-center py-2">Frais Bancaires</span>
              <span className="text-center py-2">
                <MontantFormat value={props.fraisBancaires} />
              </span>
              <span className="text-center pb-2 pt-6 font-semibold">
                Coût du prêt
              </span>
              <span className="text-center pb-2 pt-6 font-semibold">
                <MontantFormat
                  value={(props.montantPret || 0) + (props.fraisBancaires || 0)}
                />
              </span>
            </Card>
          </div>
        </CardContent>
      </CardChild>
    </div>
  );
};
