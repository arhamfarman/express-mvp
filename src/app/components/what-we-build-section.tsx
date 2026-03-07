import { BrainCircuit, ShoppingBag, BarChart3, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatWeBuildSection() {
    const products = [
        {
            title: "AI SaaS Tool",
            description: "Dashboard product with user authentication, AI features, and subscription billing.",
            icon: <BrainCircuit size={20} className="text-[#0D3127]" />,
            image: "/images/mockups/ai-saas.png",
            features: ["OpenAI Integration", "User Accounts", "Stripe Billing"]
        },
        {
            title: "Marketplace Platform",
            description: "Two-sided marketplace with listings, profiles, and messaging.",
            icon: <ShoppingBag size={20} className="text-[#0D3127]" />,
            image: "/images/mockups/marketplace.png",
            features: ["Product Listings", "Dual User Roles", "Payment Splits"]
        },
        {
            title: "Internal Business Tool",
            description: "Admin dashboard with analytics, workflows, and integrations.",
            icon: <BarChart3 size={20} className="text-[#0D3127]" />,
            image: "/images/mockups/internal-tool.png",
            features: ["Custom Workflows", "Data Visualization", "API Integrations"]
        },
        {
            title: "Subscription SaaS",
            description: "User accounts, Stripe payments, and usage tracking.",
            icon: <Repeat size={20} className="text-[#0D3127]" />,
            image: "/images/mockups/subscription-saas.png",
            features: ["Tiered Plans", "Usage Metrics", "Customer Portal"]
        }
    ];

    return (
        <section id="what-we-build" className="py-[120px] px-6 lg:px-8 bg-[#EEF2EC] relative z-10 border-b border-border/50">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-3xl mx-auto text-center mb-[64px]"
                >
                    <h2 className="text-[34px] md:text-[40px] font-semibold text-foreground mb-4 tracking-[-0.015em]">
                        What We Can Build For You
                    </h2>
                    <p className="text-base text-muted-foreground leading-[1.6]">
                        From consumer apps to complex enterprise tools, we build products that scale.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="group relative bg-white border border-[#0D3127]/10 rounded-xl overflow-hidden shadow-sm hover:-translate-y-1 transition-all duration-250 ease-out hover:shadow-md flex flex-col"
                        >
                            {/* Product UI Mockup */}
                            <div className="relative w-full aspect-[16/10] bg-muted overflow-hidden border-b border-[#0D3127]/5">
                                <img
                                    src={product.image}
                                    alt={`${product.title} Dashboard Interface`}
                                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                                />
                                {/* Subtle inset shadow overlay */}
                                <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.03)] pointer-events-none"></div>
                            </div>

                            {/* Card Content */}
                            <div className="p-8 pb-10 flex-grow flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="flex-shrink-0 w-10 h-10 bg-[#BCE953] rounded-full flex items-center justify-center group-hover:rotate-3 transition-transform duration-250">
                                        {product.icon}
                                    </div>
                                    <h3 className="text-[25px] md:text-[33px] font-extrabold text-foreground tracking-[-0.02em] leading-[1.1]">
                                        {product.title}
                                    </h3>
                                </div>

                                <p className="text-muted-foreground text-[15px] leading-[1.6] max-w-[50ch] mb-6 flex-grow">
                                    {product.description}
                                </p>

                                <ul className="space-y-2.5 mt-auto">
                                    {product.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-[15px] text-foreground/80">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
