import { AccessSection } from "@/features/landing/AccessSection";
import { HeaderSection } from "@/features/landing/HeaderSection";
import { SolutionSection } from "@/features/landing/SolutionSection";
import { SubtitleSection } from "@/features/landing/SubtitleSection";
import { TitleSection } from "@/features/landing/TitleSection";
import VideoPresentation from "@/features/landing/VideoPresentation";

export default function Home() {
  return (
    <div className="gap-8 w-full flex-col flex mx-auto font-poppins">
      <HeaderSection />
      <TitleSection />
      <SubtitleSection />
      <AccessSection />
      <VideoPresentation />
      <SolutionSection />
    </div>
  );
}
