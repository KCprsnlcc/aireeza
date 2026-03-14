'use client';

import InnerHero from '@/components/sections/InnerHero';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const steps = [
    {
        num: '1',
        title: 'We start with an honest conversation',
        body: "Not a discovery call with a pitch at the end. A real conversation about where your business is, what you're trying to build, and whether I can genuinely help. If I can't, I'll tell you that too.",
    },
    {
        num: '2',
        title: 'I look before I recommend',
        body: "I don't arrive with answers. I arrive with questions. I look at how your business actually makes and spends money, what's structural and what's behavioural, and where the real pressure is coming from. The diagnosis matters more than the prescription.",
    },
    {
        num: '3',
        title: 'We build something that holds',
        body: "The work isn't done when you feel better. It's done when your business runs better. That means structures you actually use, rhythms that don't fall apart when you're busy, and a clarity about your numbers that doesn't require me to be in the room.",
    },
    {
        num: '4',
        title: 'You leave capable, not dependent',
        body: "The goal of working with me is that eventually you don't need me. I want you to finish with a business you understand deeply and a set of tools you can use without me. That's what success looks like.",
    },
];

export default function ServicesPage() {
    return (
        <>
            <InnerHero
                label="Services"
                title={<>I don&rsquo;t sell packages.<br />I solve <em className="italic text-neutral-500">problems.</em></>}
                subtitle="Every founder I work with comes in with a different version of the same feeling: the business is running, but it's not right. We start there, not with a fixed methodology."
            />

            {/* Who this is for */}
            <section className="bg-white border-b border-neutral-200 py-16 md:py-20 px-6 md:px-8 lg:px-12">
                <div className="flex items-center gap-3 mb-10">
                    <span className="text-[0.65rem] font-light uppercase tracking-[0.2em] text-neutral-400">Who this is for</span>
                    <div className="flex-1 h-px bg-neutral-200" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="font-bold tracking-tight text-2xl text-black/90 mb-5">You&rsquo;re probably a good fit if...</h3>
                        <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-4">
                            You&rsquo;ve been running your business for a while. Things are moving. But when you look at the numbers, or try to plan ahead, or think about where the money actually goes, something doesn&rsquo;t add up. You&rsquo;re not looking for someone to hand you a spreadsheet. You&rsquo;re looking for someone to help you think.
                        </p>
                        <p className="text-[0.88rem] leading-[1.8] text-neutral-500">
                            You&rsquo;re willing to look honestly at how your business is built, even if what you find isn&rsquo;t comfortable. The founders I work with best aren&rsquo;t afraid of the truth. They&rsquo;re just tired of not knowing it.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold tracking-tight text-2xl text-black/90 mb-5">This probably isn&rsquo;t for you if...</h3>
                        <p className="text-[0.88rem] leading-[1.8] text-neutral-500 mb-4">
                            You&rsquo;re looking for someone to validate what you already believe. Or you want a consultant who&rsquo;ll tell you everything is fine and hand you a branded deliverable. I&rsquo;m not that. I&rsquo;m the person who sits across from you and says the thing nobody else in the room will say.
                        </p>
                        <p className="text-[0.88rem] leading-[1.8] text-neutral-500">
                            I also don&rsquo;t work with businesses at idea stage. You need to have skin in the game already — real revenue, real problems, real stakes.
                        </p>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="bg-white border-b border-neutral-200 py-16 md:py-20 px-6 md:px-8 lg:px-12">
                <div className="flex items-center gap-3 mb-10">
                    <span className="text-[0.65rem] font-light uppercase tracking-[0.2em] text-neutral-400">How it works</span>
                    <div className="flex-1 h-px bg-neutral-200" />
                </div>
                <div className="space-y-0">
                    {steps.map((step, i) => (
                        <div key={step.num} className={`flex gap-6 py-6 ${i < steps.length - 1 ? 'border-b border-neutral-200' : ''} items-start`}>
                            <div className="font-bold tracking-tight text-4xl text-neutral-200 min-w-[3rem] leading-none">{step.num}</div>
                            <div>
                                <h4 className="font-bold tracking-tight text-lg text-black/90 mb-2">{step.title}</h4>
                                <p className="text-[0.82rem] text-neutral-500 leading-[1.7]">{step.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Engagements */}
            <section className="bg-white border-b border-neutral-200">
                <div className="px-6 md:px-8 lg:px-12 pt-12 pb-6">
                    <div className="flex items-center gap-3">
                        <span className="text-[0.65rem] font-light uppercase tracking-[0.2em] text-neutral-400">Engagements</span>
                        <div className="flex-1 h-px bg-neutral-200" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-neutral-200">
                    {/* Advisory */}
                    <div className="p-8 md:p-10 md:border-r border-neutral-200">
                        <div className="text-[0.65rem] text-[#107f87] mb-4 font-light">Advisory</div>
                        <h3 className="font-bold tracking-tight text-xl text-black/90 mb-3">Ongoing Profit &amp; Performance Advisory</h3>
                        <p className="text-[0.85rem] text-neutral-500 leading-[1.7] mb-3">
                            For founders who want a thinking partner in their corner on an ongoing basis. We meet regularly, look at what&rsquo;s happening in the business, and work through the decisions that matter most.
                        </p>
                        <p className="text-[0.85rem] text-neutral-500 leading-[1.7] mb-3">
                            This isn&rsquo;t coaching. It&rsquo;s operational. We track what the business is actually doing, not what it should be doing in theory.
                        </p>
                        <p className="text-[0.82rem] text-neutral-400">
                            Availability: <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono text-[0.72rem]">[X spots open / currently full — waitlist available]</span>
                        </p>
                        <div className="mt-6 pt-5 border-t border-neutral-200">
                            <Link
                                href="/speaking"
                                className="inline-block text-[0.7rem] uppercase tracking-[0.1em] bg-black text-white py-3 px-6 font-light hover:bg-neutral-800 transition-colors"
                            >
                                Enquire →
                            </Link>
                        </div>
                    </div>

                    {/* Intensive */}
                    <div className="p-8 md:p-10">
                        <div className="text-[0.65rem] text-[#107f87] mb-4 font-light">Intensive</div>
                        <h3 className="font-bold tracking-tight text-xl text-black/90 mb-3">Business Health Intensive</h3>
                        <p className="text-[0.85rem] text-neutral-500 leading-[1.7] mb-3">
                            A focused, deep-dive engagement for founders who need answers quickly. We spend{' '}
                            <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono text-[0.72rem]">[X days / weeks]</span>{' '}
                            getting into the real structure of your business, identifying what&rsquo;s breaking, and building a clear plan to fix it.
                        </p>
                        <p className="text-[0.85rem] text-neutral-500 leading-[1.7] mb-3">
                            Good for founders facing a specific inflection point: a growth decision, a profitability problem, a restructure, or a moment where you need clarity before you can move forward.
                        </p>
                        <p className="text-[0.82rem] text-neutral-400">
                            Duration: <span className="text-amber-600 bg-amber-50 rounded px-1 font-mono text-[0.72rem]">[X days / X weeks]</span>
                        </p>
                        <div className="mt-6 pt-5 border-t border-neutral-200">
                            <Link
                                href="/speaking"
                                className="inline-block text-[0.7rem] uppercase tracking-[0.1em] bg-black text-white py-3 px-6 font-light hover:bg-neutral-800 transition-colors"
                            >
                                Enquire →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-black text-white py-16 md:py-20 px-6 md:px-8 lg:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 md:gap-16 items-center">
                    <div>
                        <h2 className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-white">
                            Not sure which<br />
                            <em className="italic text-white/50">is right for you?</em>
                        </h2>
                        <p className="text-[0.85rem] text-white/55 mt-4 leading-[1.65]">
                            That&rsquo;s a good sign. It usually means you need the conversation before the decision. Book 30 minutes. No obligation.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Link
                            href="/speaking"
                            className="text-[0.7rem] uppercase tracking-[0.1em] bg-white text-black py-3 px-6 text-center font-light hover:bg-neutral-100 transition-colors"
                        >
                            Book a 30-min call
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
