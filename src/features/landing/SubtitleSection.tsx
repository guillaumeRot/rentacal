import { Layout } from "@/components/layout";
import { Section } from "./Section";

export const SubtitleSection = () => {
  return (
    <Section className="px-4 lg:px-12">
      <Layout className="mx-auto w-full max-w-4xl flex flex-row justify-center text-center px-8 lg:px-28 text-primary-foreground text-sm lg:text-lg leading-8 font-rubik">
        Simulez vos revenus locatifs et vos charges en toute simplicité.
        <br />
        Prenez des décisions éclairées pour optimiser vos investissements.
      </Layout>
    </Section>
  );
};
