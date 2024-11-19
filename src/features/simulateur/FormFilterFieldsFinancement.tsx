"use client";

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
import { DataSchema, DataType } from "./simulateur.schema";

export type FormFilterFieldsFinancementProps = {
  onChange: (values: DataType) => void;
  filterValues: DataType;
};

export function FormFilterFieldsFinancement({
  onChange,
  filterValues,
}: FormFilterFieldsFinancementProps) {
  const form = useForm<z.infer<typeof DataSchema>>({
    resolver: zodResolver(DataSchema),
    defaultValues: filterValues,
  });

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(async (values: DataType) => {
        //   onSubmit(values);
        // })}
        className="space-y-3"
      >
        <FormField
          control={form.control}
          name="dureePret"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Durée du prêt : {value} an(s)</FormLabel>
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
              <FormLabel>Taux du prêt : {value} %</FormLabel>
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
          name="apport"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apport</FormLabel>
              <div className="flex">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="10000"
                    {...field}
                    className="mr-2"
                    onChange={(event) => {
                      if (event.target.value == "") {
                        field.onChange("");
                      } else {
                        field.onChange(parseFloat(event.target.value));
                      }
                    }}
                  />
                </FormControl>
                <MdEuroSymbol className="relative top-2" size={20} />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
