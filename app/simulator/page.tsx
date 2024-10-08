import { Layout } from "@/components/layout";
import { Header } from "@/features/Header";

export default function Home() {
  return (
    <div className="bg-secondary">
      <Header />
      <Layout>
        <div className="ml-2">Test GUI</div>
      </Layout>
    </div>
  );
}
