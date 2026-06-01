import { motion } from 'framer-motion';
import { Layers, Rocket, Code2, Database, CreditCard, Box } from 'lucide-react';

export function BentoGridSection() {
    // Shared animation for cards appearing on scroll
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut" as const
            }
        })
    };

    return (
        <section id="why-express-mvp" className="py-[120px] px-6 lg:px-8 bg-[#F3F5EF] relative z-10 border-b border-border/50">
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-3xl mb-[64px]"
                >
                    <h2 className="text-[40px] md:text-[48px] font-bold text-[#0D3127] mb-6 tracking-[-0.02em] leading-[1.1]">
                        Why Founders Choose Express MVP
                    </h2>
                    <p className="text-lg text-foreground/70 leading-[1.6] max-w-2xl">
                        We help founders move from idea to real product quickly so they can validate faster, save money, and build with confidence.
                    </p>
                </motion.div>

                {/* Bento Grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* CARD 1: Fast MVP (Large Left) */}
                    <motion.div
                        custom={0}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="md:col-span-8 group relative bg-white border border-[#0D3127]/10 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md flex flex-col md:flex-row p-8 gap-8"
                    >
                        <div className="flex flex-col justify-center max-w-sm flex-shrink-0 z-10">
                            <h3 className="text-[32px] md:text-[40px] font-extrabold text-[#0D3127] mb-4 tracking-[-0.02em] leading-[1.1]">
                                Fast MVP
                            </h3>
                            <p className="text-foreground/70 leading-[1.6]">
                                Skip the setup hassle and bring your idea to life in record time.
                            </p>
                        </div>
                        {/* Custom Illustration - Fast Build UI snippet */}
                        <div className="relative flex-grow min-h-[200px] flex items-center justify-center bg-[#F3F5EF] rounded-xl border border-[#0D3127]/5 overflow-hidden">
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="w-[80%] h-[70%] bg-white rounded-lg shadow-sm border border-[#0D3127]/10 flex flex-col p-4"
                            >
                                {/* Editor Header */}
                                <div className="flex items-center gap-2 mb-4 border-b border-[#0D3127]/5 pb-3">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                    <div className="ml-4 h-2 w-24 bg-muted rounded-full"></div>
                                </div>
                                {/* Code Lines Simulation */}
                                <div className="space-y-3 flex-grow">
                                    <div className="flex gap-3 items-center"><div className="w-16 h-2 bg-blue-100 rounded-full"></div><div className="w-32 h-2 bg-green-100 rounded-full"></div></div>
                                    <div className="ml-6 flex gap-3 items-center"><div className="w-24 h-2 bg-purple-100 rounded-full"></div><div className="w-16 h-2 bg-orange-100 rounded-full"></div></div>
                                    <div className="ml-6 w-48 h-2 bg-muted rounded-full"></div>
                                </div>
                                <motion.div
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                    className="mt-auto h-4 w-4 rounded-sm bg-[#BCE953]"
                                />
                            </motion.div>
                            <Rocket className="absolute bottom-6 right-6 text-[#BCE953] opacity-20" size={80} />
                        </div>
                    </motion.div>

                    {/* CARD 2: Validate Your Idea (Medium Right) */}
                    <motion.div
                        custom={1}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="md:col-span-4 group relative bg-white border border-[#0D3127]/10 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md flex flex-col p-8"
                    >
                        <div className="flex flex-col mb-8">
                            <h3 className="text-[24px] md:text-[28px] font-bold text-[#0D3127] mb-3 tracking-tight leading-[1.2]">
                                Validate Your Idea
                            </h3>
                            <p className="text-foreground/70 leading-[1.6]">
                                Launch early, get real user feedback, and know whether your startup idea is worth pursuing.
                            </p>
                        </div>
                        {/* Analytics Chart SVG */}
                        <div className="mt-auto bg-[#F3F5EF] rounded-xl border border-[#0D3127]/5 p-6 relative overflow-hidden h-[180px] flex items-end">
                            <div className="w-full h-full relative flex items-end justify-between gap-2">
                                {[30, 45, 25, 60, 40, 75, 90].map((height, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ height: `${height + 10}%`, backgroundColor: '#A6D944' }}
                                        className="w-full bg-[#BCE953] rounded-t-sm transition-colors duration-300"
                                        style={{ height: `${height}%` }}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 3: Save Time & Money (Large Left) */}
                    <motion.div
                        custom={2}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="md:col-span-8 group relative bg-white border border-[#0D3127]/10 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md flex flex-col md:flex-row-reverse p-8 gap-8"
                    >
                        <div className="flex flex-col justify-center max-w-sm flex-shrink-0 z-10">
                            <h3 className="text-[32px] md:text-[40px] font-extrabold text-[#0D3127] mb-4 tracking-[-0.02em] leading-[1.1]">
                                Save Time & Money
                            </h3>
                            <p className="text-foreground/70 leading-[1.6]">
                                Avoid spending months and thousands of dollars building features nobody needs.
                            </p>
                        </div>
                        {/* Custom Illustration - Coins flowing / Savings */}
                        <div className="relative flex-grow min-h-[200px] flex items-center justify-center bg-[#F3F5EF] rounded-xl border border-[#0D3127]/5 overflow-hidden">
                            <div className="relative w-40 h-40">
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, delay: 0 }}
                                    className="absolute left-0 bottom-4 w-12 h-12 rounded-full border-[3px] border-[#0D3127] bg-[#BCE953] shadow-sm flex items-center justify-center"
                                >
                                    <span className="font-bold text-[#0D3127]">$</span>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                                    className="absolute left-[30%] top-6 w-16 h-16 rounded-full border-[3px] border-[#0D3127] bg-[#BCE953] shadow-sm flex items-center justify-center z-10"
                                >
                                    <span className="font-bold text-[#0D3127] text-xl">$</span>
                                </motion.div>
                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                                    className="absolute right-0 bottom-10 w-14 h-14 rounded-full border-[3px] border-[#0D3127] bg-white shadow-sm flex items-center justify-center"
                                >
                                    <span className="font-bold text-[#0D3127] text-lg">$</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 4: Build With a Modern Stack (Medium Right) */}
                    <motion.div
                        custom={3}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="md:col-span-4 group relative bg-[#0D3127] border border-[#BCE953]/20 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md flex flex-col p-8"
                    >
                        <div className="flex flex-col mb-8">
                            <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-3 tracking-tight leading-[1.2]">
                                Production Ready Stack
                            </h3>
                            <p className="text-white/70 leading-[1.6]">
                                Your MVP is built with the same technologies used by modern startups.
                            </p>
                        </div>
                        {/* Stack Icons Grid */}
                        <div className="mt-auto grid grid-cols-2 gap-3">
                            {[
                                { name: "React", Icon: Box },
                                { name: "Node.js", Icon: Layers },
                                { name: "PostgreSQL", Icon: Database },
                                { name: "Stripe", Icon: CreditCard }
                            ].map((tech, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-white/10 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center gap-2"
                                >
                                    <tech.Icon className="text-[#BCE953]" size={28} strokeWidth={1.5} />
                                    <span className="text-white/80 text-xs font-medium">{tech.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* CARD 5: Metric 1 (Small Bottom) */}
                    <motion.div
                        custom={4}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-20px" }}
                        className="md:col-span-6 group relative bg-[#BCE953] border border-[#0D3127]/10 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md p-8 flex items-center justify-center text-center"
                    >
                        <div>
                            <div className="text-[48px] md:text-[64px] font-bold text-[#0D3127] tracking-tight leading-none mb-2">
                                2–3 Weeks
                            </div>
                            <div className="text-[18px] font-medium text-[#0D3127]/80">
                                Average MVP launch time
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 6: Metric 2 (Small Bottom) */}
                    <motion.div
                        custom={5}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-20px" }}
                        className="md:col-span-6 group relative bg-white border border-[#0D3127]/10 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-300 hover:shadow-md p-8 flex items-center justify-center text-center"
                    >
                        <div>
                            <div className="text-[11px] font-semibold text-foreground/40 tracking-[0.12em] uppercase mb-2">Starting at</div>
                            <div className="text-[48px] md:text-[64px] font-bold text-[#0D3127] tracking-tight leading-none mb-2">
                                $2,399
                            </div>
                            <div className="text-[26px] md:text-[32px] font-extrabold text-[#0D3127]/80 tracking-tight leading-tight mb-3">
                                MVP Sprint
                            </div>
                            <p className="text-[12px] text-foreground/40 leading-[1.5] max-w-[220px] mx-auto">
                                Most founders launch between $2,399–$4,999 depending on scope.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
