'use client';

import { useRef, useEffect } from 'react';

export function useVanillaScroll() {
  const elementRef = useRef<HTMLElement>(null);

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
      element.closest('[data-vanilla-scroll]') ||
      element.closest('.vanilla-scroll')
    ) {
      return true;
    }
    
    // Recursively check parents
    return shouldUseVanillaScroll(element.parentElement);
  };

  const scrollToElement = (selector: string, behavior: ScrollBehavior = 'smooth') => {
    const element = document.querySelector(selector);
    if (element) {
      const targetElement = element as HTMLElement;
      const shouldUseVanilla = shouldUseVanillaScroll(targetElement);
      
      if (shouldUseVanilla) {
        // Use vanilla scroll for UI elements
        targetElement.scrollIntoView({ behavior: 'auto' });
      } else {
        // Use smooth scroll for main content
        targetElement.scrollIntoView({ behavior });
      }
    }
  };

  return {
    elementRef,
    shouldUseVanillaScroll,
    scrollToElement,
  };
}
