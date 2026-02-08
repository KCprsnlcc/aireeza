'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrubText } from "@/hooks/useScrubText";

export default function Problem() {
    const { theme } = useTheme();
    
    // Apply scrub text effect to main quote only
    const mainQuote = "Most growing businesses don't fail because of effort — they fail because decisions are made without clear financial insight.";
    const { containerRef, spansHtml } = useScrubText(mainQuote, theme);

    return (
        <section 
            id="the-problem"
            className={`py-16 border-b relative overflow-hidden ${
                theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
            }`}
        >
            {/* Vogue-style background decoration */}
            <div className="absolute top-0 left-0 w-32 h-full opacity-5">
                <div className="text-6xl font-black tracking-tighter writing-mode-vertical">
                    PROBLEM
                </div>
            </div>
            
            <div className="w-full px-6 relative z-10">
                {/* Vogue-style header */}
                <div className="flex justify-between items-end mb-12">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">01</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">/ THE PROBLEM</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">FINANCIAL INSIGHT</span>
                </div>

                {/* Dramatic Vogue-style scrub text */}
                <div 
                    ref={containerRef}
                    className={`scrub-text text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter text-center max-w-5xl mx-auto mb-16 leading-[0.8]`}
                    dangerouslySetInnerHTML={{ __html: spansHtml }}
                />

                {/* Vogue-style content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
                    {/* Vogue-style issues list */}
                    <div>
                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-8 pb-2 border-b ${
                            theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                        }`}>Common Issues</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className={`transition-all duration-500 ${
                                    theme === 'dark' ? 'text-neutral-600 group-hover:text-[#ff3333]' : 'text-neutral-400 group-hover:text-[#ff3333]'
                                }`}>
                                    <Icon icon="solar:danger-circle-linear" className="text-xl" />
                                </div>
                                <span className={`text-base font-light leading-relaxed tracking-wide ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}>Profits look good, but cash feels tight.</span>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className={`transition-all duration-500 ${
                                    theme === 'dark' ? 'text-neutral-600 group-hover:text-[#ff3333]' : 'text-neutral-400 group-hover:text-[#ff3333]'
                                }`}>
                                    <Icon icon="solar:file-remove-linear" className="text-xl" />
                                </div>
                                <span className={`text-base font-light leading-relaxed tracking-wide ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}>Reports exist, but decisions still feel uncertain.</span>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className={`transition-all duration-500 ${
                                    theme === 'dark' ? 'text-neutral-600 group-hover:text-[#ff3333]' : 'text-neutral-400 group-hover:text-[#ff3333]'
                                }`}>
                                    <Icon icon="solar:sort-from-top-to-bottom-linear" className="text-xl" />
                                </div>
                                <span className={`text-base font-light leading-relaxed tracking-wide ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}>Growth adds complexity instead of clarity.</span>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className={`transition-all duration-500 ${
                                    theme === 'dark' ? 'text-neutral-600 group-hover:text-[#ff3333]' : 'text-neutral-400 group-hover:text-[#ff3333]'
                                }`}>
                                    <Icon icon="solar:wheel-angle-linear" className="text-xl" />
                                </div>
                                <span className={`text-base font-light leading-relaxed tracking-wide ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}>Leadership is reacting instead of steering.</span>
                            </li>
                        </ul>
                    </div>
                    {/* Vogue-style quote block */}
                    <div className={`relative p-12 border-l-4 ${
                        theme === 'dark' 
                            ? 'border-neutral-700 bg-neutral-900/20' 
                            : 'border-neutral-300 bg-neutral-50'
                    }`}>
                        <div className={`absolute left-8 top-6 text-5xl font-black opacity-20 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>"</div>
                        <div className="text-center">
                            <p className={`text-xl md:text-2xl font-light leading-relaxed tracking-wide mb-4 ${
                                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                            }`}>
                                You don't need more data.
                            </p>
                            <p className={`text-xl md:text-2xl font-black leading-relaxed tracking-tight ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>
                                You need better financial judgment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
