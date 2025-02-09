"use client";

import { CardContent } from "@/components/ui/card";
import { AccordionSeeMore } from "@/features/theme/AccordionUtils";
import {
  CardChild,
  CardChildHeader,
  CardParent,
} from "@/features/theme/CardUtils";
import { BsGraphUpArrow } from "react-icons/bs";
import { GraphAmortissement } from "./GraphAmortissement";
import { TabAmortissement } from "./TabAmortissement";

const chartData = [
  { annee: "1", interet: 250, pret: 260 },
  { annee: "2", interet: 240, pret: 270 },
  { annee: "3", interet: 230, pret: 280 },
  { annee: "4", interet: 220, pret: 290 },
  { annee: "5", interet: 210, pret: 300 },
  { annee: "6", interet: 200, pret: 310 },
  { annee: "7", interet: 190, pret: 320 },
  { annee: "8", interet: 180, pret: 330 },
  { annee: "9", interet: 170, pret: 340 },
  { annee: "10", interet: 160, pret: 350 },
  { annee: "11", interet: 150, pret: 360 },
  { annee: "12", interet: 140, pret: 370 },
  { annee: "13", interet: 130, pret: 380 },
  { annee: "14", interet: 120, pret: 390 },
  { annee: "15", interet: 110, pret: 400 },
  { annee: "16", interet: 100, pret: 410 },
  { annee: "17", interet: 90, pret: 420 },
  { annee: "18", interet: 80, pret: 430 },
  { annee: "19", interet: 70, pret: 440 },
  { annee: "20", interet: 60, pret: 450 },
  { annee: "21", interet: 50, pret: 460 },
  { annee: "22", interet: 40, pret: 470 },
  { annee: "23", interet: 35, pret: 475 },
  { annee: "24", interet: 30, pret: 480 },
  { annee: "25", interet: 25, pret: 485 },
  { annee: "26", interet: 20, pret: 490 },
  { annee: "27", interet: 18, pret: 492 },
  { annee: "28", interet: 15, pret: 495 },
  { annee: "29", interet: 5, pret: 505 },
  { annee: "30", interet: 1, pret: 509 },
];

export function Amortissement() {
  return (
    <CardParent className="grid grid-cols-1">
      <CardChild>
        <CardChildHeader
          icon={<BsGraphUpArrow size={25} />}
          title="Tableau d'amortissement"
        />
        <CardContent className="flex-1 pb-0">
          <GraphAmortissement data={chartData} />
          <TabAmortissement />
          <div className="text-xs font-medium text-gray-400 w-full px-4 lg:px-10 mt-4">
            <AccordionSeeMore
              description="Une rentabilité est considérée comme faible si elle est
                    inférieure à 4%, moyenne si elle est entre 4% et 7%, et
                    haute si elle est supérieure à 7%."
            />
          </div>
        </CardContent>
      </CardChild>
    </CardParent>
  );
}
