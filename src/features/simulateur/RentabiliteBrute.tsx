import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoTrendingUpOutline } from "react-icons/io5";
import { PourcentageFormat } from "../PourcentageFormat";

export type RentabiliteBruteProps = {
  rentabiliteBrute?: number;
};

export const RentabiliteBrute = (props: RentabiliteBruteProps) => {
  return (
    <Card className="rounded-3xl lg:w-2/4 max-h-32">
      <CardHeader>
        <CardTitle>Rentabilité brute</CardTitle>
      </CardHeader>
      <CardContent className="gap-4 text-2xl lg:text-4xl flex font-extrabold text-secondary-foreground">
        <PourcentageFormat value={props.rentabiliteBrute} className="w-3/4" />
        <IoTrendingUpOutline />
      </CardContent>
    </Card>
  );
};
