'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrubText = (text: string, theme: string) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [spansHtml, setSpansHtml] = useState<string>('');

    useEffect(() => {
        // Split text into words and wrap in spans
        const words = text.split(' ');
        const html = words.map((word, index) => `<span key="${index}">${word} </span>`).join('');
        setSpansHtml(html);
    }, [text]);

    useEffect(() => {
        if (!containerRef.current || !spansHtml) return;

        const handleScrubScroll = () => {
            if (!containerRef.current) return;
            
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate progress: 0 when element enters, 1 when it leaves
            let progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            
            if (progress < 0) progress = 0;
            if (progress > 1) progress = 1;

            const spanElements = containerRef.current.querySelectorAll('span');
            const numSpans = spanElements.length;
            
            // Map progress to spans
            const activeIndex = Math.floor(progress * (numSpans + 5)) - 2; // +5 adds some buffer

            spanElements.forEach((span, index) => {
                if (index <= activeIndex) {
                    span.classList.add('active');
                } else {
                    span.classList.remove('active');
                }
            });
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        document.addEventListener('scroll', handleScrubScroll);
                        handleScrubScroll(); // Initial call
                    } else {
                        document.removeEventListener('scroll', handleScrubScroll);
                    }
                });
            },
            { threshold: 0 }
        );

        observer.observe(containerRef.current);

        return () => {
            observer.disconnect();
            document.removeEventListener('scroll', handleScrubScroll);
        };
    }, [spansHtml]);

    return { containerRef, spansHtml, theme };
};
