"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export const HeroSection = () => {
  return (
    <section>
      <div className="custom-screen font-poppins">
        <div className="space-y-5 max-w-6xl mx-auto text-center">
          <Card className="rounded-3xl border-2 border-blue-500 bg-blue-50 text-blue-500 max-w-3xs lg:max-w-sm mx-auto my-10 text-xs lg:text-sm py-2 px-3">
            Par un investisseur, pour les investisseurs !
          </Card>
          <h1 className="text-4xl text-white font-semibold mx-auto sm:text-6xl">
            Calculez votre{" "}
            <span className="relative text-blue-700">rentabilité locative</span>
          </h1>
          <h1 className="text-4xl text-white font-semibold mx-auto sm:text-6xl">
            en quelques secondes
          </h1>

          <p className="max-w-xl mx-auto pt-6 text-white">
            Simulez vos revenus locatifs et vos charges en toute simplicité.
            Découvrez la rentabilité réelle de votre projet immobilier en
            quelques clics et investissez intelligemment
          </p>
          <div className="flex items-center justify-center gap-x-3 font-medium text-sm pt-4">
            <Link
              href="#"
              onClick={() => {
                redirect(`/simulateur`);
              }}
              className="py-3 px-6 text-center rounded-full duration-150 text-white text-semibold text-lg bg-blue-700 mb-5 hover:bg-blue-700 hover:ring-3 ring-transparent ring-offset-2 transition"
            >
              Simulez votre rentabilité !
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Image
          src="/screen-rentacal.png"
          width={1000}
          height={1000}
          alt="rentacal screenshot"
          className="mx-auto mt-10 px-2"
        />
      </div>
    </section>
  );
};
