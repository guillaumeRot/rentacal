"use client";

import { CardContent } from "@/components/ui/card";
import { AccordionSeeMore } from "@/features/theme/AccordionUtils";
import {
  CardChild,
  CardChildHeader,
  CardParent,
} from "@/features/theme/CardUtils";
import { BsGraphUpArrow } from "react-icons/bs";
import { AmortissementGlobalType } from "../simulateur.schema";
import { GraphAmortissement } from "./GraphAmortissement";
import { TabAmortissement } from "./TabAmortissement";

export type AmortissementProps = {
  data: AmortissementGlobalType[];
};

export const Amortissement = (props: AmortissementProps) => {
  return (
    <CardParent className="grid grid-cols-1">
      <CardChild>
        <CardChildHeader
          icon={<BsGraphUpArrow size={25} />}
          title="Tableau d'amortissement"
        />
        <CardContent className="flex-1 pb-0">
          <GraphAmortissement data={props.data} />
          <TabAmortissement data={props.data} />
          <div className="text-xs font-medium text-gray-400 w-full px-4 lg:px-10 mt-4">
            <AccordionSeeMore description="Le cashflow correspond à la différence entre vos loyers annuels et l’ensemble de vos charges : crédit, impôt sur le revenu, prélèvements sociaux, impôt foncier et charges de copropriété. L’amortissement de l’immobilier et des travaux est basé sur 80 % de leur valeur (hors terrain) et réparti sur la durée du prêt. Pour le mobilier, l’amortissement suit la durée du prêt si elle est inférieure à 10 ans, sinon il est limité à 10 % par an." />
          </div>
        </CardContent>
      </CardChild>
    </CardParent>
  );
};
