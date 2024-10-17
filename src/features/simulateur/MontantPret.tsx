import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MontantFormat } from "../MontantFormat";

export type MontantPretProps = {
  montantPret?: number;
};

export const MontantPret = (props: MontantPretProps) => {
  return (
    <Card className="rounded-3xl w-full max-h-32">
      <CardHeader>
        <CardTitle>Montant du prêt</CardTitle>
      </CardHeader>
      <CardContent className="text-2xl">
        <MontantFormat value={props.montantPret} />
      </CardContent>
    </Card>
  );
};
