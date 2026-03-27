import { HeroSection } from "./components/HeroSection";
import { UniversityBanner } from "./components/UniversityBanner";
import { ConceptSection } from "./components/ConceptSection";
import { CurriculumSection } from "./components/CurriculumSection";
import { FounderStorySection } from "./components/FounderStorySection";
import { FooterCTA } from "./components/FooterCTA";

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <UniversityBanner />
      <ConceptSection />
      <CurriculumSection />
      <FounderStorySection />
      <FooterCTA />
    </div>
  );
}