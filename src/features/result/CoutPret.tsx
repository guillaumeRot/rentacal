import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const CoutPret = () => {
  return (
    <Card className="rounded-xl w-full max-h-32">
      <CardContent className="grid">
        <CardHeader>
          <CardTitle>Coût du prêt</CardTitle>
        </CardHeader>
        <CardContent className="grid text-2xl">247 000 €</CardContent>
      </CardContent>
    </Card>
  );
};
