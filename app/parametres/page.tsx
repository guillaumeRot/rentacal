import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/features/Header";
import { Parametres } from "@/features/parametres/Parametres";
import { RentaCalSidebar } from "@/features/RentaCalSidebar";

export default function Result() {
  return (
    <SidebarProvider defaultOpen={false}>
      <RentaCalSidebar />
      <div className="w-screen">
        <Header />
        <Parametres />
      </div>
    </SidebarProvider>
  );
}
