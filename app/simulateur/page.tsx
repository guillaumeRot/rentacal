"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "@/features/Footer";
import Header from "@/features/Header";
import { RentaCalSidebar } from "@/features/RentaCalSidebar";
import Simulation from "@/features/simulateur/Simulation";

export default function Result() {
  return (
    <SidebarProvider defaultOpen={false}>
      <RentaCalSidebar />
      <div className="w-screen">
        <Header />
        <Simulation />
        <Footer />
      </div>
    </SidebarProvider>
  );
}
