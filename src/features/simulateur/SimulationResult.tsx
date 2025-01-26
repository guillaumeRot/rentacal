"use client";

import { LayoutResult, LayoutResultWithFilters } from "@/components/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getParametresByUser } from "../parametres/parametres.action";
import { ParametresType } from "../parametres/parametres.schema";
import { CoutPret } from "./CoutPret";
import { FraisBancaire } from "./FraisBancaire";
import { LegendeRentabilite } from "./LegendeRentabilites";
import { MontantPret } from "./MontantPret";
import { MultiStepFilters } from "./MultiStepFilters";
import { RentabiliteBrute } from "./RentabiliteBrute";
import { RentabiliteNette } from "./RentabiliteNette";
import { ResultFilters } from "./ResultFilters";
import { TabResultat } from "./TabResultat";
import { calculRentabilite } from "./simulateur.action";
import { DataSchema, DataType } from "./simulateur.schema";

export default function SimulationResult() {
  const session = useSession();
  const userId = session.data?.user?.id ?? "0";
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

  const parametres = useQuery({
    queryKey: ["parametres"],
    queryFn: async () => {
      const parametres = (
        await getParametresByUser({
          userId,
        })
      )?.data as unknown as ParametresType;

      if (parametres) {
        const updatedValues = {
          ...filtersValues,
          dureePret: parametres.dureePret ?? filtersValues.dureePret,
          tauxPret: parametres.tauxPret ?? filtersValues.tauxPret,
          apport: parametres.apport ?? filtersValues.apport,
          tauxAssurancePret:
            parametres.assurancePret ?? filtersValues.tauxAssurancePret,
          nbMoisLocParAn:
            parametres.nbMoisLocParAn ?? filtersValues.nbMoisLocParAn,
        };

        setFiltersValues(updatedValues);
        form.reset(updatedValues);
      }
      return parametres;
    },
    enabled: !!filtersValues,
  });

  const result = useQuery({
    queryKey: ["result"],
    queryFn: async () => {
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

  const handleSubmit = (data: any) => {
    console.log("Données du formulaire:", data);
    // Traitez les données comme vous le souhaitez
  };

  const mutation = useMutation({
    mutationFn: async (values: DataType) => {
      setFiltersValues(values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["result"] });
    },
  });

  const form = useForm<z.infer<typeof DataSchema>>({
    resolver: zodResolver(DataSchema),
    defaultValues: filtersValues,
  });

  return (
    <div className="bg-white">
      <LayoutResultWithFilters>
        <MultiStepFilters onSubmit={handleSubmit} />
        <ResultFilters onChange={handleFormChange} form={form} />
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
    </div>
  );
}
