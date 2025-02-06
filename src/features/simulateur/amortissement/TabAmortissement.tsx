"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
    mensuel: [
      { mois: "Janvier", interet: 250, pret: 260, pretRestant: 90000 },
      { mois: "Février", interet: 240, pret: 270, pretRestant: 80000 },
      { mois: "Mars", interet: 230, pret: 280, pretRestant: 70000 },
    ],
  },
  {
    annee: "2",
    mensuel: [
      { mois: "Janvier", interet: 220, pret: 290, pretRestant: 60000 },
      { mois: "Février", interet: 210, pret: 300, pretRestant: 50000 },
    ],
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
              <AccordionTrigger>{resultat.annee}ème année</AccordionTrigger>

              <AccordionContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-center">Mois</TableHead>
                      <TableHead className="text-center">Prêt</TableHead>
                      <TableHead className="text-center">Intêrets</TableHead>
                      <TableHead className="text-center">
                        Prêt restant
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-center">
                    {resultat.mensuel.map((resultatMensuel) => (
                      <TableRow
                        key={resultat.annee + "_" + resultatMensuel.mois}
                      >
                        <TableCell>{resultatMensuel.mois}</TableCell>
                        <TableCell>
                          <MontantFormat value={resultatMensuel.pret} />
                        </TableCell>
                        <TableCell>
                          <MontantFormat value={resultatMensuel.interet} />
                        </TableCell>
                        <TableCell>
                          <MontantFormat value={resultatMensuel.pretRestant} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
