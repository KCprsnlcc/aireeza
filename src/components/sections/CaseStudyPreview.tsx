'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const caseStudies = [
    {
        tag: '[Industry] — [Year]',
        title: '[Case study title that names the real problem, not the solution]',
        result: '[Key outcome]',
    },
    {
        tag: '[Industry] — [Year]',
        title: '[Case study title that names the real problem, not the solution]',
        result: '[Key outcome]',
    },
    {
        tag: '[Industry] — [Year]',
        title: '[Case study title that names the real problem, not the solution]',
        result: '[Key outcome]',
    },
];

export default function CaseStudyPreview() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative bg-white border-b border-neutral-200">
            {/* Section label */}
            <div className="px-6 md:px-8 lg:px-12 pt-12 pb-6">
                <div className={`flex items-center gap-3 opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-1' : ''}`}>
                    <span className="text-[0.65rem] font-light uppercase tracking-[0.2em] text-neutral-400">Selected work</span>
                    <div className="flex-1 h-px bg-neutral-200" />
                </div>
            </div>

            {/* Case study rows */}
            {caseStudies.map((study, i) => (
                <div
                    key={i}
                    className={`grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] items-center px-6 md:px-8 lg:px-12 py-6 transition-colors duration-150 hover:bg-neutral-50 ${i < caseStudies.length - 1 ? 'border-b border-neutral-200' : ''
                        } opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-2' : ''}`}
                >
                    <div className="text-[0.65rem] uppercase tracking-[0.12em] text-neutral-400 mb-2 md:mb-0">
                        {study.tag}
                    </div>
                    <div className="font-bold tracking-tight text-lg md:text-xl text-black/90 mb-2 md:mb-0">
                        {study.title}
                    </div>
                    <div className="text-[0.7rem] text-[#0066CC] md:text-right font-light">
                        {study.result}
                    </div>
                </div>
            ))}

            {/* See all link */}
            <div className="px-6 md:px-8 lg:px-12 py-4 border-t border-neutral-200">
                <Link
                    href="/work"
                    className="text-xs uppercase tracking-[0.1em] text-[#0066CC] hover:underline font-light"
                >
                    See all case studies →
                </Link>
            </div>
        </section>
    );
}
