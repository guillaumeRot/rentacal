"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  return (
    <div>
      <Image
        src="/icon_title.png"
        width={300}
        height={300}
        alt="rentacal logo"
        className="mx-auto py-14"
      />
      <div className="flex items-center justify-center mx-auto">
        <Card className="rounded-3xl px-8">
          <CardHeader>
            <CardTitle className="text-2xl">Connexion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <button
                key="Google"
                onClick={() => signIn("google")}
                className="px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all bg-white text-black border border-gray-300 hover:bg-gray-100"
              >
                <span className="flex items-center gap-2">
                  <FcGoogle className="text-2xl" />
                  Continuer avec Google
                </span>
              </button>

              <button
                key="LinkedIn"
                onClick={() => signIn("linkedin")}
                className="px-4 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all bg-blue-600 text-white hover:bg-blue-700"
              >
                <span className="flex items-center gap-2">
                  <FaLinkedin className="text-2xl" />
                  Continuer avec LinkedIn
                </span>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
