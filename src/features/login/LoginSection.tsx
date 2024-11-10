"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SignInButton } from "../auth/SignInButton";

export const LoginSection = () => {
  return (
    <Card className="rounded-3xl px-10">
      <CardHeader>
        <CardTitle className="text-3xl">Connexion</CardTitle>
      </CardHeader>

      <CardContent className="gap-4 grid text-2xl lg:text-4xl font-semibold">
        <div className="flex">
          <SignInButton />
        </div>
      </CardContent>
    </Card>
  );
};
