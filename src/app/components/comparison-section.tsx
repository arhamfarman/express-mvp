import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-[120px] px-6 lg:px-8 bg-white relative z-10 border-b border-border/50">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-[64px]"
        >
          <h2 className="text-[34px] md:text-[40px] font-semibold text-foreground mb-4 tracking-[-0.015em]">
            Why Founders Choose Express MVP
          </h2>
          <p className="text-base text-muted-foreground">
            Skip the traditional development headaches.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-[24px]">
          {/* Traditional Development */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-card border border-border rounded-2xl p-8 opacity-80"
          >
            <div className="mb-8">
              <h3 className="text-[22px] md:text-[24px] font-semibold text-card-foreground mb-2 tracking-[-0.01em]">
                Traditional Development
              </h3>
              <p className="text-muted-foreground text-sm">
                The old way
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary border border-border rounded-full flex items-center justify-center mt-0.5">
                  <X className="text-muted-foreground" size={14} strokeWidth={2} />
                </div>
                <span className="text-muted-foreground">3–6 month timeline</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary border border-border rounded-full flex items-center justify-center mt-0.5">
                  <X className="text-muted-foreground" size={14} strokeWidth={2} />
                </div>
                <span className="text-muted-foreground">$20k+ cost</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary border border-border rounded-full flex items-center justify-center mt-0.5">
                  <X className="text-muted-foreground" size={14} strokeWidth={2} />
                </div>
                <span className="text-muted-foreground">Large dev teams</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-secondary border border-border rounded-full flex items-center justify-center mt-0.5">
                  <X className="text-muted-foreground" size={14} strokeWidth={2} />
                </div>
                <span className="text-muted-foreground">Overbuilt v1</span>
              </div>
            </div>
          </motion.div>

          {/* Express MVP - Highlighted */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative bg-primary border text-primary-foreground border-primary rounded-2xl p-8 shadow-2xl lg:scale-105 z-10"
          >
            {/* Accent Glow Effect */}
            <div className="absolute inset-0 bg-accent/20 rounded-2xl blur-[40px] -z-10 pointer-events-none"></div>

            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent rounded-full text-xs font-bold text-accent-foreground mb-4 uppercase tracking-wider">
                Recommended
              </div>
              <h3 className="text-[22px] md:text-[24px] font-semibold text-primary-foreground mb-2 tracking-[-0.01em]">
                Express MVP
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                The fast way
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                  <Check className="text-accent-foreground" size={14} strokeWidth={3} />
                </div>
                <span className="text-primary-foreground font-medium">2–3 week sprint</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                  <Check className="text-accent-foreground" size={14} strokeWidth={3} />
                </div>
                <span className="text-primary-foreground font-medium">$2,399 fixed price</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                  <Check className="text-accent-foreground" size={14} strokeWidth={3} />
                </div>
                <span className="text-primary-foreground font-medium">Lean validation build</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                  <Check className="text-accent-foreground" size={14} strokeWidth={3} />
                </div>
                <span className="text-primary-foreground font-medium">Live product fast</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
