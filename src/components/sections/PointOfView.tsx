'use client';

import { useEffect, useState } from 'react';
import { useTheme } from "@/contexts/ThemeContext";

export default function PointOfView() {
    const { theme } = useTheme();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const textPrimary = theme === 'dark' ? 'text-white' : 'text-black/90';
    const textSecondary = theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700';
    const textTertiary = theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600';
    const textMuted = theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500';
    const borderColor = theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200';
    const borderSubtle = theme === 'dark' ? 'border-neutral-800' : 'border-neutral-300';
    const bgBase = theme === 'dark' ? 'bg-black' : 'bg-white';
    const bgBox = theme === 'dark' ? 'bg-neutral-900/10' : 'bg-white';
    const bgLabel = theme === 'dark' ? 'bg-black' : 'bg-white';
    const lineColor = theme === 'dark' ? 'bg-neutral-700' : 'bg-neutral-400';
    const cornerBorder = theme === 'dark' ? 'border-white/10' : 'border-black/8';
    const hoverBorder = theme === 'dark' ? 'hover:border-[#ff3333]' : 'hover:border-[#ff3333]';
    const hoverBg = theme === 'dark' ? 'hover:bg-[#ff3333]/5' : 'hover:bg-[#ff3333]/5';
    const hoverText = theme === 'dark' ? 'group-hover:text-neutral-300' : 'group-hover:text-neutral-700';

    return (
        <section id="point-of-view" className={`relative min-h-screen flex flex-col justify-center py-24 md:py-32 border-b overflow-hidden ${borderColor} ${bgBase}`}>
            {/* Decorative corner elements */}
            <div className={`absolute top-8 left-6 md:left-12 w-16 h-16 border-l border-t pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-1' : ''}`} />
            <div className={`absolute top-8 right-6 md:right-12 w-16 h-16 border-r border-t pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-1' : ''}`} />

            {/* Vertical background text */}
            <div className="absolute top-0 right-0 w-64 h-full opacity-5 pointer-events-none">
                <div className="text-9xl font-black tracking-tighter writing-mode-vertical">
                    POV
                </div>
            </div>
            
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10 w-full">
                {/* Editorial header */}
                <div className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-12 md:mb-16 opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-2' : ''}`}>
                    <span className={`text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>POV</span>
                    <span className={`text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>/ PERSPECTIVE</span>
                    <span className={`hidden md:block text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>INSIGHTS</span>
                </div>

                {/* Main content */}
                <div className="text-center">
                    {/* Decorative line */}
                    <div className={`mb-8 md:mb-10 opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-3' : ''}`}>
                        <div className={`inline-block h-px w-32 transition-all duration-1000 hover:w-48 ${borderSubtle}`}></div>
                    </div>
                    
                    {/* Dramatic headline */}
                    <div className={`opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-4' : ''}`}>
                        <h2 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] mb-8 md:mb-10 ${textPrimary}`}>
                            POINT
                            <span className={`block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.2em] text-center mt-2 ${textSecondary}`}>
                                OF
                            </span>
                            <span className={`block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-[0.2em] text-center ${textSecondary}`}>
                                VIEW
                            </span>
                        </h2>
                    </div>
                    
                    {/* Subtitle with decorative lines */}
                    <div className={`text-base md:text-lg font-light leading-relaxed tracking-wide max-w-3xl mx-auto mb-12 md:mb-16 relative ${textSecondary} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-5' : ''}`}>
                        <div className={`absolute -left-8 top-1/2 -translate-y-1/2 w-px h-12 ${lineColor}`}></div>
                        <div className={`absolute -right-8 top-1/2 -translate-y-1/2 w-px h-12 ${lineColor}`}></div>
                        Thoughts on strategic finance, decision-making, and business performance.
                    </div>

                    {/* Coming soon block */}
                    <div className={`opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-6' : ''}`}>
                        <div className={`relative p-12 md:p-16 border-t-2 border-b-2 inline-block max-w-3xl mx-auto transition-all duration-700 group ${borderSubtle} ${bgBox} ${hoverBorder} ${hoverBg}`}>
                            <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] ${bgLabel} ${textMuted}`}>
                                Status
                            </div>
                            <div className="text-center">
                                <p className={`text-sm md:text-base font-light leading-relaxed tracking-wide transition-colors duration-700 ${textTertiary} ${hoverText}`}>
                                    Content coming soon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom decorative elements */}
            <div className={`absolute bottom-8 left-6 md:left-12 w-16 h-16 border-l border-b pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-7' : ''}`} />
            <div className={`absolute bottom-8 right-6 md:right-12 w-16 h-16 border-r border-b pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-7' : ''}`} />
        </section>
    );
}
