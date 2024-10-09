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

const FormSchema = z.object({
  prix_achat: z.number(),
  duree_pret: z.number(),
  taux_pret: z.number(),
  loyers_total: z.number(),
});

export function FormFilterFields() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      prix_achat: 100000,
      duree_pret: 15,
      taux_pret: 1,
      loyers_total: 500,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
    console.log(data);
    router.push("/result");
    // router.push("/result", { pathname: "/result", query: { filters: data } });
    // router.push({
    //   pathname: "/result",
    //   query: data,
    // });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 space-y-6 mx-auto"
      >
        <FormField
          control={form.control}
          name="prix_achat"
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
          name="duree_pret"
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
          name="taux_pret"
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
          name="loyers_total"
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
