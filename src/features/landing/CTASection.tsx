"use client";

import Link from "next/link";
import { Component } from "react";

export default class CTASection extends Component {
  render() {
    return (
      <section className="py-16 bg-gradient-to-r from-blue-900 via-sky-600 to-blue-900">
        <div className="custom-screen">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="flex md:flex-row flex-col justify-center text-5xl sm:text-4xl font-poppins font-semibold px-4">
              Peu importe ton profil, lance un SaaS rentable dès maintenant.
            </h1>
            <p className="flex md:flex-row flex-col justify-center text-sm lg:text-lg font-rubik mt-6 px-4 text-center pb-10">
              Tu as juste besoin d’une méthode claire, enseignée par les bonnes
              <br />
              personnes pour réussir là où les autres échouent.
            </p>

            <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-5">
              <Link
                href="/simulateur"
                className="py-2.5 px-4 text-center rounded-lg duration-150 text-sky-600 text-bold text-lg bg-white mb-5 hover:ring ring-transparent ring-offset-2 transition"
              >
                Essayer le simulateur maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
