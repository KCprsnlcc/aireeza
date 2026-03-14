'use client';

import { Icon } from "@iconify/react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';
import Link from "next/link";

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === '/';

    const [mounted, setMounted] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isSticky, setIsSticky] = useState(!isHomePage); // Always sticky on inner pages
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const rafRef = useRef<number | null>(null);
    const heroHeightRef = useRef<number>(0);

    useEffect(() => {
        setMounted(true);

        if (!isHomePage) {
            setIsSticky(true);
            return;
        }

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
    }, [isHomePage]);

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
                <div className="hidden md:flex md:w-1/3 gap-8 text-[0.65rem] text-neutral-500">
                    <span>About</span><span>Work</span><span>Writing</span><span>Speaking</span>
                </div>
                <div className="flex md:w-1/3 justify-start md:justify-center">
                    <Link href="/" className="font-majesty text-xl normal-case">Airee<span className="text-[#0d6f7c]">za</span></Link>
                </div>
                <div className="flex w-full md:w-1/3 justify-end items-center gap-4">
                    <Link
                        href="/services"
                        className="hidden md:block bg-black text-white px-4 py-2 text-[0.65rem] tracking-[0.1em]"
                    >
                        Work with me →
                    </Link>
                    <button className="md:hidden p-2">
                        <Icon icon="solar:hamburger-menu-linear" width="24" height="24" />
                    </button>
                </div>
            </nav>
        );
    }

    return (
        <>
            {/* Vertical Progress Bar - Only visible on hero section of homepage, hidden on mobile */}
            <AnimatePresence mode="wait">
                {isHomePage && !isSticky && (
                    <motion.div
                        key="progress-bar"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="hidden md:block fixed left-0 top-0 bottom-0 z-50 w-1"
                    >
                        <div className="relative w-full h-full bg-black/5">
                            <div
                                className="absolute top-0 left-0 right-0 bg-[#0d6f7c] will-change-transform"
                                style={{
                                    height: `${scrollProgress}%`,
                                    transition: 'height 0.1s cubic-bezier(0.33, 1, 0.68, 1)'
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Static Navbar on Hero - Always visible on homepage */}
            {isHomePage && (
                <nav className="relative w-full z-40">
                    <NavbarContent
                        mobileMenuOpen={mobileMenuOpen}
                        setMobileMenuOpen={setMobileMenuOpen}
                        isSticky={false}
                    />
                </nav>
            )}

            {/* Sticky Navbar with Animation - Only after hero section on homepage, always on inner pages */}
            <AnimatePresence mode="wait">
                {isSticky && (
                    <motion.nav
                        key="sticky-nav"
                        initial={isHomePage ? { y: -100, opacity: 0 } : { y: 0, opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            mass: 0.8
                        }}
                        className={`${isHomePage ? 'fixed' : 'sticky'} top-0 left-0 right-0 w-full z-40 shadow-sm`}
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
    return (
        <div className="w-full px-6 md:px-10 py-5 flex justify-between items-center text-xs font-normal uppercase tracking-wide border-b backdrop-blur-md bg-white/90 border-neutral-200 text-black">
            {/* Left - Logo */}
            <div className="flex w-1/2 md:w-1/4 justify-start">
                <Link href="/" className="font-majesty text-xl normal-case text-black/90">
                    Airee<span className="text-[#0d6f7c]">za</span>
                </Link>
            </div>

            {/* Center - Links (hidden on mobile) */}
            <div className="hidden md:flex md:w-2/4 justify-center gap-8 text-[0.65rem] tracking-[0.1em] text-neutral-500">
                <Link href="/about" className="hover:text-black transition-colors">About</Link>
                <Link href="/services" className="hover:text-black transition-colors">Work</Link>
                <Link href="/writing" className="hover:text-black transition-colors">Writing</Link>
                <Link href="/speaking" className="hover:text-black transition-colors">Speaking</Link>
                <Link href="/newsletter" className="hover:text-black transition-colors">Newsletter</Link>
            </div>

            {/* Right - CTA + Menu */}
            <div className="flex w-1/2 md:w-1/4 justify-end items-center gap-3 md:gap-4">
                {/* Desktop CTAs */}
                <Link
                    href="/assessment"
                    className="hidden md:block border border-black text-black px-4 py-2 text-[0.65rem] tracking-[0.1em] hover:bg-black hover:text-white transition-colors"
                >
                    Take the assessment
                </Link>
                <Link
                    href="/services"
                    className="hidden md:block bg-black text-white px-4 py-2 text-[0.65rem] tracking-[0.1em] hover:bg-neutral-800 transition-colors"
                >
                    Work with me →
                </Link>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`md:hidden p-2 -mr-2 touch-manipulation transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''
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
    const menuItems = [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Work', href: '/work' },
        { label: 'Writing', href: '/writing' },
        { label: 'Speaking', href: '/speaking' },
        { label: 'Newsletter', href: '/newsletter' },
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
                        className="fixed top-0 right-0 bottom-0 w-[85vw] max-w-sm z-50 md:hidden bg-white border-neutral-200 border-l shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            {/* Menu Header */}
                            <div className="flex justify-between items-center px-6 py-6 border-b border-neutral-200">
                                <span className="font-majesty text-xl normal-case text-black/90">
                                    Airee<span className="text-[#0d6f7c]">za</span>
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
                                        className="text-black"
                                    />
                                </button>
                            </div>

                            {/* Menu Items */}
                            <nav className="flex-1 px-6 py-8 overflow-y-auto w-full">
                                <ul className="flex flex-col gap-4">
                                    {menuItems.map((item, index) => (
                                        <motion.li
                                            key={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className="block text-sm uppercase tracking-[0.15em] py-3 text-neutral-500 hover:text-black transition-colors"
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.li>
                                    ))}
                                    <motion.li
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: menuItems.length * 0.05 }}
                                        className="mt-4 pt-4 border-t border-neutral-200"
                                    >
                                        <Link
                                            href="/assessment"
                                            onClick={onClose}
                                            className="inline-block text-[0.7rem] uppercase tracking-[0.1em] border border-black text-black py-3 px-6 font-light transition-colors hover:bg-black hover:text-white mb-3"
                                        >
                                            Take the assessment
                                        </Link>
                                        <Link
                                            href="/services"
                                            onClick={onClose}
                                            className="inline-block text-[0.7rem] uppercase tracking-[0.1em] bg-black text-white py-3 px-6 font-light transition-colors"
                                        >
                                            Work with me →
                                        </Link>
                                    </motion.li>
                                </ul>
                            </nav>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
