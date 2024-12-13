import Image from "next/image";
import { HiArrowRightCircle } from "react-icons/hi2";
import ctaImage from "../../../public/Cover.jpg";

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 pb-0">
      <h1 className="flex flex-col text-center mx-auto text-2xl lg:text-4xl font-poppins font-semibold px-4 max-w-5xl">
        Simplifiez vos calculs, Maximisez vos profits !
      </h1>
      <p className="flex flex-col mx-auto text-primary-foreground text-center text-sm lg:text-lg font-rubik mt-6 px-4 pb-10 max-w-5xl">
        Analysez la rentabilité locative instantanément, sans tableurs
        compliqués.
      </p>
      <div className="custom-screen shadow-sm pt-20">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block hover:scale-[1.05] transition duration-700 ease-in-out">
            <Image
              src={ctaImage}
              className="rounded-lg md:max-w-lg"
              alt="Create Successful Business Models with Our IT Solutions"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Renseignez les coûts d'acquisition
            </h2>
            <p className="mt-3 text-gray-600 text-md">
              L'occasion de tester votre rentabilité suite à votre négociation à
              l'achat !
            </p>
            <p className="mt-6 text-md">Vous pouvez renseigner :</p>
            <ul className="mt-4 flex flex-col gap-2 text-md">
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Le prix d'achat
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Les frais d'agence
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Les frais de notaire
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="custom-screen shadow-sm pt-20">
        <div className="items-center gap-x-12 lg:flex">
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Déclarez les revenus et dépenses prévisionnels
            </h2>
            <p className="mt-3 text-gray-600 text-md">
              Estimez les loyers que vous pourrez reçevoir et les charges que
              vous devrez dépenser, et obtenez votre cashflow mensuel !
            </p>
            <p className="mt-6 text-md">Vous pouvez renseigner :</p>
            <ul className="mt-4 flex flex-col gap-2 text-md">
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Le montant des loyers
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                L'impôt foncier
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Les charges de co-propriété
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                La vacance locative
              </li>
            </ul>
          </div>
          <div className="flex-1 sm:hidden lg:block hover:scale-[1.05] transition duration-700 ease-in-out">
            <Image
              src={ctaImage}
              className="rounded-lg md:max-w-lg"
              alt="Create Successful Business Models with Our IT Solutions"
            />
          </div>
        </div>
      </div>
      <div className="custom-screen shadow-sm pt-20">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block hover:scale-[1.05] transition duration-700 ease-in-out">
            <Image
              src={ctaImage}
              className="rounded-lg md:max-w-lg"
              alt="Create Successful Business Models with Our IT Solutions"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Sans oublier les travaux et le mobilier
            </h2>
            <p className="mt-3 text-gray-600 text-md">
              En attente de négociation, cela peut vous orienter dans le montant
              net vendeur
            </p>
            <p className="mt-6 text-md">Vous pouvez renseigner :</p>
            <ul className="mt-4 flex flex-col gap-2 text-md">
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Le montant des travaux
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Le prix des mobiliers
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="custom-screen shadow-sm pt-20">
        <div className="items-center gap-x-12 lg:flex">
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Simuler votre financement de crédit
            </h2>
            <p className="mt-3 text-gray-600 text-md">
              En attente d'une offre bancaire, vous pourrez simuler votre
              financement
            </p>
            <p className="mt-6 text-md">Vous pouvez renseigner :</p>
            <ul className="mt-4 flex flex-col gap-2 text-md">
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                La durée du prêt
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Le taux du prêt
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Le taux de l'assurance du prêt
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <HiArrowRightCircle size={28} className="text-blue-900" />
                </span>
                Votre apport pour cette opération
              </li>
            </ul>
          </div>
          <div className="flex-1 sm:hidden lg:block hover:scale-[1.05] transition duration-700 ease-in-out">
            <Image
              src={ctaImage}
              className="rounded-lg md:max-w-lg"
              alt="Create Successful Business Models with Our IT Solutions"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
