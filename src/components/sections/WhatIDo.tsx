'use client';

import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";

export default function WhatIDo() {
    const { theme } = useTheme();

    return (
        <section id="what-i-do" className={`py-32 border-b relative overflow-hidden ${
            theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
        }`}>
            {/* Vogue-style background decoration */}
            <div className="absolute top-0 right-0 w-64 h-full opacity-5">
                <div className="text-9xl font-black tracking-tighter writing-mode-vertical">
                    SERVICES
                </div>
            </div>
            
            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                {/* Vogue-style header */}
                <div className="flex justify-between items-start mb-24">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-6 mb-8">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">02</span>
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">/ WHAT I DO</span>
                        </div>
                        <h2 className={`text-7xl md:text-9xl font-black tracking-tighter leading-[0.7] ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                            CLARITY
                            <span className={`block text-6xl md:text-8xl font-light tracking-[0.2em] text-center mt-4 ${
                                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                            }`}>

                            </span>
                            <span className="block text-6xl md:text-8xl font-light tracking-wider">
                                CONFIDENCE
                            </span>
                        </h2>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-end items-end h-full pt-16 md:pt-0">
                        <p className={`text-xs font-light leading-relaxed max-w-xs text-right ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                            My role is not to "do the finance work for you" — it's to help you see clearly and decide confidently.
                        </p>
                    </div>
                </div>

                {/* Vogue-style services grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Service 1 */}
                    <div className={`group border transition-all duration-700 zoom-in ${
                        theme === 'dark' 
                            ? 'border-neutral-800 hover:bg-neutral-900/50 hover:border-white/20' 
                            : 'border-neutral-200 hover:bg-neutral-50 hover:border-black/20'
                    }`}>
                        <div className="p-12">
                            <div className={`h-16 w-16 border rounded-full flex items-center justify-center mb-12 transition-all duration-500 ${
                                theme === 'dark'
                                    ? 'border-neutral-700 text-neutral-500 group-hover:text-white group-hover:border-white'
                                    : 'border-neutral-300 text-neutral-600 group-hover:text-black group-hover:border-black'
                            }`}>
                                <Icon icon="solar:chart-2-linear" width="32" />
                            </div>
                            <h3 className={`text-2xl font-black tracking-tight mb-6 ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>
                                Profitability<br/>& Performance
                            </h3>
                            <p className={`text-xs font-light leading-relaxed mb-8 transition-colors ${
                                theme === 'dark' 
                                    ? 'text-neutral-400 group-hover:text-neutral-300' 
                                    : 'text-neutral-700 group-hover:text-neutral-900'
                            }`}>
                                Make better decisions about where to focus, fix, and invest. I help you see where margins are eroding and where growth actually comes from.
                            </p>
                            <ul className={`space-y-3 ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'
                            }`}>
                                <li className="text-xs font-black uppercase tracking-[0.3em]">— Margin Analysis</li>
                                <li className="text-xs font-black uppercase tracking-[0.3em]">— Performance Diagnostics</li>
                                <li className="text-xs font-black uppercase tracking-[0.3em]">— KPI Architecture</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className={`group border transition-all duration-700 zoom-in ${
                        theme === 'dark' 
                            ? 'border-neutral-800 hover:bg-neutral-900/50 hover:border-white/20' 
                            : 'border-neutral-200 hover:bg-neutral-50 hover:border-black/20'
                    }`} style={{ transitionDelay: '200ms' }}>
                        <div className="p-12">
                            <div className={`h-16 w-16 border rounded-full flex items-center justify-center mb-12 transition-all duration-500 ${
                                theme === 'dark'
                                    ? 'border-neutral-700 text-neutral-500 group-hover:text-white group-hover:border-white'
                                    : 'border-neutral-300 text-neutral-600 group-hover:text-black group-hover:border-black'
                            }`}>
                                <Icon icon="solar:compass-linear" width="32" />
                            </div>
                            <h3 className={`text-2xl font-black tracking-tight mb-6 ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>
                                Strategic Finance<br/>& FP&A
                            </h3>
                            <p className={`text-xs font-light leading-relaxed mb-8 transition-colors ${
                                theme === 'dark' 
                                    ? 'text-neutral-400 group-hover:text-neutral-300' 
                                    : 'text-neutral-700 group-hover:text-neutral-900'
                            }`}>
                                Make better decisions about growth, cash, and risk. Turn financial data into forward-looking insight to steer the business.
                            </p>
                            <ul className={`space-y-3 ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'
                            }`}>
                                <li className="text-xs font-black uppercase tracking-[0.3em]">— Cash Flow Clarity</li>
                                <li className="text-xs font-black uppercase tracking-[0.3em]">— Scenario Planning</li>
                                <li className="text-xs font-black uppercase tracking-[0.3em]">— Budgeting & Forecasting</li>
                            </ul>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className={`group border transition-all duration-700 zoom-in ${
                        theme === 'dark' 
                            ? 'border-neutral-800 hover:bg-neutral-900/50 hover:border-white/20' 
                            : 'border-neutral-200 hover:bg-neutral-50 hover:border-black/20'
                    }`} style={{ transitionDelay: '400ms' }}>
                        <div className="p-12">
                            <div className={`h-16 w-16 border rounded-full flex items-center justify-center mb-12 transition-all duration-500 ${
                                theme === 'dark'
                                    ? 'border-neutral-700 text-neutral-500 group-hover:text-white group-hover:border-white'
                                    : 'border-neutral-300 text-neutral-600 group-hover:text-black group-hover:border-black'
                            }`}>
                                <Icon icon="solar:crown-star-linear" width="32" />
                            </div>
                            <h3 className={`text-2xl font-black tracking-tight mb-6 ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>
                                Advisory<br/>& Oversight
                            </h3>
                            <p className={`text-xs font-light leading-relaxed mb-8 transition-colors ${
                                theme === 'dark' 
                                    ? 'text-neutral-400 group-hover:text-neutral-300' 
                                    : 'text-neutral-700 group-hover:text-neutral-900'
                            }`}>
                                Make better decisions with confidence. I act as a long-term thought partner to navigate complex tradeoffs.
                            </p>
                            <ul className={`space-y-3 ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'
                            }`}>
                                <li className="text-xs font-black uppercase tracking-[0.3em]">— Fractional Leadership</li>
                                <li className="text-xs font-black uppercase tracking-[0.3em]">— Decision Support</li>
                                <li className="text-xs font-black uppercase tracking-[0.3em]">— Financial Governance</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* Vogue-style call to action */}
                <div className="mt-24 text-center fade-up">
                    <a 
                        href="#contact" 
                        className={`inline-flex items-center gap-4 group transition-all duration-500 ${
                            theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-black'
                        }`}
                    >
                        <span className="text-xs font-black uppercase tracking-[0.3em]">Start a Strategic Conversation</span>
                        <Icon icon="solar:arrow-right-linear" className="transition-transform duration-500 group-hover:translate-x-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}
