import { Card, CardContent } from "@/components/ui/card";
import { FormFilterFields, FormFilterFieldsProps } from "../FormFilterFields";
import { DataType } from "./simulateur.schema";

export function ResultFilters({
  onSubmit,
  filterValues,
}: FormFilterFieldsProps) {
  return (
    <Card className="border-2 rounded-xl py-8 w-1/3">
      <CardContent className="grid gap-4">
        <FormFilterFields
          onSubmit={(values: DataType) => onSubmit(values)}
          filterValues={filterValues}
        />
      </CardContent>
    </Card>
  );
}
