"use client";

import { Card } from "@/components/ui/card";
import CTASection from "@/features/landing/CTASection";
import FAQSection from "@/features/landing/FAQSection";
import { FeaturesSection } from "@/features/landing/FeaturesSection";
import { FooterSection } from "@/features/landing/FooterSection";
import { HeaderSection } from "@/features/landing/HeaderSection";
import { HeroSection } from "@/features/landing/HeroSection";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Home() {
  const session = useSession();

  if (session.data?.user) {
    redirect(`/simulateur`);
  } else {
    return (
      <>
        <Card className="rounded-b-3xl rounded-t-none bg-linear-to-b from-blue-400 to-sky-200 relative overflow-hidden">
          <HeaderSection />
          <HeroSection />
          <div className="fade-out" />
        </Card>
        {/* <VideoSection /> */}
        {/* <GradientWrapper> */}
        <FeaturesSection />
        {/* </GradientWrapper> */}
        <CTASection />
        <FAQSection />
        <FooterSection />
      </>
    );
  }
}
