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
import { User } from "next-auth";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdEuroSymbol } from "react-icons/md";
import { z } from "zod";
import { getParametresByUser } from "./parametres.action";
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
  tauxAssurancePret: z.number(),
});

export function ParametresParDefaut({ user }: ParametresParDefautProps) {
  const userId = user.id;
  const [paramValues, setParamValues] = useState({
    dureePret: 15,
    tauxPret: 1,
    apport: 0,
    tauxAssurancePret: 0,
    nbMoisLocParAn: 12,
  });
  const [hasFetched, setHasFetched] = useState(false);
  useEffect(() => {
    const fetchParameters = async () => {
      if (!userId || hasFetched) {
        return;
      }

      try {
        const parametres = (await getParametresByUser({
          userId,
        })) as unknown as ParametresType;

        if (parametres) {
          setParamValues((prev) => ({
            ...prev,
            dureePret: parametres.dureePret ?? prev.dureePret,
            tauxPret: parametres.tauxPret ?? prev.tauxPret,
            apport: parametres.apport ?? prev.apport,
            tauxAssurancePret:
              parametres.assurancePret ?? prev.tauxAssurancePret,
            nbMoisLocParAn: parametres.nbMoisLocParAn ?? prev.nbMoisLocParAn,
          }));
          setHasFetched(true);
          console.log("TEST GUI 1:", parametres);
          console.log("TEST GUI 2:", paramValues);
        }
      } catch (error) {
        console.error(
          "Impossible de récupérer les paramètres de l'utilisateur:",
          error
        );
      }
    };

    fetchParameters();
  }, [userId, hasFetched]);

  const form = useForm<z.infer<typeof ParamSchema>>({
    resolver: zodResolver(ParamSchema),
    defaultValues: paramValues,
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
                                // handleSliderChange("nbMoisLocParAn", value[0]);
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
                                // handleSliderChange("dureePret", value[0]);
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
                                // handleSliderChange("tauxPret", value[0]);
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
                              defaultValue={[value]}
                              onValueChange={(value) => {
                                onChange(value[0]);
                                // handleSliderChange(
                                //   "tauxAssurancePret",
                                //   value[0]
                                // );
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
                                  // handleChange(event);
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
                // signInAction();
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
