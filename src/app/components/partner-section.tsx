import { motion } from 'framer-motion';
import { Rocket, Clock, DollarSign, Target, Layers, Hourglass } from 'lucide-react';

export function PartnerSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="partnership" className="py-[120px] px-6 lg:px-8 bg-[#F3F5EF] relative z-10 border-b border-border/50">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-[64px]"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl">⚡</span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Engagement Models</span>
          </div>
          <h2 className="text-[34px] md:text-[44px] font-bold text-[#0D3127] mb-6 tracking-[-0.02em] leading-[1.1]">
            How We Partner With Founders
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you're validating a startup idea or need ongoing engineering support, we provide flexible engagement models designed for modern founders.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: The Express MVP */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-white border border-[#0D3127]/10 rounded-2xl p-8 md:p-10 shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#BCE953]/20 border border-[#BCE953]/30 flex items-center justify-center text-[#0D3127] shadow-xs mb-6 group-hover:scale-105 transition-transform duration-300">
                <Rocket size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D3127] mb-2 tracking-tight">
                The Express MVP
              </h3>
              <p className="text-muted-foreground text-sm font-medium mb-8">
                Launch a production-ready MVP in weeks using our proven engineering sprint.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] border border-[#0D3127]/5 flex items-center justify-center text-[#0D3127] flex-shrink-0">
                    <Layers size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1">What it is</h4>
                    <p className="text-[#0D3127]/95 font-medium text-sm leading-relaxed">
                      A fully functional, production-ready v1 application built completely from scratch.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] border border-[#0D3127]/5 flex items-center justify-center text-[#0D3127] flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1">Timeline</h4>
                    <p className="text-[#0D3127]/95 font-medium text-sm leading-relaxed">
                      Delivered within a 14–21 day window.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] border border-[#0D3127]/5 flex items-center justify-center text-[#0D3127] flex-shrink-0">
                    <DollarSign size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1">Investment</h4>
                    <p className="text-[#0D3127]/95 font-medium text-sm leading-relaxed">
                      Starting at $2,399 depending on project scope.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] border border-[#0D3127]/5 flex items-center justify-center text-[#0D3127] flex-shrink-0">
                    <Target size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1">Best For</h4>
                    <p className="text-[#0D3127]/95 font-medium text-sm leading-relaxed">
                      Startup founders validating an idea, launching quickly, or preparing to raise funding.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.dispatchEvent(new CustomEvent('openCalendly'))}
              className="w-full py-4 bg-[#0D3127] text-white hover:bg-[#1a4a3e] transition-colors rounded-full font-bold text-base shadow-xs mt-auto cursor-pointer"
            >
              Start Your MVP Sprint
            </motion.button>
          </motion.div>

          {/* Card 2: Technical Fractional Retainer */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="group relative bg-white border border-[#0D3127]/10 rounded-2xl p-8 md:p-10 shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#BCE953]/20 border border-[#BCE953]/30 flex items-center justify-center text-[#0D3127] shadow-xs mb-6 group-hover:scale-105 transition-transform duration-300">
                <Hourglass size={24} strokeWidth={2} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#0D3127] mb-2 tracking-tight">
                Technical Fractional Retainer
              </h3>
              <p className="text-muted-foreground text-sm font-medium mb-8">
                Ongoing engineering support after your MVP launches.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] border border-[#0D3127]/5 flex items-center justify-center text-[#0D3127] flex-shrink-0">
                    <Layers size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1">What it is</h4>
                    <p className="text-[#0D3127]/95 font-medium text-sm leading-relaxed">
                      Dedicated full-stack engineering support including feature development, backend systems, DevOps, performance optimization, bug fixes, and technical guidance.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] border border-[#0D3127]/5 flex items-center justify-center text-[#0D3127] flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1">Allocation</h4>
                    <p className="text-[#0D3127]/95 font-medium text-sm leading-relaxed">
                      Typically 10–15 dedicated engineering hours per week (customizable).
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF2EC] border border-[#0D3127]/5 flex items-center justify-center text-[#0D3127] flex-shrink-0">
                    <Target size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1">Best For</h4>
                    <p className="text-[#0D3127]/95 font-medium text-sm leading-relaxed">
                      Founders who already have a product and need a reliable technical partner without hiring a full-time engineer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.dispatchEvent(new CustomEvent('openCalendly'))}
              className="w-full py-4 bg-[#0D3127] text-white hover:bg-[#1a4a3e] transition-colors rounded-full font-bold text-base shadow-xs mt-auto cursor-pointer"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
