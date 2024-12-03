import { currentUser } from "@/auth/current-user";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Header } from "@/features/Header";
import { RentaCalSidebar } from "@/features/RentaCalSidebar";
import { SimulationResult } from "@/features/simulateur/SimulationResult";
import CookieConsent from "@/features/theme/CookieConsent";

// export const getResultProps = async () => {
//   const user = await currentUser();
//   return {
//     props: { user },
//   };
// };

// export default function Result() {
// export default function Result({ user }: { user: User | null }) {
// export const Parametres = async () => {
// export const Result = async () => {
export default async function Result() {
  const user = await currentUser();

  return (
    <SidebarProvider defaultOpen={false}>
      <RentaCalSidebar />
      <div className="w-screen">
        <Header />
        <SimulationResult user={user} />
        <CookieConsent variant="small" />
      </div>
    </SidebarProvider>
  );
}
