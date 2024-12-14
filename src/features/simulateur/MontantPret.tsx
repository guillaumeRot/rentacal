import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MontantFormat } from "../MontantFormat";

export type MontantPretProps = {
  montantPret?: number;
};

export const MontantPret = (props: MontantPretProps) => {
  return (
    <Card className="rounded-3xl w-full max-h-32 border-blue-600">
      <CardHeader>
        <CardTitle className="text-blue-600">Montant du prêt</CardTitle>
      </CardHeader>
      <CardContent className="text-xl lg:text-2xl font-medium">
        <MontantFormat value={props.montantPret} />
      </CardContent>
    </Card>
  );
};
