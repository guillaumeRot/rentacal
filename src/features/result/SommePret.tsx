import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const SommePret = () => {
  return (
    <Card className="border-2 rounded-xl py-8 w-full max-h-32">
      <CardContent className="grid gap-4 flex h-full">
        <div className="w-1/3 h-full">
          <CardTitle>Montant du prêt hors interêts</CardTitle>
          <h4 className="mt-4 text-2xl">190 000 €</h4>
        </div>
        <Separator orientation="vertical" />
        <div className="w-1/3 h-full">
          <CardTitle>Frais bancaires</CardTitle>
          <h4 className="mt-4 text-2xl">57 000 €</h4>
        </div>
        <Separator orientation="vertical" />
        <div className="w-1/3 h-full">
          <CardTitle>Valeur du prêt</CardTitle>
          <h4 className="mt-4 text-2xl">247 000 €</h4>
        </div>
      </CardContent>
    </Card>
  );
};
