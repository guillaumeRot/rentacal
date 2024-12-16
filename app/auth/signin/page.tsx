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
import { SigninSchema, SigninType } from "@/features/auth/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";

export default function SignIn() {
  const handleSubmit = async (formData: SigninType) => {
    await signIn("credentials", {
      email: formData.email,
      password: formData.password,
    });
  };

  const [accountValues, setAccountValues] = useState<SigninType>({
    email: "",
    password: "",
  });

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
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
        <Card className="rounded-3xl px-8">
          <CardHeader>
            <CardTitle className="text-3xl text-center mb-5">
              Connexion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <button
                key="Google"
                onClick={() => signIn("google")}
                className="px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all bg-white text-black border border-gray-300 hover:bg-gray-100"
              >
                <span className="flex items-center gap-2">
                  <FcGoogle className="text-2xl" />
                  Continuer avec Google
                </span>
              </button>

              <button
                key="LinkedIn"
                onClick={() => signIn("linkedin")}
                className="px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all bg-blue-600 text-white hover:bg-blue-700"
              >
                <span className="flex items-center gap-2">
                  <FaLinkedin className="text-2xl" />
                  Continuer avec LinkedIn
                </span>
              </button>
              <div>
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
                                  // setAccountValues((prev) => ({
                                  //   ...prev,
                                  //   email: newValue,
                                  // }));
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
                                  // setAccountValues((prev) => ({
                                  //   ...prev,
                                  //   password: newValue,
                                  // }));
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
                      <span className="text-white">Se connecter</span>
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
