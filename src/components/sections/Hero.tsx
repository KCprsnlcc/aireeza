'use client';

import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";
import { useScrubText } from "@/hooks/useScrubText";

export default function Hero() {
    const { theme } = useTheme();
    
    // Apply scrub text effect to main quote only
    const mainQuote = "Most growing businesses don't fail because of effort — they fail because decisions are made without clear financial insight.";
    const { containerRef, spansHtml } = useScrubText(mainQuote, theme);

    return (
        <>
            {/* Hero Section */}
            <header className={`relative pt-32 pb-10 border-b ${
                theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
            }`}>
                <div className="max-w-[1600px] mx-auto px-6">
                    {/* Giant Title */}
                    <div className="text-center mb-12 relative z-10">
                        <h1 className="text-[13vw] leading-[0.8] font-semibold tracking-tighter">
                            AIREEZA
                        </h1>
                        <p className={`text-[2vw] font-light tracking-[0.5em] mt-4 ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                            L. TANDIH
                        </p>
                    </div>

                    {/* Meta Info Grid */}
                    <div className={`grid grid-cols-1 md:grid-cols-3 border-y py-8 mb-12 ${
                        theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                    }`}>
                        <div className={`flex flex-col items-center justify-center text-center gap-4 border-r ${
                            theme === 'dark' ? 'border-neutral-800/50' : 'border-neutral-200/50'
                        }`}>
                            <span className={`text-xs font-normal uppercase tracking-widest ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>Financial<br />Insight</span>
                        </div>
                        <div className={`flex flex-col items-center justify-center text-center gap-4 border-r ${
                            theme === 'dark' ? 'border-neutral-800/50' : 'border-neutral-200/50'
                        }`}>
                            <span className={`text-xs font-normal uppercase tracking-widest ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>Risk<br />Management</span>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center gap-4">
                            <span className={`text-xs font-normal uppercase tracking-widest ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>Strategic<br />Advisory</span>
                        </div>
                    </div>

                    {/* Red Hero Image (Duotone) with Overlay Text */}
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] duotone-red overflow-hidden relative">
                        <img 
                            src="/red-hero.png" 
                            className="w-full h-full object-cover object-top transition-transform duration-[2s] hover:scale-105" 
                            alt="Office Architecture"
                        />
                        
                        {/* Vogue-style Text Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-full relative">
                                {/* Top left fashion magazine style */}
                                <div className="absolute top-8 left-8 hidden lg:block">
                                    <div className="text-xs font-black uppercase tracking-[0.3em] text-white/80">
                                        AIREEZA
                                    </div>
                                    <div className="text-xs font-light uppercase tracking-[0.2em] text-white/60 mt-1">
                                        L. TANDIH
                                    </div>
                                </div>
                                
                                {/* Main fashion statement - dramatic positioning */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-center">
                                    <h2 className="text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[0.8] text-white">
                                        TURN<br />FINANCIAL<br />
                                        <span className="block text-4xl md:text-5xl lg:text-7xl font-light tracking-wider text-white/90">
                                            COMPLEXITY
                                        </span>
                                    </h2>
                                </div>
                                
                                {/* Right side fashion caption */}
                                <div className="absolute top-1/3 right-8 hidden lg:block">
                                    <div className="text-xs font-normal uppercase tracking-widest text-white/70 writing-mode-vertical">
                                        Strategic • Financial • Insight
                                    </div>
                                </div>
                                
                                {/* Bottom left dramatic text */}
                                <div className="absolute bottom-12 left-8 hidden lg:block">
                                    <div className="space-y-2">
                                        <div className="text-2xl font-light tracking-widest text-white/30">
                                            CLARITY
                                        </div>
                                        <div className="text-lg font-light tracking-wide text-white/50">
                                            clear, profitable decisions
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Bottom right fashion details */}
                                <div className="absolute bottom-12 right-8 hidden lg:block text-right">
                                    <div className="text-xs font-normal uppercase tracking-widest text-white/60">
                                        The Problem
                                    </div>
                                    <div className="text-xs font-light uppercase tracking-widest text-white/40 mt-1">
                                        Financial Insight
                                    </div>
                                </div>
                                
                                {/* Mobile fashion layout */}
                                <div className="lg:hidden flex flex-col justify-between h-full p-8">
                                    <div className="text-center">
                                        <div className="text-xs font-black uppercase tracking-[0.3em] text-white/80">
                                            AIREEZA
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-4xl font-black tracking-tight leading-[0.8] text-white">
                                            TURN<br/>FINANCIAL<br/>
                                            <span className="block text-3xl font-light tracking-wider text-white/90">
                                                COMPLEXITY
                                            </span>
                                        </h2>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-light tracking-widest text-white/30">
                                            CLARITY
                                        </div>
                                        <div className="text-sm font-light tracking-wide text-white/50">
                                            clear, profitable decisions
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Section 01: The Problem */}
            <section className={`py-24 border-b ${
                theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
            }`}>
                <div className="max-w-[1600px] mx-auto px-6">
                    <div className="flex justify-between items-end mb-16">
                        <span className="text-xs text-neutral-500">01</span>
                        <span className="text-xs text-neutral-500">/ THE PROBLEM</span>
                        <span className="text-xs text-neutral-500">FINANCIAL INSIGHT</span>
                    </div>

                    <div 
                        ref={containerRef}
                        className={`scrub-text text-3xl md:text-5xl font-semibold tracking-tight text-center max-w-5xl mx-auto mb-12 leading-tight`}
                        dangerouslySetInnerHTML={{ __html: spansHtml }}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
                        <div>
                            <h3 className={`text-xl font-normal mb-8 uppercase tracking-widest ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>Common Issues</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <Icon icon="solar:danger-circle-linear" className={`text-xl mt-1 ${
                                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                                    }`} />
                                    <span className={`text-lg ${
                                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                    }`}>Profits look good, but cash feels tight.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Icon icon="solar:file-remove-linear" className={`text-xl mt-1 ${
                                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                                    }`} />
                                    <span className={`text-lg ${
                                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                    }`}>Reports exist, but decisions still feel uncertain.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Icon icon="solar:sort-from-top-to-bottom-linear" className={`text-xl mt-1 ${
                                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                                    }`} />
                                    <span className={`text-lg ${
                                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                    }`}>Growth adds complexity instead of clarity.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <Icon icon="solar:wheel-angle-linear" className={`text-xl mt-1 ${
                                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                                    }`} />
                                    <span className={`text-lg ${
                                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                    }`}>Leadership is reacting instead of steering.</span>
                                </li>
                            </ul>
                        </div>
                        <div className={`border p-12 text-center ${
                            theme === 'dark' ? 'border-neutral-800 bg-neutral-900/20' : 'border-neutral-200 bg-neutral-50'
                        }`}>
                            <p className="text-2xl font-light leading-relaxed">
                                "You don't need more data.<br />
                                <span className="font-semibold">You need better financial judgment."</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
