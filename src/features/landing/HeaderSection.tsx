import Image from "next/image";
import Link from "next/link";

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
        <Link
          href={"/login"}
          className="w-1/2 bg-accent text-accent-foreground px-8 py-2 rounded-full text-sm hover:bg-[rgba(85,137,195,1)]"
        >
          Se connecter
          {/* <IoArrowForwardCircle size={25} className="ml-3" /> */}
        </Link>
      </div>
    </div>
  );
};
