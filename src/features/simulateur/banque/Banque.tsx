"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { AccordionSeeMore } from "@/features/theme/AccordionUtils";
import {
  CardChild,
  CardChildHeader,
  CardParent,
} from "@/features/theme/CardUtils";
import { TbPigMoney } from "react-icons/tb";
import { Label, Pie, PieChart } from "recharts";

export type CardBanqueProps = {
  montantPret: string;
  fraisBancaires: string;
  coutPret: string;
};

export function CardBanque(props: CardBanqueProps) {
  const chartData = [
    {
      type: "montantPret",
      montant: parseFloat(props.montantPret.replace(/,/g, "")),
      fill: "var(--color-montantPret)",
    },
    {
      type: "fraisBancaire",
      montant: parseFloat(props.fraisBancaires.replace(/,/g, "")),
      fill: "var(--color-fraisBancaire)",
    },
  ];

  const chartConfig = {
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
    <CardChild className="flex flex-col">
      <CardChildHeader icon={<TbPigMoney size={25} />} title="Coût emprunt" />
      <CardContent className="pb-2">
        <div className="flex-1 pb-0 grid grid-cols-1 lg:grid-cols-2 items-center">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[350px] w-full"
          >
            <PieChart>
              <ChartLegend content={<ChartLegendContent />} />
              <Pie
                data={chartData}
                dataKey="montant"
                nameKey="type"
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
                            {props.coutPret} €
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
          <Card className="rounded-3xl p-4 lg:p-10 m-4 lg:m-10 grid grid-cols-2 h-fit text-sm lg:text-md">
            <span className="text-center py-2">Montant Pret</span>
            <span className="text-center py-2">{props.montantPret} €</span>
            <span className="text-center py-2">Frais Bancaires</span>
            <span className="text-center py-2">{props.fraisBancaires} €</span>
            <span className="text-center pb-2 pt-6 font-semibold">
              Coût du prêt
            </span>
            <span className="text-center pb-2 pt-6 font-semibold">
              {props.coutPret} €
            </span>
          </Card>
        </div>
        <div className="text-xs font-medium text-gray-400 w-full px-4 lg:px-10 mt-4">
          <AccordionSeeMore
            description="Une rentabilité est considérée comme faible si elle est
                  inférieure à 4%, moyenne si elle est entre 4% et 7%, et haute
                  si elle est supérieure à 7%."
          />
        </div>
      </CardContent>
    </CardChild>
  );
}

export function Banque() {
  return (
    <CardParent className="grid grid-cols-1">
      <CardBanque
        montantPret="200 000"
        fraisBancaires="53 600"
        coutPret="10 253 600"
      />
    </CardParent>
  );
}
