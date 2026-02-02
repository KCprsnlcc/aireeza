'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function PageLoader() {
    const { theme } = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    const loaderRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const loadGSAP = async () => {
            const { gsap } = await import('gsap');
            
            if (!svgRef.current || !loaderRef.current) return;

            const tl = gsap.timeline({
                onComplete: () => {
                    setIsLoading(false);
                }
            });

            const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
            const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

            tl.to(svgRef.current, {
                duration: 0.8,
                attr: { d: curve },
                ease: "power2.easeIn",
            }).to(svgRef.current, {
                duration: 0.8,
                attr: { d: flat },
                ease: "power2.easeOut",
            });

            tl.to(loaderRef.current, {
                y: -1500,
                duration: 1,
                ease: "power2.inOut",
            });
        };

        loadGSAP();
    }, []);

    if (!isLoading) return null;

    return (
        <div 
            ref={loaderRef}
            className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
            style={{ background: 'transparent' }}
        >
            <svg 
                className="absolute top-0 left-0 w-full h-[110vh]"
                viewBox="0 0 1000 1000" 
                preserveAspectRatio="none"
            >
                <path 
                    ref={svgRef}
                    d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"
                    fill={theme === 'dark' ? '#ffffff' : '#000000'}
                />
            </svg>
        </div>
    );
}
