'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const posts = [
    {
        date: 'Feb 2026',
        title: "The number your business actually runs on (it's not revenue)",
        tag: 'Profit Philosophy',
    },
    {
        date: 'Jan 2026',
        title: 'Why founders are the last to know when something is wrong',
        tag: 'Founder Empathy',
    },
    {
        date: 'Dec 2025',
        title: 'The year I nearly destroyed what I spent five years building',
        tag: 'Honest Journey',
    },
];

export default function WritingPreview() {
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
                    <span className="text-[0.65rem] font-light uppercase tracking-[0.2em] text-neutral-400">From the journal</span>
                    <div className="flex-1 h-px bg-neutral-200" />
                </div>
            </div>

            {/* Post rows */}
            <div className="px-6 md:px-8 lg:px-12">
                {posts.map((post, i) => (
                    <div
                        key={i}
                        className={`grid grid-cols-1 md:grid-cols-[80px_1fr_140px] gap-2 md:gap-8 items-baseline py-5 ${i < posts.length - 1 ? 'border-b border-neutral-200' : ''
                            } opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-2' : ''}`}
                    >
                        <div className="text-[0.65rem] text-neutral-400 font-light">{post.date}</div>
                        <div className="font-majesty text-base md:text-lg text-black/90">{post.title}</div>
                        <div className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-500 md:text-right font-light">
                            {post.tag}
                        </div>
                    </div>
                ))}
            </div>

            {/* Read all link */}
            <div className="px-6 md:px-8 lg:px-12 py-4 border-t border-neutral-200">
                <Link
                    href="/writing"
                    className="text-xs uppercase tracking-[0.1em] text-[#ff3333] hover:underline font-light"
                >
                    Read all writing →
                </Link>
            </div>
        </section>
    );
}
