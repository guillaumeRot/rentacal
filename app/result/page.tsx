import { Layout } from "@/components/layout";
import { Header } from "@/features/Header";

export default function Result() {
  return (
    <div>
      <Header />
      <Layout className="max-w-6xl">
        <div id="results">
          <div id="rentabilites">
            <div id="renta_brut"></div>
            <div id="renta_net"></div>
          </div>
          <div id="somme_pret"></div>
          <div id="tableau"></div>
        </div>
        <div id="filters"></div>
      </Layout>
    </div>
  );
}
