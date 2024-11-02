import { Layout } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import { SidebarTrigger } from "./theme/SidebarTrigger";

export const Header = () => {
  return (
    <header className="w-full border-b border-border bg-popover flex">
      <SidebarTrigger />
      <Layout className="pb-2 pt-2">
        <div className="mx-auto">
          <Link href="/">
            <Image
              src="/icon_title.png"
              width={250}
              height={250}
              alt="rentacal logo"
            />
          </Link>
        </div>
      </Layout>
    </header>
  );
};
