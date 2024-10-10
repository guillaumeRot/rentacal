"use client";

import { LayoutResult } from "@/components/layout";
import { useQuery } from "@tanstack/react-query";
import { RentabiliteBrute } from "./RentabiliteBrute";
import { RentabiliteNette } from "./RentabiliteNette";
import { ResultFilters } from "./ResultFilters";
import { SommePret } from "./SommePret";
import { TabResultat } from "./TabResultat";
import { calculRentabilite } from "./simulateur.action";

export const SimulationResult = () => {
  const result = useQuery({
    queryKey: ["result"],
    queryFn: async () => {
      const res = await calculRentabilite({
        prixAchat: 100000,
        dureePret: 20,
        tauxPret: 2,
        loyersTotal: 500,
      });

      const r = res?.data;
      return r;
    },
  });

  return (
    <LayoutResult>
      <div id="results" className="flex flex-col gap-4 w-2/3">
        <div id="rentabilites" className="flex gap-4 w-full">
          {/* <RentabiliteBrute rentabiliteBrute={10} /> */}
          <RentabiliteBrute rentabiliteBrute={result.data?.rentabiliteBrute} />
          <RentabiliteNette />
        </div>
        <SommePret />
        <TabResultat />
      </div>
      <ResultFilters />
    </LayoutResult>
  );
};
