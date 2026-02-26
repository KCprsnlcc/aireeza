'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CTABanner() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className={`bg-black text-white py-16 md:py-20 px-6 md:px-8 lg:px-12 opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-1' : ''}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-16 items-center">
                <div>
                    <h2 className="font-majesty text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white">
                        You already know<br />
                        <em className="italic text-white/50">something isn&rsquo;t right.</em>
                    </h2>
                    <p className="text-[0.85rem] text-white/55 mt-4 max-w-md leading-[1.65]">
                        Let&rsquo;s figure out what it is. No pitch, no pressure. Just a real conversation about where your business actually is.
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <Link
                        href="/services"
                        className="text-[0.7rem] uppercase tracking-[0.1em] bg-white text-black py-3 px-6 text-center font-light hover:bg-neutral-100 transition-colors"
                    >
                        Work with me
                    </Link>
                    <Link
                        href="/speaking"
                        className="text-[0.7rem] uppercase tracking-[0.1em] border border-white/30 text-white py-3 px-6 text-center font-light hover:border-white/60 transition-colors"
                    >
                        Book a conversation
                    </Link>
                </div>
            </div>
        </section>
    );
}
