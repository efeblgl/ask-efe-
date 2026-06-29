import Loader from "@/components/Loader";
import RevealInit from "@/components/RevealInit";
import Nav from "@/components/Nav";
import HeroSection from "@/components/HeroSection";
import MemorySection from "@/components/MemorySection";
import ProofSection from "@/components/ProofSection";
import PipelineSection from "@/components/PipelineSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import AiDemoSection from "@/components/AiDemoSection";
import ProjectsSection from "@/components/ProjectsSection";
import StackSection from "@/components/StackSection";
import ServicesSection from "@/components/ServicesSection";
import WhySection from "@/components/WhySection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TimelineSection from "@/components/TimelineSection";
import Manifesto from "@/components/Manifesto";
import LinksSection from "@/components/LinksSection";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <RevealInit />

      <div className="top-line" />
      <div className="scan-line" />
      <div className="orb-glow" />

      <div className="page">
        <Nav />
        <main>
          <HeroSection />
          <MemorySection />
          <ProofSection />
          <PipelineSection />
          <CaseStudiesSection />
          <AiDemoSection />
          <ProjectsSection />
          <StackSection />
          <ServicesSection />
          <WhySection />
          <BeforeAfterSection />
          <TimelineSection />
          <Manifesto />
          <LinksSection />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
