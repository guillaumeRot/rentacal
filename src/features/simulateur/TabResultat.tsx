import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MontantFormat } from "../MontantFormat";
import { ResultatMensuelType } from "./simulateur.schema";

export type TabResultatProps = {
  resultatsMensuel?: ResultatMensuelType[];
};

export const TabResultat = (props: TabResultatProps) => {
  if (props.resultatsMensuel) {
    return (
      <Card className="rounded-3xl py-8 w-full h-full">
        <CardContent className="grid gap-4">
          <Table>
            <TableHeader>
              <TableRow>
                {/* <TableHead /> */}
                <TableHead>Année</TableHead>
                <TableHead>Mois</TableHead>
                <TableHead>Prêt restant</TableHead>
                <TableHead>Intêrets</TableHead>
                <TableHead>Mensualité</TableHead>
                <TableHead>Résultat</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {props.resultatsMensuel.map((resultat) => (
                // <Collapsible id={resultat.annee + "_" + resultat.mois} asChild>
                //   <>
                <TableRow key={resultat.annee + "_" + resultat.mois}>
                  {/* <CollapsibleTrigger>
                    <TableCell>test</TableCell>
                  </CollapsibleTrigger> */}
                  <TableCell className="text-center">
                    {resultat.annee}
                  </TableCell>
                  <TableCell>{resultat.mois}</TableCell>
                  <TableCell>
                    <MontantFormat value={resultat.pretRestant} />
                  </TableCell>
                  <TableCell>
                    <MontantFormat value={resultat.interetsPret} />
                  </TableCell>
                  <TableCell>
                    <MontantFormat value={resultat.mensualite} />
                  </TableCell>
                  <TableCell>
                    <MontantFormat value={resultat.resultat} />
                  </TableCell>
                </TableRow>
                //     <CollapsibleContent>
                //       <TableRow key={resultat.annee + "_" + resultat.mois}>
                //         <TableCell>{resultat.annee}</TableCell>
                //         <TableCell>{resultat.mois}</TableCell>
                //         <TableCell>{resultat.pretRestant} €</TableCell>
                //         <TableCell>{resultat.interetsPret} €</TableCell>
                //         <TableCell>{resultat.Mensualite} €</TableCell>
                //         <TableCell>{resultat.resultat} €</TableCell>
                //       </TableRow>
                //     </CollapsibleContent>
                //   </>
                // </Collapsible>
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
            {/* {props.resultatsMensuel.map((resultat) => (
              <TableRow key={resultat.annee + "_" + resultat.mois}>
                <TableCell>{resultat.annee}</TableCell>
                <TableCell>{resultat.mois}</TableCell>
                <TableCell>{resultat.pretRestant}</TableCell>
                <TableCell>{resultat.interetsPret}</TableCell>
                <TableCell>{resultat.pretAvecInterets}</TableCell>
                <TableCell>{resultat.Mensualite}</TableCell>
                <TableCell>{resultat.resultat}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
