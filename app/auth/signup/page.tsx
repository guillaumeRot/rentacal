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
import { registerUser } from "@/features/auth/auth.action";
import { SignupSchema, SignupType } from "@/features/auth/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function SignUp() {
  const handleSubmit = async (formData: SignupType) => {
    await registerUser(formData);
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
    });
  };

  const [accountValues, setAccountValues] = useState<SignupType>({
    email: "",
    name: "",
    password: "",
  });

  const form = useForm<z.infer<typeof SignupSchema>>({
    resolver: zodResolver(SignupSchema),
    defaultValues: accountValues,
  });

  return (
    <div>
      <Image
        src="/rentacal_icon_title.png"
        width={300}
        height={300}
        alt="rentacal logo"
        className="mx-auto py-14"
      />
      <div className="flex items-center justify-center mx-auto">
        <Card className="rounded-3xl w-1/3">
          <CardHeader>
            <CardTitle className="text-3xl text-center">Inscription</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl">
            <Form {...form}>
              <form
                className="space-y-3"
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field: { value, onChange } }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <div className="flex">
                        <FormControl>
                          <Input
                            type="text"
                            placeholder=""
                            className="mr-2"
                            value={value}
                            onChange={(event) => {
                              const newValue = event.target.value || "";
                              onChange(newValue);
                              setAccountValues((prev) => ({
                                ...prev,
                                email: newValue,
                              }));
                            }}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field: { value, onChange } }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <div className="flex">
                        <FormControl>
                          <Input
                            type="text"
                            placeholder=""
                            className="mr-2"
                            value={value}
                            onChange={(event) => {
                              const newValue = event.target.value || "";
                              onChange(newValue);
                              setAccountValues((prev) => ({
                                ...prev,
                                name: newValue,
                              }));
                            }}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field: { value, onChange } }) => (
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <div className="flex">
                        <FormControl>
                          <Input
                            type="text"
                            placeholder=""
                            className="mr-2"
                            value={value}
                            onChange={(event) => {
                              const newValue = event.target.value || "";
                              onChange(newValue);
                              setAccountValues((prev) => ({
                                ...prev,
                                password: newValue,
                              }));
                            }}
                          />
                        </FormControl>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  className="mx-auto block px-6 py-2 rounded-full text-sm text-semibold bg-blue-900 hover:bg-blue-800 hover:ring ring-transparent ring-offset-2 transition"
                  type="submit"
                >
                  <span className="text-white">S'inscrire</span>
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
