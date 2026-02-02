'use client';

import { useTheme } from "@/contexts/ThemeContext";

export default function HowIWork() {
    const { theme } = useTheme();

    return (
        <section className={`py-24 border-b ${
            theme === 'dark' ? 'border-neutral-900 bg-neutral-950' : 'border-neutral-200 bg-neutral-50'
        }`}>
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex justify-between items-end mb-16 fade-up">
                    <span className="text-xs text-neutral-500">03</span>
                    <span className="text-xs text-neutral-500">/ APPROACH</span>
                    <span className="text-xs text-neutral-500">DELIBERATE & STRUCTURED</span>
                </div>

                <h2 className={`text-4xl md:text-6xl font-semibold tracking-tight text-center max-w-5xl mx-auto mb-6 leading-tight fade-up ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                    CLARITY OVER ACTIVITY.
                </h2>
                <p className={`text-center text-lg max-w-2xl mx-auto mb-24 font-normal fade-up ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                    I do not start with templates. I start by understanding how your business actually works.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {/* Step 1 */}
                    <div className="group cursor-default fade-up">
                        <div className="h-16 flex items-center justify-center gap-2 mb-6">
                            <div className={`w-px h-12 transition-colors duration-500 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333]' : 'bg-neutral-300 group-hover:bg-[#ff3333]'
                            }`}></div>
                            <span className={`text-4xl font-light transition-colors ${
                                theme === 'dark' ? 'text-neutral-700 group-hover:text-white' : 'text-neutral-300 group-hover:text-black'
                            }`}>01</span>
                            <div className={`w-px h-12 transition-colors duration-500 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333]' : 'bg-neutral-300 group-hover:bg-[#ff3333]'
                            }`}></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 uppercase tracking-tight">Diagnose</h3>
                        <p className={`text-sm leading-relaxed mb-2 ${
                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                        }`}>Clarity before action.</p>
                        <p className={`text-xs ${
                            theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'
                        }`}>Analyze business mechanics, profit leaks, and decision bottlenecks.</p>
                    </div>

                    {/* Step 2 */}
                    <div className="group cursor-default fade-up" style={{ transitionDelay: '100ms' }}>
                        <div className="h-16 flex items-center justify-center gap-2 mb-6">
                            <div className={`w-px h-12 transition-colors duration-500 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333]' : 'bg-neutral-300 group-hover:bg-[#ff3333]'
                            }`}></div>
                            <span className={`text-4xl font-light transition-colors ${
                                theme === 'dark' ? 'text-neutral-700 group-hover:text-white' : 'text-neutral-300 group-hover:text-black'
                            }`}>02</span>
                            <div className={`w-px h-12 transition-colors duration-500 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333]' : 'bg-neutral-300 group-hover:bg-[#ff3333]'
                            }`}></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 uppercase tracking-tight">Design</h3>
                        <p className={`text-sm leading-relaxed mb-2 ${
                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                        }`}>Structure for decisions.</p>
                        <p className={`text-xs ${
                            theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'
                        }`}>Build relevant metrics, decision frameworks, and strategic alignment.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="group cursor-default fade-up" style={{ transitionDelay: '200ms' }}>
                        <div className="h-16 flex items-center justify-center gap-2 mb-6">
                            <div className={`w-px h-12 transition-colors duration-500 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333]' : 'bg-neutral-300 group-hover:bg-[#ff3333]'
                            }`}></div>
                            <span className={`text-4xl font-light transition-colors ${
                                theme === 'dark' ? 'text-neutral-700 group-hover:text-white' : 'text-neutral-300 group-hover:text-black'
                            }`}>03</span>
                            <div className={`w-px h-12 transition-colors duration-500 ${
                                theme === 'dark' ? 'bg-neutral-800 group-hover:bg-[#ff3333]' : 'bg-neutral-300 group-hover:bg-[#ff3333]'
                            }`}></div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 uppercase tracking-tight">Advise</h3>
                        <p className={`text-sm leading-relaxed mb-2 ${
                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                        }`}>Executive partnership.</p>
                        <p className={`text-xs ${
                            theme === 'dark' ? 'text-neutral-600' : 'text-neutral-500'
                        }`}>Ongoing support, data-grounded discussions, and actionable recommendations.</p>
                    </div>
                </div>
                
                <div className={`mt-24 pt-12 border-t text-center fade-up ${
                    theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200'
                }`}>
                    <p className="text-neutral-500 text-sm">Best suited for leadership teams who are open to scrutiny and willing to act.</p>
                </div>
            </div>
        </section>
    );
}
