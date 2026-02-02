'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from '@/contexts/ThemeContext';

export default function AdminLoader() {
    const { theme } = useTheme();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time for admin assets
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className={`fixed inset-0 z-[9999] flex items-center justify-center transition-colors ${
            theme === 'dark' ? 'bg-black' : 'bg-white'
        }`}>
            <div className="text-center">
                {/* Logo/Brand */}
                <div className="mb-8">
                    <h1 className={`text-4xl font-semibold tracking-tighter ${
                        theme === 'dark' ? 'text-white' : 'text-black'
                    }`}>
                        AIREEZA
                    </h1>
                    <p className={`text-sm uppercase tracking-widest mt-2 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                        Admin Portal
                    </p>
                </div>

                {/* Loading Spinner */}
                <div className="relative w-16 h-16 mx-auto">
                    <div className={`absolute inset-0 rounded-full border-4 ${
                        theme === 'dark' 
                            ? 'border-neutral-800' 
                            : 'border-neutral-200'
                    }`}></div>
                    <div className={`absolute inset-0 rounded-full border-4 border-t-transparent animate-spin ${
                        theme === 'dark' 
                            ? 'border-white' 
                            : 'border-black'
                    }`}></div>
                </div>

                {/* Loading Text */}
                <p className={`text-sm mt-6 ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>
                    Loading admin dashboard...
                </p>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mt-4">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full animate-pulse ${
                                theme === 'dark' ? 'bg-neutral-600' : 'bg-neutral-400'
                            }`}
                            style={{
                                animationDelay: `${index * 0.2}s`,
                                animationDuration: '1.5s'
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
