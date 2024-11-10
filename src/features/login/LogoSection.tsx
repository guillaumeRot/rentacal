import Image from "next/image";
import Link from "next/link";

export const LogoSection = () => {
  return (
    <Link href="/">
      <Image
        src="/icon_title.png"
        width={250}
        height={250}
        alt="rentacal logo"
        className="mt-10 mb-20 mx-auto"
      />
    </Link>
  );
};
