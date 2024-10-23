import Image from "next/image";

export const LogoSection = () => {
  return (
    <Image
      src="/icon_title.png"
      width={150}
      height={150}
      alt="rentacal logo"
      className="mx-auto mt-14"
    />
  );
};
