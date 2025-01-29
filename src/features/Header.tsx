"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSession } from "next-auth/react";
import { SidebarTrigger } from "./theme/SidebarTrigger";

export default function Header() {
  const session = useSession();
  const name = session.data?.user?.name ?? "";

  return (
    <div>
      <header className="fixed w-full border-b border-border bg-popover flex">
        <div className="w-full flex shadow-b">
          <SidebarTrigger />
          {/* <div className="py-5 w-full"> */}
          <div className="grid grid-cols-4 grow py-4 items-center max-w-6xl mx-auto pr-10">
            {/* <h1 className="text-3xl font-poppins font-medium col-span-3">
            <span>Simula</span>
            <span className="text-blue-800">teur</span>
          </h1> */}
            {/* <Image
            className="mx-auto pr-10"
            src="/rentacal_icon_title.png"
            width={200}
            height={200}
            alt="rentacal logo"
          /> */}
            <div className="justify-self-end grid items-center col-start-4 flex flex-col">
              {/* <div>{name}</div> */}
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
        </div>
      </header>
    </div>
  );
}
