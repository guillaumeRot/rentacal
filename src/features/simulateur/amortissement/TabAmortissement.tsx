"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MontantFormat } from "@/features/MontantFormat";

// export type DataProps = {
//   data: {
//     annee: string;
//     interet: number;
//     pret: number;
//   }[];
// };

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
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <Accordion type="single" collapsible className="w-full">
          {datas.map((resultat) => (
            <AccordionItem
              key={`${resultat.annee}`}
              value={`item-${resultat.annee}`}
            >
              <AccordionTrigger>
                <span>{resultat.annee}ème année</span>
                <span> | Cashflow: {resultat.cashflow} € / an</span>
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
                  <div className="flex-1 pb-0 grid grid-cols-1 lg:grid-cols-2 items-center">
                    <Card className="rounded-3xl p-4 lg:p-10 m-4 grid grid-cols-2 h-fit text-sm lg:text-md">
                      {/* TODO: Faire un pie chart */}
                      <span className="text-center py-2">
                        Amortissement immobilier
                      </span>
                      <span className="text-center py-2">
                        {resultat.amortissementImmo}
                      </span>
                      <span className="text-center py-2">
                        Amortissement travaux
                      </span>
                      <span className="text-center py-2">
                        {resultat.amortissementTravaux}
                      </span>
                      <span className="text-center py-2">
                        Amortissement mobilier
                      </span>
                      <span className="text-center py-2">
                        {resultat.amortissementMobilier}
                      </span>
                      <span className="text-center pb-2 pt-6 font-semibold">
                        Amortissement total
                      </span>
                      <span className="text-center pb-2 pt-6 font-semibold">
                        <MontantFormat
                          value={
                            resultat.amortissementImmo +
                            resultat.amortissementTravaux +
                            resultat.amortissementMobilier
                          }
                        />
                      </span>
                    </Card>
                    <Card className="rounded-3xl p-4 lg:p-10 m-4 grid grid-cols-2 h-fit text-sm lg:text-md">
                      <span className="text-center py-2">Crédit</span>
                      <span className="text-center py-2">{resultat.pret}</span>
                      <span className="text-center py-2">
                        Impots sur le revenu
                      </span>
                      <span className="text-center py-2">{resultat.ir}</span>
                      <span className="text-center py-2">
                        Prélèvements sociaux
                      </span>
                      <span className="text-center py-2">{resultat.ps}</span>
                      <span className="text-center pb-2 pt-6 font-semibold">
                        Total des dépenses
                      </span>
                      <span className="text-center pb-2 pt-6 font-semibold">
                        <MontantFormat
                          value={resultat.pret + resultat.ir + resultat.ps}
                        />
                      </span>
                    </Card>
                  </div>
                </Card>
                {/* <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center">Année</TableHead>
                      <TableHead className="text-center">Loyers</TableHead>
                      <TableHead className="text-center">Crédit</TableHead>
                      <TableHead className="text-center">Crédit</TableHead>
                      <TableHead className="text-center">Intêrets</TableHead>
                      <TableHead className="text-center">
                        Prêt restant
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-center">
                    <TableRow key={resultat.annee}>
                      <TableCell>{resultat.annee}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table> */}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
