import { Card, CardContent } from "@/components/ui/card";
import { FormFilterFields, FormFilterFieldsProps } from "../FormFilterFields";
import { DataType } from "./simulateur.schema";

export function ResultFilters({
  onSubmit,
  filterValues,
}: FormFilterFieldsProps) {
  return (
    <Card className="rounded-3xl py-8 w-1/3 h-full">
      <CardContent className="grid gap-4">
        <FormFilterFields
          onSubmit={(values: DataType) => onSubmit(values)}
          filterValues={filterValues}
        />
      </CardContent>
    </Card>
  );
}
