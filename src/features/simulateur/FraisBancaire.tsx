import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MontantFormat } from "../MontantFormat";

export type FraisBancaireProps = {
  fraisBancaire?: number;
};

export const FraisBancaire = (props: FraisBancaireProps) => {
  return (
    <Card className="rounded-3xl w-full max-h-32 border-blue-600">
      <CardHeader>
        <CardTitle className="text-blue-600">Frais bancaires</CardTitle>
      </CardHeader>
      <CardContent className="grid text-xl lg:text-2xl font-medium">
        <MontantFormat value={props.fraisBancaire} />
      </CardContent>
    </Card>
  );
};
