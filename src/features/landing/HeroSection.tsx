import Link from "next/link";

export const HeroSection = () => {
  return (
    // <Section className="text-center flex flex-row items-center">
    //   <Layout className="text-4xl lg:text-6xl font-poppins font-semibold">
    //     <div className="flex md:flex-row flex-col justify-center">
    //       <span>Calculez votre&nbsp;</span>
    //       <span className="text-secondary-foreground">rentabilité</span>
    //     </div>
    //     <span className="pt-4">en quelques secondes</span>
    //   </Layout>
    // </Section>

    <section>
      <div className="custom-screen py-28 text-gray-600 font-poppins">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-semibold mx-auto sm:text-6xl">
            Calculez votre{" "}
            <span className="relative text-blue-800">rentabilité</span>
          </h1>
          <h1 className="text-4xl text-gray-800 font-semibold mx-auto sm:text-6xl">
            en quelques secondes
          </h1>

          <p className="max-w-xl mx-auto mt-4">
            Simulez vos revenus locatifs et vos charges en toute simplicité.
            Prenez des décisions éclairées pour optimiser vos investissements.
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
            <Link
              href="/simulateur"
              className="py-2.5 px-4 text-center rounded-lg duration-150 text-white text-bold text-lg bg-blue-900 mb-5 hover:bg-blue-800 hover:ring ring-transparent ring-offset-2 transition"
            >
              Accéder au simulateur gratuitement
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
