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
  Rocket
} from 'lucide-react';

interface ServicePageProps {
  serviceId: 'mvp-development' | 'web-application-development' | 'mobile-application' | 'ai-saas-tool' | 'marketplace-platform' | 'internal-business-tool' | 'subscription-saas';
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
    'ai-saas-tool': {
      title: "AI SaaS Tool",
      slogan: "Launch your custom AI product with advanced features and subscription billing.",
      description: "We design and build complete, production-ready AI SaaS tools featuring custom landing pages, secure user profiles, secure authentications, OpenAI API integrations, and robust Stripe payment structures in record time.",
      metaDescription: "Build a custom AI SaaS tool with OpenAI integrations, user accounts, and Stripe recurring billing.",
      icon: <BrainCircuit className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "OpenAI Integrations",
          desc: "Connect your models, design custom prompts, handle rate limits, and provide lightning-fast streaming text responses.",
          icon: <BrainCircuit className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "User Accounts & Profiles",
          desc: "Secure email signup/login, social authentications (Google, GitHub), profiles, and usage guardrails.",
          icon: <Users className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Stripe Subscriptions",
          desc: "Manage subscription tiers, secure checkout sessions, coupon codes, and clean invoicing systems.",
          icon: <Layers className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Interactive Dashboards",
          desc: "Beautiful user workspaces, interactive grids, custom usage trackers, and settings configurations.",
          icon: <Laptop className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "API Planning & Prompting", desc: "We define prompt schemas, model selections, and rate limit rules." },
        { step: "02", title: "User Flows & Layout", desc: "We design highly engaging workspaces, login states, and pricing grids." },
        { step: "03", title: "Integration & Development", desc: "We write clean, high-performance API connectors and billing systems." },
        { step: "04", title: "Launch & Validation", desc: "We double check all tokens/keys, complete test transactions, and deploy." }
      ],
      showcase: {
        title: "Essential AI SaaS Integrations",
        subtitle: "What we embed to make your product scale.",
        elements: [
          {
            title: "Custom LLM Core",
            description: "OpenAI GPT-4/Claude models, custom prompt engineering, streaming responses, and reliable rate limiting structures.",
            icon: <Sparkles className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Security & User Hub",
            description: "Secure login, dynamic profiles, multi-tenancy access controls, and custom usage meters.",
            icon: <ShieldCheck className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Stripe Billing & Portal",
            description: "Metered subscription billing, multiple tiers control, and self-serve client billing history dashboards.",
            icon: <FileText className="w-5 h-5 text-[#0D3127]" />
          }
        ]
      }
    },
    'marketplace-platform': {
      title: "Marketplace Platform",
      slogan: "A fully integrated, double-sided platform built to connect buyers and sellers.",
      description: "Launch your next two-sided marketplace in record time. We build beautiful user dashboards, product listing pages, messaging centers, review systems, and secure Stripe payment split integrations.",
      metaDescription: "Develop a double-sided marketplace platform supporting listings, user profiles, messaging, and Stripe payment splits.",
      icon: <ShoppingBag className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "Interactive Listings Showcase",
          desc: "Advanced search filters, custom categories, photo upload galleries, and location sorting systems.",
          icon: <Layers className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Dual Account Controls",
          desc: "Completely separate custom dashboards and workflows tailored to buyers and sellers.",
          icon: <Users className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Stripe Split Payments",
          desc: "Secure checkout systems, automated direct commission split rules, and direct vendor payouts.",
          icon: <Mail className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Real-Time User Messaging",
          desc: "Built-in communication systems to connect buyers and sellers directly and securely on platform.",
          icon: <Share2 className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "Marketplace Wireframes", desc: "We structure the core user directories, vendor portals, and listing details." },
        { step: "02", title: "Interactive Prototypes", desc: "We design listing cards, search views, and dual-profile settings dashboards." },
        { step: "03", title: "Stripe Gateway Code", desc: "We deploy Stripe Connect splits to distribute platform cuts automatically." },
        { step: "04", title: "Quality Assurance & Launch", desc: "We execute full buyer-to-seller mock orders, test messaging, and launch." }
      ],
      showcase: {
        title: "Stunning Marketplace Features",
        subtitle: "Engineered for maximum buyer and vendor engagement.",
        elements: [
          {
            title: "Listings Showroom",
            description: "Sophisticated filters, photo grids, instant keyboard-driven search, and map integration support.",
            icon: <Sparkles className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Dynamic Vendor Portals",
            description: "Seller dashboards showing sales history, ratings, reviews, stock level controls, and profile editing.",
            icon: <Laptop className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Stripe Connect Engine",
            description: "Robust automated split payouts, tax configurations, global currency handlers, and checkout overlays.",
            icon: <ShieldCheck className="w-5 h-5 text-[#0D3127]" />
          }
        ]
      }
    },
    'internal-business-tool': {
      title: "Internal Business Tool",
      slogan: "Streamline operations with custom admin tools and live analytics dashboards.",
      description: "Increase your team's operational speed and eliminate manual processes. We build high-performance custom admin systems, custom data entry layouts, dynamic interactive charts, and deep external API integrations.",
      metaDescription: "Design custom internal business tools, admin panels, interactive charts, and API integrations.",
      icon: <BarChart3 className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "Workflow Automations",
          desc: "Eliminate manual data entries, spreadsheets, and emails with centralized web interfaces.",
          icon: <Layers className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Dynamic Chart Visualizations",
          desc: "Interactive graphs, reports, export tools (CSV, PDF), and automated summaries.",
          icon: <Laptop className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Secure Database Connections",
          desc: "Integrate cleanly with PostgreSQL, Supabase, Firebase, Google Sheets, or custom backend APIs.",
          icon: <ShieldCheck className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Granular Access Control",
          desc: "Ensure managers, support agents, and staff members only view data permitted by their roles.",
          icon: <Users className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "Workflow Mapping", desc: "We trace your team's current Excel/email chains and map optimized dashboards." },
        { step: "02", title: "UI Mockups", desc: "We design information layouts, filtering controls, tables, and charting blocks." },
        { step: "03", title: "Integration Build", desc: "We connect active databases, set up secure authentications, and run scripts." },
        { step: "04", title: "Role Deployment", desc: "We verify user permissions profiles, complete stress tests, and launch." }
      ],
      showcase: {
        title: "Operational Infrastructure",
        subtitle: "Custom tools configured to double your team's throughput.",
        elements: [
          {
            title: "Workflows Automation",
            description: "No-Excel layouts, automatic custom notifications, bulk imports, and daily email summaries.",
            icon: <Sparkles className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Interactive Analytics Suite",
            description: "Responsive charts (Recharts), calendar ranges, dynamic table filters, and PDF report builders.",
            icon: <Laptop className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "External API Links",
            description: "Direct real-time connections to sync data with Salesforce, HubSpot, Stripe, or Slack automatically.",
            icon: <Share2 className="w-5 h-5 text-[#0D3127]" />
          }
        ]
      }
    },
    'subscription-saas': {
      title: "Subscription SaaS",
      slogan: "Build, launch, and monetize your software product with tiered pricing plans.",
      description: "A high-fidelity subscription platform built with clean react architectures, secure authentication, Stripe billing integrations, dynamic customer portals, and real-time usage metrics trackers.",
      metaDescription: "Launch a custom subscription SaaS with tiered plans, usage metrics, and Stripe billing portals.",
      icon: <Repeat className="w-12 h-12 text-[#0D3127]" />,
      accentBg: "bg-[#BCE953]/20",
      accentBorder: "border-[#BCE953]",
      features: [
        {
          title: "Tiered Pricing Engine",
          desc: "Easily configure Free, Pro, and Enterprise modules, with secure access-guarded middleware rules.",
          icon: <Layers className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Dynamic Customer Hub",
          desc: "Allow clients to self-serve update subscriptions, download past invoices, and edit card details.",
          icon: <Users className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Usage Metrics & Limits",
          desc: "Connect usage limit trackers, configure metered billing plans, and set up warnings overlays.",
          icon: <Laptop className="w-6 h-6 text-[#0D3127]" />
        },
        {
          title: "Revenue analytics Dashboards",
          desc: "Beautiful graphic metrics layouts showing active users growth, signups, and transaction listings.",
          icon: <ShieldCheck className="w-6 h-6 text-[#0D3127]" />
        }
      ],
      process: [
        { step: "01", title: "Architecture & Rules", desc: "We map user levels, metered parameters, and access permissions logic." },
        { step: "02", title: "Landing page & Signup", desc: "We design pricing grids, login fields, and dynamic user workspace flows." },
        { step: "03", title: "Stripe Webhooks Build", desc: "We write secure webhooks scripts to handle instant subscription statuses." },
        { step: "04", title: "Launch & Analytics Sync", desc: "We test transactions in sandbox mode, verify hooks speed, and launch." }
      ],
      showcase: {
        title: "SaaS Infrastructure Suite",
        subtitle: "Built to support and grow your monthly recurring revenue (MRR).",
        elements: [
          {
            title: "Tiered Pricing controls",
            description: "Free, Pro, and Custom Enterprise models complete with payment buttons and gated features.",
            icon: <Sparkles className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Dynamic Customer Billing Hub",
            description: "Self-serve cards updates, download PDF invoices, change plans, and cancel controls.",
            icon: <FileText className="w-5 h-5 text-[#0D3127]" />
          },
          {
            title: "Usage Metering Tools",
            description: "Real-time query checkers, automated user email notices, and server resources warning boards.",
            icon: <ShieldCheck className="w-5 h-5 text-[#0D3127]" />
          }
        ]
      }
    }
  };

  const data = serviceData[serviceId];

  // Resolve union typing for TypeScript compiler by narrowing shapes
  const websiteShowcase = (serviceId === 'mvp-development' || serviceId === 'web-application-development') ? (data.showcase as any) : null;
  const socialShowcase = null;
  const brandingShowcase = serviceId === 'mobile-application' ? (data.showcase as any) : null;

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
