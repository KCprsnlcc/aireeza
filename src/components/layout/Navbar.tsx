'use client';

import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navbar() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <nav className="w-full px-6 py-6 flex justify-between items-center text-xs font-normal uppercase tracking-wide border-b backdrop-blur-sm bg-white/80 border-black/10 text-black">
                <div className="w-1/3">EST. 2024</div>
                <div className="w-1/3 flex justify-center">
                    <Icon icon="solar:infinity-linear" width="24" height="24" />
                </div>
                <div className="w-1/3 flex justify-end items-center gap-4">
                    <div className="w-8 h-8" />
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

    return <NavbarContent />;
}

function NavbarContent() {
    const { theme } = useTheme();

    return (
        <nav className={`w-full px-6 py-6 flex justify-between items-center text-xs font-normal uppercase tracking-wide border-b backdrop-blur-sm ${
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
        </nav>
    );
}
