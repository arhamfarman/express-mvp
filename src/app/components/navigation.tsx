import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] md:w-auto rounded-2xl md:rounded-full ${isScrolled || isMobileMenuOpen
        ? 'bg-background/80 backdrop-blur-[12px] border border-border text-foreground shadow-sm'
        : 'bg-transparent text-white border border-transparent'
        } overflow-hidden md:overflow-visible`}
    >
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between gap-12 h-[64px]">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold flex items-center gap-2 tracking-tight flex-shrink-0"
          >
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 2L4 12H10L9 18L16 8H10L11 2Z" fill="currentColor" stroke="currentColor" className="text-accent-foreground" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            Express MVP
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className={`transition-colors font-medium ${isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'}`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`transition-colors font-medium ${isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'}`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`transition-colors font-medium ${isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'}`}
            >
              FAQ
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openCalendly'))}
              className="px-6 py-2.5 bg-accent text-accent-foreground rounded-full hover:scale-105 hover:bg-[#A6D944] transition-all duration-250 ease-out font-semibold shadow-sm"
            >
              Book Strategy Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-[12px]">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left px-4 py-2 text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('openCalendly'));
                  setIsMobileMenuOpen(false);
                }}
                className="mx-4 px-6 py-2.5 bg-accent text-accent-foreground rounded-full hover:scale-105 hover:bg-[#A6D944] transition-all duration-250 ease-out text-center font-semibold shadow-sm"
              >
                Book Strategy Call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}