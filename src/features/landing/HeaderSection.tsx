"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signInAction } from "../auth/auth.action";

export const HeaderSection = () => {
  const [state, setState] = useState(false);

  const navigation = [
    { title: "Fonctionnalités", path: "#features" },
    { title: "FAQ", path: "#faq" },
    { title: "S'inscrire", path: "/auth/signup" },
  ];

  useEffect(() => {
    // Fonction pour fermer le menu
    const handleState = () => {
      document.body.classList.remove("overflow-hidden");
      setState(false);
    };

    // Gestion des événements de navigation
    const handleNavigation = () => {
      handleState();
    };

    // Écoutez les changements d'URL (côté client uniquement)
    window.addEventListener("popstate", handleNavigation);

    // Nettoyez les écouteurs lors du démontage
    return () => {
      window.removeEventListener("popstate", handleNavigation);
    };
  }, []);

  const handleNavMenu = () => {
    setState(!state);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <header>
      <nav
        className={`w-full md:static md:text-sm ${
          state ? "fixed z-10 h-full bg-white" : ""
        }`}
      >
        <div className="custom-screen items-center mx-auto md:flex">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="flex flex-row items-center">
              <Image
                src="/logo.webp"
                width={60}
                height={60}
                alt="rentacal logo"
              />
              <span className="text-3xl ml-3 text-white">Rentacal</span>
            </Link>
            <div className="md:hidden">
              <button
                role="button"
                aria-label="Open the menu"
                className="text-white hover:text-white"
                onClick={handleNavMenu}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 pb-3 mt-8 md:pb-0 md:mt-0 md:block ${
              state ? "" : "hidden"
            }`}
          >
            <ul className="text-white justify-end items-center space-y-6 lg:flex lg:space-x-6 lg:space-y-0 md:font-medium">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="duration-150 hover:text-blue-800">
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              <li>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm mt-5">
                  <Link
                    href="#"
                    onClick={() => {
                      signInAction();
                    }}
                    className="py-2.5 px-4 text-center rounded-full duration-150 text-white text-bold text-md bg-blue-700 mb-5 hover:bg-blue-700 hover:ring-3 ring-transparent ring-offset-2 transition"
                  >
                    Se connecter
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
