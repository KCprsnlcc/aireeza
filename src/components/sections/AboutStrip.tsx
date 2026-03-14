'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AboutStrip() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative py-20 md:py-28 px-6 md:px-8 lg:px-12 bg-white border-b border-neutral-200">
            {/* Section label */}
            <div className={`flex items-center gap-3 mb-12 opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-1' : ''}`}>
                <span className="text-[0.65rem] font-light uppercase tracking-[0.2em] text-neutral-400">Who I am</span>
                <div className="flex-1 h-px bg-neutral-200" />
            </div>

            <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-2' : ''}`}>
                {/* Intro text — 2/3 */}
                <div className="lg:col-span-2">
                    <h2 className="font-bold tracking-tight text-3xl md:text-4xl lg:text-[2.5rem] leading-[1.25] text-black/90 mb-8">
                        I didn&rsquo;t study business.<br />
                        <em className="text-neutral-500 italic">I built one from nothing</em><br />
                        and learned the hard way.
                    </h2>
                    <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-5 max-w-2xl">
                        I&rsquo;ve been inside the chaos that most advisors only read about. The sleepless months, the margins that don&rsquo;t make sense, the feeling that you&rsquo;re working harder than ever and somehow falling further behind. I know what that feels like because I&rsquo;ve lived it.
                    </p>
                    <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-8 max-w-2xl">
                        What I do now is help founders like you find the leak, fix the structure, and build a business that&rsquo;s actually profitable on purpose. Not by accident, not occasionally. Consistently.
                    </p>
                    <Link
                        href="/about"
                        className="text-xs uppercase tracking-[0.1em] text-[#107f87] hover:underline font-light"
                    >
                        Read my full story →
                    </Link>
                </div>

                {/* Stats — 1/3 */}
                <div className="space-y-6">
                    <div className="border-l-2 border-[#107f87] pl-5">
                        <div className="font-bold tracking-tight text-3xl text-black/90">10+</div>
                        <div className="text-[0.65rem] uppercase tracking-[0.12em] text-neutral-500 mt-1">Years building businesses</div>
                    </div>
                    <div className="border-l-2 border-[#107f87] pl-5">
                        <div className="font-bold tracking-tight text-2xl text-black/90">Alt Business</div>
                        <div className="text-[0.65rem] uppercase tracking-[0.12em] text-neutral-500 mt-1">Founder</div>
                    </div>
                    <div className="border-l-2 border-[#107f87] pl-5">
                        <div className="font-bold tracking-tight text-2xl text-black/90">BrightCEO</div>
                        <div className="text-[0.65rem] uppercase tracking-[0.12em] text-neutral-500 mt-1">Founder</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
