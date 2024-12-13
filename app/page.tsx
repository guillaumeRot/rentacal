import CTASection from "@/features/landing/CTASection";
import FAQSection from "@/features/landing/FAQSection";
import { FeaturesSection } from "@/features/landing/FeaturesSection";
import { FooterSection } from "@/features/landing/FooterSection";
import { GradientWrapper } from "@/features/landing/GradientWrapper";
import { HeaderSection } from "@/features/landing/HeaderSection";
import { HeroSection } from "@/features/landing/HeroSection";
import VideoSection from "@/features/landing/VideoSection";

export default function Home() {
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
