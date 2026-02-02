'use client';

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function HowIWork() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const phaseVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.8, 0.25, 1]
            }
        }
    };

    const lineVariants = {
        hidden: { scaleX: 0 },
        visible: {
            scaleX: 1,
            transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.6, 1]
            }
        }
    };

    return (
        <section className="w-full py-24 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        How I Work
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-neutral-500 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        My approach is deliberate, structured, and designed for leaders who value clarity over activity.
                    </motion.p>
                    <motion.p 
                        className="text-base text-neutral-600 max-w-2xl mx-auto mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        I do not start with templates or assumptions. I start by understanding how your business actually works and where decisions are breaking down.
                    </motion.p>
                </div>

                {/* Three Phases with Connecting Lines */}
                <motion.div 
                    ref={ref}
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                        {/* Connecting Lines - Hidden on mobile */}
                        <div className="hidden lg:block absolute top-32 left-0 right-0 h-px">
                            <motion.div 
                                className="h-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent"
                                variants={lineVariants}
                                style={{ transformOrigin: "left" }}
                            />
                        </div>

                        {/* Phase 1: Diagnose */}
                        <motion.div 
                            className="bg-stone-50 border border-stone-200 rounded-3xl p-8 relative z-10"
                            variants={phaseVariants}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-neutral-300 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-neutral-900">01</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">Diagnose</h3>
                                    <p className="text-sm text-neutral-600 font-medium">Clarity before action.</p>
                                </div>
                            </div>

                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                Before any recommendation is made, I take time to understand the real mechanics of the business.
                            </p>

                            <div className="space-y-3 mb-6">
                                <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">This stage focuses on:</p>
                                <ul className="space-y-2 text-sm text-neutral-600">
                                    <li className="flex items-start gap-2">
                                        <Icon icon="ph:dot" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                        <span>The underlying business model and economic drivers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Icon icon="ph:dot" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                        <span>Where profit leaks occur across operations, pricing, or structure</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Icon icon="ph:dot" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                        <span>Where decision-making slows, stalls, or relies too heavily on instinct</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-neutral-200">
                                <p className="text-sm text-neutral-800 italic">
                                    The outcome is a shared understanding of the true problem — not just the visible symptoms.
                                </p>
                            </div>
                        </motion.div>

                        {/* Phase 2: Design */}
                        <motion.div 
                            className="bg-stone-50 border border-stone-200 rounded-3xl p-8 relative z-10"
                            variants={phaseVariants}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-neutral-300 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-neutral-900">02</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">Design</h3>
                                    <p className="text-sm text-neutral-600 font-medium">Structure that supports better decisions.</p>
                                </div>
                            </div>

                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                Once the issues are clear, I design financial structures that support leadership decision making rather than reporting for its own sake.
                            </p>

                            <div className="space-y-3 mb-6">
                                <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">This stage focuses on:</p>
                                <ul className="space-y-2 text-sm text-neutral-600">
                                    <li className="flex items-start gap-2">
                                        <Icon icon="ph:dot" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                        <span>Building clear, relevant performance metrics</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Icon icon="ph:dot" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                        <span>Creating decision frameworks for recurring and high-stakes choices</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Icon icon="ph:dot" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                        <span>Aligning financial information directly with strategic priorities</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-neutral-200">
                                <p className="text-sm text-neutral-800 italic">
                                    The result is a system that makes tradeoffs visible and decisions easier.
                                </p>
                            </div>
                        </motion.div>

                        {/* Phase 3: Advise */}
                        <motion.div 
                            className="bg-stone-50 border border-stone-200 rounded-3xl p-8 relative z-10"
                            variants={phaseVariants}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-neutral-300 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-neutral-900">03</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-neutral-900 tracking-tight">Advise</h3>
                                    <p className="text-sm text-neutral-600 font-medium">Executive-level partnership.</p>
                                </div>
                            </div>

                            <p className="text-neutral-700 mb-6 leading-relaxed">
                                I work alongside leadership as an ongoing thought partner, providing perspective as conditions change and decisions evolve.
                            </p>

                            <div className="space-y-3 mb-6">
                                <p className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">This stage focuses on:</p>
                                <ul className="space-y-2 text-sm text-neutral-600">
                                    <li className="flex items-start gap-2">
                                        <Icon icon="ph:dot" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                        <span>Ongoing advisory and strategic support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Icon icon="ph:dot" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                        <span>Executive-level discussions grounded in data and judgment</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Icon icon="ph:dot" className="w-5 h-5 text-neutral-400 mt-0.5 shrink-0" />
                                        <span>Clear, actionable recommendations rather than volume or noise</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-4 border-t border-neutral-200">
                                <p className="text-sm text-neutral-800 italic">
                                    The objective is consistency, confidence, and discipline at the leadership level.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div 
                    className="text-center mt-16 pt-8 border-t border-neutral-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                >
                    <p className="text-neutral-600 mb-8">
                        This work is best suited for leadership teams who are open to scrutiny, value direct conversation, and are willing to act on insight.
                    </p>
                    <a 
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors font-medium"
                    >
                        Explore a Working Relationship
                        <Icon icon="ph:arrow-right" className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
