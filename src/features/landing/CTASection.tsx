"use client";

import Link from "next/link";
import { Component } from "react";
import { signInAction } from "../auth/auth.action";

export default class CTASection extends Component {
  render() {
    return (
      <section className="py-16 bg-linear-to-r from-blue-600 via-sky-500 to-blue-600">
        <div className="custom-screen">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="flex md:flex-row flex-col justify-center text-4xl sm:text-5xl font-poppins font-semibold px-4">
              Prenez le contrôle de vos investissements immobiliers !
            </h1>
            <p className="flex md:flex-row flex-col justify-center text-sm lg:text-lg font-rubik mt-6 px-4 text-center pb-10">
              Commencez à maximiser la rentabilité de vos projets grâce à
              Rentacal. <br />
              Simulez et analysez pour investir en toute confiance.
            </p>

            <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-5">
              <Link
                href="#"
                onClick={() => {
                  signInAction();
                }}
                className="py-3 px-6 text-center rounded-full duration-150 text-sky-600 text-bold text-lg bg-white mb-5 hover:ring-3 ring-transparent ring-offset-2 transition"
              >
                Essayez Rentacal gratuitement !
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
