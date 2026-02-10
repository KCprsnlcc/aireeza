'use client';

import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isSticky, setIsSticky] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    // Close mobile menu on scroll
    useEffect(() => {
        if (mobileMenuOpen) {
            const handleScroll = () => setMobileMenuOpen(false);
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, [mobileMenuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    if (!mounted) {
        return (
            <nav className="w-full px-4 md:px-6 py-4 md:py-6 flex justify-between items-center text-xs font-normal uppercase tracking-wide border-b backdrop-blur-sm bg-white/80 border-black/10 text-black">
                <div className="hidden md:block md:w-1/3">EST. 2024</div>
                <div className="flex md:w-1/3 md:justify-center">
                    <Icon icon="solar:infinity-linear" width="20" height="20" className="md:w-6 md:h-6" />
                </div>
                <div className="flex md:w-1/3 md:justify-end items-center gap-4">
                    <a 
                        href="#contact" 
                        className="hidden md:block border border-black/30 rounded-full px-6 py-2"
                    >
                        Start Conversation
                    </a>
                    <button className="md:hidden p-2">
                        <Icon icon="solar:hamburger-menu-linear" width="24" height="24" />
                    </button>
                </div>
            </nav>
        );
    }

    return (
        <>
            {/* Vertical Progress Bar - Only visible on hero section, hidden on mobile */}
            <AnimatePresence mode="wait">
                {!isSticky && (
                    <motion.div 
                        key="progress-bar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="hidden md:block fixed left-0 top-0 bottom-0 z-50 w-1"
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
                <NavbarContent 
                    mobileMenuOpen={mobileMenuOpen} 
                    setMobileMenuOpen={setMobileMenuOpen}
                    isSticky={false}
                />
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
                        <NavbarContent 
                            mobileMenuOpen={mobileMenuOpen} 
                            setMobileMenuOpen={setMobileMenuOpen}
                            isSticky={true}
                        />
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <MobileMenu 
                isOpen={mobileMenuOpen} 
                onClose={() => setMobileMenuOpen(false)} 
            />
        </>
    );
}

interface NavbarContentProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    isSticky: boolean;
}

function NavbarContent({ mobileMenuOpen, setMobileMenuOpen, isSticky }: NavbarContentProps) {
    const { theme } = useTheme();

    return (
        <div className={`w-full px-4 md:px-6 py-4 md:py-6 flex justify-between items-center text-xs font-normal uppercase tracking-wide border-b backdrop-blur-sm ${
            theme === 'dark' 
                ? 'mix-blend-difference border-white/10 text-white bg-transparent' 
                : 'bg-white/80 border-black/10 text-black'
        }`}>
            {/* Left - EST. 2024 (hidden on mobile) */}
            <div className="hidden md:block md:w-1/3">EST. 2024</div>
            
            {/* Center - Logo */}
            <div className="flex md:w-1/3 md:justify-center">
                <a href="#hero" className="flex items-center">
                    <Icon icon="solar:infinity-linear" width="20" height="20" className="md:w-6 md:h-6" />
                </a>
            </div>
            
            {/* Right - CTA + Menu */}
            <div className="flex md:w-1/3 md:justify-end items-center gap-3 md:gap-4">
                {/* Desktop CTA */}
                <a 
                    href="#contact" 
                    className={`hidden md:block border rounded-full px-6 py-2 transition-all duration-300 touch-manipulation ${
                        theme === 'dark'
                            ? 'border-white/30 hover:bg-white hover:text-black'
                            : 'border-black/30 hover:bg-black hover:text-white'
                    }`}
                >
                    Start Conversation
                </a>

                {/* Mobile CTA - Compact */}
                <a 
                    href="#contact" 
                    className={`md:hidden text-[0.65rem] font-black tracking-wider px-3 py-2 border rounded-full transition-all duration-300 touch-manipulation ${
                        theme === 'dark'
                            ? 'border-white/30 text-white'
                            : 'border-black/30 text-black'
                    }`}
                >
                    Contact
                </a>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden p-2 -mr-2 touch-manipulation transition-transform duration-300 ${
                        mobileMenuOpen ? 'rotate-90' : ''
                    }`}
                    aria-label="Toggle menu"
                >
                    <Icon 
                        icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} 
                        width="24" 
                        height="24" 
                    />
                </button>
            </div>
        </div>
    );
}

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const { theme } = useTheme();

    const menuItems = [
        { label: 'Home', href: '#hero', icon: 'solar:home-2-linear' },
        { label: 'The Problem', href: '#the-problem', icon: 'solar:danger-circle-linear' },
        { label: 'What I Do', href: '#what-i-do', icon: 'solar:case-round-linear' },
        { label: 'Point of View', href: '#point-of-view', icon: 'solar:eye-linear' },
        { label: 'Let\'s Talk', href: '#contact', icon: 'solar:chat-round-dots-linear' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden"
                        onClick={onClose}
                    />

                    {/* Menu Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ 
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                        className={`fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm z-50 md:hidden ${
                            theme === 'dark' 
                                ? 'bg-black border-white/10' 
                                : 'bg-white border-black/10'
                        } border-l shadow-2xl`}
                    >
                        <div className="flex flex-col h-full">
                            {/* Menu Header */}
                            <div className={`flex justify-between items-center px-6 py-6 border-b ${
                                theme === 'dark' ? 'border-white/10' : 'border-black/10'
                            }`}>
                                <span className={`text-xs font-black uppercase tracking-wider ${
                                    theme === 'dark' ? 'text-white/70' : 'text-black/70'
                                }`}>
                                    Menu
                                </span>
                                <button 
                                    onClick={onClose}
                                    className="p-2 -mr-2 touch-manipulation"
                                    aria-label="Close menu"
                                >
                                    <Icon 
                                        icon="solar:close-circle-linear" 
                                        width="24" 
                                        height="24"
                                        className={theme === 'dark' ? 'text-white' : 'text-black'}
                                    />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <nav className="flex-1 px-6 py-8 overflow-y-auto">
                                <ul className="space-y-2">
                                    {menuItems.map((item, index) => (
                                        <motion.li
                                            key={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <a
                                                href={item.href}
                                                onClick={onClose}
                                                className={`flex items-center gap-4 px-4 py-4 rounded-lg transition-all duration-300 touch-manipulation ${
                                                    theme === 'dark'
                                                        ? 'text-white hover:bg-white/5 active:bg-white/10'
                                                        : 'text-black hover:bg-black/5 active:bg-black/10'
                                                }`}
                                            >
                                                <Icon icon={item.icon} width="24" height="24" />
                                                <span className="text-base font-light tracking-wide">
                                                    {item.label}
                                                </span>
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </nav>

                            {/* Menu Footer */}
                            <div className={`px-6 py-6 border-t ${
                                theme === 'dark' ? 'border-white/10' : 'border-black/10'
                            }`}>
                                <div className={`text-[0.65rem] font-light tracking-wider ${
                                    theme === 'dark' ? 'text-white/50' : 'text-black/50'
                                }`}>
                                    <p>EST. 2024</p>
                                    <p className="mt-1">Strategic & Financial Consulting</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
