"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

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

// CardChild
export type CardChildProps = PropsWithChildren & {
  className?: string;
};

export const CardChild = (props: CardChildProps) => {
  return (
    <Card className={cn("rounded-3xl my-2 lg:my-6 mx-5", props.className)}>
      {props.children}
    </Card>
  );
};

// CardChildHeader
export type CardChildHeaderProps = {
  icon: ReactNode;
  title: string;
};

export const CardChildHeader = (props: CardChildHeaderProps) => {
  return (
    <CardHeader className="items-center pb-0">
      <CardTitle>
        <div className="flex text-gray-700">
          {props.icon}
          <div className="flex items-center">
            <h1 className="ml-2 text-sm font-medium">{props.title}</h1>
          </div>
        </div>
      </CardTitle>
    </CardHeader>
  );
};
