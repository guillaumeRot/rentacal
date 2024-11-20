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

export type FormFilterFieldsAchatProps = {
  filterValues: DataType;
  onChange: (updatedValues: Partial<DataType>) => void;
};

export function FormFilterFieldsAchat({
  filterValues,
  onChange,
}: FormFilterFieldsAchatProps) {
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
          name="prixAchat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prix d&apos;achat</FormLabel>
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
          name="fraisAgence"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frais d'agence</FormLabel>
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
          name="fraisNotaire"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Frais de notaire</FormLabel>
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
      </form>
    </Form>
  );
}
