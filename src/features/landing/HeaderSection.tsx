"use client";

import Image from "next/image";
import { SignInButton } from "../auth/SignInButton";

export const HeaderSection = () => {
  return (
    <div className="mt-6 mb-20 grid grid-cols-2">
      <Image
        src="/icon_title.png"
        width={150}
        height={150}
        alt="rentacal logo"
      />
      <div className="justify-self-end">
        <SignInButton />
      </div>
    </div>
  );
};
