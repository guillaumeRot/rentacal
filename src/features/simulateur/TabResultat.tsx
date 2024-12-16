import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MontantFormat } from "../MontantFormat";
import { ResultatGlobalType } from "./simulateur.schema";

export type TabResultatProps = {
  resultatsMensuel?: ResultatGlobalType[];
  mensualites?: number;
  cashflowBrut?: number;
};

export const TabResultat = (props: TabResultatProps) => {
  if (props.resultatsMensuel) {
    return (
      <Card className="rounded-3xl w-full h-full border-amber-800">
        <CardHeader>
          <CardTitle className="text-amber-800">
            Tableau d'amortissement
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 py-8">
          <div className="flex">
            <Badge variant="outline" className="w-1/2 mx-4 lg:mx-14">
              <span className="mx-auto text-base">
                Mensualités hors assurance:&nbsp;
                <MontantFormat value={props.mensualites} />
              </span>
            </Badge>
            <Badge variant="outline" className="w-1/2 mx-4 lg:mx-14">
              <span className="mx-auto text-base">
                Cashflow brut :&nbsp;
                <MontantFormat value={props.cashflowBrut} />
              </span>
            </Badge>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {props.resultatsMensuel.map((resultat) => (
              <AccordionItem
                key={`${resultat.annee}`}
                value={`item-${resultat.annee}`}
              >
                <AccordionTrigger>Année : {resultat.annee}</AccordionTrigger>

                <AccordionContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Année</TableHead>
                        <TableHead>Mois</TableHead>
                        <TableHead>Prêt restant</TableHead>
                        <TableHead>Intêrets</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {resultat.resultatsMensuel.map((resultatMensuel) => (
                        <TableRow
                          key={
                            resultatMensuel.annee + "_" + resultatMensuel.mois
                          }
                        >
                          <TableCell className="text-center">
                            {resultatMensuel.annee}
                          </TableCell>
                          <TableCell>{resultatMensuel.mois}</TableCell>
                          <TableCell>
                            <MontantFormat
                              value={resultatMensuel.pretRestant}
                            />
                          </TableCell>
                          <TableCell>
                            <MontantFormat
                              value={resultatMensuel.interetsPret}
                            />
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

  return (
    <Card className="rounded-3xl py-8 w-full h-full">
      <CardContent className="grid gap-4">Pas de résultats</CardContent>
    </Card>
  );
};
