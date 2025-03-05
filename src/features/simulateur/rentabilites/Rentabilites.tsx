import { Badge } from "@/components/ui/badge";
import { CardContent } from "@/components/ui/card";
import { PourcentageFormat } from "@/features/PourcentageFormat";
import { AccordionSeeMore } from "@/features/theme/AccordionUtils";
import { CardChild, CardChildHeader } from "@/features/theme/CardUtils";
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
};

export const CardRentabilite = (props: CardRentabiliteProps) => {
  var risk = "";
  if (props.pourcentage > 7) {
    risk = "low";
  } else if (props.pourcentage < 4) {
    risk = "high";
  } else if (props.pourcentage < 7) {
    risk = "middle";
  }

  var bgColor = "bg-white";
  var textColor = "text-gray-600";
  var borderColor = "border-gray-600";
  if (risk == "low") {
    bgColor = "bg-green-200";
    textColor = "text-green-600";
    borderColor = "border-green-600";
  } else if (risk == "middle") {
    bgColor = "bg-orange-200";
    textColor = "text-orange-600";
    borderColor = "border-orange-600";
  } else if (risk == "high") {
    bgColor = "bg-red-200";
    textColor = "text-red-600";
    borderColor = "border-red-600";
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
              className={`text-2xl lg:text-3xl font-medium rounded-3xl px-5 py-1 mt-1 hover:${bgColor} ${bgColor} ${textColor} border ${borderColor}`}
            >
              <PourcentageFormat value={props.pourcentage} />
            </Badge>
          </div>
          <div className="text-xs font-medium text-gray-400 w-full">
            <AccordionSeeMore description={props.description} />
          </div>
        </div>
      </CardContent>
    </CardChild>
  );
};

export const Rentabilites = (props: RentabilitesProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10">
      <CardRentabilite
        label="Rentabilité brute"
        pourcentage={props.rentabiliteBrute || 0}
        description="Le rapport entre les loyers annuels et le prix d’achat du bien, avant toute charge. Un risque est considéré élevé si elle est inférieure à 4 %, modéré entre 4 % et 7 %, et faible au-delà de 7 %."
      />
      <CardRentabilite
        label="Rentabilité nette"
        pourcentage={props.rentabiliteNette || 0}
        description="La rentabilité après déduction des charges (foncier, copropriété). Un risque est élevé sous 4 %, modéré entre 4 % et 7 %, et faible au-delà de 7 %."
      />
      <CardRentabilite
        label="Rentabilité nette-nette"
        pourcentage={props.rentabiliteNetteNette || 0}
        description="La rentabilité après impôts et prélèvements fiscaux. Un risque est élevé sous 4 %, modéré entre 4 % et 7 %, et faible au-delà de 7 %."
      />
    </div>
  );
};
