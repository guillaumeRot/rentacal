import { Layout } from "@/components/layout";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="w-full border-b border-border bg-popover">
      <Layout>
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
