import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/features/Header";
import { RentaCalSidebar } from "@/features/RentaCalSidebar";

export default function Result() {
  return (
    <SidebarProvider defaultOpen={false}>
      <RentaCalSidebar />
      <div className="w-screen">
        <Header />
      </div>
    </SidebarProvider>
  );
}
