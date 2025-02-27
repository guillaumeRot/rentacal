"use client";

import { AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { MontantFormat } from "@/features/MontantFormat";
import { BsCalendar3 } from "react-icons/bs";
import { AmortissementGlobalType } from "../simulateur.schema";

export type DataProps = {
  data: AmortissementGlobalType;
};

export function AmortissementTrigger(props: DataProps) {
  return (
    <AccordionTrigger className="hover:no-underline cursor-pointer text-xs lg:text-sm">
      <div className="flex flex-raw items-center w-full">
        <BsCalendar3 size={20} />
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center w-full py-2">
          <span className="text-left ml-3 hover:underline">
            {props.data.annee == "1"
              ? "1ère année"
              : props.data.annee + "ème année"}
          </span>
          <div className="flex flex-raw items-center ml-3">
            <span className="text-xs lg:text-sm font-semibold text-right pr-3">
              Cashflow:
            </span>
            <div>
              <Badge
                className={`text-xs lg:text-base font-medium rounded-3xl px-5 py-1 mt-1 
                          ${
                            props.data.cashflow >= 0
                              ? "hover:bg-green-200 bg-green-200 text-green-600 border border-green-600"
                              : "hover:bg-red-200 bg-red-200 text-red-600 border border-red-600"
                          }`}
              >
                <MontantFormat value={props.data.cashflow} />
                &nbsp;/ an
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </AccordionTrigger>
  );
}
