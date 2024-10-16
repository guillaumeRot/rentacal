import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoWalletOutline } from "react-icons/io5";

export type RentabiliteNetteProps = {
  rentabiliteNette?: string;
};

export const RentabiliteNette = (props: RentabiliteNetteProps) => {
  return (
    <Card className="rounded-3xl w-2/4 max-h-32">
      <CardHeader>
        <CardTitle>Rentabilité Nette</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 text-4xl flex font-extrabold text-secondary-foreground">
        <span className="w-3/4">{props.rentabiliteNette} %</span>
        <IoWalletOutline />
      </CardContent>
    </Card>
  );
};
