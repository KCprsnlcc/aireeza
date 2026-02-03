'use client';

import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrubText } from "@/hooks/useScrubText";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <nav className="w-full px-8 py-8 flex justify-between items-center text-xs font-normal uppercase tracking-wide border-b backdrop-blur-sm bg-white/80 border-black/10 text-black">
                <div className="w-1/3">EST. 2024</div>
                <div className="w-1/3 flex justify-center">
                    <Icon icon="solar:infinity-linear" width="28" height="28" />
                </div>
                <div className="w-1/3 flex justify-end items-center gap-4">
                    <div className="w-8 h-8" />
                    <a 
                        href="#contact" 
                        className="border border-black/30 rounded-full px-8 py-3"
                    >
                        Start Conversation
                    </a>
                </div>
            </nav>
        );
    }

    return <NavbarContent />;
}

function NavbarContent() {
    const { theme } = useTheme();
    
    // Apply scrub text to infinity icon
    const brandText = "∞";
    const { containerRef, spansHtml } = useScrubText(brandText, theme);

    return (
        <nav className={`w-full px-8 py-8 flex justify-between items-center text-xs font-normal uppercase tracking-wide border-b backdrop-blur-sm relative overflow-hidden transition-all duration-700 ${
            theme === 'dark' 
                ? 'mix-blend-difference border-white/10 text-white bg-transparent' 
                : 'bg-white/80 border-black/10 text-black'
        }`}>
            {/* Vogue-style background decoration */}
            <div className={`absolute top-0 left-0 w-32 h-full opacity-5 ${
                theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
                <div className="text-6xl font-black tracking-tighter writing-mode-vertical">
                    NAV
                </div>
            </div>
            
            <div className="relative z-10 w-full flex justify-between items-center">
                <div className="w-1/3">
                    <span className={`font-light tracking-[0.4em] transition-colors duration-500 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>EST. 2024</span>
                </div>
                
                <div className="w-1/3 flex justify-center">
                    <div 
                        ref={containerRef}
                        className={`scrub-text transition-all duration-500 hover:scale-110 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}
                        dangerouslySetInnerHTML={{ __html: spansHtml }}
                    />
                </div>
                
                <div className="w-1/3 flex justify-end items-center gap-6">
                    <div className={`w-10 h-10 rounded-full border transition-all duration-500 hover:scale-110 ${
                        theme === 'dark' 
                            ? 'border-white/20 hover:border-white/40' 
                            : 'border-black/20 hover:border-black/40'
                    }`}></div>
                    <a 
                        href="#contact" 
                        className={`group inline-flex items-center gap-3 border rounded-full px-8 py-3 text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 hover:scale-105 ${
                            theme === 'dark'
                                ? 'border-white/30 hover:bg-white hover:text-black text-white/80'
                                : 'border-black/30 hover:bg-black hover:text-white text-black/80'
                        }`}
                    >
                        <span>Start Conversation</span>
                        <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}
