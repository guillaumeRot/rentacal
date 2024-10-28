import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/features/Header";
import { RentaCalSidebar } from "@/features/RentaCalSidebar";
import { SuggestionForm } from "@/features/suggestions/SuggestionForm";

export default function Suggestion() {
  return (
    <SidebarProvider>
      <RentaCalSidebar />
      <div className="w-screen">
        <Header />
        <SuggestionForm />
      </div>
    </SidebarProvider>
  );
}
