'use client';

import { useRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const testimonials = [
    {
        id: 1,
        quote: "Her mentorship was crucial for my CPA board exam preparation. The clarity she provides is unmatched.",
        name: "John Doe",
        role: "CPA Board Passer",
        image: "https://ui-avatars.com/api/?name=John+Doe&background=random"
    },
    {
        id: 2,
        quote: "ALT Solutions transformed our internal audit process. We now have full visibility into our financial health.",
        name: "Maria Santos",
        role: "SME Owner, Zamboanga",
        image: "https://ui-avatars.com/api/?name=Maria+Santos&background=random"
    },
    {
        id: 3,
        quote: "The feasibility study for our startup was thorough and realistic. Aireeza helped us secure funding.",
        name: "Tech Startup Team",
        role: "Founders",
        image: "https://ui-avatars.com/api/?name=Startup+Team&background=random"
    },
    {
        id: 4,
        quote: "A true leader in the region. Her work with NFJPIA set a standard for excellence.",
        name: "Accounting Professional",
        role: "Former Colleague",
        image: "https://ui-avatars.com/api/?name=Accounting+Pro&background=random"
    },
    {
        id: 5,
        quote: "Her insights on cost-benefit analysis saved our manufacturing line millions in potential waste.",
        name: "Operations Manager",
        role: "Manufacturing Client",
        image: "https://ui-avatars.com/api/?name=Ops+Manager&background=random"
    }
];

export default function Testimonials() {
    const railRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (railRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = railRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const rail = railRef.current;
        if (rail) {
            rail.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            checkScroll(); // Initial check
            return () => {
                rail.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (railRef.current) {
            const scrollAmount = 540; // Approx card width + gap
            railRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="animate-scaleIn animation-delay-400 sm:p-8 bg-[#ffffff] w-full max-w-7xl z-10 border-neutral-200/70 border rounded-3xl mt-24 mr-auto mb-24 ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl gap-x-20 gap-y-20">
            {/* Header */}
            <div className="flex flex-col sm:px-0 animate-fadeInUp pr-0 pl-0 gap-x-6 gap-y-2">
                <h2 className="text-[44px] leading-[0.9] sm:text-6xl lg:text-7xl xl:text-5xl text-[#000000] tracking-tighter text-left">
                    Testimonials.
                </h2>
                <p className="sm:text-base text-sm text-zinc-400 tracking-tight mt-1">
                    Real feedback from students, businesses, and colleagues.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 sm:mt-8 mt-6 items-center">
                <div className="lg:col-span-12 relative">
                    <div className="relative overflow-hidden h-[420px] rounded-3xl mt-6">
                        {/* Edge fades */}
                        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
                        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

                        {/* Rail */}
                        <div
                            ref={railRef}
                            className="flex gap-6 overflow-x-auto scroll-smooth pr-6 pl-6 absolute top-0 right-0 bottom-0 left-0 items-center no-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {testimonials.map((item, index) => (
                                <article
                                    key={item.id}
                                    className={`min-w-[420px] sm:min-w-[520px] max-w-[640px] bg-white border border-neutral-200/70 rounded-[24px] p-8 text-neutral-900 hover-lift backdrop-blur-sm snap-center shadow-2xl transition-transform duration-300 ${index % 2 === 0 ? '-rotate-1 hover:rotate-0' : 'rotate-1 hover:rotate-0'}`}
                                >
                                    <p className="text-lg sm:text-xl md:text-2xl text-neutral-900 tracking-tighter">
                                        "{item.quote}"
                                    </p>
                                    <div className="mt-8 flex items-center gap-3">
                                        <img src={item.image} alt={item.name} className="w-10 h-10 rounded-xl object-cover" />
                                        <div>
                                            <div className="text-sm tracking-tight font-medium">{item.name}</div>
                                            <div className="text-xs text-neutral-500 tracking-tight">{item.role}</div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Controls */}
                        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3">
                            <button
                                onClick={() => scroll('left')}
                                className={`hover:bg-neutral-200 transition-colors inline-flex text-neutral-900 bg-neutral-100 w-10 h-10 border-neutral-200 border rounded-full items-center justify-center ${!canScrollLeft ? 'opacity-50 pointer-events-none' : ''}`}
                                aria-label="Previous"
                            >
                                <Icon icon="ph:arrow-left" width="20" height="20" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className={`w-10 h-10 rounded-full text-white bg-neutral-900 hover:bg-neutral-800 transition-colors inline-flex items-center justify-center ${!canScrollRight ? 'opacity-50 pointer-events-none' : ''}`}
                                aria-label="Next"
                            >
                                <Icon icon="ph:arrow-right" width="20" height="20" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
