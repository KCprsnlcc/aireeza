'use client';

import { useState } from 'react';
import InnerHero from '@/components/sections/InnerHero';
import Footer from '@/components/layout/Footer';

const categories = ['All', 'Honest Journey', 'Founder Empathy', 'Profit Philosophy', 'Intentional Life'];

const featuredPost = {
    tag: 'Profit Philosophy — Featured',
    title: "The number your business actually runs on (it's not revenue)",
    excerpt: "Most founders track revenue like it's the answer. It isn't even the right question. The number that tells you whether your business is healthy, whether it can survive a slow month, whether you can take a salary without guilt, is something different. Most founders don't look at it often enough.",
};

const posts = [
    { date: 'Jan 2026', title: 'Why founders are the last to know when something is wrong', tag: 'Founder Empathy' },
    { date: 'Dec 2025', title: 'The year I nearly destroyed what I spent five years building', tag: 'Honest Journey' },
    { date: 'Nov 2025', title: "Building a business that doesn't require you to disappear into it", tag: 'Intentional Life' },
    { date: 'Oct 2025', title: 'Profit is not a reward for hard work. It\'s a structural outcome.', tag: 'Profit Philosophy' },
    { date: 'Sep 2025', title: 'What I told myself in year three that almost cost me everything', tag: 'Honest Journey' },
    { date: 'Aug 2025', title: 'The founder trap: busy, broke, and convinced it\'s going to turn around', tag: 'Founder Empathy' },
];

export default function WritingPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredPosts = activeFilter === 'All'
        ? posts
        : posts.filter(p => p.tag === activeFilter);

    return (
        <>
            <InnerHero
                label="Writing"
                title={<>Things I had to learn<br /><em className="italic text-neutral-500">before I could say them.</em></>}
                subtitle="Not a content strategy. Not a personal brand exercise. Just things I think about, things I've been through, and things I wish someone had told me earlier."
            />

            {/* Filter */}
            <div className="px-6 md:px-8 lg:px-12 py-5 border-b border-neutral-200 bg-white flex flex-wrap gap-2 items-center">
                <span className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-400 mr-2 font-light">Filter:</span>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveFilter(cat)}
                        className={`text-[0.65rem] uppercase tracking-[0.1em] px-3 py-1 border transition-colors ${activeFilter === cat
                                ? 'bg-black text-white border-black'
                                : 'bg-transparent text-neutral-500 border-neutral-200 hover:border-neutral-400'
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Featured post */}
            <section className="grid grid-cols-1 md:grid-cols-2 border-b border-neutral-200 bg-white">
                <div className="bg-neutral-200 h-56 md:h-auto md:border-r border-neutral-200 flex items-center justify-center">
                    <span className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400">FEATURED IMAGE</span>
                </div>
                <div className="p-8 md:p-10">
                    <div className="text-[0.65rem] uppercase tracking-[0.1em] text-[#0d6f7c] mb-3 font-light">{featuredPost.tag}</div>
                    <h2 className="font-bold tracking-tight text-2xl md:text-3xl leading-[1.2] text-black/90 mb-4">{featuredPost.title}</h2>
                    <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-4">{featuredPost.excerpt}</p>
                    <span className="text-xs uppercase tracking-[0.1em] text-[#0d6f7c] font-light cursor-pointer hover:underline">Read →</span>
                </div>
            </section>

            {/* Post list */}
            <section className="bg-white border-b border-neutral-200 px-6 md:px-8 lg:px-12">
                {filteredPosts.map((post, i) => (
                    <div
                        key={i}
                        className={`grid grid-cols-1 md:grid-cols-[80px_1fr_140px] gap-2 md:gap-8 items-baseline py-5 ${i < filteredPosts.length - 1 ? 'border-b border-neutral-200' : ''
                            }`}
                    >
                        <div className="text-[0.65rem] text-neutral-400 font-light">{post.date}</div>
                        <div className="font-bold tracking-tight text-base md:text-lg text-black/90">{post.title}</div>
                        <div className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-500 md:text-right font-light">{post.tag}</div>
                    </div>
                ))}
            </section>

            {/* Newsletter */}
            <section className="bg-neutral-50 border-b border-neutral-200 px-6 md:px-8 lg:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-5xl mx-auto">
                    <div>
                        <h2 className="font-bold tracking-tight text-2xl md:text-3xl leading-[1.2] text-black/90 mb-3">
                            Get it in your inbox<br />
                            <em className="italic text-neutral-500">before it&rsquo;s on the site.</em>
                        </h2>
                        <p className="text-[0.82rem] text-neutral-500 leading-[1.65]">
                            Occasional. Worth your time. Written the same way I&rsquo;d write to a friend who happens to run a business. No newsletters that sound like newsletters.
                        </p>
                    </div>
                    <div>
                        <div className="flex gap-2 mb-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-1 border border-neutral-200 px-4 py-3 text-[0.7rem] font-light bg-white text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400"
                            />
                            <button className="text-[0.7rem] uppercase tracking-[0.1em] bg-black text-white px-6 py-3 font-light hover:bg-neutral-800 transition-colors">
                                Subscribe
                            </button>
                        </div>
                        <p className="text-[0.6rem] text-neutral-400 font-light">No spam. Unsubscribe any time. I mean that.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
