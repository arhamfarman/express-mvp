import { ArrowRight, Play, CheckCircle2, Paintbrush, ChevronRight, Code2, Rocket, CheckCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-20 justify-center overflow-hidden bg-[#0D3127]">
      {/* Dark background grid pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.03] z-0 mix-blend-overlay"></div>

      <div className="max-w-[1200px] mx-auto w-full px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center max-w-2xl relative z-10">
            {/* YC Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#BCE953]/10 border border-[#BCE953]/20 text-[#BCE953] text-sm font-semibold mb-6 w-fit shadow-sm"
            >
              <Zap size={14} className="fill-[#BCE953]" />
              MVPs built in 2–3 weeks
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-[52px] lg:text-[64px] font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]"
            >
              Turn Your Startup Idea Into a Real Product — In Weeks.
            </motion.h1>

            {/* Subheadline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              className="text-base lg:text-lg text-slate-300 mb-10 leading-[1.6] max-w-xl space-y-4"
            >
              <p>Express MVP helps founders launch working products in 2–3 weeks without hiring a full development team.</p>
              <p>We cut through complexity and build only what matters so founders can validate faster.</p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => window.dispatchEvent(new CustomEvent('openCalendly'))}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#BCE953] text-[#0D3127] hover:bg-[#A6D944] rounded-full text-base font-semibold w-full sm:w-auto shadow-lg shadow-[#BCE953]/20 transition-colors"
              >
                Book Strategy Call
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onClick={() => scrollToSection('how-it-works')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 text-base font-medium w-full sm:w-auto transition-colors"
              >
                <Play size={16} className="text-slate-400 group-hover:text-white transition-colors" />
                See How It Works
              </motion.button>
            </motion.div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-slate-400 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                <span>Launch in 2–3 weeks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                <span>Fixed scope MVP sprint</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                <span>Built with modern stack</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, type: "spring", bounce: 0.3 }}
            className="hidden lg:flex items-center justify-center relative z-10 w-full"
          >
            {/* Subtle Gradient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#BCE953]/20 to-[#0D3127]/40 blur-[100px] -z-10 rounded-full opacity-80"></div>

            {/* Floating Dashboard Image */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-[90%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] bg-[#161B22]"
            >
              {/* Fake Window Controls */}
              <div className="bg-[#0D1117] border-b border-white/5 py-3 px-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 transition-colors cursor-pointer"></div>
              </div>
              <img
                src="/images/saas-dashboard.png"
                alt="Modern SaaS Dashboard Mockup"
                className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}