import { Layout } from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Layout>
        <Link
          href="/simulator"
          className="mx-auto bg-accent text-accent-foreground px-4 py-3 rounded-xl"
        >
          Accéder au simulateur
        </Link>
      </Layout>
    </div>
  );
}
