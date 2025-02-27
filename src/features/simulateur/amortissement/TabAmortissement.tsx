"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MontantFormat } from "@/features/MontantFormat";
import { AmortissementGlobalType } from "../simulateur.schema";
import { AmortissementTrigger } from "./AmortissementTrigger";
import { PieDepenses } from "./PieDepenses";
import { RepartitoinAmortissements } from "./RepartitionAmortissements";

export type DataProps = {
  data: AmortissementGlobalType[];
};

export function TabAmortissement(props: DataProps) {
  return (
    <Card className="m-5">
      <CardContent className="px-2 sm:px-6">
        <Accordion type="single" collapsible className="w-full">
          {props.data &&
            props.data.map((data) => (
              <AccordionItem key={`${data.annee}`} value={`item-${data.annee}`}>
                <AmortissementTrigger data={data} />
                <AccordionContent>
                  <Card className="rounded-3xl p-0 h-fit bg-blue-50">
                    <div className="text-center mt-6 grid grid-cols-1 lg:grid-cols-2">
                      <div className="flex flex-col px-4 lg:px-10">
                        <span className="text-center text-md font-semibold">
                          Loyers annuels
                        </span>
                        <div className="py-2">
                          <Badge className="text-lg lg:text-xl font-medium rounded-3xl px-5 py-1 mt-1 hover:bg-white bg-white text-green-600 border border-green-600">
                            <MontantFormat value={data.loyersAnnuel} />
                          </Badge>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-center text-md font-semibold">
                          Répartis sur
                        </span>
                        <div className="py-2">
                          <Badge className="text-lg lg:text-xl font-medium rounded-3xl px-5 py-1 mt-1 hover:bg-white bg-white text-blue-600 border border-blue-600">
                            {data.vacanceLocative} mois
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 pb-0 grid grid-cols-2 items-center">
                      <RepartitoinAmortissements data={data} />
                      <PieDepenses data={data} />
                    </div>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
