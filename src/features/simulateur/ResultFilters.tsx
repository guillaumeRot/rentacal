import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FormFilterFieldsProps } from "./FormFilterFields";
import { FormFilterFieldsAchat } from "./FormFilterFieldsAchat";
import { FormFilterFieldsFinancement } from "./FormFilterFieldsFinancement";
import { FormFilterFieldsRevenusDepenses } from "./FormFilterFieldsRevenusDepenses";
import { FormFilterFieldsTravauxMobilier } from "./FormFilterFieldsTravauxMobilier";
import { DataType } from "./simulateur.schema";

export function ResultFilters({
  onSubmit,
  filterValues,
}: FormFilterFieldsProps) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="filtres"
      className="w-full h-full"
    >
      <AccordionItem value="filtres" className="h-full">
        <AccordionTrigger>Afficher les filtres</AccordionTrigger>
        <AccordionContent className="h-full">
          <Card className="rounded-3xl p-5 h-full">
            <CardContent className="flex flex-col lg:flex-row gap-y-4 gap-x-3 p-0 h-full">
              <Card className="rounded-3xl h-full flex-grow mx-auto">
                <CardHeader>
                  <CardTitle>Achat</CardTitle>
                </CardHeader>
                <CardContent className="grid">
                  <FormFilterFieldsAchat
                    onChange={(values: DataType) => onSubmit(values)}
                    filterValues={filterValues}
                  />
                </CardContent>
              </Card>
              <Card className="rounded-3xl h-full flex-grow mx-auto">
                <CardHeader>
                  <CardTitle>Revenus et dépenses</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <FormFilterFieldsRevenusDepenses
                    onChange={(values: DataType) => onSubmit(values)}
                    filterValues={filterValues}
                  />
                </CardContent>
              </Card>
              <Card className="rounded-3xl h-full flex-grow mx-auto">
                <CardHeader>
                  <CardTitle>Travaux et mobilier</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4 h-full">
                  <FormFilterFieldsTravauxMobilier
                    onChange={(values: DataType) => onSubmit(values)}
                    filterValues={filterValues}
                  />
                </CardContent>
              </Card>
              <Card className="rounded-3xl h-full flex-grow mx-auto">
                <CardHeader>
                  <CardTitle>Financement</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <FormFilterFieldsFinancement
                    onChange={(values: DataType) => onSubmit(values)}
                    filterValues={filterValues}
                  />
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
