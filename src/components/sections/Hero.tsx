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
    // variant: 'base' = white text on mobile (black bg), black text on desktop (white bg)
    // variant: 'reveal' = white text on blue background (cursor reveal)
    const renderHeroContent = (variant: 'base' | 'reveal') => {
        const isReveal = variant === 'reveal';
        const textPrimary = isReveal ? 'text-white' : 'text-white md:text-black/95';
        const textSecondary = isReveal ? 'text-white/80' : 'text-white/85 md:text-black/65';
        const textMuted = isReveal ? 'text-white/60' : 'text-white/70 md:text-black/45';
        const textCaption = isReveal ? 'text-white/70' : 'text-white/75 md:text-black/55';
        const lineBg = isReveal ? 'bg-white/30' : 'bg-white/25 md:bg-black/20';
        const scrollLineBg = isReveal ? 'bg-white/70' : 'bg-white/80 md:bg-black/55';
        const borderColor = isReveal ? 'border-white/20' : 'border-white/15 md:border-black/12';
        const cornerBorder = isReveal ? 'border-white/15' : 'border-white/12 md:border-black/10';
        const zaColor = isReveal ? 'text-white' : 'text-white md:text-[#0066CC]';
        const hoverText = isReveal ? 'text-white/60 hover:text-white/90' : 'text-white/70 hover:text-white/95 md:text-black/45 md:hover:text-black/75';
        const discoverText = isReveal ? 'text-white/60' : 'text-white/70 md:text-black/45';

        return (
            <>
                {/* Hero Content Layer */}
                <div 
                    className="relative min-h-[100svh] md:min-h-screen lg:min-h-[110vh] flex flex-col justify-between pointer-events-none"
                >

                    {/* Middle - Split Layout: Left | Aireeza (center) | Right */}
                    <div className="flex-1 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

                        {/* Left Column - StoryBrand Hero Content (desktop) */}
                        <div className={`hidden md:flex flex-col gap-5 lg:gap-6 max-w-[260px] lg:max-w-[320px] xl:max-w-[360px] hero-stagger-3 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            {/* Eyebrow */}
                            <div className="hero-stagger-1">
                                <p className={`text-[0.6rem] lg:text-[0.65rem] font-light uppercase tracking-[0.2em] ${isReveal ? 'text-white/85' : 'text-[#0066CC]'} leading-[1.5]`}>
                                    For founders who have built real revenue — and can't figure out why it's not enough
                                </p>
                            </div>
                            
                            {/* Headline */}
                            <div 
                                ref={!isReveal ? titleRef : undefined}
                                className="hero-stagger-2"
                            >
                                <h1 className="relative">
                                    <div 
                                        className={`font-bold tracking-tight ${textPrimary}`}
                                        style={{ 
                                            fontSize: 'clamp(1.15rem, 3.2vw, 2.1rem)', 
                                            lineHeight: '1.25',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        I design profit systems <span className={`${isReveal ? 'text-white/65' : 'text-neutral-500'} italic font-normal`}>that protect what founders build.</span>
                                    </div>
                                </h1>
                            </div>
                            
                            {/* Body copy */}
                            <div className="hero-stagger-3">
                                <p className={`text-[0.78rem] lg:text-[0.82rem] leading-[1.75] ${textSecondary} max-w-[250px] lg:max-w-[280px]`}>
                                    Most founder-led businesses have figured out how to generate revenue but have never built the structure to protect it. I sit inside the business and build what was never built: the financial architecture, client system, and team infrastructure that turns revenue into profit you actually keep.
                                </p>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className={`hero-stagger-4 flex flex-col gap-2.5`}>
                                <a 
                                    href="/assessment"
                                    className={`inline-block text-[0.68rem] lg:text-[0.7rem] uppercase tracking-[0.12em] py-2.5 lg:py-3 px-5 lg:px-6 text-center transition-all duration-300 pointer-events-auto font-light ${
                                        isReveal 
                                            ? 'bg-white text-black hover:bg-neutral-100 hover:shadow-lg' 
                                            : 'bg-black text-white hover:bg-neutral-800 hover:shadow-lg'
                                    }`}
                                >
                                    Take the free assessment →
                                </a>
                                <a 
                                    href="/services"
                                    className={`inline-block text-[0.68rem] lg:text-[0.7rem] uppercase tracking-[0.12em] py-2.5 lg:py-3 px-5 lg:px-6 text-center transition-all duration-300 pointer-events-auto border font-light ${
                                        isReveal 
                                            ? 'border-white/35 text-white hover:bg-white/15 hover:border-white/50' 
                                            : 'border-black/35 text-black hover:bg-black/8 hover:border-black/45'
                                    }`}
                                >
                                    Work with me
                                </a>
                                <p className={`text-[0.58rem] lg:text-[0.6rem] ${isReveal ? 'text-white/50' : 'text-neutral-400'} mt-0.5`}>
                                    15 minutes · Free · No sign-up to start
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-3 mt-2">
                                <div className="hero-scroll-line-container">
                                    <div className={`w-px h-10 lg:h-12 overflow-hidden ${lineBg}`}>
                                        <div className={`w-full hero-scroll-line ${scrollLineBg}`} />
                                    </div>
                                </div>
                                <span className={`text-[0.58rem] lg:text-[0.6rem] font-light uppercase tracking-[0.22em] ${textMuted}`}>
                                    Scroll to explore
                                </span>
                            </div>
                        </div>

                        {/* Center - Mobile-only layout */}
                        <div 
                            ref={!isReveal ? titleRef : undefined}
                            className="w-full flex flex-col items-center justify-center text-center relative md:hidden px-4 sm:px-6"
                        >
                            {/* Mobile Eyebrow */}
                            <div className={`hero-stagger-1 ${isLoaded ? 'hero-animate-in' : 'opacity-0'} max-w-[90vw] sm:max-w-[85vw]`}>
                                <p className={`text-[0.58rem] sm:text-[0.62rem] font-light uppercase tracking-[0.22em] ${isReveal ? 'text-white/85' : 'text-white'} leading-[1.5] text-center`}>
                                    For founders who have built real revenue — and can't figure out why it's not enough
                                </p>
                            </div>
                            
                            {/* Mobile Headline */}
                            <div className={`hero-stagger-2 ${isLoaded ? 'hero-animate-in' : 'opacity-0'} mt-5 sm:mt-6`}>
                                <h1 className="relative">
                                    <div 
                                        className={`font-bold tracking-tight ${textPrimary}`}
                                        style={{ 
                                            fontSize: 'clamp(1.5rem, 7.5vw, 2.4rem)', 
                                            lineHeight: '1.3',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        I design profit systems <span className={`${isReveal ? 'text-white/65' : 'text-white/70'} italic font-normal`}>that protect what founders build.</span>
                                    </div>
                                </h1>
                            </div>

                            {/* Mobile Body Copy */}
                            <div className={`hero-stagger-3 ${isLoaded ? 'hero-animate-in' : 'opacity-0'} mt-5 sm:mt-6 max-w-[85vw] sm:max-w-[75vw]`}>
                                <p className={`text-[0.8rem] sm:text-[0.85rem] leading-[1.7] ${textSecondary}`}>
                                    Most founder-led businesses have figured out how to generate revenue but have never built the structure to protect it. I sit inside the business and build what was never built: the financial architecture, client system, and team infrastructure that turns revenue into profit you actually keep.
                                </p>
                            </div>
                            
                            {/* Mobile CTA Buttons */}
                            <div className={`hero-stagger-4 ${isLoaded ? 'hero-animate-in' : 'opacity-0'} mt-7 sm:mt-8 w-full max-w-[300px] sm:max-w-[320px] space-y-2.5`}>
                                <a 
                                    href="/assessment"
                                    className={`block w-full text-[0.7rem] sm:text-[0.72rem] uppercase tracking-[0.12em] py-3 sm:py-3.5 px-5 text-center transition-all duration-300 pointer-events-auto font-light active:scale-95 ${
                                        isReveal 
                                            ? 'bg-white text-black hover:bg-neutral-100' 
                                            : 'bg-white text-black hover:bg-neutral-100'
                                    }`}
                                >
                                    Take the free assessment →
                                </a>
                                <a 
                                    href="/services"
                                    className={`block w-full text-[0.7rem] sm:text-[0.72rem] uppercase tracking-[0.12em] py-3 sm:py-3.5 px-5 text-center transition-all duration-300 pointer-events-auto border font-light active:scale-95 ${
                                        isReveal 
                                            ? 'border-white/40 text-white hover:bg-white/15 hover:border-white/60' 
                                            : 'border-white/40 text-white hover:bg-white/15 hover:border-white/60'
                                    }`}
                                >
                                    Work with me
                                </a>
                                <p className={`text-[0.6rem] sm:text-[0.62rem] ${isReveal ? 'text-white/60' : 'text-white/60'} text-center mt-1.5`}>
                                    15 minutes · Free · No sign-up to start
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Aireeza Identity (desktop) */}
                        <div className={`hidden md:flex flex-col gap-6 lg:gap-8 hero-stagger-4 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            {/* Content Blocks with margin */}
                            <div className="flex flex-col gap-6 lg:gap-8 mr-6 lg:mr-12 xl:mr-16">
                                {/* Aireeza Name */}
                                <div className="flex flex-col items-center mr-40 lg:mr-60">
                                    <h2 
                                        className={`font-majesty font-normal ${textPrimary}`}
                                        style={{ 
                                            fontSize: 'clamp(2.8rem, 4.5vw, 4.2rem)', 
                                            lineHeight: '0.9',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        Airee<span className={zaColor}>za</span>
                                    </h2>
                                    <p className={`text-[0.7rem] lg:text-sm font-light tracking-wider ${textSecondary} mt-2.5 text-center`}>
                                        Profit & Performance Advisor
                                    </p>
                                </div>
                                
                                                            </div>
                            
                            {/* Vertical Fashion Caption */}
                            <div className={`text-[0.68rem] lg:text-xs font-normal uppercase tracking-[0.25em] ${textCaption} writing-mode-vertical`}>
                                Analysis • Performance • Decisions
                            </div>
                        </div>
                        
                        
                    </div>

                                    </div>

                {/* Hero Footer - Bottom Bar */}
                <div className={`absolute bottom-0 left-0 right-0 pb-5 sm:pb-6 md:pb-10 lg:pb-12 px-4 sm:px-6 md:px-8 lg:px-12 hero-stagger-5 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                    <div className={`flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pt-4 sm:pt-5 md:pt-6 border-t ${borderColor}`}>
                        {/* Mobile - Scroll indicator with improved spacing */}
                        <div className="flex md:hidden items-center gap-3">
                            <div className="hero-scroll-line-container">
                                <div className={`w-px h-10 sm:h-12 overflow-hidden ${lineBg}`}>
                                    <div className={`w-full hero-scroll-line ${scrollLineBg}`} />
                                </div>
                            </div>
                            <span className={`text-[0.58rem] sm:text-[0.6rem] font-black uppercase tracking-[0.25em] ${textMuted}`}>
                                Scroll to explore
                            </span>
                        </div>

                        {/* Desktop - Left label */}
                        <div className={`hidden md:block text-[0.68rem] lg:text-xs font-black uppercase tracking-[0.28em] lg:tracking-[0.3em] ${textMuted}`}>
                            Founder of Alt Business & BrightCEO
                        </div>

                        {/* Discover CTA - Touch-optimized */}
                        <a 
                            href="#the-problem"
                            className={`flex items-center gap-2 group cursor-pointer pointer-events-auto ${hoverText} transition-all duration-300 py-2.5 sm:py-2 px-2 sm:px-1 -mx-2 sm:-mx-1 touch-manipulation active:scale-95`}
                        >
                            <span className={`text-[0.65rem] sm:text-[0.68rem] md:text-xs font-black uppercase tracking-[0.25em] md:tracking-[0.3em] ${discoverText}`}>
                                Discover
                            </span>
                            <Icon icon="solar:arrow-down-linear" className="text-base sm:text-lg md:text-xl group-hover:translate-y-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>

                {/* Decorative corner elements - Responsive sizing */}
                <div className={`absolute top-16 sm:top-20 md:top-24 lg:top-28 left-3 sm:left-4 md:left-8 lg:left-12 w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 border-l border-t pointer-events-none hero-stagger-6 ${isLoaded ? 'hero-animate-in' : 'opacity-0'} ${cornerBorder}`} />
                <div className={`absolute top-16 sm:top-20 md:top-24 lg:top-28 right-3 sm:right-4 md:right-8 lg:right-12 w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 border-r border-t pointer-events-none hero-stagger-6 ${isLoaded ? 'hero-animate-in' : 'opacity-0'} ${cornerBorder}`} />
                <div className={`absolute bottom-0 left-0 right-0 pb-6 md:pb-12 px-4 md:px-8 lg:px-12 hero-stagger-5 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                    <div className={`flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 pt-4 md:pt-6 border-t ${borderColor}`}>
                        {/* Mobile - Scroll indicator with improved spacing */}
                        <div className="flex md:hidden items-center gap-3">
                            <div className="hero-scroll-line-container">
                                <div className={`w-px h-10 overflow-hidden ${lineBg}`}>
                                    <div className={`w-full hero-scroll-line ${scrollLineBg}`} />
                                </div>
                            </div>
                            <span className={`text-[0.6rem] font-black uppercase tracking-[0.25em] ${textMuted}`}>
                                Scroll to explore
                            </span>
                        </div>

                        {/* Desktop - Left label */}
                        <div className={`hidden md:block text-xs font-black uppercase tracking-[0.3em] ${textMuted}`}>
                            Founder of Alt Business & BrightCEO
                        </div>

                        {/* Discover CTA - Touch-optimized */}
                        <a 
                            href="#the-problem"
                            className={`flex items-center gap-2 group cursor-pointer pointer-events-auto ${hoverText} transition-colors duration-300 py-2 px-1 -mx-1 touch-manipulation`}
                        >
                            <span className={`text-[0.65rem] md:text-xs font-black uppercase tracking-[0.25em] md:tracking-[0.3em] ${discoverText}`}>
                                Discover
                            </span>
                            <Icon icon="solar:arrow-down-linear" className="text-base md:text-lg group-hover:translate-y-1 transition-transform duration-300" />
                        </a>
                    </div>
                </div>

                {/* Decorative corner elements - Adjusted for mobile */}
                <div className={`absolute top-20 md:top-28 left-4 md:left-12 w-12 md:w-16 h-12 md:h-16 border-l border-t pointer-events-none hero-stagger-6 ${cornerBorder}`} />
                <div className={`absolute top-20 md:top-28 right-4 md:right-12 w-12 md:w-16 h-12 md:h-16 border-r border-t pointer-events-none hero-stagger-6 ${cornerBorder}`} />
            </>
        );
    };

    return (
        <>
            {/* Hero Section - Full Viewport, landonorris.com inspired */}
            <header 
                id="hero" 
                ref={heroRef}
                className="relative min-h-[100svh] md:min-h-screen lg:min-h-[110vh] overflow-hidden bg-black md:bg-white cursor-none touch-pan-y"
            >
                {/* Three.js Dual Image Overlay - Full Background */}
                <div 
                    ref={overlayContainerRef}
                    className="absolute inset-0 z-0 hero-overlay-container"
                >
                    <CursorRevealMask 
                        image1="/initial-bg-concept.webp" 
                        image2="/hovered-bg-concept.webp"
                        bgColor1="#ffffff"
                        bgColor2="#0066CC"
                    />
                </div>

                {/* Base text layer - black text on white background */}
                <div className="absolute inset-0 z-10">
                    {renderHeroContent('base')}
                </div>

                {/* Reveal text layer - white text, masked to sync with red background */}
                <div 
                    className="absolute inset-0 z-20"
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
