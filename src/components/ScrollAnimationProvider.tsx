'use client';

import { useEffect } from 'react';
import { initScrollAnimations } from '@/hooks/useScrollAnimation';

export default function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const cleanup = initScrollAnimations();

        const handleRouteChange = () => {
            setTimeout(() => {
                initScrollAnimations();
            }, 100);
        };

        window.addEventListener('popstate', handleRouteChange);
        
        return () => {
            cleanup?.();
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    return <>{children}</>;
}
