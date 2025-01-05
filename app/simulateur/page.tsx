"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "@/features/Footer";
import Header from "@/features/Header";
import { RentaCalSidebar } from "@/features/RentaCalSidebar";
import SimulationResult from "@/features/simulateur/SimulationResult";
import CookieConsent from "@/features/theme/CookieConsent";
import { useSession } from "next-auth/react";

export default function Result() {
  const session = useSession();

  return (
    <SidebarProvider defaultOpen={false}>
      <RentaCalSidebar />
      <div className="w-screen">
        <Header />
        <SimulationResult />
        <CookieConsent variant="small" />
        <Footer />
      </div>
    </SidebarProvider>
  );
}
