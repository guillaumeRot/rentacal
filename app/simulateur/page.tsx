import { currentUser } from "@/auth/current-user";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "@/features/Footer";
import { Header } from "@/features/Header";
import { RentaCalSidebar } from "@/features/RentaCalSidebar";
import { SimulationResult } from "@/features/simulateur/SimulationResult";
import CookieConsent from "@/features/theme/CookieConsent";

export default async function Result() {
  const user = await currentUser();

  return (
    <SidebarProvider defaultOpen={false}>
      <RentaCalSidebar />
      <div className="w-screen">
        <Header />
        <SimulationResult user={user} />
        <CookieConsent variant="small" />
        <Footer />
      </div>
    </SidebarProvider>
  );
}
