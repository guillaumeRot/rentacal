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
          <div>
            <Table className="w-full">
              {/* <TableHeader>
              <TableRow>
                <TableHead>Année</TableHead>
                <TableHead>Mois</TableHead>
                <TableHead>Prêt restant</TableHead>
                <TableHead>Intêrets</TableHead>
              </TableRow>
            </TableHeader> */}

              <TableBody className="w-full">
                {props.resultatsGlobal.map((resultat) => (
                  // <TableRow>
                  <Collapsible
                    id={resultat.annee + "_" + resultat.mois}
                    key={resultat.annee + "_" + resultat.mois}
                    className="w-full"
                  >
                    <TableRow className="w-full">
                      <TableCell className="w-full col-span-full">
                        <CollapsibleTrigger className="w-full">
                          <div className="w-full flex flex-row">
                            <div className="items-center w-1/3">
                              Année : {resultat.annee}
                            </div>
                            <div className="w-1/3 items-center">
                              Intêrets remboursés: xxx €
                            </div>
                            <div className="w-1/3 items-center">
                              Montant du prêt restant: xxx €
                            </div>
                          </div>
                        </CollapsibleTrigger>
                      </TableCell>
                    </TableRow>

                    <CollapsibleContent className="w-full">
                      <Table>
                        <TableBody>
                          {resultat.resultatsMensuel.map((resultatMensuel) => (
                            <TableRow
                              key={
                                resultatMensuel.annee +
                                "_" +
                                resultatMensuel.mois +
                                "_row"
                              }
                            >
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
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </TableBody>
            </Table>
          </div>
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
