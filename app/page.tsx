import { Layout } from "@/components/layout";
import { AccessSection } from "@/features/landing/AccessSection";
import { LogoSection } from "@/features/landing/LogoSection";
import { SubtitleSection } from "@/features/landing/SubtitleSection";
import { TitleSection } from "@/features/landing/TitleSection";
import VideoPresentation from "@/features/landing/VideoPresentation";

export default function Home() {
  return (
    <>
      <div>
        <Layout>
          <LogoSection />
          <TitleSection />
          <SubtitleSection />
          <AccessSection />
          <VideoPresentation />
        </Layout>
      </div>
    </>
  );
}
