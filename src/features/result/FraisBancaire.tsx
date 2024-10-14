import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const FraisBancaire = () => {
  return (
    <Card className="rounded-xl w-full max-h-32">
      <CardContent className="grid">
        <CardHeader>
          <CardTitle>Frais bancaires</CardTitle>
        </CardHeader>
        <CardContent className="grid text-2xl">TODO €</CardContent>
      </CardContent>
    </Card>
  );
};
