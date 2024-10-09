import { Card, CardContent } from "@/components/ui/card";
import { FormFilterFields } from "./FormFilterFields";

export const FilterFields = async () => {
  return (
    <Card className="border-4 rounded-xl py-8 w-2/4 min-w-96 mx-auto">
      <CardContent className="grid gap-4">
        <FormFilterFields />
      </CardContent>
    </Card>
  );
};
