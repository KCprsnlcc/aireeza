'use client';

import { useEffect, useState } from 'react';

interface InnerHeroProps {
    label: string;
    title: React.ReactNode;
    subtitle?: string;
}

export default function InnerHero({ label, title, subtitle }: InnerHeroProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="relative bg-neutral-50 border-b border-neutral-200 py-16 md:py-20 px-6 md:px-8 lg:px-12">
            <div className={`opacity-0 ${isLoaded ? 'hero-animate-in hero-stagger-1' : ''}`}>
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#0066CC] mb-4 font-light">{label}</div>
                <h1 className="font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-black/90">{title}</h1>
                {subtitle && (
                    <p className="text-[0.88rem] text-neutral-500 mt-5 max-w-xl leading-[1.7]">{subtitle}</p>
                )}
            </div>
        </section>
    );
}
