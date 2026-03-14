'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const services = [
    {
        num: '01',
        title: 'Profit Advisory',
        body: 'Ongoing advisory for founders who need more than a bookkeeper. We look at what your business actually earns, where it leaks, and how to make it financially deliberate.',
    },
    {
        num: '02',
        title: 'Performance Systems',
        body: "If your business depends entirely on you showing up every day, it isn't a business yet. We build the rhythms and structures that make it run with you, not because of you.",
    },
    {
        num: '03',
        title: 'Structural Clarity',
        body: "A deep look at how your business is actually built, not how you think it's built. Most founders are surprised by what we find. All of them are relieved by what we fix.",
    },
];

export default function ServicesPreview() {
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
                    <span className="text-[0.65rem] font-light uppercase tracking-[0.2em] text-neutral-400">How I help</span>
                    <div className="flex-1 h-px bg-neutral-200" />
                </div>
            </div>

            {/* 3-col grid */}
            <div className={`grid grid-cols-1 md:grid-cols-3 opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-2' : ''}`}>
                {services.map((service, i) => (
                    <div
                        key={service.num}
                        className={`p-8 border-b border-neutral-200 ${i < services.length - 1 ? 'md:border-r' : ''}`}
                    >
                        <div className="text-[0.65rem] text-[#0192af] mb-4 font-light">{service.num}</div>
                        <h3 className="font-bold tracking-tight text-xl text-black/90 mb-3">{service.title}</h3>
                        <p className="text-[0.82rem] leading-[1.7] text-neutral-500">{service.body}</p>
                        <Link
                            href="/services"
                            className="text-xs uppercase tracking-[0.1em] text-[#0192af] hover:underline mt-5 inline-block font-light"
                        >
                            Explore →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
