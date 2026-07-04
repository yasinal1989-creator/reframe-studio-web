"use client";

import { AudienceSection } from "./AudienceSection";
import { ContactSection } from "./ContactSection";
import { FlowSection } from "./FlowSection";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { Navigation } from "./Navigation";
import { PilotSection } from "./PilotSection";
import { ProblemSection } from "./ProblemSection";
import { ProcessSection } from "./ProcessSection";
import { ServicesSection } from "./ServicesSection";

export function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-cream">
      <div className="pointer-events-none fixed inset-0 z-0 bg-radial-amber opacity-80" />
      <div className="pointer-events-none fixed inset-0 z-0 ambient-grid opacity-35" />
      <Navigation />
      <Hero />
      <ProblemSection />
      <ServicesSection />
      <FlowSection />
      <AudienceSection />
      <PilotSection />
      <ProcessSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
