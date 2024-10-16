import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type MontantPretProps = {
  montantPret?: number;
};

export const MontantPret = (props: MontantPretProps) => {
  return (
    <Card className="rounded-xl w-full max-h-32">
      <CardHeader>
        <CardTitle>Montant du prêt</CardTitle>
      </CardHeader>
      <CardContent className="text-2xl">{props.montantPret} €</CardContent>
    </Card>
  );
};
