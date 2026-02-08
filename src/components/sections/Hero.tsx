'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Icon } from "@iconify/react";

const ImageOverlay = dynamic(() => import('@/components/three/ImageOverlay'), { ssr: false });

export default function Hero() {
    const heroRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);
    const overlayContainerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    


    useEffect(() => {
        // Trigger entrance animations
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => {
            clearTimeout(timer);
        };
    }, []);


    return (
        <>
            {/* Hero Section - Full Viewport, landonorris.com inspired */}
            <header 
                id="hero" 
                ref={heroRef}
                className="relative min-h-screen overflow-hidden bg-black"
            >
                {/* Three.js Dual Image Overlay - Full Background */}
                <div 
                    ref={overlayContainerRef}
                    className="absolute inset-0 z-0 hero-overlay-container"
                >
                    <ImageOverlay 
                        image1="/aireeza-initial.png" 
                        image2="/aireeza-hovered.png"
                        className="hero-threejs-canvas"
                    />
                </div>

                {/* Hero Content Layer */}
                <div 
                    className="relative z-10 min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-20 pointer-events-none"
                                    >
                    {/* Top Bar - Editorial Navigation Style */}
                    <div 
                        className={`flex justify-between items-center pt-28 md:pt-32 hero-stagger-1 ${
                            isLoaded ? 'hero-animate-in' : 'opacity-0'
                        }`}
                    >
                        <div className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                            Strategic Finance
                        </div>
                        <div className="hidden md:flex items-center gap-8 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                            <span>Financial Insight</span>
                            <span className="w-8 h-px bg-current" />
                            <span>Risk Management</span>
                            <span className="w-8 h-px bg-current" />
                            <span>Advisory</span>
                        </div>
                        <div className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                            Est. 2024
                        </div>
                    </div>

                    {/* Center - Giant Name + Tagline */}
                    <div 
                        ref={titleRef}
                        className="flex-1 flex flex-col items-center justify-center text-center relative"
                    >
                        {/* Main Brand Name */}
                        <div className={`hero-stagger-2 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            <h1 className="relative">
                                <span 
                                    className="font-majesty font-normal block text-white" 
                                    style={{ 
                                        fontSize: 'clamp(3.5rem, 15vw, 14rem)', 
                                        lineHeight: '0.85',
                                        letterSpacing: '-0.02em'
                                    }}
                                >
                                    Airee<span className="text-[#ff3333]">za</span>
                                </span>
                            </h1>
                        </div>

                        {/* Subtitle Line */}
                        <div className={`mt-6 md:mt-8 hero-stagger-3 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            <div className="flex items-center gap-4 md:gap-6">
                                <span className="w-12 md:w-20 h-px bg-white/30" />
                                <p className="text-sm md:text-base lg:text-lg font-light tracking-[0.3em] uppercase text-white/60">
                                    Turn Financial Complexity Into Clarity
                                </p>
                                <span className="w-12 md:w-20 h-px bg-white/30" />
                            </div>
                        </div>

                        {/* Hover instruction hint */}
                        <div className={`mt-10 hero-stagger-4 hidden md:block ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 border rounded-full text-[10px] uppercase tracking-[0.3em] font-medium cursor-default hero-pulse-border border-white/15 text-white/35 hover:border-white/30 hover:text-white/50 transition-all duration-500">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="hero-hover-icon">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                </svg>
                                Trace to reveal
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar - Meta Info */}
                    <div 
                        className={`pb-8 md:pb-12 hero-stagger-5 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 pt-6 border-t border-white/10">
                            {/* Left - Scroll indicator */}
                            <div className="flex items-center gap-3">
                                <div className="hero-scroll-line-container">
                                    <div className="w-px h-8 overflow-hidden bg-white/10">
                                        <div className="w-full hero-scroll-line bg-white/60" />
                                    </div>
                                </div>
                                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
                                    Scroll to explore
                                </span>
                            </div>

                            {/* Center - Service pills */}
                            <div className="flex items-center gap-3 md:gap-4">
                                {['Financial Insight', 'Risk Management', 'Strategic Advisory'].map((service, i) => (
                                    <span 
                                        key={service}
                                        className="text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border transition-all duration-300 cursor-default pointer-events-auto border-white/10 text-white/40 hover:border-[#ff3333]/40 hover:text-[#ff3333]/70"
                                        style={{ animationDelay: `${1.2 + i * 0.1}s` }}
                                    >
                                        {service}
                                    </span>
                                ))}
                            </div>

                            {/* Right - Arrow down */}
                            <a 
                                href="#the-problem"
                                className="flex items-center gap-2 group cursor-pointer pointer-events-auto text-white/40 hover:text-white/70 transition-colors duration-300"
                            >
                                <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
                                    Discover
                                </span>
                                <Icon icon="solar:arrow-down-linear" className="text-lg group-hover:translate-y-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-28 left-6 md:left-12 w-16 h-16 border-l border-t pointer-events-none hero-stagger-6 border-white/8" />
                <div className="absolute top-28 right-6 md:right-12 w-16 h-16 border-r border-t pointer-events-none hero-stagger-6 border-white/8" />
            </header>
        </>
    );
}
