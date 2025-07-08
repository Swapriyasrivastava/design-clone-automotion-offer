
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WallOfLove from "@/components/WallOfLove";
import BenefitsSection from "@/components/BenefitsSection";
import FloatingCards from "@/components/FloatingCards";
import AIToolsSection from "@/components/AIToolsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import InstructorSection from "@/components/InstructorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PricingSticky from "@/components/PricingSticky";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Navbar />
      <HeroSection />
      <WallOfLove />
      <BenefitsSection />
      <FloatingCards />
      <AIToolsSection />
      <TargetAudienceSection />
      <InstructorSection />
      <CTASection />
      <Footer />
      <PricingSticky />
    </div>
  );
};

export default Index;
