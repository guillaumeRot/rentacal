import { Layout } from "@/components/layout";
import { Section } from "@/features/landing/Section";
import VideoPresentation from "@/features/landing/VideoPresentation";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div>
        <Layout>
          <Image
            src="/icon_title.png"
            width={150}
            height={150}
            alt="rentacal logo"
            className="mx-auto mt-14"
          />

          <Section className="text-center flex flex-row items-center">
            <Layout>
              <div className="flex md:flex-row flex-col justify-center">
                <span className="text-4xl lg:text-6xl font-poppins font-semibold">
                  Calculez votre&nbsp;
                </span>
                <span className="text-4xl lg:text-6xl font-poppins font-semibold text-secondary-foreground">
                  rentabilité
                </span>
              </div>
              <span className="text-4xl lg:text-6xl font-poppins font-semibold pt-4">
                en quelques secondes
              </span>
            </Layout>
          </Section>

          <div>
            <Layout className="mx-auto w-full max-w-screen-xl flex flex-row justify-center text-center px-8 pt-3 text-primary-foreground text-sm lg:text-lg leading-8 font-rubik">
              RentaCal permet d'évaluer la rentabilité de votre projet
              immobilier en quelques clics. Simulez vos revenus locatifs et vos
              charges en toute simplicité. Prenez des décisions éclairées pour
              optimiser vos investissements.
            </Layout>
          </div>

          <Link
            href="/simulateur"
            className="mx-auto bg-accent text-accent-foreground px-8 py-4 rounded-full font-poppins text-base flex hover:bg-[rgba(85,137,195,1)]"
          >
            Accéder au simulateur
            <IoArrowForwardCircle size={25} className="ml-3" />
          </Link>

          <VideoPresentation />
        </Layout>
      </div>
    </>
  );
}
