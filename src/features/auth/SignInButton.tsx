"use client";

import { Button } from "@/components/ui/button";
import { signInAction } from "./auth.action";

export const SignInButton = () => {
  return (
    <Button
      className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-normal text-sm hover:bg-[rgba(85,137,195,1)]"
      onClick={() => {
        signInAction();
      }}
    >
      Se connecter
    </Button>
  );
};
