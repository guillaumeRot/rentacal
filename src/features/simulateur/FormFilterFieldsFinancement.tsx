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
import { UseFormReturn } from "react-hook-form";
import { MdEuroSymbol } from "react-icons/md";
import { z } from "zod";
import { DataSchema, DataType } from "./simulateur.schema";

export type FormFilterFieldsFinancementProps = {
  onChange: (updatedValues: Partial<DataType>) => void;
  form: UseFormReturn<z.infer<typeof DataSchema>>;
};

export function FormFilterFieldsFinancement({
  onChange,
  form,
}: FormFilterFieldsFinancementProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const numericValue = !isNaN(Number(value)) ? Number(value) : value;
    onChange({ [name]: numericValue });
  };

  const handleSliderChange = (name: keyof DataType, value: number) => {
    onChange({ [name]: value });
  };

  return (
    <Form {...form}>
      <form className="space-y-3">
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
                  value={[value]}
                  onValueChange={(value) => {
                    onChange(value[0]);
                    handleSliderChange("dureePret", value[0]);
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
                  value={[value]}
                  onValueChange={(value) => {
                    onChange(value[0]);
                    handleSliderChange("tauxPret", value[0]);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tauxAssurancePret"
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel>Assurance du prêt : {value} %</FormLabel>
              <FormControl>
                <Slider
                  min={0}
                  max={10}
                  step={0.1}
                  value={[value]}
                  onValueChange={(value) => {
                    onChange(value[0]);
                    handleSliderChange("tauxAssurancePret", value[0]);
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
