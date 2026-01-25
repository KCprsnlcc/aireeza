'use client';

import React, { useState } from 'react';
import SpotlightCard from './SpotlightCard';
import { Icon } from '@iconify/react';

interface CarouselItem {
    id: number;
    title: string;
    image: string;
    content: React.ReactNode;
}

const items: CarouselItem[] = [
    {
        id: 0,
        title: "ALT Solutions",
        image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c053fe9-7127-4df7-ae87-36ae206fe067_1600w.jpg",
        content: (
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-black/5">Financial Consultancy</span>
            </div>
        )
    },
    {
        id: 1,
        title: "Academic Mentor",
        image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0851aedf-fdcc-48be-8ea0-cd63cc04fcda_800w.jpg",
        content: (
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-black/5">Academic Review Systems</span>
            </div>
        )
    },
    {
        id: 2,
        title: "Leadership",
        image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51dd450a-0485-4587-89d8-c6078fb01266_1600w.jpg",
        content: (
            <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-black/5">Regional Leadership</span>
            </div>
        )
    }
];

export default function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const rotateCarousel = (direction: number) => {
        if (direction === 1) { // Next
            setActiveIndex((prev) => (prev + 1) % items.length);
        } else { // Prev
            setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
        }
    };

    // Helper to determine class based on index relative to active
    const getCardClass = (index: number) => {
        if (index === activeIndex) return 'active z-20 opacity-100 scale-100 translate-x-0 translate-z-0';

        const prevIndex = (activeIndex - 1 + items.length) % items.length;
        const nextIndex = (activeIndex + 1) % items.length;

        if (index === prevIndex) return 'prev z-10 opacity-60 scale-85 -translate-x-[110%] -translate-z-[50px] rotate-y-5 blur-[2px]';
        if (index === nextIndex) return 'next z-10 opacity-60 scale-85 translate-x-[110%] -translate-z-[50px] -rotate-y-5 blur-[2px]';

        return 'hidden'; // Hide others if more than 3
    };

    return (
        <div className="w-full">
            <div className="flex mb-12 pr-2 pl-2 items-end justify-between">
                <h2 className="lg:text-5xl text-4xl font-medium text-neutral-900 tracking-tight">
                    Professional Experience
                </h2>
                <div className="flex gap-4">
                    <button onClick={() => rotateCarousel(-1)} className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:border-neutral-400 transition-colors cursor-pointer z-30 relative">
                        <Icon icon="solar:arrow-left-linear" width="20" height="20" />
                    </button>
                    <button onClick={() => rotateCarousel(1)} className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:border-neutral-400 transition-colors cursor-pointer z-30 relative">
                        <Icon icon="solar:arrow-right-linear" width="20" height="20" />
                    </button>
                </div>
            </div>

            <div className="carousel-container flex w-full h-[500px] relative items-center justify-center [perspective:1000px]">
                {items.map((item, index) => {
                    let className = "";
                    // Manual logic to replicate the CSS classes from HTML
                    // .carousel-card { position: absolute; transition: all 0.6s ... }
                    // .active { transform: translateX(0) scale(1) translateZ(0); opacity: 1; z-index: 20; }
                    // .prev { transform: translateX(-110%) scale(0.85) translateZ(-50px) rotateY(5deg); ... }
                    // .next { transform: translateX(110%) scale(0.85) translateZ(-50px) rotateY(-5deg); ... }

                    const isPrev = index === (activeIndex - 1 + items.length) % items.length;
                    const isNext = index === (activeIndex + 1) % items.length;
                    const isActive = index === activeIndex;

                    let transformStyle = {};
                    if (isActive) {
                        className = "z-20 opacity-100";
                        transformStyle = { transform: 'translateX(0) scale(1) translateZ(0)' };
                    } else if (isPrev) {
                        className = "z-10 opacity-60 blur-[2px]";
                        transformStyle = { transform: 'translateX(-110%) scale(0.85) translateZ(-50px) rotateY(5deg)' };
                    } else if (isNext) {
                        className = "z-10 opacity-60 blur-[2px]";
                        transformStyle = { transform: 'translateX(110%) scale(0.85) translateZ(-50px) rotateY(-5deg)' };
                    } else {
                        className = "opacity-0 pointer-events-none";
                    }

                    return (
                        <div
                            key={item.id}
                            className={`absolute w-full lg:w-3/4 h-full transition-all duration-600 ease-[cubic-bezier(0.25,0.8,0.25,1)] [transform-style:preserve-3d] ${className}`}
                            style={transformStyle}
                        >
                            <SpotlightCard className="glass-panel w-full h-full rounded-3xl overflow-hidden p-0 cursor-pointer border-0">
                                <div className="w-full h-full relative group">
                                    {item.content}
                                    <div
                                        className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"
                                        style={{ backgroundImage: `url(${item.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
                                            <h3 className="text-white font-medium text-2xl tracking-tight">{item.title}</h3>
                                            <p className="text-white/80 text-base mt-2 line-clamp-2 max-w-lg">
                                                {item.id === 0 && "Financial Consultancy & Strategic Planning for SMEs."}
                                                {item.id === 1 && "Academic Review Systems & Mentorship Programs."}
                                                {item.id === 2 && "Leading student bodies and regional organizations."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
