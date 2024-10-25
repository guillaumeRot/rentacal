import { Header } from "@/features/Header";
import { SimulationResult } from "@/features/simulateur/SimulationResult";

export default function Result() {
  return (
    // <SidebarProvider>
    //   <AppSidebar />
    //   <main>
    //    <SidebarTrigger />
    <div>
      <Header />
      <SimulationResult />
    </div>
    // </main>
    //</SidebarProvider>
  );
}
