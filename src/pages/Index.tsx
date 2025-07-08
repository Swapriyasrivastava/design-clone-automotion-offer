
import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WallOfLove from "@/components/WallOfLove";
import BenefitsSection from "@/components/BenefitsSection";
import ScheduleSection from "@/components/ScheduleSection";
import AIToolsSection from "@/components/AIToolsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import InstructorSection from "@/components/InstructorSection";
import CTASection from "@/components/CTASection";
import FloatingCards from "@/components/FloatingCards";
import CertificateSection from "@/components/CertificateSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <TopBanner />
      <Navbar />
      <HeroSection />
      <WallOfLove />
      <BenefitsSection />
      <ScheduleSection />
      <AIToolsSection />
      <TargetAudienceSection />
      <InstructorSection />
      <CTASection />
      <FloatingCards />
      <CertificateSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
