"use client";

import { Button } from "@/components/ui/button";

export function LoginCard() {
  return (
    <div className="w-2/3 space-y-4 mx-auto">
      <Button type="submit" className="w-full bg-accent text-accent-foreground">
        Se connecter
      </Button>
      <Button type="submit" className="w-full bg-accent text-accent-foreground">
        S&apos;inscrire
      </Button>
    </div>
  );
}
