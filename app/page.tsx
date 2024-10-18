import { Layout } from "@/components/layout";
import { Section } from "@/features/landing/Section";
import Image from "next/image";
import Link from "next/link";
import background from "../public/background.png";

export default function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="h-screen bg-hero bg-[url('../public/background.png')]"
      >
        <Layout>
          <Image
            src="/icon_title.png"
            width={150}
            height={150}
            alt="rentacal logo"
            className="mx-auto mt-32 bg-white"
          />

          <Section className="text-center flex flex-row items-center py-16">
            <Layout>
              <div className="flex md:flex-row flex-col justify-center">
                <span className="text-4xl font-bold">Le portfolio des</span>
                <span className="text-4xl font-bold px-4 py-2 mx-4 rotate-8 bg-secondary text-secondary-foreground text-5xl">
                  rédacteurs
                </span>
              </div>
              <span className="text-4xl font-bold text-muted-foreground underline">
                en 2 minutes
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
