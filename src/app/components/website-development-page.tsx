import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Laptop, CheckCircle2, ArrowRight } from 'lucide-react';

interface WebsiteDevelopmentPageProps {
  onNavigate: (path: string) => void;
}

export function WebsiteDevelopmentPage({ onNavigate }: WebsiteDevelopmentPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      name: "Renovation Monsters",
      url: "https://renovationmonsters.ca/",
      description: "A premium website for a home renovation company showcasing high-end craftsmanship, kitchen, and bathroom renovations. Built with a focus on visual impact and high-converting quote request flows.",
      image: "/images/mockups/renovation-monsters.png",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"]
    },
    {
      name: "Auto Compass",
      url: "https://autocompass.ca/",
      description: "A high-performance automotive platform featuring advanced vehicle search directories, customizable filters, and a modern, high-contrast dark theme optimized for car buyers and dealerships.",
      image: "/images/mockups/auto-compass.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"]
    },
    {
      name: "New Unique Styles",
      url: "https://newuniquestyles.com/",
      description: "An elegant, fast-loading e-commerce website for a contemporary fashion boutique. Designed with a clean, editorial layout to showcase apparel collections and maximize add-to-cart conversions.",
      image: "/images/mockups/new-unique-styles.png",
      technologies: ["React", "Vite", "Tailwind CSS", "Shopify API"]
    },
    {
      name: "Shireen Sundrani Physiotherapy Services",
      url: "https://shireensundraniphysiotherapyservices.com/",
      description: "A professional, accessible, and clean digital space for a wellness and rehabilitation clinic. Integrated with instant online appointment scheduling and interactive therapy service guides.",
      image: "/images/mockups/shireen-sundrani.png",
      technologies: ["React", "Tailwind CSS", "Vite", "Calendly Integration"]
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 lg:px-8 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#BCE953]/15 rounded-full blur-[100px] -z-10 animate-pulse duration-5000"></div>

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center border border-[#0D3127]/10 bg-white shadow-sm"
          >
            <Laptop className="w-12 h-12 text-[#0D3127]" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0D3127] tracking-[-0.03em] mb-6"
          >
            Website Development
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-[1.6] max-w-[800px] mx-auto mb-10 font-medium"
          >
            Modern websites built to convert visitors into customers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openCalendly'))}
              className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:scale-105 hover:bg-[#A6D944] transition-all duration-250 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              Book Strategy Call <ArrowRight size={18} />
            </button>
            <button
              onClick={() => onNavigate('/')}
              className="px-8 py-4 bg-white border border-border/80 text-foreground font-semibold rounded-full hover:bg-muted/30 transition-all duration-250 flex items-center justify-center cursor-pointer"
            >
              Back to Home
            </button>
          </motion.div>
        </div>
      </section>

      {/* Intro details grid */}
      <section className="py-16 bg-white border-y border-border/50 px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EEF2EC] border border-[#0D3127]/10 rounded-full text-sm font-semibold text-foreground/80">
              <Sparkles size={14} className="text-[#0D3127]" /> Built to Convert
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D3127] leading-[1.2]">
              Why Choose Our Website Development
            </h2>
            <p className="text-muted-foreground leading-[1.7] text-base font-medium">
              We design and engineer bespoke marketing sites, portfolios, and commercial web platforms that pair world-class aesthetics with clean code. No templates, no bloat—just fast, robust, custom solutions tailored for speed, SEO, and business growth.
            </p>
            <div className="pt-4 space-y-4">
              <div className="flex gap-3">
                <CheckCircle2 className="text-[#BCE953] flex-shrink-0 w-6 h-6" />
                <div>
                  <span className="font-semibold text-[#0D3127]">Speed & SEO Optimization:</span>
                  <p className="text-sm text-muted-foreground font-medium">We design for perfect Google Lighthouse scores to ensure rapid page load times and maximum visibility.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="text-[#BCE953] flex-shrink-0 w-6 h-6" />
                <div>
                  <span className="font-semibold text-[#0D3127]">Tailored Customer Journeys:</span>
                  <p className="text-sm text-muted-foreground font-medium">From strategic calls-to-action to interactive maps and forms, every pixel is engineered to convert visitors into loyal clients.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Custom UI/UX Design",
                desc: "Unique layout flows crafted in Figma specifically to capture your brand's voice and engage your target audience.",
                icon: <Sparkles className="w-6 h-6 text-[#0D3127]" />
              },
              {
                title: "High Performance Code",
                desc: "Clean code practices using React and modern static-site architectures to deliver ultra-fast pages.",
                icon: <Laptop className="w-6 h-6 text-[#0D3127]" />
              },
              {
                title: "Responsive Adaptability",
                desc: "Perfect layouts across desktop, tablet, and mobile screens to guarantee flawless accessibility.",
                icon: <Laptop className="w-6 h-6 text-[#0D3127]" />
              },
              {
                title: "SEO Best Practices",
                desc: "Semantic HTML structures, complete meta setups, and optimized image compression for better organic rank.",
                icon: <Sparkles className="w-6 h-6 text-[#0D3127]" />
              }
            ].map((feat, idx) => (
              <div key={idx} className="p-6 bg-[#F3F5EF] border border-[#0D3127]/5 rounded-2xl hover:border-[#0D3127]/15 transition-all duration-200">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-xs mb-4">
                  {feat.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-[#0D3127]">{feat.title}</h3>
                <p className="text-sm text-muted-foreground leading-[1.5] font-medium">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#EEF2EC]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0D3127] mb-4">
              Selected Website Projects
            </h2>
            <p className="text-muted-foreground text-base font-medium">
              Explore our portfolio of premium websites built to elevate digital presences and drive conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((proj, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group bg-white border border-[#0D3127]/10 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Browser Mockup Header */}
                <div className="relative w-full aspect-[16/10] bg-muted overflow-hidden border-b border-[#0D3127]/5 flex flex-col">
                  {/* Browser Bar */}
                  <div className="flex items-center gap-1.5 px-4 py-3 bg-[#EEF2EC] border-b border-[#0D3127]/5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                    <div className="flex-grow max-w-[240px] mx-auto h-5 bg-white/60 rounded-md text-[10px] text-muted-foreground flex items-center justify-center font-sans tracking-wide">
                      {proj.url.replace('https://', '')}
                    </div>
                  </div>
                  {/* Image */}
                  <div className="flex-grow overflow-hidden relative">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-[#0D3127] mb-3 tracking-tight">
                      {proj.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-[1.6] mb-6 font-medium">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {proj.technologies.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 bg-[#F3F5EF] text-[#0D3127] text-xs font-semibold rounded-md uppercase tracking-wider">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-[#0D3127] text-white hover:bg-[#1a4a3e] rounded-full font-bold text-sm text-center transition-all inline-flex items-center justify-center gap-2 shadow-xs group-hover:shadow-sm"
                  >
                    Visit Website <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 lg:px-8 bg-[#0D3127] text-white relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#BCE953]/5 rounded-full blur-[120px] -z-10"></div>
        <div className="max-w-[800px] mx-auto space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.2]">
            Ready to Build a Website That Converts?
          </h2>
          <p className="text-white/80 text-lg leading-[1.6] max-w-[600px] mx-auto font-medium">
            Schedule a complimentary strategy call today. We will discuss your goals, mock up user flow concepts, and sketch out a high-fidelity design roadmap for your site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('openCalendly'))}
              className="px-8 py-4 bg-accent text-accent-foreground font-semibold rounded-full hover:scale-105 hover:bg-[#A6D944] transition-all duration-250 shadow-md cursor-pointer"
            >
              Schedule My Strategy Call
            </button>
            <button
              onClick={() => onNavigate('/')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full transition-all duration-250 cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
