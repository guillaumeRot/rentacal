import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type FraisBancaireProps = {
  fraisBancaire?: string;
};

export const FraisBancaire = (props: FraisBancaireProps) => {
  return (
    <Card className="rounded-xl w-full max-h-32">
      <CardHeader>
        <CardTitle>Frais bancaires</CardTitle>
      </CardHeader>
      <CardContent className="grid text-2xl">
        {props.fraisBancaire} €
      </CardContent>
    </Card>
  );
};
