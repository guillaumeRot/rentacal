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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MdEuroSymbol } from "react-icons/md";
import { z } from "zod";
import { DataSchema, DataType } from "./simulateur.schema";

export type FormFilterFieldsRevenusDepensesProps = {
  onChange: (updatedValues: Partial<DataType>) => void;
  filterValues: DataType;
};

export function FormFilterFieldsRevenusDepenses({
  onChange,
  filterValues,
}: FormFilterFieldsRevenusDepensesProps) {
  const form = useForm<z.infer<typeof DataSchema>>({
    resolver: zodResolver(DataSchema),
    defaultValues: filterValues,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const numericValue = !isNaN(Number(value)) ? Number(value) : value;
    onChange({ [name]: numericValue });
  };

  return (
    <Form {...form}>
      <form className="space-y-3">
        <FormField
          control={form.control}
          name="loyersTotal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Somme des loyers mensuel</FormLabel>
              <div className="flex">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0"
                    {...field}
                    className="mr-2"
                    onChange={(event) => {
                      field.onChange(event);
                      handleChange(event);
                    }}
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
          name="impotsFoncier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Impôts fonciers</FormLabel>
              <div className="flex">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="1000"
                    {...field}
                    className="mr-2"
                    onChange={(event) => {
                      field.onChange(event);
                      handleChange(event);
                    }}
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
          name="chargesCopro"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Charges de copropriété</FormLabel>
              <div className="flex">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="500"
                    {...field}
                    className="mr-2"
                    onChange={(event) => {
                      field.onChange(event);
                      handleChange(event);
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
