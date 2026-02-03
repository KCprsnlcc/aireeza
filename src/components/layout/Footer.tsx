'use client';

import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Footer() {
    const { theme } = useTheme();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={`pt-24 pb-12 relative overflow-hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'
            }`}>
            <div className="max-w-[1600px] mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-12 mb-24 fade-up">
                    <div className="text-left">
                        <p className={`text-xs uppercase mb-1 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'}`}>
                            Strategic Finance
                        </p>
                        <p className={`text-xs uppercase ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'}`}>
                            FP&A Advisory
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-64 h-80 duotone-red overflow-hidden">
                            <img
                                src="/red-footer.png"
                                className="w-full h-full object-cover"
                                alt="Office Architecture"
                            />
                        </div>
                    </div>
                    <div className="text-right">
                        <p className={`text-xs uppercase mb-1 ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'}`}>
                            Global Reach
                        </p>
                        <p className={`text-xs uppercase ${theme === 'dark' ? 'text-neutral-500' : 'text-neutral-700'}`}>
                            Remote First
                        </p>
                    </div>
                </div>

                <div className={`border-t pt-12 flex justify-between items-end fade-up ${theme === 'dark' ? 'border-neutral-900' : 'border-neutral-200'
                    }`}>
                    <div className="text-left">
                        <span className={`text-[10px] ${theme === 'dark' ? 'text-neutral-600' : 'text-neutral-700'}`}>
                            ©2024 AIREEZA
                        </span>
                    </div>
                    <h1 className={`text-[15vw] leading-[0.7] font-semibold tracking-tighter text-center select-none pointer-events-none opacity-50 ${theme === 'dark' ? 'text-neutral-800' : 'text-neutral-200'
                        }`}>
                        AIREEZA
                    </h1>
                    <div className="text-right">
                        <button
                            onClick={scrollToTop}
                            className={`text-[10px] flex items-center gap-1 transition-colors ${theme === 'dark'
                                    ? 'text-neutral-600 hover:text-white'
                                    : 'text-neutral-700 hover:text-black'
                                }`}
                        >
                            BACK TO TOP <Icon icon="solar:arrow-up-linear" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
