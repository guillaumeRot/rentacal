import { Layout } from "@/components/layout";
import { Section } from "./Section";

export const TitleSection = () => {
  return (
    <Section className="px-4 pt-12 lg:px-12">
      <Layout className="text-4xl lg:text-6xl font-poppins font-semibold">
        <h1 className="flex md:flex-row flex-col justify-center">
          <span>Calculez votre&nbsp;</span>
          <span className="text-secondary-foreground">rentabilité</span>
        </h1>
        <span className="pt-1">en quelques secondes</span>
      </Layout>
    </Section>
  );
};
