import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { MontantFormat } from "../MontantFormat";
import { ResultatGlobalType } from "./simulateur.schema";

export type TabResultatProps = {
  resultatsGlobal?: ResultatGlobalType[];
  mensualites?: number;
  cashflowBrut?: number;
};

export const TabResultat = (props: TabResultatProps) => {
  const [openRows, setOpenRows] = useState<{ [key: number]: boolean }>({});

  console.log("TEST GUI 10:", props.resultatsGlobal);

  // const toggleRow = (key: number) => {
  //   // console.log("TEST GUI 1:", key);
  //   // console.log("TEST GUI 2:", openRows[key]);

  //   // Étape 1: Réinitialiser toutes les valeurs à false
  //   setOpenRows((prev: { [key: number]: boolean }) => {
  //     const newRows = Object.keys(prev).reduce((acc, rowKey) => {
  //       acc[+rowKey] = false; // Met toutes les valeurs à false
  //       return acc;
  //     }, {} as { [key: number]: boolean });

  //     // Étape 2: Mettre à true la ligne correspondant à la clé `key`
  //     newRows[key] = true;
  //     return newRows;
  //   });
  // };

  // useEffect(() => {
  //   // console.log("TEST GUI 4:", openRows);
  // }, [openRows]);

  if (props.resultatsGlobal) {
    return (
      <Card className="rounded-3xl py-8 w-full h-full">
        <CardContent className="grid gap-4">
          <div className="flex">
            <Badge variant="outline" className="w-1/2 mx-4 lg:mx-14">
              <span className="mx-auto text-base">
                Mensualités :&nbsp;
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
              {props.resultatsGlobal.map((resultat) => (
                // <TableRow>
                <Collapsible
                  id={resultat.annee + "_" + resultat.mois}
                  key={resultat.annee + "_" + resultat.mois}
                  asChild
                >
                  <>
                    <TableRow>
                      <TableCell>
                        <CollapsibleTrigger>
                          {resultat.annee}
                        </CollapsibleTrigger>
                      </TableCell>
                      <TableCell>{resultat.mois}</TableCell>
                      <TableCell>
                        <MontantFormat value={resultat.pretRestant} />
                      </TableCell>
                      <TableCell>
                        <MontantFormat value={resultat.interetsPret} />
                      </TableCell>
                    </TableRow>
                    <CollapsibleContent>
                      <TableRow>
                        <TableCell colSpan={4}>TEST GUI</TableCell>
                      </TableRow>
                    </CollapsibleContent>
                  </>
                </Collapsible>
                // </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-3xl py-8 w-full h-full">
      <CardContent className="grid gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Année</TableHead>
              <TableHead>Mois</TableHead>
              <TableHead>Prêt restant</TableHead>
              <TableHead>Intêrets</TableHead>
              <TableHead>Prêt avec intêrets</TableHead>
              <TableHead>Mensualité</TableHead>
              <TableHead>Résultat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow key={"no-results"}>
              <TableCell>Pas de résultats</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
