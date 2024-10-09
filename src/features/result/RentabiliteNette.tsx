import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const RentabiliteNette = async () => {
  return (
    <Card className="border-2 rounded-xl w-2/4 max-h-32">
      <CardHeader>
        <CardTitle>Rentabilité brute</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 text-4xl">10,8 %</CardContent>
    </Card>
  );
};
