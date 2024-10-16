import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type CoutPretProps = {
  coutPret?: string;
};

export const CoutPret = (props: CoutPretProps) => {
  return (
    <Card className="rounded-3xl w-full max-h-32">
      <CardHeader>
        <CardTitle>Coût du prêt</CardTitle>
      </CardHeader>
      <CardContent className="grid text-2xl">{props.coutPret} €</CardContent>
    </Card>
  );
};
