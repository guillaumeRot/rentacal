"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { MontantFormat } from "@/features/MontantFormat";
import { AccordionSeeMore } from "@/features/theme/AccordionUtils";
import {
  CardChild,
  CardChildHeader,
  CardParent,
} from "@/features/theme/CardUtils";
import { TbPigMoney } from "react-icons/tb";
import { numericFormatter } from "react-number-format";
import { Label, Pie, PieChart } from "recharts";

export type BanqueProps = {
  montantPret?: number;
  fraisBancaires?: number;
};

export type CardBanqueProps = {
  montantPret: number;
  fraisBancaires: number;
  coutPret: number;
};

export function CardBanque(props: CardBanqueProps) {
  const chartData = [
    {
      type: "montantPret",
      montant: props.montantPret,
      fill: "var(--color-montantPret)",
    },
    {
      type: "fraisBancaire",
      montant: props.fraisBancaires,
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
              {/* <ChartLegend content={<ChartLegendContent />} /> */}
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent nameKey="type" />}
              />
              <Pie
                data={chartData}
                dataKey="montant"
                // nameKey="type"
                innerRadius={90}
                strokeWidth={5}
              >
                {/* {chartData.map((entry, index) => ( */}
                <Label
                  key="label"
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
                            {numericFormatter(props.coutPret.toString(), {
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
                    return null;
                  }}
                />
                {/* ))} */}
              </Pie>
              {/* <ChartLegend content={<ChartLegendContent nameKey="type" />} /> */}
            </PieChart>
          </ChartContainer>
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
              <MontantFormat value={props.coutPret} />
            </span>
          </Card>
        </div>
        <div className="text-xs font-medium text-gray-400 w-full px-4 lg:px-10 mt-4">
          <AccordionSeeMore
            description="Cette section vous permet de visualiser la répartition des coûts liés à votre emprunt immobilier.
          Le montant du prêt correspond à la somme empruntée pour financer votre achat. Les frais bancaires incluent les frais de dossier et autres charges liées à l’octroi du crédit. Enfin, le coût du prêt représente les intérêts et l’assurance emprunteur sur toute la durée du remboursement. Grâce à ce graphique, vous comprenez en un coup d’œil l’impact du financement sur votre investissement locatif."
          />
        </div>
      </CardContent>
    </CardChild>
  );
}

export const Banque = (props: BanqueProps) => {
  return (
    <CardParent className="grid grid-cols-1">
      <CardBanque
        montantPret={props.montantPret || 0}
        fraisBancaires={props.fraisBancaires || 0}
        coutPret={(props.montantPret || 0) + (props.fraisBancaires || 0)}
      />
    </CardParent>
  );
};
