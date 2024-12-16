import { SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "@/features/Footer";
import Header from "@/features/Header";
import { RentaCalSidebar } from "@/features/RentaCalSidebar";
import { SuggestionForm } from "@/features/suggestions/SuggestionForm";

export default function Suggestion() {
  return (
    <SidebarProvider>
      <RentaCalSidebar />
      <div className="w-screen">
        <Header />
        <SuggestionForm />
        <Footer />
      </div>
    </SidebarProvider>
  );
}
