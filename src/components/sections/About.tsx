'use client';

import { useTheme } from "@/contexts/ThemeContext";

export default function About() {
    const { theme } = useTheme();

    return (
        <section id="about" className={`py-24 border-b ${
            theme === 'dark' ? 'border-neutral-900 bg-neutral-950/30' : 'border-neutral-200 bg-neutral-50'
        }`}>
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex justify-between items-center mb-16 fade-up">
                    <span className="text-xs text-neutral-500">05</span>
                    <span className="text-xs text-neutral-500">/ ABOUT ME</span>
                    <span className="text-xs text-neutral-500">BACKGROUND</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    {/* Text Content */}
                    <div className="slide-in-left">
                        <h2 className={`text-4xl md:text-6xl font-semibold uppercase tracking-tighter leading-none mb-8 ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                        }`}>
                            Instinct To<br />Clarity
                        </h2>
                        <p className={`text-lg leading-relaxed mb-8 ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                            I work at the intersection of finance, performance, and decision-making. My background is in strategic finance and business performance, working alongside founders as businesses scale beyond intuition.
                        </p>
                        <p className={`text-base leading-relaxed mb-12 ${
                            theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                        }`}>
                            My certifications exist to support disciplined analysis, but what matters most is judgment. Knowing which numbers deserve attention and when simplicity leads to better decisions than precision.
                        </p>
                        
                        <div className={`p-6 border italic text-sm mb-12 ${
                            theme === 'dark' 
                                ? 'border-neutral-800 bg-neutral-900/50 text-neutral-400' 
                                : 'border-neutral-200 bg-neutral-100 text-neutral-600'
                        }`}>
                            "I do not publish client testimonials. Much of this work involves confidential financial decisions, and discretion is essential."
                        </div>

                        <a 
                            href="#" 
                            className={`text-sm font-semibold uppercase underline underline-offset-4 transition-colors ${
                                theme === 'dark' 
                                    ? 'decoration-neutral-700 hover:text-neutral-300' 
                                    : 'decoration-neutral-300 hover:text-neutral-600'
                            }`}
                        >
                            Read my Point of View
                        </a>
                    </div>

                    {/* Credentials */}
                    <div className="space-y-12 slide-in-right">
                        {/* Image */}
                        <div className="aspect-[4/3] w-full overflow-hidden duotone-red mb-8 zoom-in">
                            <img 
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
                                className="w-full h-full object-cover"
                                alt="Professional portrait"
                            />
                        </div>
                        
                        <div className="fade-up">
                            <h3 className={`text-lg font-semibold uppercase tracking-widest mb-6 border-b pb-2 ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>Education</h3>
                            <ul className={`space-y-4 text-sm ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>
                                <li className="flex justify-between stagger-item">
                                    <span>Bachelor's in Management Accounting</span>
                                </li>
                                <li className="flex justify-between stagger-item">
                                    <span>Bachelor's in Accounting Technology</span>
                                </li>
                                <li className="flex justify-between stagger-item">
                                    <span>Postgrad Cert. Business Consulting</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="fade-up">
                            <h3 className={`text-lg font-semibold uppercase tracking-widest mb-6 border-b pb-2 ${
                                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                            }`}>Associations</h3>
                            <ul className={`space-y-4 text-sm ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>
                                <li className="stagger-item">Certified Management Accountant (CMA)</li>
                                <li className="stagger-item">Associate Member (ASA), CPA Australia</li>
                                <li className="stagger-item">Member, BMCAP</li>
                                <li className="stagger-item">Member, PSTD</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
