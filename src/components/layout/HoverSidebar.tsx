'use client';

import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";

export default function HoverSidebar() {
    const { theme } = useTheme();
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
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Sidebar */}
            <aside
                id="hover-sidebar"
                className={`fixed left-0 top-0 h-full w-80 z-[60] transform transition-all duration-200 ease-out ${
                    isVisible ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className={`h-full ${
                    theme === 'dark' 
                        ? 'bg-black/95 backdrop-blur-xl border-r border-neutral-800' 
                        : 'bg-white/95 backdrop-blur-xl border-r border-neutral-200'
                }`}>
                    <div className="p-8 h-full flex flex-col">
                        {/* Header */}
                        <div className="mb-12">
                            <h1 className={`text-2xl font-semibold tracking-tighter mb-2 ${
                                theme === 'dark' ? 'text-white' : 'text-black'
                            }`}>
                                AIREEZA
                            </h1>
                            <p className={`text-sm font-light tracking-[0.3em] uppercase ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>
                                L. TANDIH
                            </p>
                            <div className={`mt-4 text-xs font-normal uppercase tracking-widest ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                            }`}>
                                Strategic Finance Advisory
                            </div>
                        </div>

                        {/* Navigation */}
                        <nav className="space-y-6 mb-12">
                            <button
                                onClick={() => scrollToSection('#home')}
                                className={`w-full text-left group transition-all duration-300 text-sm font-medium uppercase tracking-wider ${
                                    theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
                                }`}
                            >
                                Home
                            </button>

                            <button
                                onClick={() => scrollToSection('#about')}
                                className={`w-full text-left group transition-all duration-300 text-sm font-medium uppercase tracking-wider ${
                                    theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
                                }`}
                            >
                                About
                            </button>

                            <button
                                onClick={() => scrollToSection('#services')}
                                className={`w-full text-left group transition-all duration-300 text-sm font-medium uppercase tracking-wider ${
                                    theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
                                }`}
                            >
                                Services
                            </button>

                            <button
                                onClick={() => scrollToSection('#contact')}
                                className={`w-full text-left group transition-all duration-300 text-sm font-medium uppercase tracking-wider ${
                                    theme === 'dark' ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-black'
                                }`}
                            >
                                Contact
                            </button>
                        </nav>

                        {/* Professional Info */}
                        <div className={`border-t pt-6 mb-8 ${
                            theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                        }`}>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${
                                        theme === 'dark' ? 'bg-green-400' : 'bg-green-600'
                                    }`} />
                                    <span className={`text-xs font-medium uppercase tracking-wider ${
                                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                                    }`}>
                                        Available for Projects
                                    </span>
                                </div>
                                
                                <div className={`text-xs leading-relaxed ${
                                    theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                                }`}>
                                    Certified Management Accountant<br />
                                    Strategic Finance & Performance<br />
                                    Zamboanga City, Philippines
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="mt-auto space-y-3">
                            <a
                                href="#contact"
                                className={`block w-full text-center py-3 px-4 border rounded-full transition-all duration-300 text-sm font-semibold uppercase tracking-wider ${
                                    theme === 'dark'
                                        ? 'border-white/30 hover:bg-white hover:text-black text-white'
                                        : 'border-black/30 hover:bg-black hover:text-white text-black'
                                }`}
                            >
                                Start Conversation
                            </a>
                            
                            <div className="flex justify-center gap-4">
                                <a
                                    href="mailto:contact@example.com"
                                    className={`p-2 rounded-full transition-all duration-300 text-xs font-medium ${
                                        theme === 'dark'
                                            ? 'hover:bg-neutral-800 text-neutral-400 hover:text-white'
                                            : 'hover:bg-neutral-100 text-neutral-600 hover:text-black'
                                    }`}
                                >
                                    Email
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 rounded-full transition-all duration-300 text-xs font-medium ${
                                        theme === 'dark'
                                            ? 'hover:bg-neutral-800 text-neutral-400 hover:text-white'
                                            : 'hover:bg-neutral-100 text-neutral-600 hover:text-black'
                                    }`}
                                >
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}
