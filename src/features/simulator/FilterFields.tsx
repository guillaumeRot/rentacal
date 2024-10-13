"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { FormFilterFields } from "../FormFilterFields";
import { DataSchema } from "../result/simulateur.schema";

export const FilterFields = () => {
  const router = useRouter();

  const defaultValues = {
    prixAchat: 100000,
    dureePret: 15,
    tauxPret: 1,
    loyersTotal: 500,
    fraisNotaire: 10000,
  };

  function onSubmit(data: z.infer<typeof DataSchema>) {
    localStorage.setItem("filterValues", JSON.stringify(data));
    router.push("/result");
  }

  return (
    <Card className="border-2 rounded-xl py-8 w-2/4 min-w-96 mx-auto">
      <CardContent className="grid gap-4">
        <FormFilterFields onSubmit={onSubmit} filterValues={defaultValues} />
      </CardContent>
    </Card>
  );
};
