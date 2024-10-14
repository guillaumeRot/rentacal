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

  // Fonction qui lit localStorage une seule fois à l'initialisation du state
  const getInitialValue = () => {
    const filterValues = localStorage.getItem("filterValues"); // Récupère la valeur stockée
    return filterValues ? JSON.parse(filterValues) : 0; // Parse si elle existe, sinon 0
  };

  const [filtersValues, setFiltersValues] = useState(getInitialValue); // Initialise le state

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
      <div id="results" className="flex flex-col gap-8 w-2/3">
        <div id="rentabilites" className="flex gap-8 w-full">
          <RentabiliteBrute rentabiliteBrute={result.data?.rentabiliteBrute} />
          <RentabiliteNette rentabiliteNette={result.data?.rentabiliteNette} />
        </div>
        <div className="flex gap-8">
          <MontantPret montantPret={result.data?.montantPret} />
          <FraisBancaire />
          <CoutPret />
        </div>
        <TabResultat />
      </div>
      <ResultFilters onSubmit={handleFormSubmit} filterValues={filtersValues} />
    </LayoutResult>
  );
};
