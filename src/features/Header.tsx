import Image from "next/image";
import Link from "next/link";
import { LoggedInButton } from "./auth/LoggedInButton";
import { SidebarTrigger } from "./theme/SidebarTrigger";

export const Header = () => {
  return (
    <header className="w-full border-b border-border bg-popover flex">
      <SidebarTrigger />
      <div className="grid grid-cols-3 grow pb-3 pt-3 px-14">
        <Link href="/" className="mx-auto col-start-2">
          <Image
            src="/icon_title.png"
            width={250}
            height={250}
            alt="rentacal logo"
          />
        </Link>
        <div className="justify-self-end grid items-center">
          <LoggedInButton />
        </div>
      </div>
    </header>
  );
};
