'use client';

import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const rafRef = useRef<number | null>(null);
    const heroHeightRef = useRef<number>(0);

    useEffect(() => {
        setMounted(true);

        const heroSection = document.getElementById('hero');
        if (heroSection) {
            heroHeightRef.current = heroSection.offsetHeight;
        }

        const handleScroll = () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }

            rafRef.current = requestAnimationFrame(() => {
                const heroHeight = heroHeightRef.current;
                const scrollY = window.scrollY;
                
                // Calculate progress through hero section (0 to 100)
                const progress = Math.min((scrollY / heroHeight) * 100, 100);
                setScrollProgress(progress);
                
                // Show sticky navbar only after the entire hero section has scrolled past
                const shouldBeSticky = scrollY >= heroHeight;
                
                setIsSticky(shouldBeSticky);
            });
        };

        // Recalculate hero height on resize
        const handleResize = () => {
            const heroSection = document.getElementById('hero');
            if (heroSection) {
                heroHeightRef.current = heroSection.offsetHeight;
            }
        };

        handleScroll(); // Initial check
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleResize, { passive: true });
        
        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    if (!mounted) {
        return (
            <nav className="w-full px-6 py-6 flex justify-between items-center text-xs font-normal uppercase tracking-wide border-b backdrop-blur-sm bg-white/80 border-black/10 text-black">
                <div className="w-1/3">EST. 2024</div>
                <div className="w-1/3 flex justify-center">
                    <Icon icon="solar:infinity-linear" width="24" height="24" />
                </div>
                <div className="w-1/3 flex justify-end items-center gap-4">
                    <a 
                        href="#contact" 
                        className="border border-black/30 rounded-full px-6 py-2"
                    >
                        Start Conversation
                    </a>
                </div>
            </nav>
        );
    }

    return (
        <>
            {/* Vertical Progress Bar - Only visible on hero section */}
            <AnimatePresence mode="wait">
                {!isSticky && (
                    <motion.div 
                        key="progress-bar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed left-0 top-0 bottom-0 z-50 w-1"
                    >
                        <div className="relative w-full h-full bg-black/5 dark:bg-white/5">
                            <div 
                                className="absolute top-0 left-0 right-0 bg-[#ff3333] will-change-transform"
                                style={{ 
                                    height: `${scrollProgress}%`,
                                    transition: 'height 0.1s cubic-bezier(0.33, 1, 0.68, 1)'
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Static Navbar on Hero - Always visible */}
            <nav className="relative w-full z-40">
                <NavbarContent />
            </nav>

            {/* Sticky Navbar with Animation - Only after hero section */}
            <AnimatePresence mode="wait">
                {isSticky && (
                    <motion.nav 
                        key="sticky-nav"
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            mass: 0.8
                        }}
                        className="fixed top-0 left-0 right-0 w-full z-40 shadow-lg"
                    >
                        <NavbarContent />
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
}

function NavbarContent() {
    const { theme } = useTheme();

    return (
        <div className={`w-full px-6 py-6 flex justify-between items-center text-xs font-normal uppercase tracking-wide border-b backdrop-blur-sm ${
            theme === 'dark' 
                ? 'mix-blend-difference border-white/10 text-white bg-transparent' 
                : 'bg-white/80 border-black/10 text-black'
        }`}>
            <div className="w-1/3">EST. 2024</div>
            <div className="w-1/3 flex justify-center">
                <Icon icon="solar:infinity-linear" width="24" height="24" />
            </div>
            <div className="w-1/3 flex justify-end items-center gap-4">
                <a 
                    href="#contact" 
                    className={`border rounded-full px-6 py-2 transition-all duration-300 ${
                        theme === 'dark'
                            ? 'border-white/30 hover:bg-white hover:text-black'
                            : 'border-black/30 hover:bg-black hover:text-white'
                    }`}
                >
                    Start Conversation
                </a>
            </div>
        </div>
    );
}
