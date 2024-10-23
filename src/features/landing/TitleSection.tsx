import { Layout } from "@/components/layout";
import { Section } from "./Section";

export const TitleSection = () => {
  return (
    <Section className="text-center flex flex-row items-center">
      <Layout className="text-4xl lg:text-6xl font-poppins font-semibold">
        <div className="flex md:flex-row flex-col justify-center">
          <span>Calculez votre&nbsp;</span>
          <span className="text-secondary-foreground">rentabilité</span>
        </div>
        <span className="pt-4">en quelques secondes</span>
      </Layout>
    </Section>
  );
};
