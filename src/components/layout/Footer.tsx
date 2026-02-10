'use client';

import { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "../ui/ThemeToggle";

export default function Footer() {
    const { theme } = useTheme();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const textPrimary = theme === 'dark' ? 'text-white' : 'text-black/90';
    const textSecondary = theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700';
    const textTertiary = theme === 'dark' ? 'text-neutral-600' : 'text-neutral-700';
    const textMuted = theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700';
    const borderColor = theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200';
    const bgBase = theme === 'dark' ? 'bg-black' : 'bg-white';
    const cornerBorder = theme === 'dark' ? 'border-white/10' : 'border-black/8';
    const logoOpacity = theme === 'dark' ? 'opacity-30' : 'opacity-20';
    const hoverText = theme === 'dark' ? 'hover:text-white' : 'hover:text-black';

    return (
        <footer className={`relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden transition-all duration-700 ${bgBase}`}>
            {/* Decorative corner elements */}
            <div className={`absolute top-8 left-6 md:left-12 w-16 h-16 border-l border-t pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-1' : ''}`} />
            <div className={`absolute top-8 right-6 md:right-12 w-16 h-16 border-r border-t pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-1' : ''}`} />
            
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
                <div className={`grid grid-cols-1 md:grid-cols-3 items-end gap-12 md:gap-16 mb-20 md:mb-24 opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-2' : ''}`}>
                    <div className="text-left">
                        <div className="space-y-2">
                            <p className={`text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>
                                Strategic Finance
                            </p>
                            <p className={`text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>
                                FP&A Advisory
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="w-64 h-80 duotone-red overflow-hidden rounded-2xl transition-all duration-700 hover:scale-105 relative">
                            <img
                                src="/red-footer.png"
                                className="w-full h-full object-cover"
                                alt="Office Architecture"
                            />
                            
                            {/* Text Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-full relative">
                                    {/* Top left */}
                                    <div className="absolute top-4 left-4 z-50">
                                        <div className="relative">
                                            <span className="font-majesty font-normal text-white" style={{ fontSize: '1rem', lineHeight: '1' }}>
                                                Aireeza
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Main statement */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-center">
                                        <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-[0.8] text-white">
                                            GLOBAL<br />REACH<br />
                                            <span className="block text-xl md:text-2xl font-light tracking-wider text-white/90">
                                                EXCELLENCE
                                            </span>
                                        </h2>
                                    </div>
                                    
                                    {/* Right side caption */}
                                    <div className="absolute top-1/3 right-4">
                                        <div className="text-xs font-normal uppercase tracking-widest text-white/70 writing-mode-vertical">
                                            Strategic • Finance • Global
                                        </div>
                                    </div>
                                    
                                    {/* Bottom left detail */}
                                    <div className="absolute bottom-4 left-4">
                                        <div className="text-xs font-light tracking-wide text-white/50">
                                            Worldwide Service
                                        </div>
                                        <div className="max-w-[140px] text-xs font-light leading-relaxed text-white/40 mt-1">
                                            Remote-first strategic finance advisory serving clients globally.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-right">
                        <div className="space-y-2">
                            <p className={`text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>
                                Global Reach
                            </p>
                            <p className={`text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>
                                Remote First
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`border-t pt-12 md:pt-16 flex justify-between items-end relative overflow-hidden opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-3' : ''} ${borderColor}`}>
                    <div className="text-left">
                        <div className="flex items-center gap-2">
                            <span className={`font-majesty font-normal ${textPrimary}`} style={{ fontSize: '1.5rem', lineHeight: '1' }}>
                                Airee<span style={{ color: '#ff3333' }}>za</span>
                            </span>
                            <span className={`text-[10px] font-light tracking-wide ${textTertiary}`}>
                                &copy;2024
                            </span>
                        </div>
                    </div>
                    
                    {/* Brand name with logo */}
                    <div className="text-center">
                        <span className={`font-majesty font-normal select-none pointer-events-none transition-all duration-700 hover:opacity-70 ${logoOpacity} ${textPrimary}`} style={{ fontSize: '15vw', lineHeight: '1' }}>
                            Airee<span style={{ color: '#ff3333' }}>za</span>
                        </span>
                    </div>
                    
                    <div className="text-right">
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <button
                                onClick={scrollToTop}
                                className={`group text-[10px] flex items-center gap-2 transition-all duration-500 ${textTertiary} ${hoverText}`}
                            >
                                <span className="font-light tracking-wide">BACK TO TOP</span>
                                <Icon icon="solar:arrow-up-linear" className="transition-transform duration-500 group-hover:-translate-y-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom decorative elements */}
            <div className={`absolute bottom-8 left-6 md:left-12 w-16 h-16 border-l border-b pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-4' : ''}`} />
            <div className={`absolute bottom-8 right-6 md:right-12 w-16 h-16 border-r border-b pointer-events-none ${cornerBorder} opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-4' : ''}`} />
        </footer>
    );
}
