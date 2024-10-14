import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type RentabiliteBruteProps = {
  rentabiliteBrute?: string;
};

export const RentabiliteBrute = (props: RentabiliteBruteProps) => {
  return (
    <Card className="rounded-xl w-2/4 max-h-32">
      <CardHeader>
        <CardTitle>Rentabilité brute</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 text-4xl font-extrabold text-secondary-foreground">
        {props.rentabiliteBrute} %
      </CardContent>
    </Card>
  );
};
