import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const SommePret = async () => {
  return (
    <Card className="border-2 rounded-xl py-8 w-full max-h-32">
      <CardContent className="grid gap-4 flex h-full">
        <div className="w-1/3">
          <CardTitle>Montant du prêt hors interêts</CardTitle>
          <CardContent className="mt-4 text-2xl">190 000 €</CardContent>
        </div>
        <Separator orientation="vertical" />
        <div className="w-1/3">
          <CardTitle>Frais bancaires</CardTitle>
          <CardContent className="mt-4 text-2xl">57 000 €</CardContent>
        </div>
        <Separator orientation="vertical" />
        <div className="w-1/3">
          <CardTitle>Valeur du prêt</CardTitle>
          <CardContent className="mt-4 text-2xl">247 000 €</CardContent>
        </div>
      </CardContent>
    </Card>
  );
};
