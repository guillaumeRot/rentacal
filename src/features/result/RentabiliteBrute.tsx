import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoTrendingUpOutline } from "react-icons/io5";

export type RentabiliteBruteProps = {
  rentabiliteBrute?: string;
};

export const RentabiliteBrute = (props: RentabiliteBruteProps) => {
  return (
    <Card className="rounded-3xl w-2/4 max-h-32">
      <CardHeader>
        <CardTitle>Rentabilité brute</CardTitle>
      </CardHeader>
      <CardContent className="gap-4 text-4xl flex font-extrabold text-secondary-foreground">
        <span className="w-3/4">{props.rentabiliteBrute} %</span>
        <IoTrendingUpOutline />
      </CardContent>
    </Card>
  );
};
