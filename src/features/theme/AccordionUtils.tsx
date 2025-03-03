"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// CardParent
export type AccordionSeeMoreProps = {
  description: string;
};

export const AccordionSeeMore = (props: AccordionSeeMoreProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="py-2">En savoir plus...</AccordionTrigger>
        <AccordionContent>
          <p className="mt-2">{props.description}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
