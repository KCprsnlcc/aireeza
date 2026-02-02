'use client';

import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";

export default function WhoIWorkWith() {
    const { theme } = useTheme();

    return (
        <section className={`py-24 border-b ${
            theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
        }`}>
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex justify-between items-center mb-12 fade-up">
                    <span className="text-xs text-neutral-500">04</span>
                    <span className="text-xs text-neutral-500">/ CLIENTELE</span>
                    <span className="text-xs text-neutral-500">FIT ASSESSMENT</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="fade-up">
                        <h2 className="text-5xl font-semibold uppercase tracking-tighter mb-12">Who I Work With</h2>
                        <ul className="space-y-6">
                            <li className={`flex items-center gap-4 border-b pb-4 ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:check-circle-linear" className="text-xl" />
                                <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}>
                                    Founders moving from intuition to structure.
                                </span>
                            </li>
                            <li className={`flex items-center gap-4 border-b pb-4 ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:check-circle-linear" className="text-xl" />
                                <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}>
                                    Executives navigating scale or complexity.
                                </span>
                            </li>
                            <li className={`flex items-center gap-4 border-b pb-4 ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:check-circle-linear" className="text-xl" />
                                <span className={theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'}>
                                    Teams preparing for investment or restructuring.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="fade-up" style={{ transitionDelay: '100ms' }}>
                        <h2 className="text-5xl font-semibold uppercase tracking-tighter mb-12 text-neutral-500">Not A Fit For</h2>
                        <ul className="space-y-6">
                            <li className={`flex items-center gap-4 border-b pb-4 ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:close-circle-linear" className="text-xl text-neutral-600" />
                                <span className="text-neutral-500">Bookkeeping or transactional accounting.</span>
                            </li>
                            <li className={`flex items-center gap-4 border-b pb-4 ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:close-circle-linear" className="text-xl text-neutral-600" />
                                <span className="text-neutral-500">Short term fixes without long term discipline.</span>
                            </li>
                            <li className={`flex items-center gap-4 border-b pb-4 ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>
                                <Icon icon="solar:close-circle-linear" className="text-xl text-neutral-600" />
                                <span className="text-neutral-500">Engagements where insight is not acted upon.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="mt-16 text-center fade-up">
                    <p className="text-xl font-light">This work requires openness, accountability, and honesty.</p>
                    <div className="mt-8">
                        <a 
                            href="#contact" 
                            className={`border px-8 py-3 rounded-full text-xs font-semibold transition-colors uppercase ${
                                theme === 'dark'
                                    ? 'border-neutral-700 hover:bg-white hover:text-black'
                                    : 'border-neutral-300 hover:bg-black hover:text-white'
                            }`}
                        >
                            Discuss Your Next Decision
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
