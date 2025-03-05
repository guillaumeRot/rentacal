"use client";

import { LoggedInButton } from "./theme/LoggedInButton";
import { SidebarTrigger } from "./theme/SidebarTrigger";

export default function Header() {
  return (
    <div>
      <header className="fixed w-full border-b border-border bg-popover flex z-50">
        <div className="w-full flex shadow-b">
          <SidebarTrigger />
          <div className="grid grid-cols-3 lg:grid-cols-4 grow py-4 items-center max-w-6xl mx-auto pr-10">
            <h1 className="text-xl lg:text-3xl ml-2 lg:ml-0 items-center font-semibold">
              Simulateur
            </h1>
            <div className="justify-self-end grid items-center col-start-4 flex flex-col">
              <LoggedInButton />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
