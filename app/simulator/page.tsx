import { Layout } from "@/components/layout";
import { Header } from "@/features/Header";
import { FilterFields } from "@/features/simulator/FilterFields";

export default function Simulator() {
  return (
    <div>
      <Header />
      <Layout>
        <FilterFields />
      </Layout>
    </div>
  );
}
