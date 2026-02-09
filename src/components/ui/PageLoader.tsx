'use client';

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

export default function PageLoader() {
    const { theme } = useTheme();
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const svgRef = useRef<SVGPathElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const detectPageLoad = async () => {
            let loadedResources = 0;
            const totalResources = 4; // fonts, images, scripts, styles
            
            // Track actual loading progress
            const updateProgress = () => {
                loadedResources++;
                const progress = (loadedResources / totalResources) * 100;
                setLoadingProgress(progress);
                
                if (loadedResources >= totalResources) {
                    // All resources loaded, start transition
                    setTimeout(() => {
                        startCurveTransition();
                    }, 300); // Small delay to ensure everything is ready
                }
            };

            // Check if fonts are loaded
            if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(updateProgress);
            } else {
                setTimeout(updateProgress, 100);
            }

            // Check if images are loaded
            const images = document.querySelectorAll('img');
            let imagesLoaded = 0;
            const totalImages = images.length;
            
            if (totalImages === 0) {
                updateProgress();
            } else {
                images.forEach(img => {
                    if (img.complete) {
                        imagesLoaded++;
                        if (imagesLoaded === totalImages) updateProgress();
                    } else {
                        img.onload = () => {
                            imagesLoaded++;
                            if (imagesLoaded === totalImages) updateProgress();
                        };
                        img.onerror = updateProgress; // Count failed loads too
                    }
                });
            }

            // Check if DOM is fully loaded
            if (document.readyState === 'complete') {
                updateProgress();
            } else {
                window.addEventListener('load', updateProgress);
            }

            // Fallback timeout (max 3 seconds)
            setTimeout(() => {
                if (loadedResources < totalResources) {
                    startCurveTransition();
                }
            }, 3000);
        };

        const startCurveTransition = async () => {
            if (!svgRef.current || !containerRef.current) return;

            const { gsap } = await import('gsap');
            
            const tl = gsap.timeline({
                onComplete: () => {
                    setIsLoading(false);
                }
            });

            // Wait for progress bar to finish, then text disappears, then curve transition
            const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
            const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

            // Progress bar finishes (100%)
            tl.to('.progress-bar-fill', {
                width: '100%',
                duration: 0.4,
                ease: "power3.out",
            })
            // Small pause to show completion
            .to({}, { duration: 0.3 })
            // Progress bar disappears cleanly
            .to('.progress-container', {
                opacity: 0,
                scale: 0.95,
                duration: 0.25,
                ease: "power2.inOut",
            })
            // Text elegantly morphs into curve transition
            .to('.branding-text', {
                scale: 0.85,
                opacity: 0,
                y: -8,
                duration: 0.5,
                ease: "power3.inOut",
            })
            // Curve animation flows seamlessly
            .to(svgRef.current, {
                duration: 1.0,
                attr: { d: curve },
                ease: "power4.inOut",
            }, "-=0.3") // More overlap for smoother flow
            .to(svgRef.current, {
                duration: 0.7,
                attr: { d: flat },
                ease: "power4.out",
            })
            // Elegant final fade
            .to(containerRef.current, {
                opacity: 0,
                scale: 0.98,
                duration: 0.4,
                ease: "power3.inOut",
            });
        };

        // Start loading detection
        detectPageLoad();

        // Cleanup
        return () => {
            window.removeEventListener('load', () => {});
        };
    }, []);

    // Respect reduced motion preferences
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setIsLoading(false);
        }
    }, []);

    if (!isLoading) return null;

    return (
        <div ref={containerRef} className="fixed inset-0 z-[9999] overflow-hidden">
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
            
            {/* Text inside the curve */}
            <div className="branding-text absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div className="flex items-baseline mb-6">
                    <span 
                        className="text-6xl font-majesty font-light tracking-tight"
                        style={{ color: theme === 'dark' ? '#000000' : '#ffffff' }}
                    >
                        Airee
                    </span>
                    <span 
                        className="text-6xl font-majesty font-light tracking-tight ml-1"
                        style={{ color: '#ff3333' }}
                    >
                        za
                    </span>
                </div>
                
                {/* Real loading progress indicator */}
                <div className="progress-container w-32 h-0.5 bg-gray-400 rounded-full overflow-hidden">
                    <div 
                        className="progress-bar-fill h-full bg-red-500 transition-all duration-300 ease-out"
                        style={{ width: `${loadingProgress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}
