import { currentUser } from "@/auth/current-user";
import CTASection from "@/features/landing/CTASection";
import FAQSection from "@/features/landing/FAQSection";
import { FeaturesSection } from "@/features/landing/FeaturesSection";
import { FooterSection } from "@/features/landing/FooterSection";
import { GradientWrapper } from "@/features/landing/GradientWrapper";
import { HeaderSection } from "@/features/landing/HeaderSection";
import { HeroSection } from "@/features/landing/HeroSection";
import VideoSection from "@/features/landing/VideoSection";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  console.log("test gui:", user);

  if (user) {
    redirect(`/simulateur`);
  } else {
    return (
      <>
        <HeaderSection />
        <HeroSection />
        <VideoSection />
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
