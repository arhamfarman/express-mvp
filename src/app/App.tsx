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

      {/* Koalendar Integration Modal */}
      {isCalendlyOpen && (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
          <div className="bg-background rounded-2xl sm:rounded-3xl w-full max-w-4xl h-[85vh] sm:h-[80vh] flex flex-col overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-4 border-b border-border/50 bg-background/50 backdrop-blur-sm">
              <h2 className="font-semibold text-lg">Book Strategy Call</h2>
              <button
                onClick={() => setIsCalendlyOpen(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 bg-white">
              <iframe
                src="https://koalendar.com/e/free-30-minute-mvp-strategy-call?embed=true"
                width="100%"
                height="100%"
                frameBorder="0"
                title="Koalendar Scheduling"
                style={{ minHeight: '600px' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}