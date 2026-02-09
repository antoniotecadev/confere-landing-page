import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ProblemSection from "@/components/ProblemSection";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import ComparisonTable from "@/components/ComparisonTable";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBadges />
      <ProblemSection />
      <SocialProof />
      <Features />
      <HowItWorks />
      <Impact />
      <ComparisonTable />
      <FAQ />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
