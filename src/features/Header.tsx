"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { SidebarTrigger } from "./theme/SidebarTrigger";

export default function Header() {
  const session = useSession();
  const name = session.data?.user?.name ?? "";

  return (
    <div>
      <header className="w-full border-b border-border bg-popover flex">
        <SidebarTrigger />
        <div className="grid grid-cols-4 grow py-5 items-center max-w-6xl mx-auto px-4">
          {/* <h1 className="text-3xl font-poppins font-medium col-span-3">
            Bonjour {name} !
          </h1> */}
          <Image
            src="/rentacal_icon_title.png"
            width={180}
            height={180}
            alt="rentacal logo"
          />
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
