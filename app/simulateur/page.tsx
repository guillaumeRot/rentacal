"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "@/features/Footer";
import Header from "@/features/Header";
import { RentaCalSidebar } from "@/features/RentaCalSidebar";
import Simulation from "@/features/simulateur/Simulation";
import CookieConsent from "@/features/theme/CookieConsent";
import { useSession } from "next-auth/react";

export default function Result() {
  const session = useSession();

  return (
    <SidebarProvider defaultOpen={false}>
      <RentaCalSidebar />
      <div className="w-screen">
        <Header />
        <Simulation />
        <CookieConsent variant="small" />
        <Footer />
      </div>
    </SidebarProvider>
  );
}
