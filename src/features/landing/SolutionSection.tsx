"use client";

import { Layout } from "@/components/layout";
import { HiArrowRightCircle } from "react-icons/hi2";
import ReactPlayer from "react-player";
import { Section } from "./Section";

export const SolutionSection = () => {
  return (
    <Section className="bg-white mt-10 py-24">
      <Layout>
        <h1 className="flex md:flex-row flex-col justify-center text-2xl lg:text-4xl font-poppins font-semibold">
          Démontrez la fiabilité de votre projet
        </h1>
        <p className="text-primary-foreground text-sm lg:text-lg leading-8 font-rubik mt-6">
          Renseignez les informations concernant votre investissement, <br />
          et consultez vos résultats en quelques secondes
        </p>
        <div id="features" className="flex flex-col lg:flex-row gap-10 pt-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-1/2">
              <ReactPlayer
                className="react-player fixed-bottom mx-auto rounded-3xl overflow-hidden	"
                url="/rentacal_presentation.mp4"
                width="90%"
                height="90%"
                controls={true}
              />
            </div>
            <div className="w-1/2 text-left	max-w-md items-center">
              <h1 className="flex md:flex-row flex-col text-xl lg:text-3xl font-poppins font-semibold">
                Entrez vos informations d'achat
              </h1>
              <p className="text-primary-foreground text-sm lg:text-lg leading-8 font-rubik mt-6">
                Remplissez le formulaire avec les valeurs suivantes:
                <ul className="mt-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <span>
                      <HiArrowRightCircle />
                    </span>
                    Le prix d'achat
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <HiArrowRightCircle />
                    </span>
                    Les frais d'agence
                  </li>
                  <li className="flex items-center gap-2">
                    <span>
                      <HiArrowRightCircle />
                    </span>
                    Les frais de notaire
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </Section>
  );
};
