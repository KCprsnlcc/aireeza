'use client';

import { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";
import Link from 'next/link';

export default function Footer() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden transition-all duration-700 bg-white">
            {/* Decorative corner elements */}
            <div className="absolute top-8 left-6 md:left-12 w-16 h-16 border-l border-t pointer-events-none border-black/8 opacity-0 hero-animate-in hero-stagger-1" />
            <div className="absolute top-8 right-6 md:right-12 w-16 h-16 border-r border-t pointer-events-none border-black/8 opacity-0 hero-animate-in hero-stagger-1" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-12 md:gap-16 mb-20 md:mb-24 opacity-0 hero-animate-in hero-stagger-2">

                    {/* Left Column - Brand Info */}
                    <div className="text-left w-full max-w-sm">
                        <div className="flex flex-col gap-1 mb-4">
                            <span className="font-majesty font-normal text-black/90" style={{ fontSize: '1.5rem', lineHeight: '1' }}>
                                Airee<span style={{ color: '#0d6f7c' }}>za</span>
                            </span>
                        </div>  
                        <div className="flex flex-col gap-2">
                            <span className="text-[0.85rem] font-light text-black/90 leading-[1.4]">
                                Profit & Performance Advisor.
                            </span>
                            <p className="text-[0.78rem] text-neutral-500 leading-[1.6] max-w-xs">
                                Helping founder-led businesses get financially healthy, structurally sound, and built to actually last.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Links */}
                    <div className="grid grid-cols-2 gap-8 text-right md:text-left justify-self-end w-full md:w-auto">
                        <div>
                            <div className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400 mb-4 font-light text-right md:text-left">Navigation</div>
                            <ul className="space-y-2 text-right md:text-left">
                                <li><Link href="/about" className="text-[0.8rem] text-neutral-500 hover:text-black transition-colors block">About</Link></li>
                                <li><Link href="/services" className="text-[0.8rem] text-neutral-500 hover:text-black transition-colors block">Services</Link></li>
                                <li><Link href="/work" className="text-[0.8rem] text-neutral-500 hover:text-black transition-colors block">Work</Link></li>
                                <li><Link href="/writing" className="text-[0.8rem] text-neutral-500 hover:text-black transition-colors block">Writing</Link></li>
                                <li><Link href="/speaking" className="text-[0.8rem] text-neutral-500 hover:text-black transition-colors block">Speaking</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400 mb-4 font-light text-right md:text-left">Connect</div>
                            <ul className="space-y-2 text-right md:text-left">
                                <li><a href="#" className="text-[0.8rem] text-neutral-500 hover:text-black transition-colors block">LinkedIn</a></li>
                                <li><a href="#" className="text-[0.8rem] text-neutral-500 hover:text-black transition-colors block">Newsletter</a></li>
                                <li><Link href="/speaking" className="text-[0.8rem] text-neutral-500 hover:text-black transition-colors block">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t pt-12 md:pt-16 flex justify-between items-end relative overflow-hidden opacity-0 hero-animate-in hero-stagger-3 border-neutral-200">
                    <div className="text-left w-1/3">
                        <span className="text-[10px] font-light tracking-wide text-neutral-500">
                            &copy;2026 Aireeza Tandih
                        </span>
                    </div>

                    <div className="text-center w-1/3">
                        {/* Space preserved for layout balance */}
                    </div>

                    <div className="text-right w-1/3 flex justify-end">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={scrollToTop}
                                className="group text-[10px] flex items-center gap-2 transition-all duration-500 text-neutral-700 hover:text-black"
                            >
                                <span className="font-light tracking-wide">BACK TO TOP</span>
                                <Icon icon="solar:arrow-up-linear" className="transition-transform duration-500 group-hover:-translate-y-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom decorative elements */}
            <div className="absolute bottom-8 left-6 md:left-12 w-16 h-16 border-l border-b pointer-events-none border-black/8 opacity-0 hero-animate-in hero-stagger-4" />
            <div className="absolute bottom-8 right-6 md:right-12 w-16 h-16 border-r border-b pointer-events-none border-black/8 opacity-0 hero-animate-in hero-stagger-4" />
        </footer>
    );
}
