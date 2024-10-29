"use client";

import Link from "next/link";
import { IoArrowForwardCircle } from "react-icons/io5";

export const AccessSection = () => {
  return (
    <div className="mx-auto w-fullw-1/2 px-8 py-4">
      <Link
        href={"/simulateur"}
        className="bg-accent text-accent-foreground mx-auto px-8 py-4 mt-4 rounded-full font-poppins text-base flex hover:bg-[rgba(85,137,195,1)]"
      >
        Accéder au simulateur
        <IoArrowForwardCircle size={25} className="ml-3" />
      </Link>
    </div>
  );
};
