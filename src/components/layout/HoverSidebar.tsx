'use client';

import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useVanillaScroll } from "@/hooks/useVanillaScroll";

export default function HoverSidebar() {
    const { scrollToElement } = useVanillaScroll();
    const [isVisible, setIsVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (e.clientX <= 20) { // 20px from left edge
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                setIsVisible(true);
                document.body.style.marginLeft = '320px';
            } else if (e.clientX > 320) { // Outside sidebar area
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
                setIsVisible(false);
                document.body.style.marginLeft = '0px';
            }
        };

        const handleMouseLeave = () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            setIsVisible(false);
            document.body.style.marginLeft = '0px';
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.body.style.marginLeft = '0px';
        };
    }, [timeoutId]);

    const scrollToSection = (sectionId: string) => {
        scrollToElement(sectionId, 'smooth');
    };

    return (
        <>
            {/* Sidebar */}
            <aside
                id="hover-sidebar"
                className={`fixed left-0 top-0 h-full w-80 z-[60] transform transition-all duration-200 ease-out overflow-hidden ${
                    isVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div 
                    className="h-full relative overflow-y-auto overflow-x-hidden vanilla-scroll bg-white/95 backdrop-blur-xl border-r border-neutral-200"
                    data-vanilla-scroll="true"
                >
                    <div className="p-12 h-full flex flex-col relative z-10">
                        {/* Vogue-style Header */}
                        <div className="mb-16">
                            <div className="space-y-1">
                                <span className="font-majesty font-normal text-black" style={{ fontSize: '2rem', lineHeight: '1' }}>
                            Airee<span style={{ color: '#ff3333' }}>za</span>
                        </span>
                            </div>
                            <div className="mt-8 text-xs font-normal uppercase tracking-widest opacity-60 text-neutral-500">
                                Strategic Finance Advisory
                            </div>
                        </div>

                        {/* Vogue-style Navigation - Viewport Based */}
                        <nav className="space-y-6 mb-8">
                            <button
                                onClick={() => scrollToSection('#hero')}
                                className="group w-full text-left transition-all duration-500 text-neutral-400 hover:text-black"
                            >
                                <div className="text-xs font-black uppercase tracking-[0.3em] leading-[1.2]">
                                    HOME
                                </div>
                                <div className="mt-1 h-px w-full transition-all duration-500 bg-neutral-200 group-hover:bg-black" />
                            </button>

                            <button
                                onClick={() => scrollToSection('#about')}
                                className="group w-full text-left transition-all duration-500 text-neutral-400 hover:text-black"
                            >
                                <div className="text-xs font-black uppercase tracking-[0.3em] leading-[1.2]">
                                    ABOUT
                                </div>
                                <div className="mt-1 h-px w-full transition-all duration-500 bg-neutral-200 group-hover:bg-black" />
                            </button>

                            <button
                                onClick={() => scrollToSection('#what-i-do')}
                                className="group w-full text-left transition-all duration-500 text-neutral-400 hover:text-black"
                            >
                                <div className="text-xs font-black uppercase tracking-[0.3em] leading-[1.2]">
                                    WHAT I DO
                                </div>
                                <div className="mt-1 h-px w-full transition-all duration-500 bg-neutral-200 group-hover:bg-black" />
                            </button>

                            <button
                                onClick={() => scrollToSection('#how-i-work')}
                                className="group w-full text-left transition-all duration-500 text-neutral-400 hover:text-black"
                            >
                                <div className="text-xs font-black uppercase tracking-[0.3em] leading-[1.2]">
                                    HOW I WORK
                                </div>
                                <div className="mt-1 h-px w-full transition-all duration-500 bg-neutral-200 group-hover:bg-black" />
                            </button>

                            <button
                                onClick={() => scrollToSection('#point-of-view')}
                                className="group w-full text-left transition-all duration-500 text-neutral-400 hover:text-black"
                            >
                                <div className="text-xs font-black uppercase tracking-[0.3em] leading-[1.2]">
                                    POINT OF VIEW
                                </div>
                                <div className="mt-1 h-px w-full transition-all duration-500 bg-neutral-200 group-hover:bg-black" />
                            </button>

                            <button
                                onClick={() => scrollToSection('#who-i-work-with')}
                                className="group w-full text-left transition-all duration-500 text-neutral-400 hover:text-black"
                            >
                                <div className="text-xs font-black uppercase tracking-[0.3em] leading-[1.2]">
                                    WHO I WORK WITH
                                </div>
                                <div className="mt-1 h-px w-full transition-all duration-500 bg-neutral-200 group-hover:bg-black" />
                            </button>

                            <button
                                onClick={() => scrollToSection('#lets-talk')}
                                className="group w-full text-left transition-all duration-500 text-neutral-400 hover:text-black"
                            >
                                <div className="text-xs font-black uppercase tracking-[0.3em] leading-[1.2]">
                                    LET'S TALK
                                </div>
                                <div className="mt-1 h-px w-full transition-all duration-500 bg-neutral-200 group-hover:bg-black" />
                            </button>
                        </nav>

                        {/* Vogue-style Professional Info */}
                        <div className="border-t pt-8 mb-8 border-neutral-200">
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-1 h-1 rounded-full bg-green-600" />
                                    <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-600">
                                        Available
                                    </span>
                                </div>
                                
                                <div className="space-y-1 text-xs font-light leading-relaxed text-neutral-500">
                                    <div>Certified Management Accountant</div>
                                    <div>Strategic Finance & Performance</div>
                                    <div>Zamboanga City, Philippines</div>
                                </div>
                            </div>
                        </div>

                        {/* Vogue-style Footer */}
                        <div className="border-t pt-8 mt-auto space-y-6 border-neutral-200">
                            {/* Tagline */}
                            <div className="text-center">
                                <p className="text-xs font-light leading-relaxed tracking-wide text-neutral-600">
                                    Founders moving from intuition to structure
                                </p>
                            </div>
                            
                            {/* Contact Actions */}
                            <div className="space-y-4">
                                <a
                                    href="#lets-talk"
                                    className="block w-full text-center py-3 px-4 border transition-all duration-500 text-xs font-black uppercase tracking-[0.3em] border-black/20 hover:bg-black hover:text-white text-black/80 hover:border-black"
                                >
                                    Start Conversation
                                </a>
                                
                                <div className="flex justify-center gap-4">
                                    <a
                                        href="mailto:contact@example.com"
                                        className="p-2 rounded-full transition-all duration-500 text-xs font-light uppercase tracking-wider hover:bg-neutral-100 text-neutral-400 hover:text-black"
                                    >
                                        EMAIL
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-full transition-all duration-500 text-xs font-light uppercase tracking-wider hover:bg-neutral-100 text-neutral-400 hover:text-black"
                                    >
                                        LINKEDIN
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
