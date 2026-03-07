import { Lock, Zap, Flag, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function HowItWorksSection() {
  const steps = [
    {
      icon: Lock,
      number: '01',
      step: 'Scope Lock',
      description:
        'We define the core problem, essential features, and technical scope to ensure a focused build.',
    },
    {
      icon: Zap,
      number: '02',
      step: 'Build Sprint',
      description:
        'We build the product rapidly using modern AI-assisted development tools and a production-ready stack.',
    },
    {
      icon: Flag,
      number: '03',
      step: 'Launch & Demo',
      description:
        'Your MVP goes live. We hand over the code, provide a full walkthrough, and deploy your product.',
    },
  ];

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-[120px] bg-[#0D3127] relative z-10 border-b border-border/10">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">

        {/* Top Header Section */}
        <div className="max-w-xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#BCE953]"></div>
              <span className="text-xs font-semibold uppercase tracking-wider text-white/80">The Process</span>
            </div>

            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
              The Sprint Process to Launch Faster
            </h2>

            <p className="text-base text-white/60 leading-relaxed mb-8">
              We make launching simple and affordable — removing technical complexity, saving time and cost, and giving you a polished, ready-to-use foundation so you can move faster, stay focused, and confidently grow your product without distractions.
            </p>

            <button
              onClick={scrollToCTA}
              className="inline-flex items-center gap-4 pl-6 pr-2 py-2 rounded-full border border-white/10 bg-[#0A261D]/50 hover:bg-[#0A261D]/80 hover:border-[#BCE953]/30 transition-all duration-300 text-white font-medium group text-sm"
            >
              Get Started
              <div className="w-8 h-8 rounded-full bg-[#BCE953] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <ArrowRight className="text-[#0D3127]" size={16} strokeWidth={2.5} />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group p-8 rounded-2xl border border-[#BCE953]/10 bg-[#0A261D]/30 hover:bg-[#0A261D]/80 hover:border-[#BCE953]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex items-start justify-between mb-16">
                <span className="text-2xl font-bold text-[#BCE953]">
                  {step.number}
                </span>
                <step.icon className="text-[#BCE953] opacity-80 group-hover:opacity-100 transition-opacity" size={24} strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-[22px] md:text-[24px] font-semibold text-white mb-3 tracking-[-0.01em]">
                  {step.step}
                </h3>

                <p className="text-white/60 leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}