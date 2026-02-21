import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import SocialProofSection from "@/components/SocialProofSection";
import RecipesSection from "@/components/RecipesSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import StickyCTA from "@/components/StickyCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <BenefitsSection />
      <SocialProofSection />
      <RecipesSection />
      <OfferSection />
      <FAQSection />
      <FooterSection />
      <StickyCTA />
    </main>
  );
};

export default Index;
