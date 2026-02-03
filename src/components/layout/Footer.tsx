'use client';

import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";
import ThemeToggle from "../ui/ThemeToggle";

export default function Footer() {
    const { theme } = useTheme();
    
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
                        <div className="w-64 h-80 duotone-red overflow-hidden rounded-2xl transition-all duration-700 hover:scale-105 relative">
                            <img
                                src="/red-footer.png"
                                className="w-full h-full object-cover"
                                alt="Office Architecture"
                            />
                            
                            {/* Vogue-style Text Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-full relative">
                                    {/* Top left fashion magazine style */}
                                    <div className="absolute top-4 left-4 z-50">
                                        <div className="relative">
                                            <img 
                                                src="/logo/aireeza-logo-w.svg"
                                                alt="AIREEZA"
                                                className="h-4 w-auto relative z-10"
                                                style={{ mixBlendMode: 'normal' }}
                                            />
                                        </div>
                                        <div className="text-xs font-light uppercase tracking-[0.2em] text-white/60 mt-1">
                                            L. TANDIH
                                        </div>
                                    </div>
                                    
                                    {/* Main fashion statement - dramatic positioning */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-center">
                                        <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-[0.8] text-white">
                                            GLOBAL<br />REACH<br />
                                            <span className="block text-xl md:text-2xl font-light tracking-wider text-white/90">
                                                EXCELLENCE
                                            </span>
                                        </h2>
                                    </div>
                                    
                                    {/* Right side fashion caption */}
                                    <div className="absolute top-1/3 right-4">
                                        <div className="text-xs font-normal uppercase tracking-widest text-white/70 writing-mode-vertical">
                                            Strategic • Finance • Global
                                        </div>
                                    </div>
                                    
                                    {/* Bottom left fashion detail */}
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
                        <div className="flex items-center gap-2">
                            <img 
                                src={theme === 'dark' ? '/logo/aireeza-logo-w.svg' : '/logo/aireeza-logo-b.svg'}
                                alt="AIREEZA"
                                className="h-3 w-auto"
                            />
                            <span className={`text-[10px] font-light tracking-wide ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-700'}`}>
                                ©2024
                            </span>
                        </div>
                    </div>
                    
                    {/* Vogue-style brand name with logo */}
                    <div className="text-center">
                        <img 
                            src={theme === 'dark' ? '/logo/aireeza-logo-w.svg' : '/logo/aireeza-logo-b.svg'}
                            alt="AIREEZA"
                            className={`h-[15vw] w-auto select-none pointer-events-none transition-all duration-700 hover:opacity-70 ${
                                theme === 'dark' ? 'opacity-30' : 'opacity-20'
                            }`}
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
