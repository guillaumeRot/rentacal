"use client";

import { Amortissement } from "./amortissement/Amortissement";
import { Banque } from "./banque/Banque";
import { Rentabilites } from "./rentabilites/Rentabilites";
import { ResultType } from "./simulateur.schema";

export type SimulationResultProps = {
  data: ResultType;
};

export default function SimulationResult(props: SimulationResultProps) {
  return (
    <>
      <h1 className="text-xl lg:text-2xl my-4">2 - Consulter vos résultats</h1>
      <Rentabilites
        rentabiliteBrute={props.data.rentabiliteBrute}
        rentabiliteNette={props.data.rentabiliteNette}
        rentabiliteNetteNette={props.data.rentabiliteNetteNette}
      />
      <Banque
        montantPret={props.data.montantPret}
        fraisBancaires={props.data.fraisBancaires}
      />
      <Amortissement
        dataDesktop={props.data.resultatsAnnuel || []}
        dataMobile={props.data.resultatsMobile || []}
      />
    </>
  );
}
