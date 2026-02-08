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
                className="relative min-h-screen overflow-hidden bg-white"
            >
                {/* Three.js Dual Image Overlay - Full Background */}
                <div 
                    ref={overlayContainerRef}
                    className="absolute inset-0 z-0 hero-overlay-container"
                >
                    <ImageOverlay 
                        image1="/initial-bg-concept.png" 
                        image2="/hovered-bg-concept.png"
                        bgColor1="#ffffff"
                        bgColor2="#ff3333"
                        className="hero-threejs-canvas"
                    />
                </div>

                {/* Hero Content Layer */}
                <div 
                    className="relative z-10 min-h-screen flex flex-col justify-between pointer-events-none"
                >

                    {/* Middle - Split Layout: Left | Aireeza (center) | Right */}
                    <div className="flex-1 flex items-center relative">

                        {/* Left Column - Aireeza Title + Professional Expertise Block (desktop) */}
                        <div className={`hidden md:flex absolute left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-20 flex-col gap-8 max-w-[220px] lg:max-w-[280px] hero-stagger-3 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            {/* Aireeza Title */}
                            <div 
                                ref={titleRef}
                                className="hero-stagger-2"
                            >
                                <h1 className="relative">
                                    <span 
                                        className="font-majesty font-normal block text-black/90" 
                                        style={{ 
                                            fontSize: 'clamp(2rem, 6vw, 4.5rem)', 
                                            lineHeight: '0.85',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        Airee<span className="text-[#ff3333]">za</span>
                                    </span>
                                </h1>
                            </div>
                            
                            {/* Professional Expertise */}
                            <div>
                                <p className="text-sm md:text-base lg:text-lg font-light tracking-wide text-black/90 leading-[1.8]">
                                    PROFESSIONAL EXPERTISE<br/>
                                    <span className="text-xs md:text-sm lg:text-base font-light tracking-wider text-black/60">
                                        Certified expertise in strategic<br/>
                                        finance and business<br/>
                                        performance advisory.
                                    </span>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="hero-scroll-line-container">
                                    <div className="w-px h-12 overflow-hidden bg-black/20">
                                        <div className="w-full hero-scroll-line bg-black/50" />
                                    </div>
                                </div>
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-black/40">
                                    Scroll to explore
                                </span>
                            </div>
                        </div>

                        {/* Center - Mobile-only subtitle */}
                        <div 
                            ref={titleRef}
                            className="w-full flex flex-col items-center justify-center text-center relative md:hidden"
                        >
                            {/* Mobile Aireeza Title */}
                            <div className={`hero-stagger-2 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                                <h1 className="relative">
                                    <span 
                                        className="font-majesty font-normal block text-black/90" 
                                        style={{ 
                                            fontSize: 'clamp(3.5rem, 14vw, 12rem)', 
                                            lineHeight: '0.85',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        Airee<span className="text-[#ff3333]">za</span>
                                    </span>
                                </h1>
                            </div>

                            {/* Mobile-only subtitle */}
                            <div className={`mt-8 hero-stagger-3 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                                <div className="flex items-center gap-6">
                                    <span className="w-16 h-px bg-black/20" />
                                    <p className="text-lg font-black tracking-tight uppercase text-black/70 leading-[1.2]">
                                        Turn Financial Complexity Into Clarity
                                    </p>
                                    <span className="w-16 h-px bg-black/20" />
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Vertical Fashion Caption (desktop) */}
                        <div className={`hidden md:flex absolute right-6 md:right-12 lg:right-20 top-1/3 z-20 hero-stagger-4 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            <div className="text-xs font-normal uppercase tracking-widest text-black/50 writing-mode-vertical">
                                Analysis • Performance • Decisions
                            </div>
                        </div>
                        
                        
                    </div>

                    {/* Bottom Bar - Meta Info */}
                    <div 
                        className={`pb-8 md:pb-12 px-6 md:px-12 lg:px-20 hero-stagger-5 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}
                    >
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 pt-6 border-t border-black/10">
                            {/* Mobile - Scroll indicator only */}
                            <div className="flex md:hidden items-center gap-4">
                                <div className="hero-scroll-line-container">
                                    <div className="w-px h-12 overflow-hidden bg-black/20">
                                        <div className="w-full hero-scroll-line bg-black/50" />
                                    </div>
                                </div>
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-black/40">
                                    Scroll to explore
                                </span>
                            </div>

                            {/* Desktop - Left label */}
                            <div className="hidden md:block text-xs font-black uppercase tracking-[0.3em] text-black/40">
                                Strategic & Financial Consulting
                            </div>

                            {/* Right - Arrow down */}
                            <a 
                                href="#the-problem"
                                className="flex items-center gap-2 group cursor-pointer pointer-events-auto text-black/40 hover:text-black/70 transition-colors duration-300"
                            >
                                <span className="text-xs font-black uppercase tracking-[0.3em] text-black/40">
                                    Discover
                                </span>
                                <Icon icon="solar:arrow-down-linear" className="text-lg group-hover:translate-y-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-28 left-6 md:left-12 w-16 h-16 border-l border-t pointer-events-none hero-stagger-6 border-black/8" />
                <div className="absolute top-28 right-6 md:right-12 w-16 h-16 border-r border-t pointer-events-none hero-stagger-6 border-black/8" />
            </header>
        </>
    );
}
