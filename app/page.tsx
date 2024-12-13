import { FeaturesSection } from "@/features/landing/FeaturesSection";
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
        {/* <Features />
        <ToolKit /> */}
      </GradientWrapper>
    </>
    // <div>
    //   <Layout>

    //     {/* <TitleSection />
    //     <SubtitleSection />
    //     <AccessSection />
    //     <VideoPresentation /> */}
    //   </Layout>
    // </div>
  );
}
