'use client';

export default function About() {
    return (
        <section id="about" className="py-16 border-b relative overflow-hidden border-neutral-200 bg-white">
            {/* Vogue-style background decoration */}
            <div className="absolute top-0 right-0 w-32 h-full opacity-5">
                <div className="text-6xl font-black tracking-tighter writing-mode-vertical">
                    ABOUT
                </div>
            </div>
            
            <div className="w-full px-6 relative z-10">
                {/* Vogue-style header */}
                <div className="flex justify-between items-center mb-12">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">05</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">/ ABOUT ME</span>
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">BACKGROUND</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Vogue-style text content */}
                    <div className="slide-in-left">
                        <div className="relative">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.7] mb-8 relative text-black">
                            INSTINCT
                            <span className="block text-3xl md:text-5xl lg:text-6xl font-light tracking-wider">
                                CLARITY
                            </span>
                        </h2>
                    </div>
                        
                        <div className="space-y-6 mb-12">
                            <p className="text-lg font-thin leading-relaxed tracking-wide text-neutral-700">
                                I work at the intersection of finance, performance, and decision-making. My role is to help founders move from instinct to clarity as their business grows more complex.
                            </p>
                            <p className="text-base font-light leading-relaxed tracking-normal text-neutral-600">
                                My background is in strategic finance and business performance, working alongside founders as businesses scale beyond intuition. I have built financial structures in fast-moving environments, supported growth decisions under pressure, and helped leaders make sense of tradeoffs as complexity increases.
                            </p>
                            <p className="text-base font-light leading-relaxed tracking-normal text-neutral-600">
                                My certifications exist to support disciplined analysis and structured thinking. They provide the technical grounding needed to evaluate scenarios, test assumptions, and challenge conclusions, but they are not the work itself.
                            </p>
                            <p className="text-base font-light leading-relaxed tracking-normal text-neutral-600">
                                What matters most is judgment. Knowing which numbers deserve attention, which questions need answering, and when simplicity leads to better decisions than precision.
                            </p>
                            <p className="text-base font-light leading-relaxed tracking-normal text-neutral-600">
                                My role is to help founders see clearly and act with confidence as the business evolves.
                            </p>
                            <p className="text-base font-light leading-relaxed tracking-normal text-neutral-600">
                                It is to help you see clearly and make confident decisions as the business evolves.
                            </p>
                        </div>
                        {/* Vogue-style quote */}
                        <div className="p-8 border-l-4 mb-12 relative border-neutral-300 bg-neutral-50">
                            <div className="absolute left-2 top-0 text-5xl font-black opacity-10 text-black">"</div>
                            <p className="text-sm font-light leading-relaxed italic tracking-wide text-neutral-600">
                                I do not publish client testimonials. Much of this work involves confidential financial decisions, and discretion is essential.
                            </p>
                        </div>

                        <a 
                            href="#point-of-view" 
                            className="inline-flex items-center gap-2 group transition-all duration-500 text-neutral-600 hover:text-black"
                        >
                            <span className="text-xs font-black uppercase tracking-[0.3em]">Read my Point of View</span>
                            <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                        </a>
                    </div>

                    {/* Vogue-style credentials */}
                    <div className="space-y-12 slide-in-right">
                        {/* Dramatic Vogue-style image with overlay text */}
                        <div className="aspect-[4/3] w-full duotone-red overflow-hidden relative vogue-reveal-diagonal">
                            <img 
                                src="/red-about.png" 
                                className="w-full h-full object-cover object-top transition-transform duration-[2s] hover:scale-105"
                                alt="Professional portrait"
                            />
                            
                            {/* Vogue-style Text Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="h-full w-full relative">
                                    {/* Top left fashion magazine style */}
                                    <div className="absolute top-6 left-6 hidden lg:block z-50">
                                        <div className="relative">
                                            <span className="font-majesty font-normal text-white" style={{ fontSize: '1.5rem', lineHeight: '1' }}>
                                                Aireeza
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Main fashion statement - dramatic positioning */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 text-center">
                                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.8] text-white">
                                            STRATEGIC<br />FINANCE<br />
                                            <span className="block text-3xl md:text-4xl lg:text-5xl font-light tracking-wider text-white/90">
                                                EXCELLENCE
                                            </span>
                                        </h2>
                                    </div>
                                    
                                    {/* Right side fashion caption */}
                                    <div className="absolute top-1/3 right-6 hidden lg:block">
                                        <div className="text-xs font-normal uppercase tracking-widest text-white/70 writing-mode-vertical">
                                            Analysis • Performance • Decisions
                                        </div>
                                    </div>
                                    
                                    {/* Bottom left fashion detail */}
                                    <div className="absolute bottom-6 left-6 hidden lg:block">
                                        <div className="text-xs font-light tracking-wide text-white/50">
                                            Professional Expertise
                                        </div>
                                        <div className="max-w-[180px] text-xs font-light leading-relaxed text-white/40 mt-2">
                                            Certified expertise in strategic finance and business performance advisory.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Education */}
                        <div className="fade-up">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-2 border-b border-neutral-200 text-black">Education</h3>
                            <ul className="space-y-3 text-neutral-600">
                                <li className="stagger-item">
                                    <div className="text-xs font-light tracking-wide">Bachelor's Degree in Management Accounting</div>
                                </li>
                                <li className="stagger-item">
                                    <div className="text-xs font-light tracking-wide">Bachelor's Degree in Accounting Technology</div>
                                </li>
                                <li className="stagger-item">
                                    <div className="text-xs font-light tracking-wide">Postgraduate Certificate in Business & Management Consulting</div>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Associations */}
                        <div className="fade-up">
                            <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-6 pb-2 border-b border-neutral-200 text-black">Professional Associations</h3>
                            <ul className="space-y-2 text-neutral-600">
                                <li className="stagger-item">
                                    <div className="text-xs font-light tracking-wide">Certified Management Accountant (CMA), Institute of Management Accountants</div>
                                </li>
                                <li className="stagger-item">
                                    <div className="text-xs font-light tracking-wide">Associate Member (ASA), CPA Australia</div>
                                </li>
                                <li className="stagger-item">
                                    <div className="text-xs font-light tracking-wide">Member, Business and Management Consultants Association of the Philippines (BMCAP)</div>
                                </li>
                                <li className="stagger-item">
                                    <div className="text-xs font-light tracking-wide">Member, Philippine Society for Talent Development (PSTD), Member</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
