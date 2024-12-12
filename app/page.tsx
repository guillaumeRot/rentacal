import { HeaderSection } from "@/features/landing/HeaderSection";
import { HeroSection } from "@/features/landing/HeroSection";
import VideoSection from "@/features/landing/VideoSection";

export default function Home() {
  return (
    <>
      <HeaderSection />
      <HeroSection />
      <VideoSection />
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
