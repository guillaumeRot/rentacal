import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { PiSealPercentLight } from "react-icons/pi";

export type CardRentabiliteProps = {
  label: string;
  pourcentage: string;
};

export const CardRentabilite = (props: CardRentabiliteProps) => {
  return (
    <Card className="rounded-3xl my-6 mx-14">
      <CardContent className="py-2 px-4">
        <div className="p-4 flex flex-raw space-x-10">
          <div className="flex items-center">
            <PiSealPercentLight size={50} />
          </div>
          <div className="space-y-3">
            <h1 className="text-lg">{props.label}</h1>
            <div className="text-3xl font-medium">{props.pourcentage} %</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export class Rentabilites extends React.Component {
  render() {
    return (
      <Card className="rounded-3xl w-full border-2 grid grid-cols-2">
        <CardRentabilite label="Rentabilité brute" pourcentage="6,58" />
        <CardRentabilite label="Rentabilité nette" pourcentage="6,49" />
      </Card>
    );
  }
}
