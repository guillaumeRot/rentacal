import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rentacal - Simulateur de rentabilité immobilière",
  description:
    "Rentacal, votre outil en ligne pour calculer la rentabilité brute, nette et le cashflow brut de vos investissements immobiliers. Évaluez vos projets simplement et efficacement.",
  keywords:
    "simulateur rentabilité immobilière, calcul rentabilité brute, cashflow brut, investissement immobilier, calcul financier, Rentacal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <title>Rentacal - Simulateur de rentabilité immobilière</title>

        <meta
          name="description"
          content="Rentacal, votre outil en ligne pour calculer la rentabilité brute, nette et le cashflow brut de vos investissements immobiliers. Évaluez vos projets simplement et efficacement."
        />
        <meta
          name="keywords"
          content="simulateur rentabilité immobilière, calcul rentabilité brute, cashflow brut, investissement immobilier, calcul financier, Rentacal"
        />
        <meta name="author" content="Rentacal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Rentacal - Simulateur de rentabilité immobilière"
        />
        <meta
          property="og:description"
          content="Rentacal est l'outil idéal pour calculer rapidement la rentabilité brute, nette et le cashflow brut de vos investissements immobiliers. Planifiez vos projets en toute sérénité."
        />
        <meta
          property="og:image"
          content="https://rentacal.vercel.app/images/logo.png"
        />
        <meta property="og:url" content="https://rentacal.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rentacal - Simulateur de rentabilité immobilière"
        />
        <meta
          name="twitter:description"
          content="Utilisez Rentacal pour calculer la rentabilité brute, nette et le cashflow brut de vos projets immobiliers. Simple, rapide et efficace."
        />
        <meta
          name="twitter:image"
          content="https://rentacal.vercel.app/images/logo.png"
        />
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="c222e0c9-bdea-4568-aa72-6abf53e949f1"
        />
      </head>
      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <meta name="apple-mobile-web-app-title" content="RentaCal" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <meta
        name="google-site-verification"
        content="G1YkKpuhjDX5Qd__p-y-2W3p1nO5AEqwiZj8tYf30o0"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
        <body className={`cn(inter.className, "h-full") md:overflow-visible`}>
          <Providers>{children}</Providers>
          <GoogleAnalytics gaId="G-CJ6SFG2EWQ" />
        </body>
      </html>
    </>
  );
}
