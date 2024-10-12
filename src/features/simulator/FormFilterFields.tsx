"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { useRouter } from "next/navigation";
import { MdEuroSymbol } from "react-icons/md";
import { DataSchema } from "../result/simulateur.schema";

export function FormFilterFields() {
  const router = useRouter();

  const form = useForm<z.infer<typeof DataSchema>>({
    resolver: zodResolver(DataSchema),
    defaultValues: {
      prixAchat: 100000,
      dureePret: 15,
      tauxPret: 1,
      loyersTotal: 500,
    },
  });

  function onSubmit(data: z.infer<typeof DataSchema>) {
    localStorage.setItem("prixAchat", data.prixAchat.toString());
    localStorage.setItem("dureePret", data.dureePret.toString());
    localStorage.setItem("tauxPret", data.tauxPret.toString());
    localStorage.setItem("loyersTotal", data.loyersTotal.toString());
    localStorage.setItem("filterValues", JSON.stringify(data));
    router.push("/result");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
                  // onValueChange={onChange}
                  onValueChange={(value) => {
                    onChange(value[0]);
                  }}
                  // onChange={(event) => field.onChange(+event.target.value)}
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
                  // onValueChange={onChange}
                  onValueChange={(value) => {
                    onChange(value[0]);
                  }}
                  // onChange={(event) => field.onChange(+event.target.value)}
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
                    placeholder="500 €"
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
