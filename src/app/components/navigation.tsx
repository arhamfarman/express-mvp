import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Laptop, Share2, Palette, BrainCircuit, ShoppingBag, BarChart3, Repeat, Rocket, Smartphone } from 'lucide-react';

interface NavigationProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export function Navigation({ currentPath, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (currentPath !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleServiceClick = (path: string) => {
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
    setIsMobileMenuOpen(false);
    onNavigate(path);
  };

  const services = [
    {
      name: "MVP Development",
      path: "/services/mvp-development",
      desc: "Build, launch, and validate your core product idea with a high-fidelity MVP in record time.",
      icon: <Rocket size={16} className="text-[#0D3127]" />
    },
    {
      name: "Web Application Development",
      path: "/services/web-application-development",
      desc: "Blazing fast, highly interactive custom web applications tailored to your business.",
      icon: <Laptop size={16} className="text-[#0D3127]" />
    },
    {
      name: "Mobile Application",
      path: "/services/mobile-application",
      desc: "Stunning iOS and Android mobile apps with smooth animations and flawless performance.",
      icon: <Smartphone size={16} className="text-[#0D3127]" />
    },
    {
      name: "AI SaaS Tool",
      path: "/services/ai-saas-tool",
      desc: "Custom landing page & app with OpenAI APIs, user profiles, authentication, and billing.",
      icon: <BrainCircuit size={16} className="text-[#0D3127]" />
    },
    {
      name: "Marketplace Platform",
      path: "/services/marketplace-platform",
      desc: "Two-sided listings platform with user profiles, reviews, messaging, and Stripe split payouts.",
      icon: <ShoppingBag size={16} className="text-[#0D3127]" />
    },
    {
      name: "Internal Business Tool",
      path: "/services/internal-business-tool",
      desc: "Highly custom admin panels, database viewers, dynamic analytics dashboards, and workflows.",
      icon: <BarChart3 size={16} className="text-[#0D3127]" />
    },
    {
      name: "Subscription SaaS",
      path: "/services/subscription-saas",
      desc: "Comprehensive recurring billing platforms with tiered access controls and usage metrics.",
      icon: <Repeat size={16} className="text-[#0D3127]" />
    }
  ];

  const linkColorClass = isScrolled || isMobileMenuOpen || currentPath !== '/'
    ? 'text-muted-foreground hover:text-foreground'
    : 'text-white/80 hover:text-white';

  return (
    <nav
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[calc(100%-2rem)] md:w-auto rounded-2xl md:rounded-full ${isScrolled || isMobileMenuOpen || currentPath !== '/'
        ? 'bg-background/80 backdrop-blur-[12px] border border-border text-foreground shadow-sm'
        : 'bg-transparent text-white border border-transparent'
        } overflow-hidden md:overflow-visible`}
    >
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between gap-12 h-[64px]">
          {/* Logo */}
          <button
            onClick={() => handleServiceClick('/')}
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
            {/* Services Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`transition-colors font-medium flex items-center gap-1 py-2 ${linkColorClass}`}
              >
                Services <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-[38px] left-1/2 -translate-x-1/2 w-[340px] bg-white border border-border/80 rounded-2xl p-3 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex flex-col gap-1">
                    {services.map((svc) => (
                      <button
                        key={svc.path}
                        onClick={() => handleServiceClick(svc.path)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#EEF2EC] text-left transition-all duration-150 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                          {svc.icon}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-foreground group-hover:text-[#0D3127] transition-colors">{svc.name}</div>
                          <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{svc.desc}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('how-it-works')}
              className={`transition-colors font-medium ${linkColorClass}`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className={`transition-colors font-medium ${linkColorClass}`}
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className={`transition-colors font-medium ${linkColorClass}`}
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
            className={`md:hidden p-2 ${isScrolled || currentPath !== '/' ? 'text-muted-foreground hover:text-foreground' : 'text-white/80 hover:text-white'}`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-[12px]">
            <div className="flex flex-col gap-4">
              {/* Mobile Services Accordion */}
              <div className="flex flex-col px-4">
                <button
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                  className="flex items-center justify-between py-2 text-muted-foreground hover:text-foreground font-medium text-left"
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={`transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMobileDropdownOpen && (
                  <div className="flex flex-col gap-2 mt-2 pl-4 border-l border-border">
                    {services.map((svc) => (
                      <button
                        key={svc.path}
                        onClick={() => handleServiceClick(svc.path)}
                        className="py-2 text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {svc.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

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