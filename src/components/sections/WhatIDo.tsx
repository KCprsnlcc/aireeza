'use client';

import { Icon } from "@iconify/react";

export default function WhatIDo() {
    return (
        <section id="what-i-do" className="py-16 border-b relative overflow-hidden border-neutral-200 bg-white">
            {/* Vogue-style background decoration */}
            <div className="absolute top-0 right-0 w-32 h-full opacity-5">
                <div className="text-6xl font-black tracking-tighter writing-mode-vertical">
                    SERVICES
                </div>
            </div>
            
            <div className="w-full px-6 relative z-10">
                {/* Vogue-style header */}
                <div className="flex justify-between items-start mb-8">
                    <div className="w-full md:w-1/2">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">02</span>
                            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">/ WHAT I DO</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.7] text-black">
                            CLARITY
                            <span className="block text-3xl md:text-5xl font-light tracking-[0.2em] text-center mt-2 text-neutral-700">
                                & CONFIDENCE
                            </span>
                        </h2>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-end items-end h-full pt-6 md:pt-0">
                        <p className="text-xs font-light leading-relaxed max-w-xs text-right tracking-wide text-neutral-600">
                            My role is not to "do the finance work for you" — it's to help you see clearly and decide confidently.
                        </p>
                    </div>
                </div>

                {/* Vogue-style services grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Floating content bubble */}
                    <div className="absolute left-1/2 transform -translate-x-1/4 -top-16 p-3 border z-20 border-neutral-300 bg-white/80 backdrop-blur-sm max-w-xs">
                        <p className="text-xs font-light tracking-wide mb-2 text-neutral-700">
                            I work with founders and leadership teams to:
                        </p>
                        <div className="space-y-1 text-neutral-600">
                            <p className="text-xs font-light">• Improve profitability and margins</p>
                            <p className="text-xs font-light">• Create decision-ready financial insights</p>
                            <p className="text-xs font-light">• Design performance systems that scale</p>
                            <p className="text-xs font-light">• Bring structure and discipline to complex businesses</p>
                        </div>
                    </div>
                    {/* Service 1 */}
                    <div className="group border transition-all duration-700 overflow-hidden zoom-in border-neutral-200 hover:bg-neutral-50 hover:border-black/20">
                        <div className="p-6 h-full flex flex-col">
                            <div className="h-12 w-12 border rounded-full flex items-center justify-center mb-6 transition-all duration-500 flex-shrink-0 border-neutral-300 text-neutral-600 group-hover:text-black group-hover:border-black">
                                <Icon icon="solar:chart-2-linear" width="24" />
                            </div>
                            <h3 className="text-xl font-black tracking-tight mb-4 text-black">
                                Business Performance<br/>& Profitability
                            </h3>
                            <div className="overflow-hidden flex-1 group-hover:animate-marquee text-neutral-600">
                                <p className="text-sm font-light leading-relaxed mb-4 tracking-wide">
                                    Make better decisions about where to focus, fix, and invest. I help you clearly see what is working, what is leaking value, and where growth actually comes from, so you stop relying on gut feel and start acting on facts.
                                </p>
                                <div className="mb-4">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">This helps you decide</p>
                                    <ul className="space-y-1 text-xs font-light">
                                        <li>— Which products, services, or clients are truly profitable</li>
                                        <li>— Where margins are eroding and why</li>
                                        <li>— What operational levers will move profitability fastest</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">How I support this</p>
                                    <ul className="space-y-1 text-xs font-light">
                                        <li>— Margin and cost structure analysis</li>
                                        <li>— Performance diagnostics across the business</li>
                                        <li>— KPI architecture aligned to strategy</li>
                                        <li>— Decision support for leadership and operators</li>
                                    </ul>
                                </div>
                                {/* Duplicate content for seamless marquee */}
                                <div className="mt-4">
                                    <p className="text-sm font-light leading-relaxed mb-4 tracking-wide">
                                        Make better decisions about where to focus, fix, and invest. I help you clearly see what is working, what is leaking value, and where growth actually comes from, so you stop relying on gut feel and start acting on facts.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">This helps you decide</p>
                                        <ul className="space-y-1 text-xs font-light">
                                            <li>— Which products, services, or clients are truly profitable</li>
                                            <li>— Where margins are eroding and why</li>
                                            <li>— What operational levers will move profitability fastest</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">How I support this</p>
                                        <ul className="space-y-1 text-xs font-light">
                                            <li>— Margin and cost structure analysis</li>
                                            <li>— Performance diagnostics across the business</li>
                                            <li>— KPI architecture aligned to strategy</li>
                                            <li>— Decision support for leadership and operators</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div className="group border transition-all duration-700 overflow-hidden zoom-in border-neutral-200 hover:bg-neutral-50 hover:border-black/20" style={{ transitionDelay: '200ms' }}>
                        <div className="p-6 h-full flex flex-col">
                            <div className="h-12 w-12 border rounded-full flex items-center justify-center mb-6 transition-all duration-500 flex-shrink-0 border-neutral-300 text-neutral-600 group-hover:text-black group-hover:border-black">
                                <Icon icon="solar:compass-linear" width="24" />
                            </div>
                            <h3 className="text-xl font-black tracking-tight mb-4 text-black">
                                Strategic Finance<br/>& FP&A
                            </h3>
                            <div className="overflow-hidden flex-1 group-hover:animate-marquee text-neutral-600">
                                <p className="text-sm font-light leading-relaxed mb-4 tracking-wide">
                                    Make better decisions about growth, cash, and risk. I turn financial data into forward-looking insight so you are not just reporting the past but actively steering the business.
                                </p>
                                <div className="mb-4">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">This helps you decide</p>
                                    <ul className="space-y-1 text-xs font-light">
                                        <li>— How fast you can grow without breaking cash flow</li>
                                        <li>— Which scenarios are safe, risky, or worth pursuing</li>
                                        <li>— How to allocate budget in a way that actually drives outcomes</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">How I support this</p>
                                    <ul className="space-y-1 text-xs font-light">
                                        <li>— Cash flow clarity and forecasting</li>
                                        <li>— Scenario planning and sensitivity analysis</li>
                                        <li>— Budgeting that informs real decisions</li>
                                        <li>— Board and investor-ready insights and narratives</li>
                                    </ul>
                                </div>
                                {/* Duplicate content for seamless marquee */}
                                <div className="mt-4">
                                    <p className="text-sm font-light leading-relaxed mb-4 tracking-wide">
                                        Make better decisions about growth, cash, and risk. I turn financial data into forward-looking insight so you are not just reporting the past but actively steering the business.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">This helps you decide</p>
                                        <ul className="space-y-1 text-xs font-light">
                                            <li>— How fast you can grow without breaking cash flow</li>
                                            <li>— Which scenarios are safe, risky, or worth pursuing</li>
                                            <li>— How to allocate budget in a way that actually drives outcomes</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">How I support this</p>
                                        <ul className="space-y-1 text-xs font-light">
                                            <li>— Cash flow clarity and forecasting</li>
                                            <li>— Scenario planning and sensitivity analysis</li>
                                            <li>— Budgeting that informs real decisions</li>
                                            <li>— Board and investor-ready insights and narratives</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Service 3 */}
                    <div className="group border transition-all duration-700 overflow-hidden zoom-in border-neutral-200 hover:bg-neutral-50 hover:border-black/20" style={{ transitionDelay: '400ms' }}>
                        <div className="p-6 h-full flex flex-col">
                            <div className="h-12 w-12 border rounded-full flex items-center justify-center mb-6 transition-all duration-500 flex-shrink-0 border-neutral-300 text-neutral-600 group-hover:text-black group-hover:border-black">
                                <Icon icon="solar:crown-star-linear" width="24" />
                            </div>
                            <h3 className="text-xl font-black tracking-tight mb-4 text-black">
                                Advisory<br/>& Oversight
                            </h3>
                            <div className="overflow-hidden flex-1 group-hover:animate-marquee text-neutral-600">
                                <p className="text-sm font-light leading-relaxed mb-4 tracking-wide">
                                    Make better decisions with confidence and fewer blind spots. I act as a long-term financial thought partner, helping leadership navigate complex decisions while putting the right guardrails in place.
                                </p>
                                <div className="mb-4">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">This helps you decide</p>
                                    <ul className="space-y-1 text-xs font-light">
                                        <li>— How to evaluate high-stakes tradeoffs and opportunities</li>
                                        <li>— When to say yes, no, or not yet</li>
                                        <li>— How to scale responsibly with the right financial discipline</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">How I support this</p>
                                    <ul className="space-y-1 text-xs font-light">
                                        <li>— Fractional advisory and strategic finance leadership</li>
                                        <li>— Ongoing decision support for founders and executives</li>
                                        <li>— Financial governance, controls, and oversight</li>
                                    </ul>
                                </div>
                                {/* Duplicate content for seamless marquee */}
                                <div className="mt-4">
                                    <p className="text-sm font-light leading-relaxed mb-4 tracking-wide">
                                        Make better decisions with confidence and fewer blind spots. I act as a long-term financial thought partner, helping leadership navigate complex decisions while putting the right guardrails in place.
                                    </p>
                                    <div className="mb-4">
                                        <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">This helps you decide</p>
                                        <ul className="space-y-1 text-xs font-light">
                                            <li>— How to evaluate high-stakes tradeoffs and opportunities</li>
                                            <li>— When to say yes, no, or not yet</li>
                                            <li>— How to scale responsibly with the right financial discipline</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">How I support this</p>
                                        <ul className="space-y-1 text-xs font-light">
                                            <li>— Fractional advisory and strategic finance leadership</li>
                                            <li>— Ongoing decision support for founders and executives</li>
                                            <li>— Financial governance, controls, and oversight</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Vogue-style call to action */}
                <div className="mt-16 text-center fade-up">
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-4 group transition-all duration-500 text-neutral-700 hover:text-black"
                    >
                        <span className="text-xs font-black uppercase tracking-[0.3em]">Start a Strategic Conversation</span>
                        <Icon icon="solar:arrow-right-linear" className="transition-transform duration-500 group-hover:translate-x-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}
