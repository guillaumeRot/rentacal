import { Layout } from "@/components/layout";
import { AccessSection } from "@/features/landing/AccessSection";
import { HeaderSection } from "@/features/landing/HeaderSection";
import { SubtitleSection } from "@/features/landing/SubtitleSection";
import { TitleSection } from "@/features/landing/TitleSection";
import VideoPresentation from "@/features/landing/VideoPresentation";

export default function Home() {
  return (
    <div>
      <Layout>
        <HeaderSection />
        <TitleSection />
        <SubtitleSection />
        <AccessSection />
        <VideoPresentation />
      </Layout>
    </div>
  );
}
