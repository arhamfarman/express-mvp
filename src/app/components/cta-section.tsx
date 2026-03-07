import { Calendar, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section id="cta" className="py-[120px] px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="relative bg-primary border border-primary-foreground/20 rounded-3xl p-12 lg:p-24 text-center overflow-hidden shadow-2xl"
        >
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

          <div className="max-w-3xl mx-auto relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 border border-primary-foreground/20 rounded-full text-sm text-accent mb-8 font-medium shadow-sm"
            >
              <Calendar size={16} />
              Limited sprint slots available each month
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[48px] lg:text-[64px] font-bold text-primary-foreground mb-6 leading-[1.1] tracking-[-0.02em]"
            >
              Ready to Launch <br className="hidden sm:block" />
              <span className="text-accent">
                Your MVP?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-[18px] lg:text-[20px] text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto"
            >
              If you have an idea but no technical team, we can help you turn it into a real product in weeks.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onClick={() => window.dispatchEvent(new CustomEvent('openCalendly'))}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full text-lg font-semibold shadow-sm"
            >
              Book Strategy Call
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-primary-foreground/60 mt-8 text-sm"
            >
              No commitment required • Free consultation • Response within 24 hours
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}