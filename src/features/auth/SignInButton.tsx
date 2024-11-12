"use client";

import { Button } from "@/components/ui/button";
import { signInAction } from "./auth.action";

export const SignInButton = () => {
  return (
    // <Button
    //   variant="secondary"
    //   size="sm"
    //   onClick={() => {
    //     signInAction();
    //   }}
    // >
    //   {/* <LogIn size={16} className="mr-2" /> */}
    //   Se connecter
    // </Button>
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
