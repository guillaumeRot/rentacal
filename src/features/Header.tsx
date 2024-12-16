"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { SidebarTrigger } from "./theme/SidebarTrigger";

export default function Header() {
  const session = useSession();
  const name = session.data?.user?.name ?? "";

  return (
    <div>
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="RentaCal" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <header className="w-full border-b border-border bg-popover flex">
        <SidebarTrigger />
        <div className="grid grid-cols-4 grow py-5 items-center max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-poppins font-medium col-span-3">
            Bonjour {name} !
          </h1>
          <div className="justify-self-end grid items-center col-start-4">
            <Avatar className="size-12">
              <AvatarFallback>{name}</AvatarFallback>
              {session.data?.user?.image ? (
                <AvatarImage
                  src={session.data?.user?.image}
                  alt={`${session.data?.user?.name ?? "-"}'s profile picture`}
                />
              ) : null}
            </Avatar>
          </div>
        </div>
      </header>
    </div>
  );
}
