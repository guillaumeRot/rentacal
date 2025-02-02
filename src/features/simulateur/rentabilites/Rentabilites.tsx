import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="rounded-3xl my-2 lg:my-6 mx-5">
      <CardContent className="pt-6 pb-3 px-8">
        <div className="flex flex-col space-y-2">
          <div className="flex">
            <PiSealPercentLight size={25} />
            <div className="flex items-center">
              <h1 className="ml-2 text-sm font-medium">{props.label}</h1>
            </div>
          </div>
          <div>
            <Badge
              className={`text-3xl font-medium rounded-3xl px-4 mt-1 hover:${bgColor} ${bgColor} ${textColor}`}
            >
              {props.pourcentage} %
            </Badge>
          </div>
          <div className="text-xs font-medium text-gray-400">
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
    </Card>
  );
};

export class Rentabilites extends React.Component {
  render() {
    return (
      <Card className="rounded-3xl w-full border-2 grid grid-cols-1 lg:grid-cols-3 bg-blue-50 mb-100">
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
      </Card>
    );
  }
}
