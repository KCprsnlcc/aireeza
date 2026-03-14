'use client';

import InnerHero from '@/components/sections/InnerHero';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const caseStudies = [
    {
        industry: '[Industry]',
        year: '[Year]',
        title: '[Title that names the problem, not the service. E.g. "A business that looked healthy and wasn\'t"]',
        situation: '[1 sentence: the situation before. What the founder was experiencing. Written from their perspective, not yours.]',
        outcome: '[Outcome metric or description]',
    },
    {
        industry: '[Industry]',
        year: '[Year]',
        title: '[Title that names the problem, not the service]',
        situation: '[1 sentence: the situation before.]',
        outcome: '[Outcome]',
    },
    {
        industry: '[Industry]',
        year: '[Year]',
        title: '[Title that names the problem, not the service]',
        situation: '[1 sentence: the situation before.]',
        outcome: '[Outcome]',
    },
];

const caseStructure = [
    { label: 'The situation', desc: "What the founder was dealing with. Honest, no jargon. Their words where possible." },
    { label: 'What we found', desc: "The diagnosis. What was actually broken vs. what they thought was broken." },
    { label: 'What we did', desc: "The work. Not a list of services. The actual decisions and changes made." },
    { label: 'What changed', desc: "The outcome. Numbers where possible. The founder's experience where numbers aren't enough." },
];

export default function WorkPage() {
    return (
        <>
            <InnerHero
                label="Work"
                title={<>Real businesses.<br />Real problems.<br /><em className="italic text-neutral-500">Real outcomes.</em></>}
                subtitle="These aren't tidy success stories. They're honest accounts of what was actually wrong and what it took to fix it. Names and some details changed at client request."
            />

            {/* Case study rows */}
            <section className="bg-white">
                {caseStudies.map((study, i) => (
                    <div
                        key={i}
                        className={`grid grid-cols-1 md:grid-cols-[140px_1fr_180px] gap-4 md:gap-8 items-center px-6 md:px-8 lg:px-12 py-8 transition-colors duration-150 hover:bg-neutral-50 ${i < caseStudies.length - 1 ? 'border-b border-neutral-200' : ''
                            }`}
                    >
                        <div>
                            <div className="text-[0.65rem] uppercase tracking-[0.12em] text-neutral-400">
                                <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono">{study.industry}</span>
                            </div>
                            <div className="text-[0.65rem] text-neutral-400 mt-1 font-mono">
                                <span className="text-amber-600 bg-amber-50 rounded px-1">{study.year}</span>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold tracking-tight text-xl md:text-2xl text-black/90 mb-2">
                                <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono text-base">{study.title}</span>
                            </h3>
                            <p className="text-[0.82rem] text-neutral-500 leading-[1.65] max-w-lg">
                                <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono text-[0.78rem]">{study.situation}</span>
                            </p>
                        </div>
                        <div className="md:text-right">
                            <div className="text-[0.7rem] text-[#0192af] font-light">
                                <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono">{study.outcome}</span>
                            </div>
                            <div className="text-[0.65rem] text-[#0192af] mt-2 font-light">Read case study →</div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Case study template */}
            <section className="bg-neutral-50 border-t border-neutral-200 px-6 md:px-8 lg:px-12 py-10">
                <div className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400 mb-6 font-light">Each case study inner page follows this structure:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {caseStructure.map((item) => (
                        <div key={item.label}>
                            <h4 className="text-sm font-medium text-black/90 mb-2">{item.label}</h4>
                            <p className="text-[0.78rem] text-neutral-500 leading-[1.7]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black text-white py-16 md:py-20 px-6 md:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-16 items-center">
                    <div>
                        <h2 className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white">
                            See your business<br />
                            <em className="italic text-white/50">in any of these?</em>
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/speaking"
                            className="text-[0.7rem] uppercase tracking-[0.1em] bg-white text-black py-3 px-6 text-center font-light hover:bg-neutral-100 transition-colors"
                        >
                            Let&rsquo;s talk →
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
