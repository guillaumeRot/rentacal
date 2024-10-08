import { Layout } from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Layout>
        <Link
          href="/simulator"
          className="mx-auto bg-muted text-muted-foreground px-4 py-3"
        >
          Accéder au simulateur
        </Link>
      </Layout>
    </div>
  );
}
