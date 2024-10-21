import { Layout } from "@/components/layout";
import { Section } from "@/features/landing/Section";
import Image from "next/image";
import Link from "next/link";

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
            className="mx-auto mt-32"
          />

          <Section className="text-center flex flex-row items-center py-16">
            <Layout>
              <div className="flex md:flex-row flex-col justify-center">
                <span className="text-5xl font-poppins font-semibold">
                  Calculez votre&nbsp;
                </span>
                <span className="text-5xl font-poppins font-semibold text-secondary-foreground">
                  rentabilité
                </span>
              </div>
              <span className="text-5xl font-poppins font-semibold pt-4">
                en quelques secondes
              </span>
            </Layout>
          </Section>

          <Link
            href="/simulateur"
            className="mx-auto bg-accent text-accent-foreground px-4 py-3 rounded-3xl"
          >
            Accéder au simulateur
          </Link>
        </Layout>
      </div>
    </>
  );
}
