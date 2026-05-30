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
import { ServicePage } from './components/service-page';

export default function App() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleOpenCalendly = () => setIsCalendlyOpen(true);
    window.addEventListener('openCalendly', handleOpenCalendly);
    return () => window.removeEventListener('openCalendly', handleOpenCalendly);
  }, []);

  // Listen to popstate event (browser back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync route and SEO tags
  useEffect(() => {
    let title = "Express MVP - Build Fast, Validate Fast";
    let desc = "Express MVP is a premier design and development partner building ultra-fast MVP websites, SaaS products, dashboards, and complete brand identity packages in record time.";

    if (currentPath === '/services/website-development') {
      title = "Website Development Services | Express MVP";
      desc = "Get an ultra-fast, mobile-optimized, conversion-focused website or custom MVP dashboard built and launched in under 4 days.";
    } else if (currentPath === '/services/social-media-setup') {
      title = "Social Media Setup & Branding | Express MVP";
      desc = "Kickstart your digital footprint with professional, unified profiles on Facebook, Instagram, LinkedIn, and Twitter.";
    } else if (currentPath === '/services/branding-kit') {
      title = "Complete Branding Kit & Identity | Express MVP";
      desc = "Gain instant credibility and consumer trust with high-quality custom logos, premium business cards, letterheads, and style guides.";
    }

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', desc);
    }
  }, [currentPath]);

  const handleNavigate = (path: string) => {
    window.history.pushState(null, '', path);
    setCurrentPath(path);
  };

  const renderContent = () => {
    switch (currentPath) {
      case '/services/website-development':
        return <ServicePage serviceId="website-development" onNavigate={handleNavigate} />;
      case '/services/social-media-setup':
        return <ServicePage serviceId="social-media-setup" onNavigate={handleNavigate} />;
      case '/services/branding-kit':
        return <ServicePage serviceId="branding-kit" onNavigate={handleNavigate} />;
      default:
        return (
          <>
            <HeroSection />
            <BentoGridSection />
            <WhatWeBuildSection />
            <HowItWorksSection />
            <ComparisonSection />
            <PricingSection />
            <FAQSection />
            <CTASection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <Navigation currentPath={currentPath} onNavigate={handleNavigate} />
      <main>
        {renderContent()}
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