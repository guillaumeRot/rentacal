"use client";

import { Layout } from "@/components/layout";
import Image from "next/image";
import { SignInButton } from "../auth/SignInButton";

export const HeaderSection = () => {
  return (
    <Layout className="mt-6 mb-20 grid grid-cols-2">
      <Image
        src="/icon_title.png"
        width={150}
        height={150}
        alt="rentacal logo"
      />
      <div className="justify-self-end">
        <SignInButton />
      </div>
    </Layout>
  );
};
