import { LayoutResult } from "@/components/layout";
import { Header } from "@/features/Header";
import { RentabiliteBrute } from "@/features/result/RentabiliteBrute";
import { RentabiliteNette } from "@/features/result/RentabiliteNette";
import { ResultFilters } from "@/features/result/ResultFilters";
import { SommePret } from "@/features/result/SommePret";
import { TabResultat } from "@/features/result/TabResultat";

export default function Result() {
  return (
    <div>
      <Header />
      <LayoutResult>
        <div id="results" className="flex flex-col gap-4 w-2/3">
          <div id="rentabilites" className="flex gap-4 w-full">
            <RentabiliteBrute />
            <RentabiliteNette />
          </div>
          <SommePret />
          <TabResultat />
        </div>
        <ResultFilters />
      </LayoutResult>
    </div>
  );
}
