'use client';

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LetsTalk() {
    const [formData, setFormData] = useState({
        role: '',
        scale: '',
        challenges: [] as string[],
        decision: '',
        prompt: '',
        timing: '',
        advisors: ''
    });

    const handleCheckbox = (value: string) => {
        setFormData(prev => ({
            ...prev,
            challenges: prev.challenges.includes(value)
                ? prev.challenges.filter(c => c !== value)
                : [...prev.challenges, value]
        }));
    };

    return (
        <section id="contact" className="w-full py-24 bg-neutral-900 text-white">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight mb-6">
                        Let's Talk
                    </h2>
                    <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-4">
                        If you are navigating a meaningful financial decision and want clarity before acting, this is the right place to start.
                    </p>
                    <p className="text-sm text-neutral-400">
                        This conversation is designed to assess context, decision urgency, and mutual fit. It is not a sales call and not a substitute for execution support.
                    </p>
                </motion.div>

                {/* Intake Form */}
                <motion.div 
                    className="bg-neutral-800 border border-neutral-700 rounded-3xl p-8 lg:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <form className="space-y-12">
                        {/* Role */}
                        <div className="pb-8 border-b border-neutral-700">
                            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-neutral-300">Your Role in the Business</h3>
                            <p className="text-xs text-neutral-500 mb-4">Which best describes your position:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Founder or Co-founder',
                                    'Executive leader (CEO, CFO, COO, President)',
                                    'Board member or advisor',
                                    'Senior leader with decision authority'
                                ].map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="role"
                                            value={option}
                                            checked={formData.role === option}
                                            onChange={(e) => setFormData({...formData, role: e.target.value})}
                                            className="w-4 h-4 text-white border-neutral-600 bg-transparent focus:ring-white"
                                        />
                                        <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Business Scale */}
                        <div className="pb-8 border-b border-neutral-700">
                            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-neutral-300">Business Scale</h3>
                            <p className="text-xs text-neutral-500 mb-4">Which range best reflects your current operation:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Pre-revenue or early stage',
                                    'Growing organization with an operating team',
                                    'Scaling or multi-entity business',
                                    'Established organization with complex operations'
                                ].map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="scale"
                                            value={option}
                                            checked={formData.scale === option}
                                            onChange={(e) => setFormData({...formData, scale: e.target.value})}
                                            className="w-4 h-4 text-white border-neutral-600 bg-transparent focus:ring-white"
                                        />
                                        <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Primary Challenge */}
                        <div className="pb-8 border-b border-neutral-700">
                            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-neutral-300">Primary Challenge</h3>
                            <div className="space-y-4">
                                {[
                                    'Profitability and performance clarity',
                                    'Cash flow and growth tradeoffs',
                                    'Strategic planning or scenario evaluation',
                                    'Governance, oversight, or readiness for change'
                                ].map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            value={option}
                                            checked={formData.challenges.includes(option)}
                                            onChange={() => handleCheckbox(option)}
                                            className="w-4 h-4 text-white border-neutral-600 bg-transparent focus:ring-white rounded"
                                        />
                                        <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* The Decision */}
                        <div className="pb-8 border-b border-neutral-700">
                            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-neutral-300">The Decision You Are Facing</h3>
                            <p className="text-xs text-neutral-500 mb-4">What decision are you currently trying to make or prepare for?</p>
                            <textarea
                                value={formData.decision}
                                onChange={(e) => setFormData({...formData, decision: e.target.value})}
                                placeholder="Describe the decision you're facing..."
                                className="w-full bg-neutral-900 border border-neutral-600 rounded-xl p-4 text-white placeholder:text-neutral-600 focus:outline-none focus:border-white transition-colors resize-none"
                                rows={4}
                            />
                        </div>

                        {/* What Prompted This */}
                        <div className="pb-8 border-b border-neutral-700">
                            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-neutral-300">What Prompted This Now</h3>
                            <p className="text-xs text-neutral-500 mb-4">Why does this decision matter at this point:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Growth or expansion pressure',
                                    'Cash flow or profitability concerns',
                                    'Increased complexity or risk',
                                    'Upcoming board, investor, or strategic review'
                                ].map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="prompt"
                                            value={option}
                                            checked={formData.prompt === option}
                                            onChange={(e) => setFormData({...formData, prompt: e.target.value})}
                                            className="w-4 h-4 text-white border-neutral-600 bg-transparent focus:ring-white"
                                        />
                                        <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Timing and Urgency */}
                        <div className="pb-8 border-b border-neutral-700">
                            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-neutral-300">Timing and Urgency</h3>
                            <p className="text-xs text-neutral-500 mb-4">When do you need clarity to move forward:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Immediate decision required',
                                    'Within the next 30 to 60 days',
                                    'Planning for the next quarter or two',
                                    'Exploratory, no fixed timeline'
                                ].map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="timing"
                                            value={option}
                                            checked={formData.timing === option}
                                            onChange={(e) => setFormData({...formData, timing: e.target.value})}
                                            className="w-4 h-4 text-white border-neutral-600 bg-transparent focus:ring-white"
                                        />
                                        <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* How You Work With Advisors */}
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6 text-neutral-300">How You Typically Work With Advisors</h3>
                            <p className="text-xs text-neutral-500 mb-4">Which best reflects your expectations:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    'Strategic thought partnership and challenge',
                                    'Decision support and framing',
                                    'Ongoing advisory relationship',
                                    'Not sure yet'
                                ].map((option) => (
                                    <label key={option} className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="advisors"
                                            value={option}
                                            checked={formData.advisors === option}
                                            onChange={(e) => setFormData({...formData, advisors: e.target.value})}
                                            className="w-4 h-4 text-white border-neutral-600 bg-transparent focus:ring-white"
                                        />
                                        <span className="text-sm text-neutral-300 group-hover:text-white transition-colors">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-8 text-center">
                            <button
                                type="submit"
                                className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors font-semibold text-sm"
                            >
                                Discuss a Strategic Question
                                <Icon icon="ph:arrow-right" className="w-5 h-5" />
                            </button>
                            <p className="text-xs text-neutral-500 mt-4">
                                This is a short, focused conversation to determine fit and next steps.
                            </p>
                        </div>
                    </form>
                </motion.div>

                {/* Footer Note */}
                <motion.div 
                    className="text-center mt-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <p className="text-sm text-neutral-500">
                        This conversation is intended for leaders seeking clarity on high-impact decisions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
