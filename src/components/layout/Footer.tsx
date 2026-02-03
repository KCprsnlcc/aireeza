'use client';

import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "../ui/ThemeToggle";
import { useScrubText } from "@/hooks/useScrubText";

export default function Footer() {
    const { theme } = useTheme();
    
    // Apply scrub text to brand name
    const brandText = "AIREEZA";
    const { containerRef, spansHtml } = useScrubText(brandText, theme);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`pt-32 pb-16 relative overflow-hidden transition-all duration-700 ${theme === 'dark' ? 'bg-black' : 'bg-white'
            }`}>
            {/* Vogue-style background decorations */}
            <div className="absolute top-0 left-0 w-48 h-full opacity-5">
                <div className="text-8xl font-black tracking-tighter writing-mode-vertical">
                    FOOTER
                </div>
            </div>
            <div className={`absolute bottom-0 right-0 w-64 h-full opacity-5 ${
                theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
                <div className="text-8xl font-black tracking-tighter writing-mode-vertical">
                    CONTACT
                </div>
            </div>
            
            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-16 mb-32 fade-up">
                    <div className="text-left">
                        <div className="space-y-2">
                            <p className={`text-xs font-black uppercase tracking-[0.3em] ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'}`}>
                                Strategic Finance
                            </p>
                            <p className={`text-xs font-black uppercase tracking-[0.3em] ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'}`}>
                                FP&A Advisory
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex justify-center">
                        <div className="w-64 h-80 duotone-red overflow-hidden rounded-2xl transition-all duration-700 hover:scale-105">
                            <img
                                src="/red-footer.png"
                                className="w-full h-full object-cover"
                                alt="Office Architecture"
                            />
                        </div>
                    </div>
                    
                    <div className="text-right">
                        <div className="space-y-2">
                            <p className={`text-xs font-black uppercase tracking-[0.3em] ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'}`}>
                                Global Reach
                            </p>
                            <p className={`text-xs font-black uppercase tracking-[0.3em] ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'}`}>
                                Remote First
                            </p>
                        </div>
                    </div>
                </div>

                <div className={`border-t pt-16 flex justify-between items-end fade-up relative overflow-hidden ${theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200'
                    }`}>
                    <div className="text-left">
                        <span className={`text-[10px] font-light tracking-wide ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-700'}`}>
                            ©2024 AIREEZA
                        </span>
                    </div>
                    
                    {/* Vogue-style brand name with scrub text */}
                    <div className="text-center">
                        <div 
                            ref={containerRef}
                            className={`scrub-text text-[15vw] leading-[0.7] font-black tracking-tighter select-none pointer-events-none opacity-50 transition-all duration-700 hover:opacity-70 ${
                                theme === 'dark' ? 'text-neutral-800' : 'text-neutral-200'
                            }`}
                            dangerouslySetInnerHTML={{ __html: spansHtml }}
                        />
                    </div>
                    
                    <div className="text-right">
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <button
                                onClick={scrollToTop}
                                className={`group text-[10px] flex items-center gap-2 transition-all duration-500 ${theme === 'dark'
                                        ? 'text-neutral-600 hover:text-white'
                                        : 'text-neutral-700 hover:text-black'
                                    }`}
                            >
                                <span className="font-light tracking-wide">BACK TO TOP</span>
                                <Icon icon="solar:arrow-up-linear" className="transition-transform duration-500 group-hover:-translate-y-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
