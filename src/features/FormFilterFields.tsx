"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdEuroSymbol } from "react-icons/md";
import { z } from "zod";
import { DataSchema, DataType } from "./result/simulateur.schema";

export type FormFilterFieldsProps = {
  onSubmit: (values: DataType) => void;
  filterValues: DataType;
};

export function FormFilterFields({
  onSubmit,
  filterValues,
}: FormFilterFieldsProps) {
  const form = useForm<z.infer<typeof DataSchema>>({
    resolver: zodResolver(DataSchema),
    defaultValues: filterValues,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(async (values: DataType) => {
          onSubmit(values);
        })}
        className="w-2/3 space-y-6 mx-auto"
      >
        <FormField
          control={form.control}
          name="prixAchat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prix d&apos;achat</FormLabel>
              <div className="flex">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="150 000"
                    {...field}
                    className="mr-2"
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <MdEuroSymbol className="relative top-2" size={20} />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dureePret"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Durée du prêt - {value} an(s)</FormLabel>
              <FormControl>
                <Slider
                  min={1}
                  max={25}
                  step={1}
                  defaultValue={[value]}
                  onValueChange={(value) => {
                    onChange(value[0]);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tauxPret"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Taux du prêt - {value} %</FormLabel>
              <FormControl>
                <Slider
                  min={0}
                  max={10}
                  step={0.1}
                  defaultValue={[value]}
                  onValueChange={(value) => {
                    onChange(value[0]);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="loyersTotal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Somme des loyers</FormLabel>
              <div className="flex">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="500"
                    {...field}
                    className="mr-2"
                    onChange={(event) => field.onChange(+event.target.value)}
                  />
                </FormControl>
                <MdEuroSymbol className="relative top-2" size={20} />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Plus de critères</AccordionTrigger>
            <AccordionContent>
              <FormField
                control={form.control}
                name="fraisNotaire"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Frais de notaire - {value} %</FormLabel>
                    <FormControl>
                      <Slider
                        min={0}
                        max={20}
                        step={0.1}
                        defaultValue={[value]}
                        onValueChange={(value) => {
                          onChange(value[0]);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button
          type="submit"
          className="w-full bg-accent text-accent-foreground"
        >
          Calculer ma rentabilité
        </Button>
      </form>
    </Form>
  );
}
