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
    <AccordionTrigger className="hover:no-underline cursor-pointer">
      <div className="flex flex-raw items-center w-full">
        <BsCalendar3 size={20} />
        <div className="grid grid-cols-2 items-center w-full">
          <span className="text-left ml-3 hover:underline">
            {props.data.annee}ème année
          </span>
          <div className="grid grid-cols-2 items-center">
            <span className="text-md font-semibold text-right pr-3">
              Cashflow:
            </span>
            <div className="py-2">
              <Badge
                className={`text-sm lg:text-md font-medium rounded-3xl px-5 py-1 mt-1 
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
