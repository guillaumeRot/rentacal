"use client";

import Link from "next/link";
import { signInAction } from "./auth.action";

export const SignInButton = () => {
  return (
    <Link
      href="#"
      onClick={() => {
        signInAction();
      }}
      className="font-poppins py-2.5 px-4 text-center rounded-full text-white text-sm bg-blue-700 hover:bg-blue-600"
    >
      Se connecter
    </Link>
  );
};
