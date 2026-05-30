import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, 
  Share2, 
  Palette, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Clock, 
  Smartphone, 
  Gauge, 
  Search, 
  Target,
  Sparkles,
  Users,
  Image as ImageIcon,
  Award,
  Layers,
  Stamp,
  Mail
} from 'lucide-react';

interface ServicePageProps {
  serviceId: 'website-development' | 'social-media-setup' | 'branding-kit';
  onNavigate: (path: string) => void;
}

export function ServicePage({ serviceId, onNavigate }: ServicePageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const serviceData = {
    'website-development': {
      title: "Website Development",
      slogan: "High-performance, modern websites that convert visitors into customers.",
      description: "We build blazing fast, responsive, and search engine optimized websites designed specifically to validate your product and convert users. Delivered in under 4 days with pixel-perfect attention to detail.",
      metaDescription: "Professional website development services. Get an ultra-fast, mobile-optimized, conversion-focused website in under 4 days.",
      icon: <Laptop className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "Mobile-First Design",
          desc: "Fully responsive layouts designed to look stunning and function flawlessly on smartphones, tablets, and desktops.",
          icon: <Smartphone className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Blazing Fast Speeds",
          desc: "Optimized asset delivery, clean code architectures, and modern caching strategies to achieve 95+ Google Lighthouse speed scores.",
          icon: <Gauge className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "SEO Best Practices",
          desc: "Built-in semantic HTML5 structures, dynamic meta schemas, fast loading times, and SEO-friendly structures to rank higher on Google.",
          icon: <Search className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Conversion-Focused UX",
          desc: "Clear call-to-actions, simple conversion funnels, and optimized layouts carefully mapped to convert traffic into leads.",
          icon: <Target className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "Strategy & Structure", desc: "We map out your pages, user flows, and conversion goals to form a rock-solid blueprint." },
        { step: "02", title: "High-Fidelity UI Design", desc: "We create a custom premium interface matching your brand identity and style." },
        { step: "03", title: "Speed Development", desc: "We write clean, lightweight, and modern code to ensure incredible performance." },
        { step: "04", title: "Launch & SEO Setup", desc: "We optimize all tags, double-check speeds, connect analytics, and launch." }
      ],
      showcase: {
        title: "Our Recent Projects",
        subtitle: "A showcase of high-end custom web applications and MVPs we have built.",
        projects: [
          {
            title: "AI SaaS Tool Dashboard",
            category: "Artificial Intelligence / SaaS",
            image: "/images/mockups/ai-saas.png",
            fallbackGradient: "from-emerald-950 to-emerald-800",
            description: "A gorgeous dashboard featuring OpenAI APIs, user profiles, secure authentication, and Stripe subscription billing.",
            metrics: "Load Time: 0.4s | Google Speed Score: 99",
            highlights: ["OpenAI Integration", "User Accounts", "Stripe Billing", "Dynamic Charts"]
          },
          {
            title: "Two-Sided Marketplace",
            category: "E-Commerce / Platforms",
            image: "/images/mockups/marketplace.png",
            fallbackGradient: "from-[#0D3127] to-[#1a4f40]",
            description: "A fully responsive marketplace platform supporting dual user roles (buyers/sellers), detailed product listings, and custom split-payment gateways.",
            metrics: "Conversion Rate: +4.2% | Responsive: Yes",
            highlights: ["Product Listings", "Dual User Roles", "Payment Splits", "Realtime Chat"]
          },
          {
            title: "Internal Business System",
            category: "Enterprise Tools",
            image: "/images/mockups/internal-tool.png",
            fallbackGradient: "from-slate-900 to-slate-800",
            description: "A secure, robust administrative panel mapping custom workflows, live data visualizations, and deep external API integrations.",
            metrics: "Workflow efficiency: +35% | UI: Premium Glass",
            highlights: ["Custom Workflows", "Data Visualization", "API Integrations", "Role Management"]
          },
          {
            title: "Subscription Analytics SaaS",
            category: "Analytics / FinTech",
            image: "/images/mockups/subscription-saas.png",
            fallbackGradient: "from-[#BCE953]/30 to-[#0D3127]/90",
            description: "An elegant metrics and analytics suite supporting tiered pricing packages, interactive graphs, and advanced billing portals.",
            metrics: "Retina Ready | Live Chart Animation",
            highlights: ["Tiered Plans", "Usage Metrics", "Customer Portal", "Invoice Generators"]
          }
        ]
      }
    },
    'social-media-setup': {
      title: "Social Media Setup",
      slogan: "Kickstart your digital presence with matching professional brand profiles.",
      description: "Do not let poor visual presentation ruin your product launch. We build customized, fully integrated profiles across all major networks to ensure complete brand consistency and authority from day one.",
      metaDescription: "Professional social media setup services. Create unified, branded, and optimized profiles on Facebook, Instagram, LinkedIn, and Twitter.",
      icon: <Share2 className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "Branded Header & Avatars",
          desc: "Custom high-quality graphics tailored precisely to fit standard desktop and mobile frame sizes for all social networks.",
          icon: <ImageIcon className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "SEO Handle & Bio Optimization",
          desc: "Keyword-rich descriptions and optimized bio content meticulously written to increase social profile discoverability.",
          icon: <Search className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Unified Branding Aesthetics",
          desc: "Synchronized colors, logos, and taglines across Facebook, Instagram, LinkedIn, and Twitter for strong visual credibility.",
          icon: <Sparkles className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Launch Templates Bundle",
          desc: "Receive pre-styled templates for your first 5 posts to announce your launch with style, matching your brand colors.",
          icon: <Layers className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "Target Audience Sync", desc: "We define which platforms fit your ideal buyer profile and research target keywords." },
        { step: "02", title: "Graphic Asset Creation", desc: "We design custom avatars, premium banners, and high-impact custom templates." },
        { step: "03", title: "Profile Build & SEO Copy", desc: "We fill out comprehensive bios, business details, handles, and custom tags." },
        { step: "04", title: "Integrations & Handover", desc: "We link your platforms, set up tracking pixels, and deliver files." }
      ],
      showcase: {
        title: "Complete Digital Presence Checklist",
        subtitle: "What is included in our premium Social Media Setup package.",
        platforms: [
          {
            name: "LinkedIn Business Profile",
            badge: "Professional & B2B",
            details: "Full setup of your business page with a professional header graphic, customized service listing, keyword-rich bio, and employee connection linking.",
            focus: "Establishes authority and supports corporate sales / partnership outreach."
          },
          {
            name: "Instagram & Facebook Pages",
            badge: "Consumer & Visual",
            details: "Highly engaging grid planning, highlights cover icons, custom Facebook action button link integration, and professional meta tags setup.",
            focus: "Drives direct consumer interaction, social proof, and digital ads."
          },
          {
            name: "Twitter / X Brand Profile",
            badge: "Community & Tech",
            details: "Unique custom header, keyword optimized bio, custom pinned launch post graphic design, and clean handle registration.",
            focus: "Excellent for tech updates, live community interactions, and tech PR."
          }
        ]
      }
    },
    'branding-kit': {
      title: "Complete Branding Kit",
      slogan: "Establish deep authority with a premium, cohesive visual brand identity.",
      description: "Make your brand look established, credible, and premium from the very start. Our Complete Branding Kit includes high-fidelity assets designed to turn heads and lock in customer trust instantly.",
      metaDescription: "Premium branding kit services. Get custom logo designs, professional business cards, modern letterheads, and corporate brand guidelines.",
      icon: <Palette className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "Custom Logo Design",
          desc: "Unique custom concepts, dynamic alternates, high-resolution vector source files, and transparent formats for any backdrop.",
          icon: <Award className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Premium Business Cards",
          desc: "Stunning double-sided layouts with premium typography, customized layout styles, and print-ready output formats.",
          icon: <Layers className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Corporate Letterhead & Stationery",
          desc: "Polished Microsoft Word templates and editable PDF formats designed perfectly to carry your invoices and letters.",
          icon: <FileText className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Stamps, Seals & Social Icons",
          desc: "Circular vector stamp graphics, social media profile avatars, favicon packages, and digital signatures.",
          icon: <Stamp className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "Brand Discovery", desc: "We align on your visual style preferences, core values, typography, and color palettes." },
        { step: "02", title: "Concept Generation", desc: "We design three unique custom logo directions and present details for your choice." },
        { step: "03", title: "Stationery Design", desc: "We craft matching double-sided business cards, letterheads, and stamps." },
        { step: "04", title: "Style Guidelines Book", desc: "We deliver full vector packages, font links, and custom brand guidelines." }
      ],
      showcase: {
        title: "Included Branding Elements",
        subtitle: "High-fidelity files and structures formatted perfectly for both print and web.",
        elements: [
          {
            title: "Custom Logo Architecture",
            description: "Primary logo, alternate wordmark, clean submark favicon, and vector files (AI, SVG, PDF, PNG) optimized for screen and giant banners.",
            icon: <Sparkles className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Corporate Stationery Package",
            description: "Double-sided premium business card design, matching letterhead (Word/PDF format), official envelope templates, and corporate stamp design.",
            icon: <Mail className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Brand Aesthetics Guidelines",
            description: "A clean digital booklet outlining your exact color codes (HEX, RGB, CMYK), primary/secondary typography combinations, and spacing guidelines.",
            icon: <FileText className="w-5 h-5 text-[#0D3127]" />
          }
        ]
      }
    }
  };

  const data = serviceData[serviceId];

  // Resolve union typing for TypeScript compiler by narrowing shapes
  const websiteShowcase = serviceId === 'website-development' ? (data.showcase as any) : null;
  const socialShowcase = serviceId === 'social-media-setup' ? (data.showcase as any) : null;
  const brandingShowcase = serviceId === 'branding-kit' ? (data.showcase as any) : null;

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground">
      {/* Hero Header Section */}
      <section className="py-16 md:py-24 px-6 lg:px-8 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#BCE953]/15 rounded-full blur-[100px] -z-10 animate-pulse duration-5000"></div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center border border-[#0D3127]/10 bg-white shadow-sm`}
          >
            {data.icon}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground tracking-[-0.03em] mb-6"
          >
            {data.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-[1.6] max-w-[800px] mx-auto mb-10"
          >
            {data.slogan}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openCalendly'))}
              className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:scale-105 hover:bg-[#A6D944] transition-all duration-250 shadow-md flex items-center justify-center gap-2"
            >
              Book 30-Min Strategy Call <ArrowRight size={18} />
            </button>
            <button
              onClick={() => onNavigate('/')}
              className="px-8 py-4 bg-white border border-border/80 text-foreground font-semibold rounded-full hover:bg-muted/30 transition-all duration-250 flex items-center justify-center"
            >
              Back to Home
            </button>
          </motion.div>
        </div>
      </section>

      {/* Description Section with details */}
      <section className="py-16 bg-white border-y border-border/50 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF2EC] border border-[#0D3127]/10 rounded-full text-sm font-semibold text-foreground/80">
              <Sparkles size={14} className="text-[#0D3127]" /> Premium Service
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground leading-[1.2]">
              Why Choose Our {data.title}
            </h2>
            <p className="text-muted-foreground leading-[1.7] text-base">
              {data.description}
            </p>
            <div className="pt-4 space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 w-6 h-6" />
                <div>
                  <span className="font-semibold text-foreground">Lightning-Fast Turnaround:</span>
                  <p className="text-sm text-muted-foreground">Deliverables fully ready, thoroughly tested, and online in under 4 days.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-accent flex-shrink-0 w-6 h-6" />
                <div>
                  <span className="font-semibold text-foreground">Absolute Quality Focus:</span>
                  <p className="text-sm text-muted-foreground">Pixel-perfect aesthetics, modern layouts, and zero generic templates.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.features.map((feat, idx) => (
              <div key={idx} className="p-6 bg-[#F3F5EF] border border-[#0D3127]/5 rounded-2xl hover:border-[#0D3127]/15 transition-all duration-200">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-xs mb-4">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-[1.5]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      {websiteShowcase && (
        <section className="py-20 bg-[#EEF2EC] px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                {websiteShowcase.title}
              </h2>
              <p className="text-muted-foreground text-base">
                {websiteShowcase.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {websiteShowcase.projects.map((proj: any, idx: number) => (
                <div 
                  key={idx} 
                  className="group bg-white border border-[#0D3127]/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-250 flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted border-b border-border/40">
                    {/* Fallback stylized representation for high-end preview */}
                    <div className={`absolute inset-0 bg-gradient-to-tr ${proj.fallbackGradient} flex flex-col justify-between p-6 text-white`}>
                      <div className="flex justify-between items-start">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider">
                          {proj.category}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                          <Laptop size={14} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-white/60 text-xs font-mono">{proj.metrics}</div>
                        <h4 className="text-xl sm:text-2xl font-bold tracking-tight">{proj.title}</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm leading-[1.6] mb-6">
                        {proj.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {proj.highlights.map((tag: string, tIdx: number) => (
                          <span key={tIdx} className="px-2.5 py-1 bg-[#F3F5EF] rounded-md text-xs font-medium text-foreground/80">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>Delivery: 4 Days</span>
                      <span className="text-[#0D3127] font-semibold">100% Client Satisfaction</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {socialShowcase && (
        <section className="py-20 bg-[#EEF2EC] px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                {socialShowcase.title}
              </h2>
              <p className="text-muted-foreground text-base">
                {socialShowcase.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {socialShowcase.platforms.map((plat: any, idx: number) => (
                <div key={idx} className="bg-white border border-[#0D3127]/10 p-8 rounded-3xl shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-accent/20 rounded-full text-xs font-bold text-foreground">
                      {plat.badge}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight">{plat.name}</h3>
                    <p className="text-muted-foreground text-sm leading-[1.6]">
                      {plat.details}
                    </p>
                  </div>
                  <div className="pt-6 mt-6 border-t border-border/40">
                    <span className="text-xs font-semibold text-muted-foreground block mb-1 uppercase tracking-wider">Primary Goal</span>
                    <p className="text-xs text-foreground font-medium">{plat.focus}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {brandingShowcase && (
        <section className="py-20 bg-[#EEF2EC] px-6 lg:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
                {brandingShowcase.title}
              </h2>
              <p className="text-muted-foreground text-base">
                {brandingShowcase.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {brandingShowcase.elements.map((elem: any, idx: number) => (
                <div key={idx} className="bg-white border border-[#0D3127]/10 p-8 rounded-3xl shadow-xs flex flex-col items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#BCE953]/25 flex items-center justify-center">
                    {elem.icon}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">{elem.title}</h3>
                  <p className="text-muted-foreground text-sm leading-[1.6]">
                    {elem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The 4-Day Process */}
      <section className="py-20 px-6 lg:px-8 bg-white border-b border-border/50">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              How We Deliver in Under 4 Days
            </h2>
            <p className="text-muted-foreground text-base">
              A highly optimized, sequential design and development process backed by top talent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.process.map((proc, idx) => (
              <div key={idx} className="relative p-8 bg-[#F3F5EF] rounded-2xl border border-border/40">
                <div className="text-4xl font-black text-accent/50 font-mono mb-4">{proc.step}</div>
                <h3 className="font-bold text-lg mb-2">{proc.title}</h3>
                <p className="text-sm text-muted-foreground leading-[1.5]">{proc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6 lg:px-8 bg-[#0D3127] text-white relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BCE953]/5 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-[800px] mx-auto space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2]">
            Ready to Build Your Brand & Validate Fast?
          </h2>
          <p className="text-white/80 text-lg leading-[1.6] max-w-[600px] mx-auto">
            Book a complimentary strategy call today. We'll map out your project details, layout custom landing page architecture, and start building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openCalendly'))}
              className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:scale-105 hover:bg-[#A6D944] transition-all duration-250 shadow-md"
            >
              Schedule My Strategy Call
            </button>
            <button
              onClick={() => onNavigate('/')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-250"
            >
              Browse Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
