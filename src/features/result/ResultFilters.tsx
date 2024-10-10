import { Card, CardContent } from "@/components/ui/card";
import { FormFilterFields } from "../simulator/FormFilterFields";

export const ResultFilters = () => {
  return (
    <Card className="border-2 rounded-xl py-8 w-1/3">
      <CardContent className="grid gap-4">
        <FormFilterFields />
      </CardContent>
    </Card>
  );
};
