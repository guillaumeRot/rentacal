import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type RentabiliteNetteProps = {
  rentabiliteNette?: number;
};

export const RentabiliteNette = (props: RentabiliteNetteProps) => {
  return (
    <Card className="border-2 rounded-xl w-2/4 max-h-32">
      <CardHeader>
        <CardTitle>Rentabilité Nette</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 text-4xl">
        {props.rentabiliteNette} %
      </CardContent>
    </Card>
  );
};
