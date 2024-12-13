import Link from "next/link";

export const HeroSection = () => {
  return (
    <section>
      <div className="custom-screen pt-28 text-gray-600 font-poppins">
        <div className="space-y-5 max-w-6xl mx-auto text-center">
          <h1 className="text-4xl text-gray-800 font-semibold mx-auto sm:text-6xl">
            Calculez votre{" "}
            <span className="relative text-blue-800">rentabilité locative</span>
          </h1>
          <h1 className="text-4xl text-gray-800 font-semibold mx-auto sm:text-6xl">
            en quelques secondes
          </h1>

          <p className="max-w-xl mx-auto pt-6">
            Simulez vos revenus locatifs et vos charges en toute simplicité.
            Découvrez la rentabilité réelle de votre projet immobilier en
            quelques clics et investissez intelligemment
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm pt-4">
            <Link
              href="/simulateur"
              className="py-2.5 px-4 text-center rounded-lg duration-150 text-white text-semibold text-lg bg-blue-900 mb-5 hover:bg-blue-800 hover:ring ring-transparent ring-offset-2 transition"
            >
              Simulez votre rentabilité !
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
