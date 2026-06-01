import { Clock, DollarSign, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function MetricsSection() {
  return (
    <section id="metrics" className="py-[120px] px-6 lg:px-8 bg-[#F3F5EF] relative z-10 border-b border-border/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[24px]">
          {/* Card 1 - 2–3 Weeks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="group relative bg-white border border-[#0D3127]/10 rounded-xl p-8 shadow-sm hover:-translate-y-1 transition-all duration-250 ease-out hover:shadow-md"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-[#BCE953] rounded-full flex items-center justify-center mb-6">
                <Clock className="text-[#0D3127] group-hover:rotate-3 transition-transform duration-250" size={24} />
              </div>
              <div className="text-[24px] md:text-[26px] font-bold text-card-foreground mb-3 tracking-[-0.02em]">
                2–3 Weeks
              </div>
              <p className="text-muted-foreground leading-[1.6]">
                From kickoff to deployed MVP. Fast, focused, no scope creep.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - $1,800 Fixed Price */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="group relative bg-white border border-[#0D3127]/10 rounded-xl p-8 shadow-sm hover:-translate-y-1 transition-all duration-250 ease-out hover:shadow-md"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-[#BCE953] rounded-full flex items-center justify-center mb-6">
                <DollarSign className="text-[#0D3127] group-hover:rotate-3 transition-transform duration-250" size={24} />
              </div>
              <div className="text-[11px] font-semibold text-muted-foreground/50 tracking-[0.12em] uppercase mb-1">Starting at</div>
              <div className="text-[24px] md:text-[26px] font-bold text-card-foreground mb-3 tracking-[-0.02em]">
                $2,399 Fixed Price
              </div>
              <p className="text-muted-foreground leading-[1.6] mb-3">
                Fixed scope. Fixed timeline. No hourly billing.
              </p>
              <p className="text-[12px] text-muted-foreground/50 leading-[1.5]">
                Most founders launch between $2,399–$4,999 depending on scope.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Production Ready Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="group relative bg-white border border-[#0D3127]/10 rounded-xl p-8 shadow-sm hover:-translate-y-1 transition-all duration-250 ease-out hover:shadow-md"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-[#BCE953] rounded-full flex items-center justify-center mb-6">
                <Code2 className="text-[#0D3127] group-hover:rotate-3 transition-transform duration-250" size={24} />
              </div>
              <div className="text-[24px] md:text-[26px] font-bold text-card-foreground mb-4 tracking-[-0.02em]">
                Production Ready Stack
              </div>
              <p className="text-muted-foreground leading-[1.6] mb-6">
                Modern tools built for real products, not prototypes.
              </p>
              {/* Tech Stack Icons */}
              <div className="flex flex-wrap gap-2">
                <div className="px-3 py-1.5 bg-secondary border border-border rounded-lg text-sm text-secondary-foreground">
                  React
                </div>
                <div className="px-3 py-1.5 bg-secondary border border-border rounded-lg text-sm text-secondary-foreground">
                  Node.js
                </div>
                <div className="px-3 py-1.5 bg-secondary border border-border rounded-lg text-sm text-secondary-foreground">
                  Stripe
                </div>
                <div className="px-3 py-1.5 bg-secondary border border-border rounded-lg text-sm text-secondary-foreground">
                  PostgreSQL
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}