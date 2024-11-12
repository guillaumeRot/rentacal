"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { GiHamburgerMenu } from "react-icons/gi";

export function SidebarTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <button onClick={toggleSidebar} className="pl-4">
      <GiHamburgerMenu size={25} />
    </button>
  );
}
