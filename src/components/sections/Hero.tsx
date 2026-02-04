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
            <header id="hero" className={`relative pt-32 pb-10 border-b ${
                theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
            }`}>
                <div className="max-w-[1600px] mx-auto px-6">
                    {/* Giant Title */}
                    <div className="text-center mb-12 relative z-10">
                        <div className="flex justify-center items-center">
                            <span className={`font-majesty font-normal ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`} style={{ fontSize: '13vw', lineHeight: '1' }}>
                                Airee<span style={{ color: '#ff3333' }}>za</span>
                            </span>
                        </div>
                        <p className={`text-[2vw] font-light tracking-[0.5em] mt-4 ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
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
                    <div className="w-full aspect-[16/9] md:aspect-[21/9] duotone-red overflow-hidden relative vogue-reveal-horizontal">
                        <img 
                            src="/red-hero.png" 
                            className="w-full h-full object-cover object-top transition-transform duration-[2s] hover:scale-105" 
                            alt="Office Architecture"
                        />
                        
                        {/* Vogue-style Text Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-full relative">
                                {/* Top left fashion magazine style */}
                                <div className="absolute top-8 left-8 hidden lg:block z-50">
                                    <div className="relative">
                                        <span className="font-majesty font-normal text-white" style={{ fontSize: '1.5rem', lineHeight: '1' }}>
                                            Aireeza
                                        </span>
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
                                        <div className="max-w-xs text-xs font-light leading-relaxed text-white/40 mt-4">
                                            Strategic finance and business performance advisory for founders and leadership teams who need clarity — not just reports.
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
                                        <div className="relative z-50">
                                            <span className="font-majesty font-normal text-white" style={{ fontSize: '1.25rem', lineHeight: '1' }}>
                                                Aireeza
                                            </span>
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
                                        <div className="max-w-[200px] mx-auto text-xs font-light leading-relaxed text-white/40 mt-4">
                                            Strategic finance and business performance advisory for founders and leadership teams who need clarity — not just reports.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Section 01: The Problem - Vogue Style */}
            <section className={`py-32 border-b relative overflow-hidden ${
                theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
            }`}>
                {/* Vogue-style background decoration */}
                <div className="absolute top-0 left-0 w-48 h-full opacity-5">
                    <div className="text-8xl font-black tracking-tighter writing-mode-vertical">
                        PROBLEM
                    </div>
                </div>
                
                <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                    {/* Vogue-style header */}
                    <div className="flex justify-between items-end mb-24">
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">01</span>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">/ THE PROBLEM</span>
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">FINANCIAL INSIGHT</span>
                    </div>

                    {/* Dramatic Vogue-style scrub text */}
                    <div 
                        ref={containerRef}
                        className={`scrub-text text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-center max-w-6xl mx-auto mb-32 leading-[0.8]`}
                        dangerouslySetInnerHTML={{ __html: spansHtml }}
                    />

                    {/* Vogue-style content grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto items-start">
                        {/* Vogue-style issues list */}
                        <div>
                            <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-12 pb-3 border-b ${
                                theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                            }`}>Common Issues</h3>
                            <ul className="space-y-8">
                                <li className="flex items-start gap-6 group">
                                    <div className={`transition-all duration-500 ${
                                        theme === 'dark' ? 'text-neutral-600 group-hover:text-[#ff3333]' : 'text-neutral-400 group-hover:text-[#ff3333]'
                                    }`}>
                                        <Icon icon="solar:danger-circle-linear" className="text-2xl" />
                                    </div>
                                    <span className={`text-lg font-light leading-relaxed tracking-wide ${
                                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                    }`}>Profits look good, but cash feels tight.</span>
                                </li>
                                <li className="flex items-start gap-6 group">
                                    <div className={`transition-all duration-500 ${
                                        theme === 'dark' ? 'text-neutral-600 group-hover:text-[#ff3333]' : 'text-neutral-400 group-hover:text-[#ff3333]'
                                    }`}>
                                        <Icon icon="solar:file-remove-linear" className="text-2xl" />
                                    </div>
                                    <span className={`text-lg font-light leading-relaxed tracking-wide ${
                                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                    }`}>Reports exist, but decisions still feel uncertain.</span>
                                </li>
                                <li className="flex items-start gap-6 group">
                                    <div className={`transition-all duration-500 ${
                                        theme === 'dark' ? 'text-neutral-600 group-hover:text-[#ff3333]' : 'text-neutral-400 group-hover:text:[#ff3333]'
                                    }`}>
                                        <Icon icon="solar:sort-from-top-to-bottom-linear" className="text-2xl" />
                                    </div>
                                    <span className={`text-lg font-light leading-relaxed tracking-wide ${
                                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                    }`}>Growth adds complexity instead of clarity.</span>
                                </li>
                                <li className="flex items-start gap-6 group">
                                    <div className={`transition-all duration-500 ${
                                        theme === 'dark' ? 'text-neutral-600 group-hover:text-[#ff3333]' : 'text-neutral-400 group-hover:text:[#ff3333]'
                                    }`}>
                                        <Icon icon="solar:wheel-angle-linear" className="text-2xl" />
                                    </div>
                                    <span className={`text-lg font-light leading-relaxed tracking-wide ${
                                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                    }`}>Leadership is reacting instead of steering.</span>
                                </li>
                            </ul>
                        </div>
                        {/* Vogue-style quote block */}
                        <div className={`relative p-16 border-l-4 ${
                            theme === 'dark' 
                                ? 'border-neutral-700 bg-neutral-900/20' 
                                : 'border-neutral-300 bg-neutral-50'
                        }`}>
                            <div className={`absolute left-10 top-8 text-6xl font-black opacity-20 ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>"</div>
                            <div className="text-center">
                                <p className={`text-2xl md:text-3xl font-light leading-relaxed tracking-wide mb-6 ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}>
                                    You don't need more data.
                                </p>
                                <p className={`text-2xl md:text-3xl font-black leading-relaxed tracking-tight ${
                                    theme === 'dark' ? 'text-white' : 'text-black'
                                }`}>
                                    You need better financial judgment.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
