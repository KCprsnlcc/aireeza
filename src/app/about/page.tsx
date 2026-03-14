'use client';

import InnerHero from '@/components/sections/InnerHero';
import CTABanner from '@/components/sections/CTABanner';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <>
            <InnerHero
                label="About"
                title={<>I didn&rsquo;t learn this<br />from a course.<br /><em className="italic text-neutral-500">I learned it from losing sleep.</em></>}
            />

            {/* Sidebar layout */}
            <section className="bg-white border-b border-neutral-200">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px]">
                    {/* Main column */}
                    <div className="p-8 md:p-12 lg:border-r border-neutral-200">
                        <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-6">
                            <span className="text-amber-600 bg-amber-50 rounded px-1 text-[0.82rem] font-mono">
                                [Opening paragraph: Describe where you started. Be specific. A place, a moment, a decision. The more concrete this is, the more founders will trust everything else on this page. Aim for 3–4 sentences.]
                            </span>
                        </p>

                        <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-6">
                            I didn&rsquo;t have a safety net or a mentor who&rsquo;d done it before. I had a problem I needed to solve and not enough money to solve it the slow way. So I figured it out. Made mistakes that cost real money. Had the conversations that kept me up at night. And somewhere in that process, I got good at something most advisors only talk about in theory: understanding why businesses bleed, and how to make them stop.
                        </p>

                        {/* Pullquote */}
                        <div className="border-l-[3px] border-[#0192af] px-6 py-4 my-8 bg-neutral-50">
                            <p className="font-bold tracking-tight text-xl italic leading-[1.4] text-black/90">
                                &ldquo;The founders I work with don&rsquo;t need more information. They need someone who&rsquo;s been in the room where the hard decisions get made.&rdquo;
                            </p>
                        </div>

                        <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-6">
                            I started Alt Business because I kept meeting founders who were smart, capable, and completely stuck inside problems they couldn&rsquo;t see clearly. Not because they weren&rsquo;t trying. Because nobody had ever helped them look at their business the way I&rsquo;d learned to look at mine. The kind of looking that starts with the numbers but doesn&rsquo;t stop there.
                        </p>

                        <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-6">
                            BrightCEO came out of a different question: what does it actually take to build something you can lead well, not just survive?{' '}
                            <span className="text-amber-600 bg-amber-50 rounded px-1 text-[0.82rem] font-mono">
                                [1–2 sentences about what BrightCEO does and who it serves.]
                            </span>
                        </p>

                        <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-6">
                            What I do now is straightforward, even if the work isn&rsquo;t. I sit with founders, look honestly at their businesses, and help them make the changes that actually matter. Not a framework dropped on top of your situation. The real thing, built for you.
                        </p>

                        <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-6">
                            I work with a small number of clients at a time. That&rsquo;s deliberate. This kind of work requires real attention, and real attention can&rsquo;t be scaled into a package.
                        </p>

                        {/* Also founder of */}
                        <div className="mt-8 pt-8 border-t border-neutral-200">
                            <div className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400 mb-4 font-light">Also founder of</div>
                            <div className="flex gap-2">
                                <span className="text-[0.65rem] uppercase tracking-[0.1em] bg-black text-white px-3 py-1">Alt Business</span>
                                <span className="text-[0.65rem] uppercase tracking-[0.1em] bg-black text-white px-3 py-1">BrightCEO</span>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="p-6 lg:p-8">
                        {/* Portrait placeholder */}
                        <div className="bg-neutral-200 h-72 flex items-center justify-center mb-6">
                            <span className="text-[0.6rem] uppercase tracking-[0.15em] text-neutral-400 text-center leading-[2]">
                                IMAGE<br />(editorial portrait<br />not a headshot)
                            </span>
                        </div>

                        <div className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400 mb-3 font-light">Quick facts</div>
                        <div className="text-[0.78rem] leading-[2.2] text-neutral-500">
                            Based in <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono text-[0.72rem]">[City, Country]</span><br />
                            Founder, builder, advisor<br />
                            <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono text-[0.72rem]">[Years]</span> years in business<br />
                            <Link href="#" className="text-xs uppercase tracking-[0.1em] text-[#0192af] font-light">LinkedIn →</Link><br />
                            <Link href="#" className="text-xs uppercase tracking-[0.1em] text-[#0192af] font-light">Newsletter →</Link>
                        </div>

                        <div className="mt-8 pt-6 border-t border-neutral-200">
                            <Link
                                href="/services"
                                className="block text-center text-[0.7rem] uppercase tracking-[0.1em] bg-black text-white py-3 px-6 font-light hover:bg-neutral-800 transition-colors"
                            >
                                Work with me →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-black text-white py-16 md:py-20 px-6 md:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-16 items-center">
                    <div>
                        <h2 className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white">
                            Recognise yourself<br />
                            <em className="italic text-white/50">in any of this?</em>
                        </h2>
                        <p className="text-[0.85rem] text-white/55 mt-4 leading-[1.65]">
                            Good. That means we&rsquo;d probably have a useful conversation.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/services"
                            className="text-[0.7rem] uppercase tracking-[0.1em] bg-white text-black py-3 px-6 text-center font-light hover:bg-neutral-100 transition-colors"
                        >
                            See how I work
                        </Link>
                        <Link
                            href="/speaking"
                            className="text-[0.7rem] uppercase tracking-[0.1em] border border-white/30 text-white py-3 px-6 text-center font-light hover:border-white/60 transition-colors"
                        >
                            Get in touch
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
