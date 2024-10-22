"use client";

import { LayoutResult } from "@/components/layout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { CoutPret } from "./CoutPret";
import { FraisBancaire } from "./FraisBancaire";
import { MontantPret } from "./MontantPret";
import { RentabiliteBrute } from "./RentabiliteBrute";
import { RentabiliteNette } from "./RentabiliteNette";
import { ResultFilters } from "./ResultFilters";
import { TabResultat } from "./TabResultat";
import { calculRentabilite } from "./simulateur.action";
import { DataType } from "./simulateur.schema";

export const SimulationResult = () => {
  const queryClient = useQueryClient();

  const [filtersValues, setFiltersValues] = useState({
    prixAchat: 100000,
    dureePret: 15,
    tauxPret: 1,
    loyersTotal: 500,
    fraisNotaire: 0,
    montantTravaux: 0,
    impotsFoncier: 0,
    chargesCopro: 0,
  }); // Initialise le state

  const result = useQuery({
    queryKey: ["result"],
    queryFn: async () => {
      const res = await calculRentabilite({
        prixAchat: filtersValues.prixAchat,
        dureePret: filtersValues.dureePret,
        tauxPret: filtersValues.tauxPret,
        loyersTotal: filtersValues.loyersTotal,
        fraisNotaire: filtersValues.fraisNotaire,
        montantTravaux: filtersValues.montantTravaux,
        impotsFoncier: filtersValues.impotsFoncier,
        chargesCopro: filtersValues.chargesCopro,
      });

      const r = res?.data;
      return r;
    },
    enabled: !!filtersValues,
  });

  const handleFormSubmit = async (values: DataType) => {
    await mutation.mutateAsync(values);
  };

  const mutation = useMutation({
    mutationFn: async (values: DataType) => {
      setFiltersValues(values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return (
    <LayoutResult>
      <ResultFilters onSubmit={handleFormSubmit} filterValues={filtersValues} />
      <div id="results" className="flex flex-col gap-y-8 gap-x-3 lg:w-2/3">
        <div id="rentabilites" className="flex gap-y-8 gap-x-3 w-full">
          <RentabiliteBrute rentabiliteBrute={result.data?.rentabiliteBrute} />
          <RentabiliteNette rentabiliteNette={result.data?.rentabiliteNette} />
        </div>
        <div className="flex gap-y-8 gap-x-3 flex-col lg:flex-row">
          <MontantPret montantPret={result.data?.montantPret} />
          <FraisBancaire fraisBancaire={result.data?.fraisBancaires} />
          <CoutPret coutPret={result.data?.coutPret} />
        </div>
        <TabResultat resultatsMensuel={result.data?.resultatsMensuel} />
      </div>
    </LayoutResult>
  );
};
