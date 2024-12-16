import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MontantFormat } from "../MontantFormat";

export type CoutPretProps = {
  coutPret?: number;
};

export const CoutPret = (props: CoutPretProps) => {
  return (
    <Card className="rounded-3xl w-full max-h-32 border-blue-600">
      <CardHeader>
        <CardTitle className="text-blue-600">Coût du prêt</CardTitle>
      </CardHeader>
      <CardContent className="grid text-xl lg:text-2xl font-medium">
        <MontantFormat value={props.coutPret} />
      </CardContent>
    </Card>
  );
};
