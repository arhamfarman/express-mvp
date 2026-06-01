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
  Mail,
  BrainCircuit,
  ShoppingBag,
  BarChart3,
  Repeat,
  Rocket,
  PenTool
} from 'lucide-react';

interface ServicePageProps {
  serviceId: 'mvp-development' | 'web-application-development' | 'mobile-application' | 'branding-kit' | 'graphics-design';
  onNavigate: (path: string) => void;
}

export function ServicePage({ serviceId, onNavigate }: ServicePageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const serviceData = {
    'mvp-development': {
      title: "MVP Development",
      slogan: "Validate your ideas and launch to market in record time.",
      description: "We build high-fidelity Minimum Viable Products (MVPs) designed specifically to get your product in front of real users fast. Delivered in record time with beautiful UI and production-ready code.",
      metaDescription: "Professional MVP development services. Build and launch a high-fidelity MVP in record time to validate your market.",
      icon: <Rocket className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "Rapid Prototyping",
          desc: "Fast, interactive mockups and designs that map user journeys and validate core mechanics before writing code.",
          icon: <Sparkles className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Core Feature Focus",
          desc: "Laser focus on your product's primary value proposition to deliver maximum utility to users without unnecessary bloat.",
          icon: <Target className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Scalable Architecture",
          desc: "Built with modern frameworks (React, Next.js, Vite) and clean coding paradigms to scale seamlessly as your userbase grows.",
          icon: <Layers className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "User Feedback Loops",
          desc: "Built-in analytics and feedback collectors to capture essential usage metrics and user insights immediately upon launch.",
          icon: <Users className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "Scope & Strategy", desc: "We map out user flows, define core features, and design a rock-solid roadmap for the MVP." },
        { step: "02", title: "High-Fidelity Design", desc: "We create a custom, modern, premium UI/UX design matching your brand's unique style." },
        { step: "03", title: "Agile Development", desc: "We write clean, high-performance code, integrating authentications, databases, and APIs." },
        { step: "04", title: "Launch & Validate", desc: "We run quality assurance testing, set up SEO tags, hook up analytics, and go live." }
      ],
      showcase: {
        title: "Our Recent MVPs",
        subtitle: "A showcase of high-end custom MVPs and tools we have launched for founders.",
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
          }
        ]
      }
    },
    'web-application-development': {
      title: "Web Application Development",
      slogan: "High-performance, feature-rich custom web apps tailored to your business goals.",
      description: "From complex dashboards and customer portals to advanced custom databases, we design and build blazing fast web applications with pixel-perfect attention to detail and robust engineering.",
      metaDescription: "Custom web application development services. Blazing fast, responsive, and secure custom web apps.",
      icon: <Laptop className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "Interactive Dashboards",
          desc: "Stunning analytics workspaces, dynamic grids, custom usage trackers, and configuration settings.",
          icon: <Laptop className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "API & Database Integration",
          desc: "Flawless connections to external REST/GraphQL APIs and secure integrations with robust SQL/NoSQL databases.",
          icon: <BrainCircuit className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Enterprise Security",
          desc: "Multi-tenant access control, secure authentication, API rate limiting, and encrypted data storage.",
          icon: <ShieldCheck className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "SEO & Speed Optimized",
          desc: "Modern caching, optimized asset loading, and server-side components to achieve 95+ Google Lighthouse speed scores.",
          icon: <Gauge className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "Architecture & Schema", desc: "We map backend structures, database schemas, and define API contracts." },
        { step: "02", title: "Premium UI/UX Design", desc: "We craft interactive wireframes and a state-of-the-art visual style guide." },
        { step: "03", title: "Robust Development", desc: "We develop the web app with highly optimized React code and secure data streams." },
        { step: "04", title: "Performance Audits", desc: "We stress test API endpoints, optimize load speeds, secure variables, and deploy." }
      ],
      showcase: {
        title: "Featured Custom Applications",
        subtitle: "Highly custom enterprise tools and SaaS platforms engineered for flawless scale.",
        projects: [
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
    'mobile-application': {
      title: "Mobile Application",
      slogan: "Stunning iOS & Android apps that deliver flawless user experiences.",
      description: "Expand your reach with high-performance native-feeling cross-platform mobile apps. From initial design concept to App Store deployment, we build responsive mobile applications with smooth micro-animations.",
      metaDescription: "Professional mobile application development services. Get stunning iOS and Android apps with flawless performance.",
      icon: <Smartphone className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "Cross-Platform Power",
          desc: "React Native or Flutter apps featuring a single optimized codebase for both iOS and Android to save time and budget.",
          icon: <Layers className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Offline-First Support",
          desc: "Keep users active even without internet with secure offline caching, local databases, and auto-syncing functions.",
          icon: <ShieldCheck className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Push Notifications",
          desc: "Re-engage users instantly with beautifully formatted smart push notifications and in-app alert templates.",
          icon: <Sparkles className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "App Store Publishing",
          desc: "End-to-end management of App Store and Google Play console accounts, builds, screenshots, metadata, and reviews approval.",
          icon: <Award className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "Mobile UX Mapping", desc: "We design native touch targets, swipe interactions, and screen transitions." },
        { step: "02", title: "Stunning Visuals", desc: "We design a state-of-the-art mobile user interface featuring a gorgeous dark/light theme." },
        { step: "03", title: "Cross-Platform Build", desc: "We build responsive screens, offline storages, native plugins, and push notifications." },
        { step: "04", title: "Store Submission", desc: "We handle Apple & Google packaging, configure settings, upload, and launch." }
      ],
      showcase: {
        title: "Included Mobile Features",
        subtitle: "Every mobile application we build comes integrated with standard, modern core components.",
        elements: [
          {
            title: "Universal Authentication",
            description: "Seamless sign-ins using FaceID/TouchID, Google Login, Apple Sign-In, and standard secure magic links.",
            icon: <ShieldCheck className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Dynamic Notification Engine",
            description: "Targeted push notifications, scheduled reminders, rich media support, and silent background data syncs.",
            icon: <Sparkles className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Modern Core UX Kit",
            description: "Polished UI micro-animations, adaptive layout themes (light/dark modes), fluid gestures, and instant response times.",
            icon: <Laptop className="w-5 h-5 text-[#0D3127]" />
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
    },
    'graphics-design': {
      title: "Graphics Design",
      slogan: "State-of-the-art custom graphic elements designed to captivate your audience.",
      description: "Engage your customers with high-end, high-converting digital and print visuals. We design professional marketing banners, presentation decks, UI components, and tailored illustration assets.",
      metaDescription: "Professional graphics design services. Get high-converting UI mockups, pitch decks, and custom marketing graphics.",
      icon: <PenTool className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "UI & App Mockups",
          desc: "High-fidelity app and website mockup designs with stunning layouts and micro-interactions ready for developers.",
          icon: <Laptop className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Presentation & Pitch Decks",
          desc: "Expertly structured slide designs crafted to tell your startup's story, secure funding, and close enterprise sales.",
          icon: <Layers className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Social & Ad Creatives",
          desc: "High-converting social graphics and advertising banners tailored specifically for performance marketing campaigns.",
          icon: <Sparkles className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Custom Illustrations & Icons",
          desc: "Bespoke vector illustrations and unique custom iconography sets to elevate your digital product's aesthetics.",
          icon: <Target className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "Visual Brief & Moodboard", desc: "We outline the target goals, layout reference aesthetics, and build custom inspiration moodboards." },
        { step: "02", title: "Draft Concepts", desc: "We design multiple custom creative layout directions to establish the project's visual voice." },
        { step: "03", title: "Aesthetic Refinement", desc: "We meticulously polish the selected direction, fine-tuning typography, alignments, and assets." },
        { step: "04", title: "Production-Ready Export", desc: "We deliver organized layers source files (Figma, AI) and fully optimized high-res assets." }
      ],
      showcase: {
        title: "Featured Design Masterpieces",
        subtitle: "A showcase of high-end startup presentation decks and custom digital illustration assets.",
        elements: [
          {
            title: "Interactive Presentation Decks",
            description: "Winning slide structures, custom charts, premium graphics, and fully editable pitch presentations.",
            icon: <FileText className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Premium Social & Ad Creative Sets",
            description: "Conversion-optimized marketing banner kits designed precisely for Facebook, Instagram, and LinkedIn ads.",
            icon: <ImageIcon className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Custom Brand Illustrations",
            description: "Signature custom product illustrations, detailed vector infographics, and unique website asset packages.",
            icon: <Sparkles className="w-5 h-5 text-[#0D3127]" />
          }
        ]
      }
    }
  };

  const data = serviceData[serviceId];

  // Resolve union typing for TypeScript compiler by narrowing shapes
  const websiteShowcase = (serviceId === 'mvp-development' || serviceId === 'web-application-development') ? (data.showcase as any) : null;
  const socialShowcase = null;
  const brandingShowcase = (serviceId === 'mobile-application' || serviceId === 'branding-kit' || serviceId === 'graphics-design') ? (data.showcase as any) : null;

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
