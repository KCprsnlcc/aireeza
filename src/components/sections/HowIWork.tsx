'use client';

import { useTheme } from "@/contexts/ThemeContext";

export default function HowIWork() {
    const { theme } = useTheme();

    return (
        <section id="how-i-work" className={`py-32 border-b relative overflow-hidden ${
            theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
        }`}>
            {/* Vogue-style background decoration */}
            <div className="absolute top-0 left-0 w-48 h-full opacity-5">
                <div className="text-8xl font-black tracking-tighter writing-mode-vertical">
                    APPROACH
                </div>
            </div>
            
            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                {/* Vogue-style header */}
                <div className="flex justify-between items-end mb-24">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">03</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">/ APPROACH</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">DELIBERATE & STRUCTURED</span>
                </div>

                {/* Dramatic Vogue headline */}
                <div className="text-center mb-32">
                    <h2 className={`text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.7] ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                        CLARITY
                        <span className={`block text-5xl md:text-7xl lg:text-8xl font-light tracking-wider mt-4 ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            OVER
                        </span>
                        <span className="block text-5xl md:text-7xl lg:text-8xl font-light tracking-wider">
                            ACTIVITY
                        </span>
                    </h2>
                </div>
                
                <p className={`text-center text-lg font-thin leading-relaxed max-w-5xl mx-auto mb-32 tracking-normal ${ 
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                    I do not start with templates. I start by understanding how your business actually works.
                </p>

                {/* Vogue-style process steps */}``
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {/* Step 1 */}
                    <div className="group cursor-default zoom-in relative">
                        {/* Number with dramatic lines */}
                        <div className="flex items-center justify-center mb-12">
                            <div className={`h-px w-20 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-32' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-32'
                            }`}></div>
                            <span className={`mx-8 text-5xl md:text-6xl font-light transition-all duration-700 ${
                                theme === 'dark' ? 'text-neutral-600 group-hover:text-white' : 'text-neutral-400 group-hover:text-black'
                            }`}>01</span>
                            <div className={`h-px w-20 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-32' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-32'
                            }`}></div>
                        </div>
                        
                        <div className="text-center">
                            <h3 className={`text-2xl font-black tracking-tight mb-6 uppercase ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>Diagnose</h3>
                            <p className={`text-sm font-light leading-relaxed mb-4 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>Clarity before action.</p>
                            <p className={`text-xs font-light leading-relaxed ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'
                            }`}>Analyze business mechanics, profit leaks, and decision bottlenecks.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group cursor-default zoom-in relative" style={{ transitionDelay: '200ms' }}>
                        {/* Number with dramatic lines */}
                        <div className="flex items-center justify-center mb-12">
                            <div className={`h-px w-20 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-32' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-32'
                            }`}></div>
                            <span className={`mx-8 text-5xl md:text-6xl font-light transition-all duration-700 ${
                                theme === 'dark' ? 'text-neutral-600 group-hover:text-white' : 'text-neutral-400 group-hover:text-black'
                            }`}>02</span>
                            <div className={`h-px w-20 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-32' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-32'
                            }`}></div>
                        </div>
                        
                        <div className="text-center">
                            <h3 className={`text-2xl font-black tracking-tight mb-6 uppercase ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>Design</h3>
                            <p className={`text-sm font-light leading-relaxed mb-4 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>Structure for decisions.</p>
                            <p className={`text-xs font-light leading-relaxed ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'
                            }`}>Build relevant metrics, decision frameworks, and strategic alignment.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group cursor-default zoom-in relative" style={{ transitionDelay: '400ms' }}>
                        {/* Number with dramatic lines */}
                        <div className="flex items-center justify-center mb-12">
                            <div className={`h-px w-20 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-32' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-32'
                            }`}></div>
                            <span className={`mx-8 text-5xl md:text-6xl font-light transition-all duration-700 ${
                                theme === 'dark' ? 'text-neutral-600 group-hover:text-white' : 'text-neutral-400 group-hover:text-black'
                            }`}>03</span>
                            <div className={`h-px w-20 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-32' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-32'
                            }`}></div>
                        </div>
                        
                        <div className="text-center">
                            <h3 className={`text-2xl font-black tracking-tight mb-6 uppercase ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>Advise</h3>
                            <p className={`text-sm font-light leading-relaxed mb-4 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>Executive partnership.</p>
                            <p className={`text-xs font-light leading-relaxed ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'
                            }`}>Ongoing support, data-grounded discussions, and actionable recommendations.</p>
                        </div>
                    </div>
                </div>
                
                {/* Vogue-style footer note */}
                <div className={`mt-32 pt-16 border-t text-center fade-up ${
                    theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                }`}>
                    <p className={`text-xs font-light leading-relaxed tracking-wide ${
                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                    }`}>Best suited for leadership teams who are open to scrutiny and willing to act.</p>
                </div>
            </div>
        </section>
    );
}
