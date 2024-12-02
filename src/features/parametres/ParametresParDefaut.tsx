"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { User } from "next-auth";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdEuroSymbol } from "react-icons/md";
import { z } from "zod";
import { getParametresByUser, updateParametres } from "./parametres.action";
import { ParametresType } from "./parametres.schema";

export type ParametresParDefautProps = {
  user: User;
};

export const ParamSchema = z.object({
  dureePret: z.number(),
  tauxPret: z.number(),
  nbMoisLocParAn: z.number(),
  apport: z.number({
    message: "Renseignez un nombre valide",
  }),
  assurancePret: z.number(),
});

export function ParametresParDefaut({ user }: ParametresParDefautProps) {
  const userId = user.id;
  const queryClient = useQueryClient();

  if (!userId) {
    return;
  }

  const [paramValues, setParamValues] = useState<ParametresType>({
    id: "0",
    userId: userId,
    dureePret: 15,
    tauxPret: 1,
    apport: 0,
    assurancePret: 1,
    nbMoisLocParAn: 12,
  });

  const result = useQuery({
    queryKey: ["result"],
    queryFn: async () => {
      const parametres = (
        await getParametresByUser({
          userId,
        })
      )?.data as unknown as ParametresType;

      if (parametres) {
        setParamValues((prev) => ({
          ...prev,
          id: parametres.id ?? prev.id,
          userId: parametres.userId ?? prev.userId,
          dureePret: parametres.dureePret ?? prev.dureePret,
          tauxPret: parametres.tauxPret ?? prev.tauxPret,
          apport: parametres.apport ?? prev.apport,
          assurancePret: parametres.assurancePret ?? prev.assurancePret,
          nbMoisLocParAn: parametres.nbMoisLocParAn ?? prev.nbMoisLocParAn,
        }));
      }

      return parametres;
    },
    enabled: !!paramValues,
  });

  const form = useForm<z.infer<typeof ParamSchema>>({
    resolver: zodResolver(ParamSchema),
    defaultValues: paramValues,
  });

  const onParamSubmit = async (updatedValues: ParametresType) => {
    const newValues = {
      ...paramValues,
      ...updatedValues,
    };
    setParamValues(newValues);
    await updateParametres(newValues);
    await mutation.mutateAsync(newValues);
  };

  const mutation = useMutation({
    mutationFn: async (values: ParametresType) => {
      setParamValues(values);
    },
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return (
    <div className="h-screen w-full mx-auto max-w-3xl mt-4">
      {user?.image && user?.name ? (
        <div className="flex flex-col gap-y-8">
          <h1 className="text-2xl">Paramètres par défaut</h1>
          <div className="flex flex-col lg:flex-row gap-y-8 gap-x-4">
            <Card className="rounded-3xl w-1/2">
              <CardHeader>
                <CardTitle>Revenus et dépenses</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl">
                <Form {...form}>
                  <form className="space-y-3">
                    <FormField
                      control={form.control}
                      name="nbMoisLocParAn"
                      render={({ field: { value, onChange } }) => (
                        <FormItem>
                          <FormLabel>{value} mois de location / an</FormLabel>
                          <FormControl>
                            <Slider
                              min={0}
                              max={12}
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
                  </form>
                </Form>
              </CardContent>
            </Card>
            <Card className="rounded-3xl w-1/2">
              <CardHeader>
                <CardTitle>Financement</CardTitle>
              </CardHeader>
              <CardContent className="text-2xl">
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
                      name="assurancePret"
                      render={({ field: { value, onChange } }) => (
                        <FormItem>
                          <FormLabel>Assurance du prêt : {value} %</FormLabel>
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
                                  field.onChange(event);
                                }}
                              />
                            </FormControl>
                            <MdEuroSymbol
                              className="relative top-2"
                              size={20}
                            />
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className="mx-auto">
            <Button
              className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-normal text-sm hover:bg-[rgba(85,137,195,1)]"
              onClick={() => {
                const updatedValues = form.getValues();

                const valuesWithUserInfo = {
                  ...updatedValues,
                  id: paramValues.id,
                  userId: paramValues.userId,
                };

                onParamSubmit(valuesWithUserInfo);
              }}
            >
              Enregistrer
            </Button>
          </div>
        </div>
      ) : (
        <p>Paramètres non disponibles</p>
      )}
    </div>
  );
}
