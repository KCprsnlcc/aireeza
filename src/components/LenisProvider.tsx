'use client';

import { useEffect, createContext, useContext, ReactNode } from 'react';
import Lenis from 'lenis';

interface LenisContextType {
  lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext);
}

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // Check if element or any parent should use vanilla scroll
    const shouldUseVanillaScroll = (element: Element | null): boolean => {
      if (!element || element === document.body) return false;
      
      // Check for explicit vanilla scroll attribute
      if (element.hasAttribute('data-vanilla-scroll')) {
        return true;
      }
      
      // Check for explicit lenis scroll attribute (overrides detection)
      if (element.hasAttribute('data-lenis-scroll')) {
        return false;
      }
      
      // Check for scrollable containers via CSS
      const computedStyle = window.getComputedStyle(element);
      if (
        computedStyle.overflowY === 'auto' ||
        computedStyle.overflowX === 'auto' ||
        computedStyle.overflowY === 'scroll' ||
        computedStyle.overflowX === 'scroll'
      ) {
        return true;
      }
      
      // Check for vanilla scroll class
      if (element.classList.contains('vanilla-scroll')) {
        return true;
      }
      
      // Check for common UI scrollable patterns
      if (
        element.classList.contains('overflow-y-auto') ||
        element.classList.contains('overflow-x-auto') ||
        element.classList.contains('overflow-scroll') ||
        element.id === 'hover-sidebar' ||
        element.closest('[data-vanilla-scroll]') ||
        element.closest('.vanilla-scroll')
      ) {
        return true;
      }
      
      // Recursively check parents
      return shouldUseVanillaScroll(element.parentElement);
    };

    // Override Lenis scroll events for vanilla scroll elements
    const handleWheel = (event: WheelEvent) => {
      const target = event.target as Element;
      if (shouldUseVanillaScroll(target)) {
        event.stopPropagation();
        return;
      }
    };

    const handleTouch = (event: TouchEvent) => {
      const target = event.target as Element;
      if (shouldUseVanillaScroll(target)) {
        event.stopPropagation();
        return;
      }
    };

    // Add event listeners to prevent Lenis on vanilla scroll elements
    document.addEventListener('wheel', handleWheel, { capture: true });
    document.addEventListener('touchmove', handleTouch, { capture: true });

    // RAF loop for Lenis
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      document.removeEventListener('wheel', handleWheel, { capture: true });
      document.removeEventListener('touchmove', handleTouch, { capture: true });
    };
  }, []);

  return (
    <LenisContext.Provider value={{ lenis: null }}>
      {children}
    </LenisContext.Provider>
  );
}
