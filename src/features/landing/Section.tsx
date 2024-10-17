import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
  className?: string;
  sectionClassName?: string;
  id?: string;
}>;

export const Section = (props: SectionProps) => {
  return (
    <section id={props.id} className={cn(props.sectionClassName)}>
      <div
        className={cn(
          "mx-auto w-full max-w-screen-xl px-4 pt-8 lg:px-12 lg:pt-16",
          props.className
        )}
      >
        {props.children}
      </div>
    </section>
  );
};