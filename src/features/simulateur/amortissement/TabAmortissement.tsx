"use client";

import { CardContent } from "@/components/ui/card";
import {
  CardChild,
  CardChildHeader,
  CardParent,
} from "@/features/theme/CardUtils";
import { BsGraphUpArrow } from "react-icons/bs";
import { Component } from "./GraphAmortissement";

// export type CardBanqueProps = {
//   montantPret: string;
//   fraisBancaires: string;
//   coutPret: string;
// };

// export function CardBanque(props: CardBanqueProps) {
//   const chartData = [
//     {
//       type: "montantPret",
//       montant: parseFloat(props.montantPret.replace(/,/g, "")),
//       fill: "var(--color-montantPret)",
//     },
//     {
//       type: "fraisBancaire",
//       montant: parseFloat(props.fraisBancaires.replace(/,/g, "")),
//       fill: "var(--color-fraisBancaire)",
//     },
//   ];

//   const chartConfig = {
//     montantPret: {
//       label: "Montant du prêt",
//       color: "hsl(var(--chart-1))",
//     },
//     fraisBancaire: {
//       label: "Frais bancaire",
//       color: "hsl(var(--chart-2))",
//     },
//   } satisfies ChartConfig;

//   return (
//     <CardChild className="flex flex-col">
//       <CardChildHeader icon={<TbPigMoney size={25} />} title="Coût emprunt" />
//       <CardContent className="flex-1 pb-0 grid grid-cols-1 lg:grid-cols-2 pb-2 items-center">
//         <ChartContainer
//           config={chartConfig}
//           className="mx-auto aspect-square max-h-[350px] w-full"
//         >
//           <PieChart>
//             <ChartLegend content={<ChartLegendContent />} />
//             <Pie
//               data={chartData}
//               dataKey="montant"
//               nameKey="type"
//               innerRadius={90}
//               strokeWidth={5}
//             >
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text
//                         x={viewBox.cx}
//                         y={viewBox.cy}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                       >
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) - 20}
//                           className="fill-muted-foreground"
//                         >
//                           Coût du prêt
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 4}
//                           className="fill-foreground text-2xl font-bold"
//                         >
//                           {props.coutPret} €
//                         </tspan>
//                       </text>
//                     );
//                   }
//                 }}
//               />
//             </Pie>
//           </PieChart>
//         </ChartContainer>
//         <Card className="rounded-3xl p-4 lg:p-10 m-4 lg:m-10 grid grid-cols-2 h-fit text-sm lg:text-md">
//           <span className="text-center py-2">Montant Pret</span>
//           <span className="text-center py-2">{props.montantPret} €</span>
//           <span className="text-center py-2">Frais Bancaires</span>
//           <span className="text-center py-2">{props.fraisBancaires} €</span>
//           <span className="text-center pb-2 pt-6 font-semibold">
//             Coût du prêt
//           </span>
//           <span className="text-center pb-2 pt-6 font-semibold">
//             {props.coutPret} €
//           </span>
//         </Card>
//       </CardContent>
//     </CardChild>
//   );
// }

export function TabAmortissement() {
  return (
    <CardParent className="grid grid-cols-1">
      <CardChild>
        <CardChildHeader
          icon={<BsGraphUpArrow size={25} />}
          title="Tableau d'amortissement"
        />
        <CardContent className="flex-1 pb-0">
          <Component />
        </CardContent>
      </CardChild>
    </CardParent>
  );
}
