'use client';

import { useTheme } from "@/contexts/ThemeContext";

export default function PointOfView() {
    const { theme } = useTheme();

    return (
        <section id="point-of-view" className={`py-32 border-b relative overflow-hidden ${
            theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
        }`}>
            {/* Vogue-style background decoration */}
            <div className="absolute top-0 right-0 w-64 h-full opacity-5">
                <div className="text-9xl font-black tracking-tighter writing-mode-vertical">
                    POV
                </div>
            </div>
            
            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                {/* Vogue-style header */}
                <div className="flex justify-between items-center mb-24">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">POV</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">/ PERSPECTIVE</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">INSIGHTS</span>
                </div>

                {/* Vogue-style main content */}
                <div className="text-center zoom-in">
                    {/* Unique decorative element */}
                    <div className="mb-20">
                        <div className={`inline-block h-px w-32 transition-all duration-1000 hover:w-48 ${
                            theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-300'
                        }`}></div>
                    </div>
                    
                    {/* Dramatic Vogue headline */}
                    <h2 className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.7] mb-16 ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                        POINT
                        <span className={`block text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mt-4 ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            OF
                        </span>
                        <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-wider">
                            VIEW
                        </span>
                    </h2>
                    
                    {/* Vogue-style subtitle */}
                    <div className={`text-lg font-thin leading-relaxed tracking-wide max-w-3xl mx-auto mb-32 relative ${
                        theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                        <div className={`absolute -left-8 top-1/2 -translate-y-1/2 w-px h-12 ${
                            theme === 'dark' ? 'bg-neutral-700' : 'bg-neutral-400'
                        }`}></div>
                        <div className={`absolute -right-8 top-1/2 -translate-y-1/2 w-px h-12 ${
                            theme === 'dark' ? 'bg-neutral-700' : 'bg-neutral-400'
                        }`}></div>
                        Thoughts on strategic finance, decision-making, and business performance.
                    </div>

                    {/* Unique Vogue-style coming soon block */}
                    <div className={`relative p-24 border-t-2 border-b-2 inline-block max-w-3xl mx-auto transition-all duration-700 group ${
                        theme === 'dark' 
                            ? 'border-neutral-800 bg-neutral-900/10 hover:border-[#ff3333] hover:bg-[#ff3333]/5' 
                            : 'border-neutral-200 bg-white hover:border-[#ff3333] hover:bg-[#ff3333]/5'
                    }`}>
                        <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 text-xs font-black uppercase tracking-[0.3em] ${
                            theme === 'dark' ? 'bg-black text-neutral-500' : 'bg-white text-neutral-500'
                        }`}>
                            Status
                        </div>
                        <div className="text-center">
                            <p className={`text-sm font-light leading-relaxed tracking-wide transition-colors duration-700 ${
                                theme === 'dark' ? 'text-neutral-400 group-hover:text-neutral-300' : 'text-neutral-600 group-hover:text-neutral-700'
                            }`}>
                                Content coming soon
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
