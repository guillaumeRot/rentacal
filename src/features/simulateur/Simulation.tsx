"use client";

import { LayoutResultWithFilters } from "@/components/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { z } from "zod";
import Filters from "./filters/Filters";
import { calculRentabilite } from "./simulateur.action";
import { DataSchema, DataType } from "./simulateur.schema";
import SimulationResult from "./SimulationResult";

export default function Simulation() {
  const [filtersValues, setFiltersValues] = useState<DataType>({
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
    regimeFiscal: "lmnpMicroBIC",
    tmi: "30",
    typeLocation: "meublee",
  });
  const [isLoaded, setIsLoaded] = useState(true);

  const result = useQuery({
    queryKey: ["result"],
    queryFn: async () => {
      const res = await calculRentabilite(filtersValues);
      return res?.data;
    },
    enabled: false,
  });

  useEffect(() => {
    console.log("Données filter values mises à jour : ", filtersValues);
    result.refetch();
    setIsLoaded(true);
  }, [filtersValues]);

  const onSubmit = async (values: z.infer<typeof DataSchema>) => {
    setIsLoaded(false);
    console.log("Données du formulaire : ", values);
    await new Promise((r) => setTimeout(r, 400));
    setFiltersValues(values);
  };

  const form = useForm<z.infer<typeof DataSchema>>({
    resolver: zodResolver(DataSchema),
    defaultValues: filtersValues,
  });
  const { handleSubmit } = form;

  return (
    <div className="bg-white mt-20">
      <LayoutResultWithFilters>
        <h1 className="text-xl lg:text-2xl my-4">
          1 - Renseignez vos informations
        </h1>
        <Filters
          form={form}
          handleSubmit={handleSubmit(onSubmit)}
          isLoaded={isLoaded}
        />
        {!isLoaded && (
          <div className="loader mx-auto my-5">
            <AiOutlineLoading className="loaderIcon mx-auto" size={35} />
            <h1 className="mt-3">Chargement des données...</h1>
          </div>
        )}
        {isLoaded && result.data && <SimulationResult data={result.data} />}
      </LayoutResultWithFilters>
    </div>
  );
}
