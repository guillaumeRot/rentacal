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
          "w-full text-center flex flex-row items-center",
          props.className
        )}
      >
        {props.children}
      </div>
    </section>
  );
};
