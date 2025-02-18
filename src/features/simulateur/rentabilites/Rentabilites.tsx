import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { PourcentageFormat } from "@/features/PourcentageFormat";
import { AccordionSeeMore } from "@/features/theme/AccordionUtils";
import {
  CardChild,
  CardChildHeader,
  CardParent,
} from "@/features/theme/CardUtils";
import { PiSealPercentLight } from "react-icons/pi";

export type RentabilitesProps = {
  rentabiliteBrute?: number;
  rentabiliteNette?: number;
  rentabiliteNetteNette?: number;
};

export type CardRentabiliteProps = {
  label: string;
  pourcentage: number;
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
              <PourcentageFormat value={props.pourcentage} />
            </Badge>
          </div>
          <div className="text-xs font-medium text-gray-400 w-full">
            <AccordionSeeMore
              description="Une rentabilité est considérée comme faible si elle est
                    inférieure à 4%, moyenne si elle est entre 4% et 7%, et
                    haute si elle est supérieure à 7%."
            />
          </div>
        </div>
      </CardContent>
    </CardChild>
  );
};

export const Rentabilites = (props: RentabilitesProps) => {
  return (
    <CardParent className="grid grid-cols-1 lg:grid-cols-3">
      <CardRentabilite
        label="Rentabilité brute"
        pourcentage={props.rentabiliteBrute || 0}
        risk="low"
        description="La rentabilité brute résulte de la division entre le prix d'achat et
          les frais annexes dü à l'achat du bien par les revenus annuel."
      />
      <CardRentabilite
        label="Rentabilité nette"
        pourcentage={props.rentabiliteNette || 0}
        risk="middle"
        description="La rentabilité nette résulte de la division entre le prix d'achat et
        les frais annexes dü à l'achat du bien par les revenus annuel."
      />
      <CardRentabilite
        label="Rentabilité nette-nette"
        pourcentage={props.rentabiliteNetteNette || 0}
        risk="high"
        description="La rentabilité nette-nette résulte de la division entre le prix d'achat et
        les frais annexes dü à l'achat du bien par les revenus annuel."
      />
    </CardParent>
  );
};
