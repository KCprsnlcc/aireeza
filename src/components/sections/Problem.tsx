'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrubText } from "@/hooks/useScrubText";

export default function Problem() {
    const { theme } = useTheme();
    const [isLoaded, setIsLoaded] = useState(false);
    
    const mainQuote = "Most growing businesses don't fail because of effort — they fail because decisions are made without clear financial insight.";
    const { containerRef, spansHtml } = useScrubText(mainQuote, theme);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const textPrimary = theme === 'dark' ? 'text-white' : 'text-black/90';
    const textSecondary = theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700';
    const textMuted = theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500';
    const borderColor = theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200';
    const borderSubtle = theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200';
    const bgBase = theme === 'dark' ? 'bg-black' : 'bg-white';
    const bgQuote = theme === 'dark' ? 'bg-neutral-900/20' : 'bg-neutral-50';
    const borderQuote = theme === 'dark' ? 'border-neutral-700' : 'border-neutral-300';
    const iconBase = theme === 'dark' ? 'text-neutral-600' : 'text-neutral-400';
    const cornerBorder = theme === 'dark' ? 'border-white/10' : 'border-black/8';

    return (
        <section 
            id="the-problem"
            className={`relative min-h-screen flex flex-col justify-center py-24 md:py-32 border-b overflow-hidden ${borderColor} ${bgBase}`}
        >
            {/* Decorative corner elements */}
            <div className={`absolute top-8 left-6 md:left-12 w-16 h-16 border-l border-t pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-1' : ''}`} />
            <div className={`absolute top-8 right-6 md:right-12 w-16 h-16 border-r border-t pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-1' : ''}`} />

            {/* Vertical background text */}
            <div className="absolute top-0 left-0 w-32 h-full opacity-5 pointer-events-none">
                <div className="text-6xl font-black tracking-tighter writing-mode-vertical">
                    PROBLEM
                </div>
            </div>
            
            <div className="w-full px-6 md:px-8 lg:px-12 relative z-10">
                {/* Editorial header */}
                <div className={`flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-0 mb-16 md:mb-20 opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-2' : ''}`}>
                    <span className={`text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>01</span>
                    <span className={`text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>/ THE PROBLEM</span>
                    <span className={`hidden md:block text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>FINANCIAL INSIGHT</span>
                </div>

                {/* Hero statement with scrub effect */}
                <div className={`opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-3' : ''}`}>
                    <div 
                        ref={containerRef}
                        className="scrub-text text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter text-center max-w-6xl mx-auto mb-20 md:mb-32 leading-[1.1]"
                        dangerouslySetInnerHTML={{ __html: spansHtml }}
                    />
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 max-w-7xl mx-auto">
                    {/* Issues column */}
                    <div className={`opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-4' : ''}`}>
                        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-10 pb-3 border-b ${borderSubtle} ${textPrimary}`}>
                            Common Issues
                        </h3>
                        <ul className="space-y-0">
                            {[
                                { icon: "solar:danger-circle-linear", text: "Profits look good, but cash feels tight." },
                                { icon: "solar:file-remove-linear", text: "Reports exist, but decisions still feel uncertain." },
                                { icon: "solar:sort-from-top-to-bottom-linear", text: "Growth adds complexity instead of clarity." },
                                { icon: "solar:wheel-angle-linear", text: "Leadership is reacting instead of steering." }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-5 group">
                                    <div className={`transition-all duration-500 ${iconBase} group-hover:text-[#ff3333] mt-1`}>
                                        <Icon icon={item.icon} className="text-xl" />
                                    </div>
                                    <span className={`text-base md:text-lg font-light leading-relaxed tracking-wide ${textSecondary}`}>
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quote column */}
                    <div className={`opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-5' : ''} mt-6`}>
                        <div className={`relative p-8 md:p-10 border-l-4 ${borderQuote} ${bgQuote}`}>
                            <div className={`absolute left-6 top-4 text-4xl md:text-5xl font-black opacity-20 ${textPrimary}`}>
                                "
                            </div>
                            <div className="relative text-center pt-6">
                                <p className={`text-xl md:text-2xl font-light leading-tight tracking-wide ${textSecondary}`}>
                                    You don't need more data.
                                </p>
                                <p className={`text-xl md:text-2xl font-black leading-tight tracking-tight ${textPrimary}`}>
                                    You need better financial judgment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom decorative elements */}
            <div className={`absolute bottom-8 left-6 md:left-12 w-16 h-16 border-l border-b pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-6' : ''}`} />
            <div className={`absolute bottom-8 right-6 md:right-12 w-16 h-16 border-r border-b pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-6' : ''}`} />
        </section>
    );
}
