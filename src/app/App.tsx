import { useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';
import { Navigation } from './components/navigation';
import { HeroSection } from './components/hero-section';
import { BentoGridSection } from './components/bento-grid-section';
import { WhatWeBuildSection } from './components/what-we-build-section';
import { HowItWorksSection } from './components/how-it-works-section';
import { ComparisonSection } from './components/comparison-section';
import { PricingSection } from './components/pricing-section';
import { FAQSection } from './components/faq-section';
import { CTASection } from './components/cta-section';
import { Footer } from './components/footer';

export default function App() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    const handleOpenCalendly = () => setIsCalendlyOpen(true);
    window.addEventListener('openCalendly', handleOpenCalendly);
    return () => window.removeEventListener('openCalendly', handleOpenCalendly);
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <BentoGridSection />
        <WhatWeBuildSection />
        <HowItWorksSection />
        <ComparisonSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />

      {/* Calendly Integration */}
      <PopupModal
        url="https://calendly.com/express-mvp-demo/strategy-call"
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById('root') || document.body}
        pageSettings={{
          backgroundColor: 'F3F5EF',  // Brand background
          textColor: '0D3127',        // Forest green text
          primaryColor: 'BCE953'      // Lime accent buttons
        }}
      />
    </div>
  );
}