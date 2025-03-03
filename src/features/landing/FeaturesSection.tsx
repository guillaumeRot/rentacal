import Image from "next/image";
import { HiArrowRightCircle } from "react-icons/hi2";

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 pb-0">
      <h1 className="flex flex-col text-center mx-auto text-2xl lg:text-4xl font-poppins font-semibold px-4 max-w-5xl">
        Simplifiez vos calculs, maximisez vos profits !
      </h1>
      <p className="flex flex-col mx-auto text-primary-foreground text-center text-sm lg:text-lg font-rubik mt-6 px-4 pb-10 max-w-5xl">
        Analysez la rentabilité locative instantanément, sans tableurs
        compliqués.
      </p>
      <div className="custom-screen shadow-xs pt-20">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block hover:scale-[1.05] transition duration-700 ease-in-out">
            <Image
              src="/filtres-rentacal.png"
              layout="responsive"
              width={100}
              height={75}
              className="w-full h-auto rounded-lg md:max-w-lg"
              alt="Analysez la rentabilité locative instantanément"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Entrez les détails de votre projet immobilier.
            </h2>
            <p className="mt-3 text-gray-600 text-md">
              Renseignez rapidement les informations clés de votre projet grâce
              à une interface intuitive qui vous guide pas à pas.
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-md">
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Saisie intuitive des données (achat, charges, loyers).
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Gestion des scénarios : testez plusieurs hypothèses (loyer
                optimiste/pessimiste).
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Calcul automatique des frais annexes (notaire, gestion
                locative).
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="custom-screen shadow-xs pt-20">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block hover:scale-[1.05] transition duration-700 ease-in-out">
            <Image
              src="/resultats-rentacal.png"
              layout="responsive"
              width={100}
              height={75}
              className="w-full h-auto rounded-lg md:max-w-lg"
              alt="Entrez les détails de votre projet immobilier"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Obtenez une analyse détaillée de la rentabilité locative.
            </h2>
            <p className="mt-3 text-gray-600 text-md">
              Découvrez instantanément tous les indicateurs essentiels pour
              évaluer la rentabilité de votre investissement.
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-md">
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Calcul automatique du rendement brut et net.
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Simulation du cash-flow mensuel selon différents scénarios.
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Analyse des taux d’emprunt et des durées de crédit.
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Graphiques et visualisations pour comprendre vos résultats en un
                clin d’œil.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
