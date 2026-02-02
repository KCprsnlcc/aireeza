'use client';

import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";

export default function WhatIDo() {
    const { theme } = useTheme();

    return (
        <section className={`py-24 border-b ${
            theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
        }`}>
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex justify-between items-start mb-16 slide-in-left">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-xs text-neutral-500">02</span>
                            <span className="text-xs text-neutral-500">/ WHAT I DO</span>
                        </div>
                        <h2 className={`text-5xl md:text-7xl font-semibold uppercase tracking-tighter leading-none ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                            Clarity &<br />Confidence
                        </h2>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-end items-end h-full pt-12 md:pt-0">
                        <p className={`text-sm max-w-xs text-right ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                            My role is not to "do the finance work for you" — it's to help you see clearly and decide confidently.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <div className={`group border p-8 transition-colors zoom-in ${
                        theme === 'dark' 
                            ? 'border-neutral-800 hover:bg-neutral-900/30' 
                            : 'border-neutral-200 hover:bg-neutral-50'
                    }`}>
                        <div className={`h-12 w-12 border rounded-full flex items-center justify-center mb-8 transition-all ${
                            theme === 'dark'
                                ? 'border-neutral-700 text-neutral-400 group-hover:text-white group-hover:border-white'
                                : 'border-neutral-300 text-neutral-600 group-hover:text-black group-hover:border-black'
                        }`}>
                            <Icon icon="solar:chart-2-linear" width="24" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Profitability & Performance</h3>
                        <p className={`text-sm leading-relaxed mb-6 transition-colors ${
                            theme === 'dark' 
                                ? 'text-neutral-500 group-hover:text-neutral-400' 
                                : 'text-neutral-600 group-hover:text-neutral-800'
                        }`}>
                            Make better decisions about where to focus, fix, and invest. I help you see where margins are eroding and where growth actually comes from.
                        </p>
                        <ul className="text-xs text-neutral-500 space-y-2 uppercase tracking-wide">
                            <li>— Margin Analysis</li>
                            <li>— Performance Diagnostics</li>
                            <li>— KPI Architecture</li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className={`group border p-8 transition-colors zoom-in ${
                        theme === 'dark' 
                            ? 'border-neutral-800 hover:bg-neutral-900/30' 
                            : 'border-neutral-200 hover:bg-neutral-50'
                    }`} style={{ transitionDelay: '200ms' }}>
                        <div className={`h-12 w-12 border rounded-full flex items-center justify-center mb-8 transition-all ${
                            theme === 'dark'
                                ? 'border-neutral-700 text-neutral-400 group-hover:text-white group-hover:border-white'
                                : 'border-neutral-300 text-neutral-600 group-hover:text-black group-hover:border-black'
                        }`}>
                            <Icon icon="solar:compass-linear" width="24" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Strategic Finance & FP&A</h3>
                        <p className={`text-sm leading-relaxed mb-6 transition-colors ${
                            theme === 'dark' 
                                ? 'text-neutral-500 group-hover:text-neutral-400' 
                                : 'text-neutral-600 group-hover:text-neutral-800'
                        }`}>
                            Make better decisions about growth, cash, and risk. Turn financial data into forward-looking insight to steer the business.
                        </p>
                        <ul className="text-xs text-neutral-500 space-y-2 uppercase tracking-wide">
                            <li>— Cash Flow Clarity</li>
                            <li>— Scenario Planning</li>
                            <li>— Budgeting & Forecasting</li>
                        </ul>
                    </div>

                    {/* Service 3 */}
                    <div className={`group border p-8 transition-colors zoom-in ${
                        theme === 'dark' 
                            ? 'border-neutral-800 hover:bg-neutral-900/30' 
                            : 'border-neutral-200 hover:bg-neutral-50'
                    }`} style={{ transitionDelay: '400ms' }}>
                        <div className={`h-12 w-12 border rounded-full flex items-center justify-center mb-8 transition-all ${
                            theme === 'dark'
                                ? 'border-neutral-700 text-neutral-400 group-hover:text-white group-hover:border-white'
                                : 'border-neutral-300 text-neutral-600 group-hover:text-black group-hover:border-black'
                        }`}>
                            <Icon icon="solar:crown-star-linear" width="24" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Advisory & Oversight</h3>
                        <p className={`text-sm leading-relaxed mb-6 transition-colors ${
                            theme === 'dark' 
                                ? 'text-neutral-500 group-hover:text-neutral-400' 
                                : 'text-neutral-600 group-hover:text-neutral-800'
                        }`}>
                            Make better decisions with confidence. I act as a long-term thought partner to navigate complex tradeoffs.
                        </p>
                        <ul className="text-xs text-neutral-500 space-y-2 uppercase tracking-wide">
                            <li>— Fractional Leadership</li>
                            <li>— Decision Support</li>
                            <li>— Financial Governance</li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-12 text-center fade-up">
                    <a 
                        href="#contact" 
                        className={`inline-flex items-center gap-2 text-sm uppercase tracking-widest transition-colors ${
                            theme === 'dark' ? 'hover:text-neutral-400' : 'hover:text-neutral-600'
                        }`}
                    >
                        Start a Strategic Conversation <Icon icon="solar:arrow-right-linear" />
                    </a>
                </div>
            </div>
        </section>
    );
}
