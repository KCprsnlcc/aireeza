'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Icon } from "@iconify/react";

const CursorRevealMask = dynamic(() => import('@/components/three/CursorRevealMask'), { ssr: false });

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

    // Render hero content with dynamic text colors
    // variant: 'base' = black text on white bg | 'reveal' = white text on red bg
    const renderHeroContent = (variant: 'base' | 'reveal') => {
        const isReveal = variant === 'reveal';
        const textPrimary = isReveal ? 'text-white' : 'text-black/90';
        const textSecondary = isReveal ? 'text-white/70' : 'text-black/60';
        const textMuted = isReveal ? 'text-white/50' : 'text-black/40';
        const textCaption = isReveal ? 'text-white/60' : 'text-black/50';
        const textSubtitle = isReveal ? 'text-white/80' : 'text-black/70';
        const lineBg = isReveal ? 'bg-white/30' : 'bg-black/20';
        const scrollLineBg = isReveal ? 'bg-white/60' : 'bg-black/50';
        const borderColor = isReveal ? 'border-white/15' : 'border-black/10';
        const cornerBorder = isReveal ? 'border-white/10' : 'border-black/8';
        const zaColor = isReveal ? 'text-white' : 'text-[#ff3333]';
        const hoverText = isReveal ? 'text-white/50 hover:text-white/80' : 'text-black/40 hover:text-black/70';
        const discoverText = isReveal ? 'text-white/50' : 'text-black/40';

        return (
            <>
                {/* Hero Content Layer */}
                <div 
                    className="relative min-h-screen flex flex-col justify-between pointer-events-none"
                >

                    {/* Middle - Split Layout: Left | Aireeza (center) | Right */}
                    <div className="flex-1 flex items-center relative">

                        {/* Left Column - Aireeza Title + Professional Expertise Block (desktop) */}
                        <div className={`hidden md:flex absolute left-6 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 z-20 flex-col gap-8 max-w-[220px] lg:max-w-[280px] hero-stagger-3 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            {/* Aireeza Title */}
                            <div 
                                ref={!isReveal ? titleRef : undefined}
                                className="hero-stagger-2"
                            >
                                <h1 className="relative">
                                    <span 
                                        className={`font-majesty font-normal block ${textPrimary}`}
                                        style={{ 
                                            fontSize: 'clamp(2rem, 6vw, 4.5rem)', 
                                            lineHeight: '0.85',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        Airee<span className={zaColor}>za</span>
                                    </span>
                                </h1>
                            </div>
                            
                            {/* Professional Expertise */}
                            <div>
                                <p className={`text-sm md:text-base lg:text-lg font-light tracking-wide ${textPrimary} leading-[1.8]`}>
                                    PROFESSIONAL EXPERTISE<br/>
                                    <span className={`text-xs md:text-sm lg:text-base font-light tracking-wider ${textSecondary}`}>
                                        Certified expertise in strategic<br/>
                                        finance and business<br/>
                                        performance advisory.
                                    </span>
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="hero-scroll-line-container">
                                    <div className={`w-px h-12 overflow-hidden ${lineBg}`}>
                                        <div className={`w-full hero-scroll-line ${scrollLineBg}`} />
                                    </div>
                                </div>
                                <span className={`text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>
                                    Scroll to explore
                                </span>
                            </div>
                        </div>

                        {/* Center - Mobile-only subtitle */}
                        <div 
                            ref={!isReveal ? titleRef : undefined}
                            className="w-full flex flex-col items-center justify-center text-center relative md:hidden"
                        >
                            {/* Mobile Aireeza Title */}
                            <div className={`hero-stagger-2 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                                <h1 className="relative">
                                    <span 
                                        className={`font-majesty font-normal block ${textPrimary}`}
                                        style={{ 
                                            fontSize: 'clamp(3.5rem, 14vw, 12rem)', 
                                            lineHeight: '0.85',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        Airee<span className={zaColor}>za</span>
                                    </span>
                                </h1>
                            </div>

                            {/* Mobile-only subtitle */}
                            <div className={`mt-8 hero-stagger-3 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                                <div className="flex items-center gap-6">
                                    <span className={`w-16 h-px ${lineBg}`} />
                                    <p className={`text-lg font-black tracking-tight uppercase ${textSubtitle} leading-[1.2]`}>
                                        Turn Financial Complexity Into Clarity
                                    </p>
                                    <span className={`w-16 h-px ${lineBg}`} />
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Vertical Fashion Caption (desktop) */}
                        <div className={`hidden md:flex absolute right-6 md:right-12 lg:right-20 top-1/3 z-20 hero-stagger-4 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            <div className={`text-xs font-normal uppercase tracking-widest ${textCaption} writing-mode-vertical`}>
                                Analysis • Performance • Decisions
                            </div>
                        </div>
                        
                        
                    </div>

                    {/* Bottom Bar - Meta Info */}
                    <div 
                        className={`pb-8 md:pb-12 px-6 md:px-12 lg:px-20 hero-stagger-5 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}
                    >
                        <div className={`flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 pt-6 border-t ${borderColor}`}>
                            {/* Mobile - Scroll indicator only */}
                            <div className="flex md:hidden items-center gap-4">
                                <div className="hero-scroll-line-container">
                                    <div className={`w-px h-12 overflow-hidden ${lineBg}`}>
                                        <div className={`w-full hero-scroll-line ${scrollLineBg}`} />
                                    </div>
                                </div>
                                <span className={`text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>
                                    Scroll to explore
                                </span>
                            </div>

                            {/* Desktop - Left label */}
                            <div className={`hidden md:block text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>
                                Strategic & Financial Consulting
                            </div>

                            {/* Right - Arrow down */}
                            <a 
                                href="#the-problem"
                                className={`flex items-center gap-2 group cursor-pointer pointer-events-auto ${hoverText} transition-colors duration-300`}
                            >
                                <span className={`text-xs font-black uppercase tracking-[0.3em] ${discoverText}`}>
                                    Discover
                                </span>
                                <Icon icon="solar:arrow-down-linear" className="text-lg group-hover:translate-y-1 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Decorative corner elements */}
                <div className={`absolute top-28 left-6 md:left-12 w-16 h-16 border-l border-t pointer-events-none hero-stagger-6 ${cornerBorder}`} />
                <div className={`absolute top-28 right-6 md:right-12 w-16 h-16 border-r border-t pointer-events-none hero-stagger-6 ${cornerBorder}`} />
            </>
        );
    };

    return (
        <>
            {/* Hero Section - Full Viewport, landonorris.com inspired */}
            <header 
                id="hero" 
                ref={heroRef}
                className="relative min-h-screen overflow-hidden bg-white pt-20 lg:pt-24 cursor-none"
            >
                {/* Three.js Dual Image Overlay - Full Background */}
                <div 
                    ref={overlayContainerRef}
                    className="absolute inset-0 z-0 hero-overlay-container"
                >
                    <CursorRevealMask 
                        image1="/initial-bg-concept.png" 
                        image2="/hovered-bg-concept.png"
                        bgColor1="#ffffff"
                        bgColor2="#ff3333"
                    />
                </div>

                {/* Base text layer - black text on white background */}
                <div className="absolute inset-0 z-10 pt-20 lg:pt-24">
                    {renderHeroContent('base')}
                </div>

                {/* Reveal text layer - white text, masked to sync with red background */}
                <div 
                    className="absolute inset-0 z-20 pt-20 lg:pt-24"
                    style={{
                        mask: 'url(#cursor-reveal-mask)',
                        WebkitMask: 'url(#cursor-reveal-mask)',
                    }}
                >
                    {renderHeroContent('reveal')}
                </div>
            </header>
        </>
    );
}
