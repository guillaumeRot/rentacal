import { Layout } from "@/components/layout";
import { Section } from "./Section";

export const SolutionSection = () => {
  return (
    <Section className="bg-white mt-10 py-20">
      <Layout className="text-2xl lg:text-4xl font-poppins font-semibold">
        <h1 className="flex md:flex-row flex-col justify-center">
          Démontrer la fiabilité de votre projet
        </h1>
      </Layout>
    </Section>
  );
};
