'use client';

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function WhoIWorkWith() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="w-full py-24 border-b border-neutral-200 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Who I Work With
                    </motion.h2>
                    <motion.p 
                        className="text-lg text-neutral-500 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        I work best with leaders who view finance as a decision making tool, not a reporting function.
                    </motion.p>
                </div>

                {/* Two Column Grid */}
                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Left Column: I Typically Work With */}
                    <motion.div 
                        className="bg-white border border-neutral-200 rounded-3xl p-8 lg:p-10"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                                <Icon icon="ph:check-circle" className="w-6 h-6 text-emerald-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-neutral-900">I Typically Work With</h3>
                        </div>

                        <ul className="space-y-6">
                            <motion.li 
                                className="flex items-start gap-4 pb-4 border-b border-neutral-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Icon icon="ph:arrow-right" className="w-5 h-5 text-neutral-400 mt-1 shrink-0" />
                                <span className="text-neutral-700 leading-relaxed">
                                    Founders of growing businesses who are moving from intuition to structure
                                </span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start gap-4 pb-4 border-b border-neutral-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Icon icon="ph:arrow-right" className="w-5 h-5 text-neutral-400 mt-1 shrink-0" />
                                <span className="text-neutral-700 leading-relaxed">
                                    Executives navigating scale, complexity, or transition
                                </span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start gap-4 pb-4 border-b border-neutral-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <Icon icon="ph:arrow-right" className="w-5 h-5 text-neutral-400 mt-1 shrink-0" />
                                <span className="text-neutral-700 leading-relaxed">
                                    Leadership teams preparing for investment, expansion, or restructuring
                                </span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <Icon icon="ph:arrow-right" className="w-5 h-5 text-neutral-400 mt-1 shrink-0" />
                                <span className="text-neutral-700 leading-relaxed">
                                    Organizations where financial decisions carry real strategic consequences
                                </span>
                            </motion.li>
                        </ul>

                        <div className="mt-8 p-4 bg-neutral-50 rounded-xl">
                            <p className="text-sm text-neutral-600 italic">
                                These engagements tend to involve ambiguity, tradeoffs, and a need for clear judgment.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Column: I Am Not a Fit For */}
                    <motion.div 
                        className="bg-white border border-neutral-200 rounded-3xl p-8 lg:p-10"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center">
                                <Icon icon="ph:x-circle" className="w-6 h-6 text-neutral-400" />
                            </div>
                            <h3 className="text-2xl font-semibold text-neutral-500">I Am Not a Fit For</h3>
                        </div>

                        <ul className="space-y-6">
                            <motion.li 
                                className="flex items-start gap-4 pb-4 border-b border-neutral-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <Icon icon="ph:x" className="w-5 h-5 text-neutral-300 mt-1 shrink-0" />
                                <span className="text-neutral-500 leading-relaxed">
                                    Bookkeeping or transactional accounting needs
                                </span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start gap-4 pb-4 border-b border-neutral-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <Icon icon="ph:x" className="w-5 h-5 text-neutral-300 mt-1 shrink-0" />
                                <span className="text-neutral-500 leading-relaxed">
                                    Teams seeking task execution without decision ownership
                                </span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start gap-4 pb-4 border-b border-neutral-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <Icon icon="ph:x" className="w-5 h-5 text-neutral-300 mt-1 shrink-0" />
                                <span className="text-neutral-500 leading-relaxed">
                                    Organizations looking for short term fixes without long term discipline
                                </span>
                            </motion.li>
                            <motion.li 
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                <Icon icon="ph:x" className="w-5 h-5 text-neutral-300 mt-1 shrink-0" />
                                <span className="text-neutral-500 leading-relaxed">
                                    Engagements where financial insight is collected but not acted upon
                                </span>
                            </motion.li>
                        </ul>

                        <div className="mt-8 p-4 bg-neutral-50 rounded-xl">
                            <p className="text-sm text-neutral-500 italic">
                                This work requires openness, accountability, and a willingness to engage with the numbers honestly.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Closing CTA */}
                <motion.div 
                    className="text-center bg-white border border-neutral-200 rounded-3xl p-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p className="text-xl lg:text-2xl font-medium text-neutral-900 mb-6 max-w-3xl mx-auto">
                        This work requires openness, accountability, and a willingness to engage with the numbers honestly.
                    </p>
                    <p className="text-neutral-600 mb-8">
                        If that resonates, the next step is a focused conversation to determine fit.
                    </p>
                    <a 
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-neutral-900 text-white px-8 py-3 rounded-full hover:bg-neutral-800 transition-colors font-medium"
                    >
                        Discuss Your Next Decision
                        <Icon icon="ph:arrow-right" className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
