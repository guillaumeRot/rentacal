import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MontantPret = () => {
  return (
    <Card className="rounded-xl w-full max-h-32">
      <CardContent className="grid">
        <CardHeader>
          <CardTitle>Montant du prêt</CardTitle>
        </CardHeader>
        <CardContent className="grid text-2xl">190 000 €</CardContent>
      </CardContent>
    </Card>
  );
};
