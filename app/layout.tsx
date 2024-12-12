import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rentacal",
  description: "Calculateur de rentabilité immobilière",
  // metadataBase: new URL(getServerUrl()),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <Html className='scroll-smooth' lang='en' suppressHydrationWarning>
    //   <Head />
    //   <body className='md:overflow-visible'>
    //     <Main />
    //     <NextScript />
    //   </body>
    // </Html>

    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className={`cn(inter.className, "h-full") md:overflow-visible`}>
        <Providers>{children}</Providers>
        <GoogleAnalytics gaId="G-CJ6SFG2EWQ" />
      </body>
    </html>
  );
}
