import { Layout } from "@/components/layout";
import { Header } from "@/features/Header";
import { FilterFields } from "@/features/simulator/FilterFields";

export default function Home() {
  return (
    <div className="bg-secondary">
      <Header />
      <Layout>
        <FilterFields />
      </Layout>
    </div>
  );
}
