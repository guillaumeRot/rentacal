import { Layout } from "@/components/layout";
import { LoggedInButton } from "@/features/auth/LoggedInButton";
import { LogoSection } from "@/features/login/LogoSection";

export default function Connexion() {
  return (
    <div>
      <Layout>
        <LogoSection />
        <LoggedInButton />
      </Layout>
    </div>
  );
}
