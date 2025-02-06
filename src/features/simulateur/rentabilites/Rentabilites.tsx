import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import {
  CardChild,
  CardChildHeader,
  CardParent,
} from "@/features/theme/CardUtils";
import React from "react";
import { PiSealPercentLight } from "react-icons/pi";

export type CardRentabiliteProps = {
  label: string;
  pourcentage: string;
  description: string;
  risk: string;
};

export const CardRentabilite = (props: CardRentabiliteProps) => {
  var bgColor = "bg-green-200";
  var textColor = "text-green-600";
  if (props.risk == "middle") {
    var bgColor = "bg-orange-200";
    var textColor = "text-orange-600";
  } else if (props.risk == "high") {
    var bgColor = "bg-red-200";
    var textColor = "text-red-600";
  }

  return (
    <CardChild>
      <CardChildHeader
        icon={<PiSealPercentLight size={25} />}
        title={props.label}
      />
      <CardContent className="py-3 px-8">
        <div className="flex flex-col space-y-2 items-center">
          <div>
            <Badge
              className={`text-2xl lg:text-3xl font-medium rounded-3xl px-5 py-1 mt-1 hover:${bgColor} ${bgColor} ${textColor}`}
            >
              {props.pourcentage} %
            </Badge>
          </div>
          <div className="text-xs font-medium text-gray-400 w-full">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="py-2">
                  En savoir plus...
                </AccordionTrigger>
                <AccordionContent>
                  {props.description}
                  <p className="mt-2">
                    Une rentabilité est considérée comme faible si elle est
                    inférieure à 4%, moyenne si elle est entre 4% et 7%, et
                    haute si elle est supérieure à 7%.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </CardContent>
    </CardChild>
  );
};

export class Rentabilites extends React.Component {
  render() {
    return (
      <CardParent className="grid grid-cols-1 lg:grid-cols-3">
        <CardRentabilite
          label="Rentabilité brute"
          pourcentage="6,58"
          risk="low"
          description="La rentabilité brute résulte de la division entre le prix d'achat et
          les frais annexes dü à l'achat du bien par les revenus annuel."
        />
        <CardRentabilite
          label="Rentabilité nette"
          pourcentage="6,49"
          risk="middle"
          description="La rentabilité nette résulte de la division entre le prix d'achat et
        les frais annexes dü à l'achat du bien par les revenus annuel."
        />
        <CardRentabilite
          label="Rentabilité nette-nette"
          pourcentage="5,38"
          risk="high"
          description="La rentabilité nette-nette résulte de la division entre le prix d'achat et
        les frais annexes dü à l'achat du bien par les revenus annuel."
        />
      </CardParent>
    );
  }
}
