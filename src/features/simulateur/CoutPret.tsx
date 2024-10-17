import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MontantFormat } from "../MontantFormat";

export type CoutPretProps = {
  coutPret?: number;
};

export const CoutPret = (props: CoutPretProps) => {
  return (
    <Card className="rounded-3xl w-full max-h-32">
      <CardHeader>
        <CardTitle>Coût du prêt</CardTitle>
      </CardHeader>
      <CardContent className="grid text-2xl">
        <MontantFormat value={props.coutPret} />
      </CardContent>
    </Card>
  );
};
