"use client";

import { currentUser } from "@/auth/current-user";
import { LayoutResult, LayoutResultWithFilters } from "@/components/layout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getParametresByUser } from "../parametres/parametres.action";
import { ParametresType } from "../parametres/parametres.schema";
import { CoutPret } from "./CoutPret";
import { FraisBancaire } from "./FraisBancaire";
import { LegendeRentabilite } from "./LegendeRentabilites";
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
    fraisAgence: 0,
    dureePret: 15,
    tauxPret: 1,
    loyersTotal: 500,
    fraisNotaire: 0,
    montantTravaux: 0,
    montantMobilier: 0,
    impotsFoncier: 0,
    chargesCopro: 0,
    apport: 0,
    tauxAssurancePret: 0,
    nbMoisLocParAn: 12,
  });

  const result = useQuery({
    queryKey: ["result"],
    queryFn: async () => {
      const user = await currentUser();
      const userId = user?.id ?? "0";
      const parametres = (
        await getParametresByUser({
          userId,
        })
      )?.data as unknown as ParametresType;

      if (parametres) {
        setFiltersValues((prev) => ({
          ...prev,
          dureePret: parametres.dureePret ?? prev.dureePret,
          tauxPret: parametres.tauxPret ?? prev.tauxPret,
          apport: parametres.apport ?? prev.apport,
          assurancePret: parametres.assurancePret ?? prev.tauxAssurancePret,
          nbMoisLocParAn: parametres.nbMoisLocParAn ?? prev.nbMoisLocParAn,
        }));
      }

      const res = await calculRentabilite({
        prixAchat: filtersValues.prixAchat,
        fraisAgence: filtersValues.fraisAgence,
        dureePret: filtersValues.dureePret,
        tauxPret: filtersValues.tauxPret,
        loyersTotal: filtersValues.loyersTotal,
        fraisNotaire: filtersValues.fraisNotaire,
        montantTravaux: filtersValues.montantTravaux,
        montantMobilier: filtersValues.montantMobilier,
        impotsFoncier: filtersValues.impotsFoncier,
        chargesCopro: filtersValues.chargesCopro,
        apport: filtersValues.apport,
        tauxAssurancePret: filtersValues.tauxAssurancePret,
        nbMoisLocParAn: filtersValues.nbMoisLocParAn,
      });

      const r = res?.data;
      return r;
    },
    enabled: !!filtersValues,
  });

  const handleFormChange = async (
    updatedValues: Partial<typeof filtersValues>
  ) => {
    const newValues = {
      ...filtersValues,
      ...updatedValues,
    };
    setFiltersValues(newValues);
    await mutation.mutateAsync(newValues);
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
    <LayoutResultWithFilters>
      <ResultFilters onChange={handleFormChange} filterValues={filtersValues} />
      <LayoutResult>
        <div id="results" className="flex flex-col gap-y-8 gap-x-3 w-full">
          <div>
            <div
              id="rentabilites"
              className="flex gap-y-8 gap-x-3 w-full flex-col lg:flex-row"
            >
              <RentabiliteBrute
                rentabiliteBrute={result.data?.rentabiliteBrute}
              />
              <RentabiliteNette
                rentabiliteNette={result.data?.rentabiliteNette}
              />
            </div>
            <LegendeRentabilite />
          </div>
          <div className="flex gap-y-8 gap-x-3 flex-col lg:flex-row">
            <MontantPret montantPret={result.data?.montantPret} />
            <FraisBancaire fraisBancaire={result.data?.fraisBancaires} />
            <CoutPret coutPret={result.data?.coutPret} />
          </div>
          <TabResultat
            resultatsMensuel={result.data?.resultatsMensuel}
            mensualites={result.data?.mensualites}
            cashflowBrut={result.data?.cashflowBrut}
          />
        </div>
      </LayoutResult>
    </LayoutResultWithFilters>
  );
};
