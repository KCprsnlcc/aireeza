'use client';

import { Icon } from "@iconify/react";
import { useTheme } from "@/contexts/ThemeContext";

export default function PointOfView() {
    const { theme } = useTheme();

    return (
        <section id="point-of-view" className={`py-24 border-b ${
            theme === 'dark' ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
        }`}>
            <div className="max-w-[1600px] mx-auto px-6">
                <div className="flex justify-between items-center mb-16 fade-up">
                    <span className="text-xs text-neutral-500">POV</span>
                    <span className="text-xs text-neutral-500">/ PERSPECTIVE</span>
                    <span className="text-xs text-neutral-500">INSIGHTS</span>
                </div>

                <div className="text-center zoom-in">
                    <Icon icon="solar:document-text-linear" className="w-12 h-12 text-neutral-500 mx-auto mb-8" />
                    
                    <h2 className="text-4xl md:text-6xl font-semibold uppercase tracking-tighter mb-6 fade-up">
                        Point of View
                    </h2>
                    
                    <p className={`text-lg max-w-2xl mx-auto mb-12 fade-up ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                        Thoughts on strategic finance, decision-making, and business performance.
                    </p>

                    <div className={`inline-block border p-8 zoom-in ${
                        theme === 'dark' 
                            ? 'border-neutral-800 bg-neutral-900/30' 
                            : 'border-neutral-200 bg-neutral-50'
                    }`}>
                        <p className="text-sm text-neutral-500 italic">
                            Content coming soon
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
