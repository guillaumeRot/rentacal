import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MontantFormat } from "../MontantFormat";

export type FraisBancaireProps = {
  fraisBancaire?: number;
};

export const FraisBancaire = (props: FraisBancaireProps) => {
  return (
    <Card className="rounded-3xl w-full max-h-32">
      <CardHeader>
        <CardTitle>Frais bancaires</CardTitle>
      </CardHeader>
      <CardContent className="grid text-2xl">
        <MontantFormat value={props.fraisBancaire} />
      </CardContent>
    </Card>
  );
};
