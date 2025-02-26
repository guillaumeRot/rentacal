"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MontantFormat } from "@/features/MontantFormat";
import { CardChildHeader } from "@/features/theme/CardUtils";
import { BsCalendar3 } from "react-icons/bs";
import { Component } from "./PieDepenses";

export type DataProps = {
  data: {
    annee: string;
    interet: number;
    pret: number;
  }[];
};

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   pret: {
//     label: "Prêt",
//     color: "hsl(var(--chart-2))",
//   },
//   interet: {
//     label: "Intêrets",
//     color: "hsl(var(--chart-1))",
//   },
// } satisfies ChartConfig;

const datas = [
  {
    annee: "1",
    loyersAnnuel: 8000,
    vacanceLocative: 10,
    pret: 300,
    ir: 100,
    ps: 80,
    pretRestant: 90000,
    foncier: 1000,
    copro: 500,
    amortissementImmo: 500,
    amortissementTravaux: 100,
    amortissementMobilier: 50,
    cashflow: 500,
  },
  {
    annee: "2",
    loyersAnnuel: 8000,
    vacanceLocative: 10,
    pret: 280,
    ir: 100,
    ps: 80,
    pretRestant: 80000,
    foncier: 1000,
    copro: 500,
    amortissementImmo: 500,
    amortissementTravaux: 100,
    amortissementMobilier: 50,
    cashflow: 500,
  },
];

export function TabAmortissement() {
  return (
    <Card className="m-5">
      <CardContent className="px-2 sm:px-6">
        <Accordion type="single" collapsible className="w-full">
          {datas.map((resultat) => (
            <AccordionItem
              key={`${resultat.annee}`}
              value={`item-${resultat.annee}`}
            >
              <AccordionTrigger className="hover:no-underline cursor-pointer">
                <div className="flex flex-raw items-center w-full">
                  <BsCalendar3 size={20} />
                  <div className="grid grid-cols-2 items-center w-full">
                    <span className="text-left ml-3 hover:underline">
                      {resultat.annee}ème année
                    </span>
                    <div className="grid grid-cols-2 items-center">
                      <span className="text-md font-semibold text-right pr-3">
                        Cashflow:
                      </span>
                      <div className="py-2">
                        <Badge className="text-sm lg:text-md font-medium rounded-3xl px-5 py-1 mt-1 hover:bg-green-200 bg-green-200 text-green-600 border border-green-600">
                          <MontantFormat value={resultat.cashflow} />
                          &nbsp;/ an
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent>
                <Card className="rounded-3xl p-0 h-fit bg-blue-50">
                  <div className="text-center mt-6 grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col px-4 lg:px-10">
                      <span className="text-center text-md font-semibold">
                        Loyers annuels
                      </span>
                      <div className="py-2">
                        <Badge className="text-lg lg:text-xl font-medium rounded-3xl px-5 py-1 mt-1 hover:bg-green-200 bg-green-200 text-green-600 border border-green-600">
                          <MontantFormat value={resultat.loyersAnnuel} />
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-center text-md font-semibold">
                        Répartis sur
                      </span>
                      <div className="py-2">
                        <Badge className="text-lg lg:text-xl font-medium rounded-3xl px-5 py-1 mt-1 hover:bg-blue-50 bg-blue-50 text-blue-600 border border-blue-600">
                          {resultat.vacanceLocative} mois
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pb-0 grid grid-cols-2 items-center">
                    <Card className="rounded-3xl px-4 lg:px-8 m-4 h-fit text-sm lg:text-md">
                      <CardChildHeader title="Répartition des dépenses" />
                      <CardContent className="py-6">
                        <TableHeader>
                          <TableRow>
                            <TableHead />
                            <TableHead className="text-center">
                              Taux annuel
                            </TableHead>
                            <TableHead className="text-center">
                              Montant
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">
                              Amortissement immobilier
                            </TableCell>
                            <TableCell className="text-center">4 %</TableCell>
                            <TableCell className="text-center">500 €</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Amortissement travaux
                            </TableCell>
                            <TableCell className="text-center">5 %</TableCell>
                            <TableCell className="text-center">300 €</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">
                              Amortissement mobilier
                            </TableCell>
                            <TableCell className="text-center">10 %</TableCell>
                            <TableCell className="text-center">50 €</TableCell>
                          </TableRow>
                        </TableBody>
                        <TableFooter>
                          <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell className="text-center">850 €</TableCell>
                          </TableRow>
                        </TableFooter>
                      </CardContent>
                    </Card>
                    <Component />
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
