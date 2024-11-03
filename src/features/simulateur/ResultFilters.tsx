import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormFilterFields, FormFilterFieldsProps } from "./FormFilterFields";
import { DataType } from "./simulateur.schema";

export function ResultFilters({
  onSubmit,
  filterValues,
}: FormFilterFieldsProps) {
  return (
    <Card className="rounded-3xl py-8 lg:w-1/3 h-full">
      <CardHeader className="w-2/3 mx-auto">
        <CardTitle>Filtres</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 w-2/3 mx-auto">
        <FormFilterFields
          onSubmit={(values: DataType) => onSubmit(values)}
          filterValues={filterValues}
        />
      </CardContent>
    </Card>
  );
}
