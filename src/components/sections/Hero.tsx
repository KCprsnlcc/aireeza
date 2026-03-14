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
    // Mobile: always white text
    const renderHeroContent = (variant: 'base' | 'reveal') => {
        const isReveal = variant === 'reveal';
        const textPrimary = isReveal ? 'text-white' : 'text-white md:text-black/90';
        const textSecondary = isReveal ? 'text-white/70' : 'text-white/80 md:text-black/60';
        const textMuted = isReveal ? 'text-white/50' : 'text-white/60 md:text-black/40';
        const textCaption = isReveal ? 'text-white/60' : 'text-white/70 md:text-black/50';
        const textSubtitle = isReveal ? 'text-white/80' : 'text-white/90 md:text-black/70';
        const lineBg = isReveal ? 'bg-white/30' : 'bg-white/20 md:bg-black/20';
        const scrollLineBg = isReveal ? 'bg-white/60' : 'bg-white/70 md:bg-black/50';
        const borderColor = isReveal ? 'border-white/15' : 'border-white/10 md:border-black/10';
        const cornerBorder = isReveal ? 'border-white/10' : 'border-white/8 md:border-black/8';
        const zaColor = isReveal ? 'text-white' : 'text-[#0192af]';
        const hoverText = isReveal ? 'text-white/50 hover:text-white/80' : 'text-white/60 hover:text-white/90 md:text-black/40 md:hover:text-black/70';
        const discoverText = isReveal ? 'text-white/50' : 'text-white/60 md:text-black/40';

        return (
            <>
                {/* Hero Content Layer */}
                <div 
                    className="relative min-h-screen flex flex-col justify-between pointer-events-none"
                >

                    {/* Middle - Split Layout: Left | Aireeza (center) | Right */}
                    <div className="flex-1 flex items-center justify-between px-6 md:px-8 lg:px-12">

                        {/* Left Column - StoryBrand Hero Content (desktop) */}
                        <div className={`hidden md:flex flex-col gap-6 max-w-[280px] lg:max-w-[320px] hero-stagger-3 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            {/* Eyebrow */}
                            <div className="hero-stagger-1">
                                <p className={`text-[0.65rem] font-light uppercase tracking-[0.2em] ${isReveal ? 'text-white/80' : 'text-[#0192af]'} leading-[1.4]`}>
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
                                            fontSize: 'clamp(1.2rem, 3.5vw, 2rem)', 
                                            lineHeight: '1.2',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        You've figured out<br/>how to make money.<br/>
                                        <span className={`${isReveal ? 'text-white/60' : 'text-neutral-500'} italic`}>
                                            Nobody taught you<br/>how to keep it.
                                        </span>
                                    </div>
                                </h1>
                            </div>
                            
                            {/* Body copy */}
                            <div className="hero-stagger-3">
                                <p className={`text-[0.82rem] leading-[1.7] ${textSecondary} max-w-[260px]`}>
                                    Most founder-led businesses have figured out how to generate revenue but have never built the structure to protect it. I sit inside the business and build what was never built: the financial architecture, client system, and team infrastructure that turns revenue into profit you actually keep.
                                </p>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className={`hero-stagger-4 flex flex-col gap-2`}>
                                <a 
                                    href="/assessment"
                                    className={`inline-block text-[0.7rem] uppercase tracking-[0.1em] py-2.5 px-5 text-center transition-colors pointer-events-auto font-light ${
                                        isReveal 
                                            ? 'bg-white text-black hover:bg-neutral-200' 
                                            : 'bg-black text-white hover:bg-neutral-800'
                                    }`}
                                >
                                    Take the free assessment →
                                </a>
                                <a 
                                    href="/services"
                                    className={`inline-block text-[0.7rem] uppercase tracking-[0.1em] py-2.5 px-5 text-center transition-colors pointer-events-auto border font-light ${
                                        isReveal 
                                            ? 'border-white/30 text-white hover:bg-white/10' 
                                            : 'border-black/30 text-black hover:bg-black/5'
                                    }`}
                                >
                                    Work with me
                                </a>
                                <p className={`text-[0.6rem] text-neutral-400 mt-1`}>
                                    15 minutes · Free · No sign-up to start
                                </p>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <div className="hero-scroll-line-container">
                                    <div className={`w-px h-10 overflow-hidden ${lineBg}`}>
                                        <div className={`w-full hero-scroll-line ${scrollLineBg}`} />
                                    </div>
                                </div>
                                <span className={`text-[0.6rem] font-light uppercase tracking-[0.2em] ${textMuted}`}>
                                    Scroll to explore
                                </span>
                            </div>
                        </div>

                        {/* Center - Mobile-only layout */}
                        <div 
                            ref={!isReveal ? titleRef : undefined}
                            className="w-full flex flex-col items-center justify-center text-center relative md:hidden px-4"
                        >
                            {/* Mobile Eyebrow */}
                            <div className={`hero-stagger-1 ${isLoaded ? 'hero-animate-in' : 'opacity-0'} max-w-[85vw]`}>
                                <p className={`text-[0.6rem] font-light uppercase tracking-[0.2em] ${isReveal ? 'text-white/80' : 'text-[#0192af]'} leading-[1.4] text-center`}>
                                    For founders who have built real revenue — and can't figure out why it's not enough
                                </p>
                            </div>
                            
                            {/* Mobile Headline */}
                            <div className={`hero-stagger-2 ${isLoaded ? 'hero-animate-in' : 'opacity-0'} mt-4`}>
                                <h1 className="relative">
                                    <div 
                                        className={`font-bold tracking-tight ${textPrimary}`}
                                        style={{ 
                                            fontSize: 'clamp(1.4rem, 8vw, 2.2rem)', 
                                            lineHeight: '1.25',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        You've figured out<br/>how to make money.<br/>
                                        <span className={`${isReveal ? 'text-white/60' : 'text-neutral-500'} italic`}>
                                            Nobody taught you<br/>how to keep it.
                                        </span>
                                    </div>
                                </h1>
                            </div>

                            {/* Mobile Body Copy */}
                            <div className={`hero-stagger-3 ${isLoaded ? 'hero-animate-in' : 'opacity-0'} mt-4 max-w-[80vw]`}>
                                <p className={`text-[0.75rem] leading-[1.65] ${textSecondary}`}>
                                    Most founder-led businesses have figured out how to generate revenue but have never built the structure to protect it. I sit inside the business and build what was never built: the financial architecture, client system, and team infrastructure that turns revenue into profit you actually keep.
                                </p>
                            </div>
                            
                            {/* Mobile CTA Buttons */}
                            <div className={`hero-stagger-4 ${isLoaded ? 'hero-animate-in' : 'opacity-0'} mt-6 w-full max-w-[280px] space-y-2`}>
                                <a 
                                    href="/assessment"
                                    className={`block w-full text-[0.7rem] uppercase tracking-[0.1em] py-2.5 px-5 text-center transition-colors pointer-events-auto font-light ${
                                        isReveal 
                                            ? 'bg-white text-black hover:bg-neutral-200' 
                                            : 'bg-black text-white hover:bg-neutral-800'
                                    }`}
                                >
                                    Take the free assessment →
                                </a>
                                <a 
                                    href="/services"
                                    className={`block w-full text-[0.7rem] uppercase tracking-[0.1em] py-2.5 px-5 text-center transition-colors pointer-events-auto border font-light ${
                                        isReveal 
                                            ? 'border-white/30 text-white hover:bg-white/10' 
                                            : 'border-black/30 text-black hover:bg-black/5'
                                    }`}
                                >
                                    Work with me
                                </a>
                                <p className={`text-[0.6rem] text-neutral-400 text-center mt-1`}>
                                    15 minutes · Free · No sign-up to start
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Aireeza Identity (desktop) */}
                        <div className={`hidden md:flex flex-col gap-6 hero-stagger-4 ${isLoaded ? 'hero-animate-in' : 'opacity-0'}`}>
                            {/* Content Blocks with margin */}
                            <div className="flex flex-col gap-6 mr-6 lg:mr-12">
                                {/* Aireeza Name */}
                                <div className="flex flex-col items-center mr-60">
                                    <h2 
                                        className={`font-majesty font-normal ${textPrimary}`}
                                        style={{ 
                                            fontSize: 'clamp(3rem, 5vw, 4rem)', 
                                            lineHeight: '0.85',
                                            letterSpacing: '-0.02em'
                                        }}
                                    >
                                        Airee<span className={zaColor}>za</span>
                                    </h2>
                                    <p className={`text-xs md:text-sm font-light tracking-wider ${textSecondary} mt-2 text-center`}>
                                        Profit & Performance Advisor
                                    </p>
                                </div>
                                
                                                            </div>
                            
                            {/* Vertical Fashion Caption */}
                            <div className={`text-xs font-normal uppercase tracking-widest ${textCaption} writing-mode-vertical`}>
                                Analysis • Performance • Decisions
                            </div>
                        </div>
                        
                        
                    </div>

                                    </div>

                {/* Hero Footer - Bottom Bar */}
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
                className="relative min-h-screen md:min-h-[110vh] overflow-hidden bg-black md:bg-white cursor-none touch-pan-y"
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
                        bgColor2="#0192af"
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
