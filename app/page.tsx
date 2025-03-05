"use client";

import { Card } from "@/components/ui/card";
import CTASection from "@/features/landing/CTASection";
import FAQSection from "@/features/landing/FAQSection";
import { FeaturesSection } from "@/features/landing/FeaturesSection";
import { FooterSection } from "@/features/landing/FooterSection";
import { GradientWrapper } from "@/features/landing/GradientWrapper";
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
        <Card className="rounded-3xl bg-blue-50 m-5">
          <HeaderSection />
          <HeroSection />
        </Card>
        {/* <VideoSection /> */}
        <GradientWrapper>
          <FeaturesSection />
        </GradientWrapper>
        <CTASection />
        <FAQSection />
        <FooterSection />
      </>
    );
  }
}
