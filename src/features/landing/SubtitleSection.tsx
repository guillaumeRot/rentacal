import { Layout } from "@/components/layout";

export const SubtitleSection = () => {
  return (
    <div>
      <Layout className="mx-auto w-full max-w-(--breakpoint-xl) flex flex-row justify-center text-center px-8 lg:px-28 pt-3 text-primary-foreground text-sm lg:text-lg leading-8 font-rubik">
        Simulez vos revenus locatifs et vos charges en toute simplicité. Prenez
        des décisions éclairées pour optimiser vos investissements.
      </Layout>
    </div>
  );
};
