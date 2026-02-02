'use client';

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="w-full py-24 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-4xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        About Me
                    </motion.h2>
                </div>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Left Column: Bio */}
                    <motion.div 
                        className="space-y-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-lg text-neutral-700 leading-relaxed">
                            I work at the intersection of finance, performance, and decision-making. My role is to help founders move from instinct to clarity as their business grows more complex.
                        </p>
                        <p className="text-base text-neutral-600 leading-relaxed">
                            My background is in strategic finance and business performance, working alongside founders as businesses scale beyond intuition. I have built financial structures in fast-moving environments, supported growth decisions under pressure, and helped leaders make sense of tradeoffs as complexity increases.
                        </p>
                        <p className="text-base text-neutral-600 leading-relaxed">
                            My certifications exist to support disciplined analysis and structured thinking. They provide the technical grounding needed to evaluate scenarios, test assumptions, and challenge conclusions, but they are not the work itself.
                        </p>
                        <p className="text-base text-neutral-700 leading-relaxed font-medium">
                            What matters most is judgment. Knowing which numbers deserve attention, which questions need answering, and when simplicity leads to better decisions than precision.
                        </p>
                        <p className="text-base text-neutral-600 leading-relaxed">
                            My role is to help founders see clearly and act with confidence as the business evolves. It is to help you see clearly and make confident decisions as the business evolves.
                        </p>
                    </motion.div>

                    {/* Right Column: Image */}
                    <motion.div 
                        className="relative"
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="aspect-[4/5] bg-stone-50 border border-stone-200 rounded-3xl overflow-hidden">
                            <img
                                src="/Za-T.png"
                                alt="Aireeza Leonsul Tandih"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Education & Credentials */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {/* Education */}
                    <motion.div 
                        className="bg-stone-50 border border-stone-200 rounded-3xl p-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Icon icon="ph:graduation-cap" className="w-8 h-8 text-neutral-700" />
                            <h3 className="text-2xl font-semibold text-neutral-900">Education</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="pb-4 border-b border-neutral-200">
                                <p className="text-neutral-800 font-medium">Bachelor's Degree in Management Accounting</p>
                            </li>
                            <li className="pb-4 border-b border-neutral-200">
                                <p className="text-neutral-800 font-medium">Bachelor's Degree in Accounting Technology</p>
                            </li>
                            <li>
                                <p className="text-neutral-800 font-medium">Postgraduate Certificate in Business & Management Consulting</p>
                            </li>
                        </ul>
                    </motion.div>

                    {/* Professional Associations */}
                    <motion.div 
                        className="bg-stone-50 border border-stone-200 rounded-3xl p-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Icon icon="ph:certificate" className="w-8 h-8 text-neutral-700" />
                            <h3 className="text-2xl font-semibold text-neutral-900">Professional Associations</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="pb-4 border-b border-neutral-200">
                                <p className="text-neutral-800 font-medium">Certified Management Accountant (CMA)</p>
                                <p className="text-xs text-neutral-500 mt-1">Institute of Management Accountants</p>
                            </li>
                            <li className="pb-4 border-b border-neutral-200">
                                <p className="text-neutral-800 font-medium">Associate Member (ASA)</p>
                                <p className="text-xs text-neutral-500 mt-1">CPA Australia</p>
                            </li>
                            <li className="pb-4 border-b border-neutral-200">
                                <p className="text-neutral-800 font-medium">Member</p>
                                <p className="text-xs text-neutral-500 mt-1">Business and Management Consultants Association of the Philippines (BMCAP)</p>
                            </li>
                            <li>
                                <p className="text-neutral-800 font-medium">Member</p>
                                <p className="text-xs text-neutral-500 mt-1">Philippine Society for Talent Development (PSTD)</p>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Disclaimer Box */}
                <motion.div 
                    className="bg-neutral-900 text-white rounded-3xl p-8 lg:p-12 mb-12"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="flex items-start gap-4">
                        <Icon icon="ph:info" className="w-6 h-6 text-neutral-400 mt-1 shrink-0" />
                        <div>
                            <p className="text-lg lg:text-xl italic leading-relaxed">
                                "I do not publish client testimonials. Much of this work involves confidential financial decisions, and discretion is essential."
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <a 
                        href="#point-of-view"
                        className="inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900 transition-colors font-medium"
                    >
                        Discuss a Strategic Question
                        <Icon icon="ph:arrow-right" className="w-5 h-5" />
                    </a>
                    <p className="text-sm text-neutral-500 mt-3">Link to: Point of View Page</p>
                </motion.div>
            </div>
        </section>
    );
}
