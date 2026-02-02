'use client';

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function WhatIDo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.8, 0.25, 1]
            }
        }
    };

    return (
        <section id="services" className="animate-scaleIn animation-delay-300 sm:pl-2 sm:pr-2 sm:pt-2 sm:pb-2 bg-stone-50 w-full max-w-none z-10 border-stone-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl mt-12 mb-12">
            {/* Header */}
            <div className="flex animate-fadeInUp sm:pt-6 sm:pr-6 sm:pb-6 sm:pl-6 pt-6 pr-1 pb-6 pl-1 gap-x-6 gap-y-6 items-center flex-wrap">
                <h2 className="text-[44px] leading-[0.9] sm:text-6xl lg:text-7xl xl:text-5xl text-zinc-950 tracking-tighter">
                    What I Do
                </h2>
                <span aria-hidden="true" role="separator" aria-orientation="vertical" className="w-px bg-neutral-200 h-10"></span>
                <p className="sm:text-base text-sm text-zinc-950 tracking-tight mt-1">
                    I work with founders and leadership teams to improve profitability, create decision-ready insights, and bring structure to complex businesses.
                </p>
            </div>

            <motion.div 
                ref={ref}
                className="grid grid-cols-1 z-10 mt-6 relative items-stretch gap-x-2 lg:grid-cols-12 sm:gap-2 sm:mt-8"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Service 1: Business Performance & Profitability */}
                <motion.div 
                    className="lg:col-span-4 sm:p-8 hover-lift flex flex-col bg-white h-full border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative"
                    variants={cardVariants}
                >
                    <span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-800 tracking-tight">PROFITABILITY</span>
                    
                    <div className="relative h-48 sm:h-56 rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden p-6 flex items-center justify-center mb-6">
                        <div className="bg-white border border-neutral-200 rounded-xl p-4 w-full shadow-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                    <Icon icon="ph:chart-line-up-bold" width="16" height="16" />
                                </div>
                                <div className="h-2 w-24 bg-neutral-100 rounded"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-emerald-100 rounded"></div>
                                <div className="h-2 w-3/4 bg-neutral-100 rounded"></div>
                                <div className="h-2 w-1/2 bg-neutral-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <h3 className="sm:text-4xl text-3xl text-neutral-900 tracking-tighter mt-2 mb-3">Business Performance & Profitability</h3>
                    <p className="sm:text-base text-sm text-neutral-600 tracking-tight mb-4 font-semibold">
                        Make better decisions about where to focus, fix, and invest.
                    </p>
                    <p className="sm:text-sm text-xs text-neutral-500 tracking-tight max-w-[52ch] mb-6">
                        I help you clearly see what is working, what is leaking value, and where growth actually comes from, so you stop relying on gut feel and start acting on facts.
                    </p>
                    
                    <div className="mt-auto space-y-3">
                        <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">This helps you decide:</p>
                        <ul className="text-xs text-neutral-600 space-y-2">
                            <li className="flex items-start gap-2">
                                <Icon icon="ph:check" className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                                <span>Which products, services, or clients are truly profitable</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="ph:check" className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                                <span>Where margins are eroding and why</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="ph:check" className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                                <span>What operational levers will move profitability fastest</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Service 2: Strategic Finance & FP&A */}
                <motion.div 
                    className="lg:col-span-4 sm:p-8 hover-lift flex flex-col bg-white h-full border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative"
                    variants={cardVariants}
                >
                    <span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-800 tracking-tight">STRATEGIC FINANCE</span>

                    <div className="relative h-48 sm:h-56 rounded-2xl border border-neutral-200 overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 mb-6">
                        <div className="grid grid-cols-2 gap-3 h-full">
                            <div className="bg-white border border-neutral-200 rounded-lg p-2 shadow-sm flex flex-col justify-center items-center">
                                <Icon icon="ph:currency-circle-dollar-bold" className="text-blue-500 mb-2 w-6 h-6" />
                                <div className="h-1 w-12 bg-neutral-200 rounded"></div>
                            </div>
                            <div className="bg-white border border-neutral-200 rounded-lg p-2 shadow-sm flex flex-col justify-center items-center">
                                <Icon icon="ph:trend-up-bold" className="text-blue-500 mb-2 w-6 h-6" />
                                <div className="h-1 w-12 bg-neutral-200 rounded"></div>
                            </div>
                            <div className="bg-white border border-neutral-200 rounded-lg p-2 shadow-sm flex flex-col justify-center items-center col-span-2">
                                <div className="w-full flex justify-between items-center mb-1">
                                    <div className="h-1 w-8 bg-neutral-200 rounded"></div>
                                    <div className="h-1 w-4 bg-blue-400 rounded"></div>
                                </div>
                                <div className="w-full h-1 bg-neutral-100 rounded">
                                    <div className="w-2/3 h-full bg-blue-500 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="sm:text-4xl text-3xl text-neutral-900 tracking-tighter mt-2 mb-3">Strategic Finance & FP&A</h3>
                    <p className="sm:text-base text-sm text-neutral-600 tracking-tight mb-4 font-semibold">
                        Make better decisions about growth, cash, and risk.
                    </p>
                    <p className="sm:text-sm text-xs text-neutral-500 tracking-tight max-w-[52ch] mb-6">
                        I turn financial data into forward-looking insight so you are not just reporting the past but actively steering the business.
                    </p>
                    
                    <div className="mt-auto space-y-3">
                        <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">This helps you decide:</p>
                        <ul className="text-xs text-neutral-600 space-y-2">
                            <li className="flex items-start gap-2">
                                <Icon icon="ph:check" className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                                <span>How fast you can grow without breaking cash flow</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="ph:check" className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                                <span>Which scenarios are safe, risky, or worth pursuing</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="ph:check" className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                                <span>How to allocate budget in a way that drives outcomes</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Service 3: Advisory & Oversight */}
                <motion.div 
                    className="lg:col-span-4 sm:p-8 hover-lift flex flex-col bg-white h-full border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative"
                    variants={cardVariants}
                >
                    <span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-800 tracking-tight">ADVISORY</span>

                    <div className="relative h-48 sm:h-56 rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden p-4 flex items-center justify-center mb-6">
                        <div className="bg-white p-4 rounded-xl shadow-lg border border-neutral-200 w-full max-w-[200px] text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 text-purple-600">
                                <Icon icon="ph:handshake-bold" width="24" height="24" />
                            </div>
                            <div className="h-2 w-20 bg-neutral-200 rounded mx-auto mb-2"></div>
                            <div className="h-2 w-24 bg-neutral-100 rounded mx-auto"></div>
                        </div>
                    </div>

                    <h3 className="sm:text-4xl text-3xl text-neutral-900 tracking-tighter mt-2 mb-3">Advisory & Oversight</h3>
                    <p className="sm:text-base text-sm text-neutral-600 tracking-tight mb-4 font-semibold">
                        Make better decisions with confidence and fewer blind spots.
                    </p>
                    <p className="sm:text-sm text-xs text-neutral-500 tracking-tight max-w-[52ch] mb-6">
                        I act as a long-term financial thought partner, helping leadership navigate complex decisions while putting the right guardrails in place.
                    </p>
                    
                    <div className="mt-auto space-y-3">
                        <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">This helps you decide:</p>
                        <ul className="text-xs text-neutral-600 space-y-2">
                            <li className="flex items-start gap-2">
                                <Icon icon="ph:check" className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                                <span>How to evaluate high-stakes tradeoffs and opportunities</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="ph:check" className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                                <span>When to say yes, no, or not yet</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Icon icon="ph:check" className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                                <span>How to scale responsibly with the right financial discipline</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
            >
                <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-800 hover:text-neutral-600 transition-colors"
                >
                    Start a Strategic Conversation
                    <Icon icon="ph:arrow-right" className="w-4 h-4" />
                </a>
            </motion.div>
        </section>
    );
}
