"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MontantFormat } from "@/features/MontantFormat";
import { PourcentageFormat } from "@/features/PourcentageFormat";
import { CardChildHeader } from "@/features/theme/CardUtils";
import { AmortissementGlobalType } from "../simulateur.schema";

export type DataProps = {
  data: AmortissementGlobalType;
};

export function RepartitoinAmortissements(props: DataProps) {
  return (
    <Card className="rounded-3xl px-4 lg:px-6 m-4 h-fit text-sm lg:text-md">
      <CardChildHeader title="Répartition des amortissements" />
      <CardContent className="py-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead />
              <TableHead className="text-center">Taux annuel</TableHead>
              <TableHead className="text-center">Montant</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Amortissement immobilier
              </TableCell>
              <TableCell className="text-center">
                <PourcentageFormat
                  value={props.data.amortissementImmo.taux * 100}
                />
              </TableCell>
              <TableCell className="text-center">
                <MontantFormat value={props.data.amortissementImmo.montant} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Amortissement travaux
              </TableCell>
              <TableCell className="text-center">
                <PourcentageFormat
                  value={props.data.amortissementTravaux.taux * 100}
                />
              </TableCell>
              <TableCell className="text-center">
                <MontantFormat
                  value={props.data.amortissementTravaux.montant}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Amortissement mobilier
              </TableCell>
              <TableCell className="text-center">
                <PourcentageFormat
                  value={props.data.amortissementMobilier.taux * 100}
                />
              </TableCell>
              <TableCell className="text-center">
                <MontantFormat
                  value={props.data.amortissementMobilier.montant}
                />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell className="text-center">
                <MontantFormat
                  value={
                    props.data.amortissementImmo.montant +
                    props.data.amortissementTravaux.montant +
                    props.data.amortissementMobilier.montant
                  }
                />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
