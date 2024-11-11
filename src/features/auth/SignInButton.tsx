"use client";

import { Button } from "@/components/ui/button";
import { signInAction } from "./auth.action";

export const SignInButton = () => {
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={() => {
        signInAction();
      }}
    >
      {/* <LogIn size={16} className="mr-2" /> */}
      Se connecter
    </Button>
  );
};
