"use client";

import { LayoutResultWithFilters } from "@/components/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Amortissement } from "./amortissement/Amortissement";
import { Banque } from "./banque/Banque";
// import { Filters } from "./filters/Filters";
import Filters from "./filters/Filters";
import { Rentabilites } from "./rentabilites/Rentabilites";
import { calculRentabilite } from "./simulateur.action";
import { DataSchema, DataType } from "./simulateur.schema";

export default function SimulationResult() {
  const session = useSession();
  const userId = session.data?.user?.id ?? "0";
  const queryClient = useQueryClient();

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
  });

  // const parametres = useQuery({
  //   queryKey: ["parametres"],
  //   queryFn: async () => {
  //     const parametres = (
  //       await getParametresByUser({
  //         userId,
  //       })
  //     )?.data as unknown as ParametresType;

  //     if (parametres) {
  //       const updatedValues = {
  //         ...filtersValues,
  //         dureePret: parametres.dureePret ?? filtersValues.dureePret,
  //         tauxPret: parametres.tauxPret ?? filtersValues.tauxPret,
  //         apport: parametres.apport ?? filtersValues.apport,
  //         tauxAssurancePret:
  //           parametres.assurancePret ?? filtersValues.tauxAssurancePret,
  //         nbMoisLocParAn:
  //           parametres.nbMoisLocParAn ?? filtersValues.nbMoisLocParAn,
  //       };

  //       setFiltersValues(updatedValues);
  //       form.reset(updatedValues);
  //     }
  //     return parametres;
  //   },
  //   enabled: !!filtersValues && !!session?.data,
  // });

  // const result = useQuery({
  //   queryKey: ["result"],
  //   queryFn: async () => {
  //     console.log("TEST GUI 1");
  //     const res = await calculRentabilite({
  //       prixAchat: filtersValues.prixAchat,
  //       fraisAgence: filtersValues.fraisAgence,
  //       dureePret: filtersValues.dureePret,
  //       tauxPret: filtersValues.tauxPret,
  //       loyersTotal: filtersValues.loyersTotal,
  //       fraisNotaire: filtersValues.fraisNotaire,
  //       montantTravaux: filtersValues.montantTravaux,
  //       montantMobilier: filtersValues.montantMobilier,
  //       impotsFoncier: filtersValues.impotsFoncier,
  //       chargesCopro: filtersValues.chargesCopro,
  //       apport: filtersValues.apport,
  //       tauxAssurancePret: filtersValues.tauxAssurancePret,
  //       nbMoisLocParAn: filtersValues.nbMoisLocParAn,
  //       regimeFiscal: filtersValues.regimeFiscal,
  //       tmi: filtersValues.tmi,
  //     });
  //     console.log("TEST GUI 2");

  //     const r = res?.data;
  //     return r;
  //   },
  //   enabled: !!filtersValues,
  // });

  // const handleFormChange = async (
  //   updatedValues: Partial<typeof filtersValues>
  // ) => {
  //   const newValues = {
  //     ...filtersValues,
  //     ...updatedValues,
  //   };
  //   setFiltersValues(newValues);
  //   await mutation.mutateAsync(newValues);
  // };

  // const onSubmit = async (values: z.infer<typeof DataSchema>) => {
  //   console.log("Données du formulaire : ", values);
  //   await mutation.mutateAsync(values);
  // };

  const result = useQuery({
    queryKey: ["result"],
    queryFn: async () => {
      console.log("TEST GUI 1");
      const res = await calculRentabilite(filtersValues);
      console.log("TEST GUI 2");
      return res?.data;
    },
    enabled: !!filtersValues,
  });

  const onSubmit = async (values: z.infer<typeof DataSchema>) => {
    console.log("Données du formulaire : ", values);
    setFiltersValues(values);
    const res = await calculRentabilite(values);
    console.log("Résultat de calculRentabilite : ", res?.data);
    queryClient.invalidateQueries({ queryKey: ["result"] });
  };

  // const mutation = useMutation({
  //   mutationFn: async (values: DataType) => {
  //     setFiltersValues(values);
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["result"] });
  //   },
  // });

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
        <Filters form={form} handleSubmit={handleSubmit(onSubmit)} />
        <h1 className="text-xl lg:text-2xl my-4">
          2 - Consulter vos résultats
        </h1>
        <Rentabilites
          rentabiliteBrute={result.data?.rentabiliteBrute}
          rentabiliteNette={result.data?.rentabiliteNette}
          rentabiliteNetteNette={result.data?.rentabiliteNetteNette}
        />
        <Banque />
        <Amortissement />
      </LayoutResultWithFilters>
    </div>
  );
}
