'use client';

import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";

export default function WhoIWorkWith() {
    const { theme } = useTheme();

    return (
        <section id="who-i-work-with" className={`py-16 border-b relative overflow-hidden ${
            theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
        }`}>
            {/* Vogue-style background decoration */}
            <div className="absolute top-0 right-0 w-32 h-full opacity-5">
                <div className="text-6xl font-black tracking-tighter writing-mode-vertical">
                    CLIENTELE
                </div>
            </div>
            
            <div className="w-full px-6 relative z-10">
                <div className="flex justify-between items-center mb-12 fade-up">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">04</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">/ CLIENTELE</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">FIT ASSESSMENT</span>
                </div>

                <p className={`text-center text-sm font-light leading-relaxed max-w-4xl mx-auto mb-16 tracking-normal ${ 
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                    I work best with leaders who view finance as a decision making tool, not a reporting function.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="slide-in-left">
                        <h2 className={`text-4xl md:text-5xl font-black tracking-tighter mb-8 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>I Typically Work With</h2>
                        <p className={`text-sm font-light leading-relaxed mb-6 ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>These engagements tend to involve ambiguity, tradeoffs, and a need for clear judgment.</p>
                        <ul className="space-y-4">
                            <li className={`flex items-start gap-3 pb-3 border-b stagger-item ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:check-circle-linear" className="text-lg mt-1 flex-shrink-0" />
                                <span className={`text-sm font-light leading-relaxed ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}>
                                    Founders of growing businesses who are moving from intuition to structure
                                </span>
                            </li>
                            <li className={`flex items-start gap-3 pb-3 border-b stagger-item ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:check-circle-linear" className="text-lg mt-1 flex-shrink-0" />
                                <span className={`text-sm font-light leading-relaxed ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}>
                                    Executives navigating scale, complexity, or transition
                                </span>
                            </li>
                            <li className={`flex items-start gap-3 pb-3 border-b stagger-item ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:check-circle-linear" className="text-lg mt-1 flex-shrink-0" />
                                <span className={`text-sm font-light leading-relaxed ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}>
                                    Leadership teams preparing for investment, expansion, or restructuring
                                </span>
                            </li>
                            <li className={`flex items-start gap-3 stagger-item ${
                                theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                            }`}>
                                <Icon icon="solar:check-circle-linear" className="text-lg mt-1 flex-shrink-0" />
                                <span className={`text-sm font-light leading-relaxed ${
                                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                                }`}>
                                    Organizations where financial decisions carry real strategic consequences
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="slide-in-right">
                        <h2 className={`text-4xl md:text-5xl font-black tracking-tighter mb-8 ${
                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                        }`}>I Am Not A Fit For</h2>
                        <p className={`text-sm font-light leading-relaxed mb-6 ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>These engagements typically require different expertise or are misaligned with my strategic approach.</p>
                        <ul className="space-y-4">
                            <li className={`flex items-start gap-3 pb-3 border-b ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:close-circle-linear" className="text-lg mt-1 flex-shrink-0 text-neutral-600" />
                                <span className="text-sm font-light leading-relaxed text-neutral-500">
                                    Bookkeeping or transactional accounting needs
                                </span>
                            </li>
                            <li className={`flex items-start gap-3 pb-3 border-b ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:close-circle-linear" className="text-lg mt-1 flex-shrink-0 text-neutral-600" />
                                <span className="text-sm font-light leading-relaxed text-neutral-500">
                                    Teams seeking task execution without decision ownership
                                </span>
                            </li>
                            <li className={`flex items-start gap-3 pb-3 border-b ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:close-circle-linear" className="text-lg mt-1 flex-shrink-0 text-neutral-600" />
                                <span className="text-sm font-light leading-relaxed text-neutral-500">
                                    Organizations looking for short term fixes without long term discipline
                                </span>
                            </li>
                            <li className={`flex items-start gap-3 ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                            }`}>
                                <Icon icon="solar:close-circle-linear" className="text-lg mt-1 flex-shrink-0 text-neutral-600" />
                                <span className="text-sm font-light leading-relaxed text-neutral-500">
                                    Engagements where financial insight is collected but not acted upon
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className={`mt-16 pt-8 border-t text-center fade-up ${
                    theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                }`}>
                    <p className={`text-sm font-light leading-relaxed tracking-wide mb-4 ${
                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                    }`}>This work requires openness, accountability, and a willingness to engage with the numbers honestly.</p>
                    <p className={`text-sm font-light leading-relaxed tracking-wide mb-6 ${
                        theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
                    }`}>If that resonates, the next step is a focused conversation to determine fit.</p>
                    <div className="mt-6">
                        <a 
                            href="#contact" 
                            className={`inline-flex items-center gap-2 group transition-all duration-500 ${
                                theme === 'dark' ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-black'
                            }`}
                        >
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Discuss Your Next Decision</span>
                            <Icon icon="solar:arrow-right-linear" className="transition-transform duration-500 group-hover:translate-x-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
