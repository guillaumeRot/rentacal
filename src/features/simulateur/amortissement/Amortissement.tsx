"use client";

import { CardContent } from "@/components/ui/card";
import { AccordionSeeMore } from "@/features/theme/AccordionUtils";
import {
  CardChild,
  CardChildHeader,
  CardParent,
} from "@/features/theme/CardUtils";
import { BsGraphUpArrow } from "react-icons/bs";
import { AmortissementType } from "../simulateur.schema";
import { GraphAmortissement } from "./GraphAmortissement";
import { TabAmortissement } from "./TabAmortissement";

export type AmortissementProps = {
  resultatAnnuel: AmortissementType[];
  // resultatMensuel?: AmortissementType[];
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
          <GraphAmortissement data={props.resultatAnnuel} />
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
};
