'use client';

import { Icon } from "@iconify/react";
import GlassButton from "../ui/GlassButton";
import SpotlightCard from "../ui/SpotlightCard";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    return (
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 gap-x-12 gap-y-12">
            <div className="animate-clip-in lg:col-span-7 pb-4 space-y-8" style={{ animationDelay: "0.4s" }}>
                <motion.h1 
                    className="leading-[0.95] lg:text-7xl xl:text-7xl text-5xl font-medium text-neutral-900 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Turn financial complexity into clear, profitable decisions.
                </motion.h1>
                <motion.p 
                    className="leading-snug lg:text-base text-xl font-normal text-neutral-500 max-w-[60ch]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Strategic finance and business performance advisory for founders and leadership teams who need clarity — not just reports.
                </motion.p>
                <motion.div 
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a href="#contact">
                        <GlassButton>
                            Book a Strategy Call
                        </GlassButton>
                    </a>
                </motion.div>

                {/* Credentials Marquee (Moved inside Left Column) */}
                <div className="animate-fade-up w-full my-6 space-y-2" style={{ animationDelay: "0.6s" }}>
                    <p className="text-base text-neutral-500">Credentials & Designations</p>

                    <div className="overflow-hidden mask-image-gradient w-full relative gap-x-4 gap-y-4">
                        {/* Gradient masks for fade effect */}
                        <div className="z-10 bg-gradient-to-r from-neutral-100 to-transparent w-32 h-full absolute top-0 left-0"></div>
                        <div className="bg-gradient-to-l from-neutral-100 to-transparent w-32 h-full z-10 absolute top-0 right-0"></div>

                        <div className="flex w-max animate-marquee hover:pause-animation">
                            {/* Batch 1 */}
                            <div className="flex pr-4 pl-4 items-center gap-x-2 lg:gap-4">
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:certificate" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">CMA</span>
                                        <span className="text-xs text-neutral-500">Certified Management Accountant</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:calculator" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">CAT</span>
                                        <span className="text-xs text-neutral-500">Certified Accounting Technician</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:graduation-cap" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">AdZU</span>
                                        <span className="text-xs text-neutral-500">Ateneo de Zamboanga University</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:chalkboard-teacher" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">Mentor</span>
                                        <span className="text-xs text-neutral-500">Academic Instructor</span>
                                    </div>
                                </SpotlightCard>
                            </div>
                            {/* Batch 2 (Duplicate) */}
                            <div className="flex pr-4 pl-4 items-center gap-x-2 lg:gap-4">
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:certificate" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">CMA</span>
                                        <span className="text-xs text-neutral-500">Certified Management Accountant</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:calculator" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">CAT</span>
                                        <span className="text-xs text-neutral-500">Certified Accounting Technician</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:graduation-cap" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">AdZU</span>
                                        <span className="text-xs text-neutral-500">Ateneo de Zamboanga University</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:chalkboard-teacher" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">Mentor</span>
                                        <span className="text-xs text-neutral-500">Academic Instructor</span>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 flex flex-col animate-clip-in bg-stone-50 border-stone-200 border rounded-3xl pt-2 pr-2 pb-2 pl-2 space-y-8 gap-x-12 gap-y-12 justify-between" style={{ animationDelay: "0.5s", height: "fit-content" }}>
                <div className="overflow-hidden w-full border-stone-200 border rounded-2xl relative" style={{ paddingTop: '176.75%', position: 'relative' }}>
                    <img
                        src="/Za-T.png"
                        alt="Aireeza Leonsul Tandih - Financial Consultancy"
                        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                    />
                </div>
            </div>

            {/* Problem Section */}
            <motion.div 
                className="lg:col-span-12 mt-16 space-y-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <div className="bg-stone-50 border-stone-200 border rounded-3xl p-8 lg:p-12">
                    <h2 className="text-2xl lg:text-3xl font-medium text-neutral-900 tracking-tight mb-8">
                        Most growing businesses don't fail because of effort — they fail because decisions are made without clear financial insight.
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-neutral-700 uppercase tracking-wider mb-6">Common issues I help solve:</h3>
                            <ul className="space-y-4">
                                <motion.li 
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1.0 }}
                                >
                                    <Icon icon="ph:warning" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                    <span className="text-neutral-700">Profits look good, but cash feels tight</span>
                                </motion.li>
                                <motion.li 
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1.1 }}
                                >
                                    <Icon icon="ph:warning" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                    <span className="text-neutral-700">Reports exist, but decisions still feel uncertain</span>
                                </motion.li>
                                <motion.li 
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1.2 }}
                                >
                                    <Icon icon="ph:warning" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                    <span className="text-neutral-700">Growth adds complexity instead of clarity</span>
                                </motion.li>
                                <motion.li 
                                    className="flex items-start gap-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 1.3 }}
                                >
                                    <Icon icon="ph:warning" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                    <span className="text-neutral-700">Leadership is reacting instead of steering</span>
                                </motion.li>
                            </ul>
                        </div>
                        
                        <motion.div 
                            className="flex items-center justify-center bg-white border border-neutral-200 rounded-2xl p-8 lg:p-12"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.4 }}
                        >
                            <div className="text-center">
                                <p className="text-lg text-neutral-500 mb-3">You don't need more data.</p>
                                <p className="text-2xl lg:text-3xl font-medium text-neutral-900">You need better financial judgment.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
