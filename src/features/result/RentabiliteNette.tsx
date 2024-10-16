import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoWalletOutline } from "react-icons/io5";
import { PourcentageFormat } from "../PourcentageFormat";

export type RentabiliteNetteProps = {
  rentabiliteNette?: number;
};

export const RentabiliteNette = (props: RentabiliteNetteProps) => {
  return (
    <Card className="rounded-3xl w-2/4 max-h-32">
      <CardHeader>
        <CardTitle>Rentabilité Nette</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 text-4xl flex font-extrabold text-secondary-foreground">
        <PourcentageFormat value={props.rentabiliteNette} className="w-3/4" />
        <IoWalletOutline />
      </CardContent>
    </Card>
  );
};
