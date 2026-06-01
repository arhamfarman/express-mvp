import { Check, Rocket, Lightbulb, MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';

export function PricingSection() {
  const features = [
    "2–3 week build",
    "3–5 core features",
    "Authentication system",
    "Backend + database",
    "Optional payments integration",
    "Deployment",
    "Demo walkthrough",
    "14 days support"
  ];

  const shortBullets = [
    "No dev team needed",
    "Validate before raising",
    "Launch in weeks"
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-[120px] px-6 lg:px-8 bg-primary">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-stretch">

          {/* Left Column: Pricing Card */}
          <div className="flex flex-col z-10 w-full max-w-md mx-auto lg:max-w-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#0D3127] border border-[#BCE953]/20 rounded-2xl p-8 shadow-2xl hover:shadow-[#BCE953]/10 hover:-translate-y-1 transition-all duration-300 group flex-grow flex flex-col"
            >
              <div className="text-center mb-8">
                <h3 className="text-[24px] font-bold text-primary-foreground mb-4 tracking-[-0.01em]">
                  MVP Sprint
                </h3>
                <div className="flex flex-col items-center justify-center mb-2">
                  <span className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">
                    Starting at
                  </span>
                  <span className="text-[48px] font-bold text-accent tracking-tight hover:scale-105 transition-transform duration-250">
                    $2,399
                  </span>
                </div>
                <p className="text-primary-foreground/80 text-sm font-medium mb-3">
                  50% upfront • 50% on delivery
                </p>
                <p className="text-white/40 text-xs leading-relaxed max-w-[280px] mx-auto">
                  Most founders launch between $2,399–$4,999 depending on scope.
                </p>
              </div>

              <div className="space-y-4 mb-8 flex-grow">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#BCE953] rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                      <Check className="text-[#0D3127]" size={14} strokeWidth={3} />
                    </div>
                    <span className="text-white/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => window.dispatchEvent(new CustomEvent('openCalendly'))}
                className="w-full py-4 bg-[#BCE953] text-[#0D3127] hover:bg-[#A6D944] transition-colors rounded-full font-bold text-lg shadow-sm mt-auto"
              >
                Start Your Sprint
              </motion.button>
            </motion.div>
          </div>

          {/* Right Column: Visual Value Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="bg-[#BCE953] border border-[#0D3127]/10 rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col relative overflow-hidden"
          >
            {/* Decorative BG element */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-12">
                <h3 className="text-[36px] md:text-[48px] font-extrabold text-[#0D3127] mb-8 tracking-[-0.02em] leading-[1.05] max-w-[480px]">
                  Built for founders who want to move fast
                </h3>
                <ul className="space-y-5">
                  {shortBullets.map((item, index) => (
                    <li key={index} className="flex items-center gap-4">
                      <div className="w-2.5 h-2.5 bg-[#0D3127] rounded-full shadow-sm" />
                      <span className="text-[#0D3127]/90 font-bold text-lg md:text-xl tracking-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual Journey */}
              <div className="mt-auto bg-white/40 rounded-2xl p-8 border border-white/50 backdrop-blur-md shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
                  {/* Connecting Line (Desktop) */}
                  <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-[#0D3127]/15 z-0" />

                  {/* Step 1: Idea */}
                  <div className="relative z-10 flex flex-col items-center gap-4 group">
                    <motion.div
                      animate={{ y: [-4, 4, -4] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                      className="w-16 h-16 rounded-full bg-white shadow-md border border-[#0D3127]/5 flex items-center justify-center text-[#0D3127] group-hover:scale-110 transition-transform duration-300"
                    >
                      <Lightbulb size={28} strokeWidth={2.5} />
                    </motion.div>
                    <span className="font-extrabold text-[#0D3127] text-lg">Idea</span>
                  </div>

                  {/* Step 2: Build */}
                  <div className="relative z-10 flex flex-col items-center gap-4 group">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                      className="w-16 h-16 rounded-full bg-[#0D3127] text-[#BCE953] shadow-lg flex items-center justify-center group-hover:bg-[#1a4a3e] transition-colors duration-300"
                    >
                      <MonitorSmartphone size={28} strokeWidth={2.5} />
                    </motion.div>
                    <span className="font-extrabold text-[#0D3127] text-lg">Build</span>
                  </div>

                  {/* Step 3: Launch */}
                  <div className="relative z-10 flex flex-col items-center gap-4 group">
                    <motion.div
                      animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                      className="w-16 h-16 rounded-full bg-white shadow-md border border-[#0D3127]/5 flex items-center justify-center text-[#0D3127] group-hover:scale-110 transition-transform duration-300"
                    >
                      <Rocket size={28} strokeWidth={2.5} />
                    </motion.div>
                    <span className="font-extrabold text-[#0D3127] text-lg">Launch</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}