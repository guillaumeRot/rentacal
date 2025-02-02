"use client";

import { useSession } from "next-auth/react";
import { SidebarTrigger } from "./theme/SidebarTrigger";
import { LoggedInButton } from "./theme/LoggedInButton";

export default function Header() {
  const session = useSession();
  const name = session.data?.user?.name ?? "";

  return (
    <div>
      <header className="fixed w-full border-b border-border bg-popover flex">
        <div className="w-full flex shadow-b">
          <SidebarTrigger />
          <div className="grid grid-cols-4 grow py-4 items-center max-w-6xl mx-auto pr-10">
            <div className="justify-self-end grid items-center col-start-4 flex flex-col">
              <LoggedInButton />
              {/* <Avatar className="size-12">
                <AvatarFallback>{name}</AvatarFallback>
                {session.data?.user?.image ? (
                  <AvatarImage
                    src={session.data?.user?.image}
                    alt={`${session.data?.user?.name ?? "-"}'s profile picture`}
                  />
                ) : null}
              </Avatar> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
