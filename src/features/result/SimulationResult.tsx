"use client";

import { LayoutResult } from "@/components/layout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { RentabiliteBrute } from "./RentabiliteBrute";
import { RentabiliteNette } from "./RentabiliteNette";
import { ResultFilters } from "./ResultFilters";
import { SommePret } from "./SommePret";
import { TabResultat } from "./TabResultat";
import { calculRentabilite } from "./simulateur.action";
import { DataType } from "./simulateur.schema";

export const SimulationResult = () => {
  const queryClient = useQueryClient();

  const [filtersValues, setFiltersValues] = useState({
    prixAchat: 0,
    dureePret: 0,
    tauxPret: 0,
    loyersTotal: 0,
  });

  useEffect(() => {
    // Au chargement, récupérer le nombre stocké dans localStorage
    const prixAchat = localStorage.getItem("prixAchat");
    const dureePret = localStorage.getItem("dureePret");
    const tauxPret = localStorage.getItem("tauxPret");
    const loyersTotal = localStorage.getItem("loyersTotal");

    console.log("TEST GUI 2 - useEffect:", prixAchat);

    if (prixAchat && dureePret && tauxPret && loyersTotal) {
      // setPrixAchat(parseInt(prixAchat, 10));
      setFiltersValues({
        prixAchat: parseInt(prixAchat, 10),
        dureePret: parseInt(dureePret, 10),
        tauxPret: parseInt(tauxPret, 10),
        loyersTotal: parseInt(loyersTotal, 10),
      });

      console.log("TEST GUI 3 - useEffect:", prixAchat);
    }
  }, []);

  const result = useQuery({
    queryKey: ["result"],
    queryFn: async () => {
      console.log("TEST GUI 1 - useQuery:", filtersValues);
      const res = await calculRentabilite({
        // prixAchat: 150000,
        prixAchat: filtersValues.prixAchat,
        dureePret: filtersValues.dureePret,
        tauxPret: filtersValues.tauxPret,
        loyersTotal: filtersValues.loyersTotal,
      });

      const r = res?.data;
      return r;
    },
    enabled: !!filtersValues,
  });

  const handleFormSubmit = async (values: DataType) => {
    // mutation.mutate(newValues); // Envoie les nouvelles données à l'API
    console.log("TEST GUI 5 - onSubmit", values);
    // mutation.mutate(values);
    await mutation.mutateAsync(values);
    // setFiltersValues(values);
    // console.log("TEST GUI 6 - onSubmit", filtersValues);
    // queryClient.invalidateQueries();
    // console.log("TEST GUI 7 - onSubmit", filtersValues);
  };

  const mutation = useMutation({
    mutationFn: async (values: DataType) => {
      console.log("TEST GUI 10 - useMutation:", values);
      // onSubmit(values);
      setFiltersValues(values);
    },
    onSuccess: () => {
      console.log("TEST GUI 15 - useMutation, OnSuccess:", filtersValues);
      queryClient.invalidateQueries();
    },
  });

  // const mutation = useMutation({
  //   onSuccess: (values: DataType) => {
  //     console.log("TEST GUI 11 - useMutation:");
  //     // queryClient.invalidateQueries();
  //   },
  // });

  // const mutation = useMutation(values, {
  //   onSuccess: () => {
  //     // Invalide les requêtes 'data' pour rafraîchir les données après le post
  //     queryClient.invalidateQueries();
  //   },
  // });

  return (
    <LayoutResult>
      <div id="results" className="flex flex-col gap-4 w-2/3">
        <div id="rentabilites" className="flex gap-4 w-full">
          <RentabiliteBrute rentabiliteBrute={result.data?.rentabiliteBrute} />
          <RentabiliteNette />
        </div>
        <SommePret />
        <TabResultat />
      </div>
      <ResultFilters onSubmit={handleFormSubmit} />
    </LayoutResult>
  );
};
