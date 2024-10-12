import { Card, CardContent } from "@/components/ui/card";
import {
  ResultFormFilterFields,
  ResultFormFilterFieldsProps,
} from "./ResultFormFilterFields";
import { DataType } from "./simulateur.schema";

export function ResultFilters({ onSubmit }: ResultFormFilterFieldsProps) {
  return (
    <Card className="border-2 rounded-xl py-8 w-1/3">
      <CardContent className="grid gap-4">
        <ResultFormFilterFields
          onSubmit={(values: DataType) => onSubmit(values)}
        />
      </CardContent>
    </Card>
  );
}
