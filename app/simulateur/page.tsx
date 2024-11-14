import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/features/Header";
import { RentaCalSidebar } from "@/features/RentaCalSidebar";
import { SimulationResult } from "@/features/simulateur/SimulationResult";

export default function Result() {
  return (
    <SidebarProvider defaultOpen={false}>
      <RentaCalSidebar />
      <div className="w-screen">
        <Header />
        <SimulationResult />
      </div>
    </SidebarProvider>
  );
}
