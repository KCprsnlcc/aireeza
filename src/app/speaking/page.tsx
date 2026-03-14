'use client';

import { useState } from 'react';
import InnerHero from '@/components/sections/InnerHero';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const topics = [
    {
        title: 'Profit Is a Design Choice, Not a Reward',
        body: 'Most founders treat profit like it\'s something that happens after everything else is sorted. It isn\'t. This talk breaks down what actually determines whether a business is financially healthy, and why the answer is almost never "work harder." Best for founder audiences, accelerators, business events.',
    },
    {
        title: "The Structural Trap Founders Don't See Until It's Almost Too Late",
        body: "There's a specific kind of business problem that looks like a cash problem, feels like a people problem, and gets diagnosed as a marketing problem. It's usually none of those. This talk is about finding the real thing. Best for panels, roundtables, experienced founder audiences.",
    },
    {
        title: 'Building Without Breaking Yourself',
        body: "About the version of ambition that's honest about the cost, and what deliberately designed business looks like when personal wellbeing isn't treated as optional.",
    },
    {
        title: '[Your fourth speaking topic]',
        body: '[Description of this talk: what you cover, who it\'s for, what people leave thinking differently about. 2–3 sentences.]',
    },
];

const pastEvents = [
    { venue: '[Event or Org Name]', title: '[Talk title or topic]', year: '[Year]' },
    { venue: '[Event or Org Name]', title: '[Talk title or topic]', year: '[Year]' },
    { venue: '[Event or Org Name]', title: '[Talk title or topic]', year: '[Year]' },
];

export default function SpeakingPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    return (
        <>
            <InnerHero
                label="Speaking"
                title={<>The talk that makes<br />founders feel <em className="italic text-neutral-500">seen</em><br />and slightly uncomfortable.</>}
                subtitle={`I don't do motivational. I do honest. The founders who come up after a talk and say "you just described my last two years" are the reason I keep showing up to stages.`}
            />

            {/* Topics */}
            <section className="bg-white border-b border-neutral-200 py-16 md:py-20 px-6 md:px-8 lg:px-12">
                <div className="flex items-center gap-3 mb-10">
                    <span className="text-[0.65rem] font-light uppercase tracking-[0.2em] text-neutral-400">Topics I speak on</span>
                    <div className="flex-1 h-px bg-neutral-200" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {topics.map((topic, i) => (
                        <div
                            key={i}
                            className={`p-8 ${i % 2 === 0 ? 'md:border-r' : ''} ${i < 2 ? 'border-b' : ''} border-neutral-200`}
                        >
                            <h3 className="font-bold tracking-tight text-xl text-black/90 mb-3">
                                {topic.title.startsWith('[') ? (
                                    <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono text-base">{topic.title}</span>
                                ) : topic.title}
                            </h3>
                            <p className="text-[0.82rem] text-neutral-500 leading-[1.7]">
                                {topic.body.startsWith('[') ? (
                                    <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono text-[0.78rem]">{topic.body}</span>
                                ) : topic.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Past engagements */}
            <section className="bg-white border-b border-neutral-200">
                <div className="px-6 md:px-8 lg:px-12 pt-10 pb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-[0.65rem] font-light uppercase tracking-[0.2em] text-neutral-400">Past engagements</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                    </div>
                </div>
                <div className="px-6 md:px-8 lg:px-12 pb-8">
                    {pastEvents.map((event, i) => (
                        <div
                            key={i}
                            className={`grid grid-cols-1 md:grid-cols-[160px_1fr_100px] gap-2 md:gap-8 items-center py-5 ${i < pastEvents.length - 1 ? 'border-b border-neutral-200' : ''
                                }`}
                        >
                            <div className="text-[0.65rem] uppercase tracking-[0.1em] text-neutral-400">
                                <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono">{event.venue}</span>
                            </div>
                            <div className="font-bold tracking-tight text-base text-black/90">
                                <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono text-sm">{event.title}</span>
                            </div>
                            <div className="text-[0.65rem] text-[#0192af] md:text-right uppercase tracking-[0.1em]">
                                <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono">{event.year}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Speaking enquiry + Contact form */}
            <section className="bg-white border-b border-neutral-200 grid grid-cols-1 md:grid-cols-2">
                {/* Speaking enquiry */}
                <div className="p-8 md:p-12 md:border-r border-neutral-200">
                    <div className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400 mb-4 font-light">Speaking enquiries</div>
                    <h3 className="font-bold tracking-tight text-2xl text-black/90 mb-4">
                        Bring this<br />to your audience.
                    </h3>
                    <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-4">
                        I speak at founder events, accelerator programs, business conferences, and private roundtables. If your audience is made up of people who are genuinely trying to build something real, we&rsquo;re probably a good fit.
                    </p>
                    <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-6">
                        I don&rsquo;t do keynotes that could apply to anyone. I&rsquo;m specific, honest, and I leave the room changed. If that&rsquo;s what you&rsquo;re after, let&rsquo;s talk.
                    </p>
                    <Link
                        href="#"
                        className="inline-block text-[0.7rem] uppercase tracking-[0.1em] bg-black text-white py-3 px-6 font-light hover:bg-neutral-800 transition-colors"
                    >
                        Enquire about speaking →
                    </Link>
                </div>

                {/* Contact form */}
                <div className="p-8 md:p-12">
                    <div className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400 mb-4 font-light">Get in touch</div>
                    <h3 className="font-bold tracking-tight text-2xl text-black/90 mb-4">
                        Not sure where<br />
                        <em className="italic text-neutral-500">to start?</em>
                    </h3>
                    <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-6">
                        Just send a message. Tell me where you are, what&rsquo;s not working, or what you&rsquo;re trying to figure out. I read everything.
                    </p>
                    <div className="flex flex-col gap-3">
                        <input
                            type="text"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="border border-neutral-200 px-4 py-3 text-[0.7rem] font-light bg-white text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400"
                        />
                        <input
                            type="email"
                            placeholder="Your email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="border border-neutral-200 px-4 py-3 text-[0.7rem] font-light bg-white text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400"
                        />
                        <textarea
                            placeholder="Your message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            rows={4}
                            className="border border-neutral-200 px-4 py-3 text-[0.7rem] font-light bg-white text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-400 resize-none"
                        />
                        <button className="text-[0.7rem] uppercase tracking-[0.1em] bg-black text-white py-3 px-6 font-light text-center hover:bg-neutral-800 transition-colors">
                            Send →
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <section className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12 px-6 md:px-8 lg:px-12 py-12 border-t border-neutral-200">
                    <div>
                        <div className="font-majesty text-2xl text-black/90 mb-3">Aireeza</div>
                        <p className="text-[0.8rem] text-neutral-500 leading-[1.6]">
                            Profit &amp; Performance Advisor. Helping founder-led businesses get financially healthy, structurally sound, and built to actually last.
                        </p>
                    </div>
                    <div>
                        <div className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400 mb-4 font-light">Navigation</div>
                        <Link href="/about" className="text-[0.8rem] text-neutral-500 block mb-2 hover:text-black transition-colors">About</Link>
                        <Link href="/services" className="text-[0.8rem] text-neutral-500 block mb-2 hover:text-black transition-colors">Services</Link>
                        <Link href="/work" className="text-[0.8rem] text-neutral-500 block mb-2 hover:text-black transition-colors">Work</Link>
                        <Link href="/writing" className="text-[0.8rem] text-neutral-500 block mb-2 hover:text-black transition-colors">Writing</Link>
                        <Link href="/speaking" className="text-[0.8rem] text-neutral-500 block hover:text-black transition-colors">Speaking</Link>
                    </div>
                    <div>
                        <div className="text-[0.65rem] uppercase tracking-[0.15em] text-neutral-400 mb-4 font-light">Connect</div>
                        <a href="#" className="text-[0.8rem] text-neutral-500 block mb-2 hover:text-black transition-colors">LinkedIn</a>
                        <a href="#" className="text-[0.8rem] text-neutral-500 block mb-2 hover:text-black transition-colors">Newsletter</a>
                        <a href="#" className="text-[0.8rem] text-neutral-500 block hover:text-black transition-colors">Contact</a>
                    </div>
                </div>
                <div className="border-t border-neutral-200 px-6 md:px-8 lg:px-12 py-4 flex justify-between text-[0.65rem] text-neutral-400 font-light">
                    <span>© 2026 Aireeza Tandih</span>
                    <span>Alt Business / BrightCEO</span>
                </div>
            </section>
        </>
    );
}
