'use client';

import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";

export default function HowIWork() {
    const { theme } = useTheme();

    return (
        <section id="how-i-work" className={`py-16 border-b relative overflow-hidden ${
            theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
        }`}>
            {/* Vogue-style background decoration */}
            <div className="absolute top-0 left-0 w-32 h-full opacity-5">
                <div className="text-6xl font-black tracking-tighter writing-mode-vertical">
                    APPROACH
                </div>
            </div>
            
            <div className="w-full px-6 relative z-10">
                {/* Vogue-style header */}
                <div className="flex justify-between items-end mb-12">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">03</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">/ APPROACH</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">DELIBERATE & STRUCTURED</span>
                </div>

                {/* Dramatic Vogue headline */}
                <div className="text-center mb-16">
                    <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.7] ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                        CLARITY
                        <span className={`block text-3xl md:text-5xl lg:text-6xl font-light tracking-wider mt-2 ${
                            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                        }`}>
                            OVER
                        </span>
                        <span className="block text-3xl md:text-5xl lg:text-6xl font-light tracking-wider">
                            ACTIVITY
                        </span>
                    </h2>
                </div>
                
                <p className={`text-center text-sm font-thin leading-relaxed max-w-4xl mx-auto mb-16 tracking-normal ${ 
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                    My approach is deliberate, structured, and designed for leaders who value clarity over activity. I do not start with templates or assumptions. I start by understanding how your business actually works and where decisions are breaking down.
                </p>

                {/* Vogue-style process steps */}``
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="group cursor-default zoom-in relative">
                        {/* Number with dramatic lines */}
                        <div className="flex items-center justify-center mb-8">
                            <div className={`h-px w-16 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-24' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-24'
                            }`}></div>
                            <span className={`mx-6 text-4xl md:text-5xl font-light transition-all duration-700 ${
                                theme === 'dark' ? 'text-neutral-600 group-hover:text-white' : 'text-neutral-400 group-hover:text-black'
                            }`}>01</span>
                            <div className={`h-px w-16 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-24' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-24'
                            }`}></div>
                        </div>
                        
                        <div className="text-center">
                            <h3 className={`text-xl font-black tracking-tight mb-4 uppercase ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>Diagnose</h3>
                            <p className={`text-sm font-light leading-relaxed mb-3 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>Clarity before action.</p>
                            <p className={`text-xs font-light leading-relaxed mb-4 ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'
                            }`}>Before any recommendation is made, I take time to understand the real mechanics of the business.</p>
                            <div className={`text-left space-y-2 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>
                                <div className={`p-3 border rounded-lg ${
                                    theme === 'dark' 
                                        ? 'border-neutral-700 bg-neutral-900/50' 
                                        : 'border-neutral-300 bg-neutral-50/50'
                                }`}>
                                    <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">This stage focuses on</p>
                                    <ul className="space-y-1 text-xs font-light">
                                        <li>• The underlying business model and economic drivers</li>
                                        <li>• Where profit leaks occur across operations, pricing, or structure</li>
                                        <li>• Where decision-making slows, stalls, or relies too heavily on instinct</li>
                                    </ul>
                                </div>
                                <p className="text-xs font-light mt-3 text-center">The outcome is a shared understanding of the true problem not just the visible symptoms.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="group cursor-default zoom-in relative" style={{ transitionDelay: '200ms' }}>
                        {/* Number with dramatic lines */}
                        <div className="flex items-center justify-center mb-8">
                            <div className={`h-px w-16 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-24' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-24'
                            }`}></div>
                            <span className={`mx-6 text-4xl md:text-5xl font-light transition-all duration-700 ${
                                theme === 'dark' ? 'text-neutral-600 group-hover:text-white' : 'text-neutral-400 group-hover:text-black'
                            }`}>02</span>
                            <div className={`h-px w-16 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-24' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-24'
                            }`}></div>
                        </div>
                        
                        <div className="text-center">
                            <h3 className={`text-xl font-black tracking-tight mb-4 uppercase ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>Design</h3>
                            <p className={`text-sm font-light leading-relaxed mb-3 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>Structure that supports better decisions.</p>
                            <p className={`text-xs font-light leading-relaxed mb-4 ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'
                            }`}>Once the issues are clear, I design financial structures that support leadership decision making rather than reporting for its own sake.</p>
                            <div className={`text-left space-y-2 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>
                                <div className={`p-3 border rounded-lg ${
                                    theme === 'dark' 
                                        ? 'border-neutral-700 bg-neutral-900/50' 
                                        : 'border-neutral-300 bg-neutral-50/50'
                                }`}>
                                    <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">This stage focuses on</p>
                                    <ul className="space-y-1 text-xs font-light">
                                        <li>• Building clear, relevant performance metrics</li>
                                        <li>• Creating decision frameworks for recurring and high-stakes choices</li>
                                        <li>• Aligning financial information directly with strategic priorities</li>
                                    </ul>
                                </div>
                                <p className="text-xs font-light mt-3 text-center">The result is a system that makes tradeoffs visible and decisions easier.</p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="group cursor-default zoom-in relative" style={{ transitionDelay: '400ms' }}>
                        {/* Number with dramatic lines */}
                        <div className="flex items-center justify-center mb-8">
                            <div className={`h-px w-16 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-24' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-24'
                            }`}></div>
                            <span className={`mx-6 text-4xl md:text-5xl font-light transition-all duration-700 ${
                                theme === 'dark' ? 'text-neutral-600 group-hover:text-white' : 'text-neutral-400 group-hover:text-black'
                            }`}>03</span>
                            <div className={`h-px w-16 transition-all duration-700 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333] group-hover:w-24' : 'bg-neutral-300 group-hover:bg-[#ff3333] group-hover:w-24'
                            }`}></div>
                        </div>
                        
                        <div className="text-center">
                            <h3 className={`text-xl font-black tracking-tight mb-4 uppercase ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>Advise</h3>
                            <p className={`text-sm font-light leading-relaxed mb-3 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>Executive-level partnership.</p>
                            <p className={`text-xs font-light leading-relaxed mb-4 ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'
                            }`}>I work alongside leadership as an ongoing thought partner, providing perspective as conditions change and decisions evolve.</p>
                            <div className={`text-left space-y-2 ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>
                                <div className={`p-3 border rounded-lg ${
                                    theme === 'dark' 
                                        ? 'border-neutral-700 bg-neutral-900/50' 
                                        : 'border-neutral-300 bg-neutral-50/50'
                                }`}>
                                    <p className="text-xs font-black uppercase tracking-[0.3em] mb-2">This stage focuses on</p>
                                    <ul className="space-y-1 text-xs font-light">
                                        <li>• Ongoing advisory and strategic support</li>
                                        <li>• Executive-level discussions grounded in data and judgment</li>
                                        <li>• Clear, actionable recommendations rather than volume or noise</li>
                                    </ul>
                                </div>
                                <p className="text-xs font-light mt-3 text-center">The objective is consistency, confidence, and discipline at the leadership level.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Vogue-style footer note */}
                <div className={`mt-16 pt-8 border-t text-center fade-up ${
                    theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                }`}>
                    <p className={`text-xs font-light leading-relaxed tracking-wide ${
                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                    }`}>This work is best suited for leadership teams who are open to scrutiny, value direct conversation, and are willing to act on insight.</p>
                    <div className="mt-6">
                        <a 
                            href="#contact" 
                            className={`inline-flex items-center gap-2 group transition-all duration-500 ${
                                theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-black'
                            }`}
                        >
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Explore a Working Relationship</span>
                            <Icon icon="solar:arrow-right-linear" className="transition-transform duration-500 group-hover:translate-x-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
