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
import { UseFormReturn } from "react-hook-form";
import { MdEuroSymbol } from "react-icons/md";
import { z } from "zod";
import { DataSchema, DataType } from "./simulateur.schema";

export type FormFilterFieldsAchatProps = {
  onChange: (updatedValues: Partial<DataType>) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
};

export function FormFilterFieldsAchat({
  onChange,
  form,
}: FormFilterFieldsAchatProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const numericValue = !isNaN(Number(value)) ? Number(value) : value;
    onChange({ [name]: numericValue });
  };

  return (
    <Form {...form}>
      <form className="justify-between max-w-230 mx-auto py-10 flex flex-row">
        <FormField
          control={form.control}
          name="prixAchat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prix d&apos;achat</FormLabel>
              <div className="flex pt-3">
                <FormControl>
                  <Input
                    type="number"
                    placeholder="0"
                    {...field}
                    className="mr-2 max-w-50"
                    onChange={(event) => {
                      field.onChange(event);
                      handleChange(event);
                    }}
                  />
                </FormControl>
                <MdEuroSymbol
                  className="relative top-2 text-blue-700"
                  size={25}
                />
              </div>
              <FormMessage />
              <div className="text-xs">
                Le prix d'achat est le prix du bien net vendeur
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fraisAgence"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frais d'agence</FormLabel>
              <div className="flex pt-3">
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
                <MdEuroSymbol
                  className="relative top-2 text-blue-700"
                  size={25}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fraisNotaire"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frais de notaire</FormLabel>
              <div className="flex pt-3">
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
                <MdEuroSymbol
                  className="relative top-2 text-blue-700"
                  size={25}
                />
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
