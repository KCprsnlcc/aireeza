'use client';

import { useState } from 'react';
import InnerHero from '../../components/sections/InnerHero';
import Footer from '../../components/layout/Footer';

const pastIssues = [
    { date: 'Feb 2026', title: 'The number your business actually runs on (it\'s not revenue)', tag: 'Profit Philosophy' },
    { date: 'Jan 2026', title: 'Why founders are the last to know when something is wrong', tag: 'Founder Empathy' },
    { date: 'Dec 2025', title: 'The year I nearly destroyed what I spent five years building', tag: 'Honest Journey' },
    { date: 'Nov 2025', title: 'Building a business that doesn\'t require you to disappear into it', tag: 'Intentional Life' },
    { date: 'Oct 2025', title: 'Profit is not a reward for hard work. It\'s a structural outcome.', tag: 'Profit Philosophy' },
];

const whatToExpect = [
    {
        num: '01',
        title: 'The honest ones',
        body: 'The stories I didn\'t think I\'d publish. The years that were hard. The decisions that cost me. The things that changed how I see everything. Written for founders who are tired of pretending it\'s all fine.',
    },
    {
        num: '02',
        title: 'The useful ones',
        body: 'Real frameworks and thinking from the work I do with businesses. Not wrapped in jargon. Not dumbed down. The kind of thing you read and immediately think about your own numbers.',
    },
    {
        num: '03',
        title: 'The uncomfortable ones',
        body: 'The things founders think but don\'t say. The patterns I keep seeing across businesses. The quiet ways a business slowly breaks, and why smart people miss it for so long.',
    },
    {
        num: '04',
        title: 'The life ones',
        body: 'What it looks like to build deliberately. The relationship between how your business is structured and how your life actually feels. Occasional. Only when there\'s something real to say.',
    },
];

const socialLinks = [
    {
        platform: 'LinkedIn',
        handle: 'Aireeza Tandih',
        desc: 'Where I post regularly. Founder-to-founder, no polish, no performance. The thinking behind the work, the honest journey, and the stuff I see from inside businesses every week.',
        cta: 'Follow on LinkedIn →',
        href: '#',
    },
    {
        platform: 'Alt Business',
        handle: '@altbusiness',
        desc: 'Company insights, frameworks, and strategic thinking for business leaders building sustainable operations.',
        cta: 'Follow →',
        href: '#',
    },
    {
        platform: 'BrightCEO',
        handle: '@brightceo',
        desc: 'Foundational guidance for early-stage founders navigating the first years of building.',
        cta: 'Follow →',
        href: '#',
    },
];

export default function NewsletterPage() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic
        console.log('Subscribe:', { firstName, email });
    };

    return (
        <>
            {/* Hero Split Section */}
            <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] border-b border-neutral-200">
                {/* Left - Copy */}
                <div className="px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 border-b lg:border-b-0 lg:border-r border-neutral-200">
                    <div className="text-[0.65rem] uppercase tracking-[0.2em] text-[#ff3333] mb-4 font-light">
                        The Newsletter
                    </div>
                    <h1 className="font-bold tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-black/90 mb-6">
                        The stuff<br />
                        nobody says<br />
                        <em className="italic text-neutral-500">out loud.</em>
                    </h1>
                    <p className="text-[0.9rem] text-neutral-500 leading-[1.75] max-w-lg">
                        Most business content tells you what to do. This doesn&apos;t. It tells you what it actually looks like, what breaks, what costs more than you expect, and what nobody says in the room where the decisions get made.
                    </p>
                    <p className="text-[0.9rem] text-neutral-500 leading-[1.75] max-w-lg mt-4">
                        Written by someone who&apos;s been building for years. Not to grow an audience. Because some things need to be said.
                    </p>
                </div>

                {/* Right - Form */}
                <div className="bg-neutral-900 text-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 flex flex-col justify-between">
                    <div>
                        <div className="text-[0.6rem] uppercase tracking-[0.15em] text-white/40 mb-4 font-light">
                            Subscribe — It&apos;s Free
                        </div>
                        <div className="font-bold tracking-tight text-2xl md:text-3xl leading-[1.15] mb-6">
                            Sent when there's something worth sending.
                        </div>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Your first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="border border-white/20 bg-white/5 px-4 py-3 text-[0.75rem] text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
                            />
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-white/20 bg-white/5 px-4 py-3 text-[0.75rem] text-white placeholder:text-white/30 focus:outline-none focus:border-white/40"
                            />
                            <button
                                type="submit"
                                className="text-[0.7rem] uppercase tracking-[0.1em] bg-[#ff3333] text-white px-6 py-3 font-light hover:bg-[#e62e2e] transition-colors mt-1"
                            >
                                Subscribe →
                            </button>
                            <p className="text-[0.6rem] text-white/30 font-light">
                                No cadence. No filler. Unsubscribe any time.
                            </p>
                        </form>
                    </div>
                    <div className="border-t border-white/10 pt-6 mt-8">
                        <div className="text-[0.58rem] uppercase tracking-[0.12em] text-white/30 mb-3 font-light">
                            Also follow on
                        </div>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="text-[0.7rem] text-white/50 tracking-[0.1em] hover:text-white/70 transition-colors"
                            >
                                LinkedIn →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You'll Get */}
            <section className="border-b border-neutral-200">
                <div className="px-6 md:px-8 lg:px-12 py-8 border-b border-neutral-200">
                    <div className="flex items-center gap-3">
                        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 font-light">What you&apos;ll get</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {whatToExpect.map((item, index) => (
                        <div
                            key={item.num}
                            className={`px-6 md:px-8 py-8 ${index < 3 ? 'border-b sm:border-b-0 sm:border-r border-neutral-200' : 'border-b lg:border-b-0 lg:border-r-0 border-neutral-200'} ${index === 1 ? 'sm:border-r-0 lg:border-r' : ''} ${index === 2 ? 'lg:border-r-0' : ''}`}
                        >
                            <div className="text-[0.6rem] text-[#ff3333] mb-3 font-light">{item.num}</div>
                            <h3 className="font-bold tracking-tight text-lg mb-2">{item.title}</h3>
                            <p className="text-[0.78rem] text-neutral-500 leading-[1.65]">{item.body}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Past Issues */}
            <section className="border-b border-neutral-200">
                <div className="px-6 md:px-8 lg:px-12 py-8 border-b border-neutral-200">
                    <div className="flex items-center gap-3">
                        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 font-light">Past issues</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                    </div>
                </div>
                <div className="px-6 md:px-8 lg:px-12">
                    {pastIssues.map((issue, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-[80px_1fr_auto] md:grid-cols-[100px_1fr_140px] gap-4 md:gap-8 items-baseline py-4 ${index < pastIssues.length - 1 ? 'border-b border-neutral-200' : ''}`}
                        >
                            <div className="text-[0.6rem] text-neutral-400 font-light">{issue.date}</div>
                            <div className="font-bold tracking-tight text-base md:text-lg leading-[1.3]">{issue.title}</div>
                            <div className="text-[0.6rem] uppercase tracking-[0.1em] text-neutral-500 text-right hidden md:block">
                                {issue.tag}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Social Strip */}
            <section className="border-b border-neutral-200">
                <div className="px-6 md:px-8 lg:px-12 py-8 border-b border-neutral-200">
                    <div className="flex items-center gap-3">
                        <span className="text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 font-light">Follow along</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3">
                    {socialLinks.map((link, index) => (
                        <div
                            key={index}
                            className={`px-6 md:px-8 lg:px-10 py-8 flex flex-col gap-2 ${index < 2 ? 'border-b md:border-b-0 md:border-r border-neutral-200' : ''}`}
                        >
                            <div className="text-[0.6rem] uppercase tracking-[0.15em] text-neutral-400 font-light">
                                {link.platform}
                            </div>
                            <div className="font-bold tracking-tight text-lg">{link.handle}</div>
                            <p className="text-[0.78rem] text-neutral-500 leading-[1.6]">{link.desc}</p>
                            <a
                                href={link.href}
                                className="text-[0.62rem] uppercase tracking-[0.1em] text-[#ff3333] mt-2 hover:text-[#e62e2e] transition-colors"
                            >
                                {link.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Second Subscribe CTA */}
            <section className="bg-neutral-50 border-b border-neutral-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center px-6 md:px-8 lg:px-12 py-12 md:py-16">
                    <div>
                        <h2 className="font-bold tracking-tight text-2xl md:text-3xl leading-[1.2] mb-3">
                            Still on the fence?<br />
                            <em className="italic text-neutral-500">Read one issue first.</em>
                        </h2>
                        <p className="text-[0.85rem] text-neutral-500 leading-[1.65] max-w-md">
                            Pick any issue from the archive above. If it sounds like something you&apos;d want more of, subscribe. If it doesn&apos;t, no hard feelings.
                        </p>
                    </div>
                    <div>
                        <form onSubmit={handleSubscribe} className="flex flex-col gap-3 max-w-md">
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-neutral-200 px-4 py-3 text-[0.75rem] text-neutral-700 placeholder:text-neutral-400 bg-white focus:outline-none focus:border-neutral-400"
                            />
                            <button
                                type="submit"
                                className="text-[0.7rem] uppercase tracking-[0.1em] bg-neutral-900 text-white px-6 py-3 font-light hover:bg-neutral-800 transition-colors"
                            >
                                Subscribe →
                            </button>
                            <p className="text-[0.6rem] text-neutral-400 font-light">
                                No spam. No cadence for the sake of it. Unsubscribe any time.
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
