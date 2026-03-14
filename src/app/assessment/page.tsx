'use client';

import { useState } from 'react';
import Footer from '../../components/layout/Footer';

interface Question {
    id: number;
    text: string;
    options: {
        text: string;
        score: number;
    }[];
}

interface Pillar {
    id: number;
    title: string;
    subtitle: string;
    desc: string;
    questions: Question[];
}

const pillars: Pillar[] = [
    {
        id: 1,
        title: 'Profit Architecture',
        subtitle: 'Pillar 01',
        desc: 'How your business generates and retains money. Margins, pricing, revenue concentration, and whether profit is by design or by accident.',
        questions: [
            {
                id: 1,
                text: "When you look at your gross margin, do you know exactly what's driving it and what's eating it?",
                options: [
                    { text: "Yes. I know my margins by product, service line, or client segment and I review them regularly.", score: 4 },
                    { text: "Roughly. I have a general sense but I don't break it down at that level.", score: 2 },
                    { text: "Not really. I look at overall profit and loss but margin by segment isn't something I track.", score: 1 },
                    { text: "I'm not sure what my gross margin actually is right now.", score: 0 },
                ],
            },
            {
                id: 2,
                text: "How was your current pricing set, and when did you last review it against your actual costs?",
                options: [
                    { text: "Pricing is reviewed at least annually. It's based on cost structure, market positioning, and the value we deliver.", score: 4 },
                    { text: "We've raised prices once or twice but it wasn't a structured review. More reactive than strategic.", score: 2 },
                    { text: "Pricing was set a while ago. I know I should revisit it but it hasn't happened.", score: 1 },
                    { text: "Pricing was based on what felt right at the time or what competitors were charging. I've never properly costed it.", score: 0 },
                ],
            },
            {
                id: 3,
                text: "How concentrated is your revenue? What would happen if your top two clients or revenue streams disappeared tomorrow?",
                options: [
                    { text: "We're well-diversified. No single client or stream represents more than 20% of revenue.", score: 4 },
                    { text: "We have some concentration but it's manageable. One or two clients matter a lot but we have others.", score: 2 },
                    { text: "One or two clients represent more than 40% of revenue. Losing them would be serious.", score: 1 },
                    { text: "The majority of our revenue comes from one or two sources. It keeps me up at night.", score: 0 },
                ],
            },
            {
                id: 4,
                text: "Is profit in your business a deliberate outcome, or something that's left over after everything else?",
                options: [
                    { text: "Deliberate. We set a profit target, build our cost structure around it, and track it against that target.", score: 4 },
                    { text: "Partly deliberate. We have a sense of what we want to make but the structure isn't built around it explicitly.", score: 2 },
                    { text: "Mostly leftover. Profit is what remains after we've paid for everything. Some months there's more, some months less.", score: 1 },
                    { text: "Profit is a hope, not a plan. I'm not sure our current model is actually profitable in a structural sense.", score: 0 },
                ],
            },
            {
                id: 5,
                text: "Does your business have a cash reserve that would let it survive 60+ days without new revenue?",
                options: [
                    { text: "Yes. We have a deliberate cash buffer and I know exactly how long we could run on it.", score: 4 },
                    { text: "Probably. We're not tight on cash but I haven't calculated the runway formally.", score: 2 },
                    { text: "We manage month to month. A slow patch would hurt quickly.", score: 1 },
                    { text: "No. Cash is tight. A bad month would be a real problem.", score: 0 },
                ],
            },
        ],
    },
    {
        id: 2,
        title: 'Team & Cost Structure',
        subtitle: 'Pillar 02',
        desc: "Whether your team and cost base are built to support growth or quietly eating it. The relationship between your headcount, roles, and actual output.",
        questions: [
            {
                id: 6,
                text: "Do you know your total cost per head, and does the output of each role justify that cost?",
                options: [
                    { text: "Yes. I know what each role costs fully loaded (salary, tax, benefits, overhead) and I can connect it to revenue or output.", score: 4 },
                    { text: "I know salaries but I haven't calculated the full cost per head or tried to connect it to output.", score: 2 },
                    { text: "Not really. The team has grown and costs have grown with it but I've never broken it down that way.", score: 1 },
                    { text: "I don't have a clear picture of what people actually cost or whether those costs are justified.", score: 0 },
                ],
            },
            {
                id: 7,
                text: "Are there roles in your business where you're not sure what the person actually does or what would stop if they left?",
                options: [
                    { text: "No. Every role has a clear purpose and I could describe what changes if that person left tomorrow.", score: 4 },
                    { text: "Mostly. There are one or two roles that have become a bit undefined over time.", score: 2 },
                    { text: "Yes, a few. The business has evolved and some roles haven't kept up with it.", score: 1 },
                    { text: "Honestly, several. The org chart doesn't really reflect how work actually gets done.", score: 0 },
                ],
            },
            {
                id: 8,
                text: "When you hire, is it planned or reactive? Do you hire ahead of need, behind it, or at the point of crisis?",
                options: [
                    { text: "Planned. We have a hiring roadmap linked to revenue milestones and we hire proactively, not reactively.", score: 4 },
                    { text: "Mixed. Sometimes planned, sometimes reactive. We're getting better at it.", score: 2 },
                    { text: "Mostly reactive. We hire when something breaks or someone is overwhelmed.", score: 1 },
                    { text: "Crisis-driven. We usually hire too late and under pressure. It never goes as planned.", score: 0 },
                ],
            },
            {
                id: 9,
                text: "What percentage of your revenue goes to total people costs (salaries, contractors, freelancers)? Is that number healthy for your model?",
                options: [
                    { text: "I know the number and it's within a healthy range for my industry and business model.", score: 4 },
                    { text: "I know the number but I'm not sure if it's healthy. I've never benchmarked it.", score: 2 },
                    { text: "I'd have to calculate it. It's not a number I track specifically.", score: 1 },
                    { text: "I suspect it's too high but I haven't looked at it directly because I'm not sure what I'd do about it.", score: 0 },
                ],
            },
            {
                id: 10,
                text: "Does your team know what the business is trying to achieve this year, and how their work connects to it?",
                options: [
                    { text: "Yes. We have clear goals, people know their part in them, and we track progress together.", score: 4 },
                    { text: "Broadly. They know the general direction but the connection to individual roles isn't always explicit.", score: 2 },
                    { text: "Vaguely. The goals are in my head but I haven't communicated them clearly or consistently.", score: 1 },
                    { text: "Probably not. We're mostly focused on getting through the week. Long-term goals don't really land.", score: 0 },
                ],
            },
        ],
    },
    {
        id: 3,
        title: 'Systems & Founder Dependency',
        subtitle: 'Pillar 03',
        desc: "How much of your business lives in your head. Whether processes exist, whether they're followed, and whether you could step away without everything stopping.",
        questions: [
            {
                id: 11,
                text: "If you disappeared for two weeks with no access to email or phone, what would actually stop?",
                options: [
                    { text: "Almost nothing. The team handles operations well. I'd come back to a business that had continued running.", score: 4 },
                    { text: "Some things would slow down but not stop. There'd be issues but nothing catastrophic.", score: 2 },
                    { text: "Several important things would stop or go badly. Key decisions and client relationships need me.", score: 1 },
                    { text: "A lot would stop. I'm the bottleneck for most things that actually matter. I'd never actually do this.", score: 0 },
                ],
            },
            {
                id: 12,
                text: "Are your core business processes documented? Could someone new follow them without asking you?",
                options: [
                    { text: "Yes. We have documented processes for the key parts of the business. They're used and maintained.", score: 4 },
                    { text: "Some are. We've documented the obvious things but a lot still lives in people's heads.", score: 2 },
                    { text: "Mostly not. Documentation is on the list but it never makes it to the top.", score: 1 },
                    { text: "No. The business runs on tribal knowledge and I'm the main source of it.", score: 0 },
                ],
            },
            {
                id: 13,
                text: "Are there decisions in your business that only you can make, even though someone else probably should be able to?",
                options: [
                    { text: "Very few. We have clear authority levels. People make decisions within their lanes without coming to me.", score: 4 },
                    { text: "Some. There are a few areas where I'm still the default but I'm working on changing that.", score: 2 },
                    { text: "Many. Most decisions above a certain size come to me. I'm often the last stop before anything moves.", score: 1 },
                    { text: "Almost everything of any importance. I'm the decision-maker for the whole business and it's exhausting.", score: 0 },
                ],
            },
            {
                id: 14,
                text: "Do you have a regular cadence for reviewing your business performance, or is it only when something goes wrong?",
                options: [
                    { text: "Regular cadence. We review key metrics weekly or monthly in a structured way. It drives decisions.", score: 4 },
                    { text: "Monthly or so. It happens but it's not always structured or consistently useful.", score: 2 },
                    { text: "Quarterly at best. I review numbers when something prompts it, not as a rhythm.", score: 1 },
                    { text: "Mostly reactive. I look at the numbers when something feels wrong, not as a regular practice.", score: 0 },
                ],
            },
            {
                id: 15,
                text: "When you think about stepping back from day-to-day operations in the next two to three years, does that feel possible or impossible right now?",
                options: [
                    { text: "Possible and planned. We're actively building toward that. There's a clear structure that could run without me.", score: 4 },
                    { text: "Possible in theory. I'd like it to be, and we're making progress, but there's still a lot of me in the business.", score: 2 },
                    { text: "Unlikely in that timeframe. The business isn't structured to run without me yet and I'm not sure how to get there.", score: 1 },
                    { text: "Impossible right now. The business and I are the same thing. That's the problem I'm trying to solve.", score: 0 },
                ],
            },
        ],
    },
];

function getScoreLabel(score: number): { label: string; color: string; className: string } {
    if (score >= 14) return { label: 'Solid Foundation', color: '#2d6a4f', className: 'high' };
    if (score >= 8) return { label: 'Needs Attention', color: '#b45309', className: 'mid' };
    return { label: 'Priority Area', color: '#107f87', className: 'low' };
}

export default function AssessmentPage() {
    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [showResults, setShowResults] = useState(false);
    const [email, setEmail] = useState('');

    const handleAnswer = (questionId: number, score: number) => {
        setAnswers((prev) => ({ ...prev, [questionId]: score }));
    };

    const calculatePillarScore = (pillarId: number) => {
        const pillar = pillars.find((p) => p.id === pillarId);
        if (!pillar) return 0;
        let score = 0;
        pillar.questions.forEach((q) => {
            score += answers[q.id] ?? 0;
        });
        return score;
    };

    const totalAnswered = Object.keys(answers).length;
    const totalQuestions = 15;
    const allAnswered = totalAnswered === totalQuestions;

    const pillarScores = [
        { id: 1, score: calculatePillarScore(1) },
        { id: 2, score: calculatePillarScore(2) },
        { id: 3, score: calculatePillarScore(3) },
    ];

    const handleSubmit = () => {
        if (allAnswered) {
            setShowResults(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    if (showResults) {
        return (
            <>
                {/* Results Hero */}
                <section className="bg-neutral-50 border-b border-neutral-200 px-6 md:px-8 lg:px-12 py-12 md:py-16">
                    <div className="text-[0.6rem] uppercase tracking-[0.2em] text-[#107f87] mb-4 font-light">
                        Your Business Health Report
                    </div>
                    <h1 className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-black/90 mb-4">
                        Here&apos;s where your<br />business actually stands.
                    </h1>
                    <p className="text-[0.9rem] text-neutral-500 leading-[1.65] max-w-xl">
                        Based on your answers, here&apos;s a breakdown across the three pillars of the Alt Business Performance Framework. Read the findings carefully. The number matters less than what it&apos;s telling you.
                    </p>
                </section>

                {/* Score Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200">
                    {pillarScores.map((pillarScore) => {
                        const pillar = pillars.find((p) => p.id === pillarScore.id)!;
                        const scoreInfo = getScoreLabel(pillarScore.score);
                        const maxScore = 20;
                        const percentage = (pillarScore.score / maxScore) * 100;

                        return (
                            <div
                                key={pillarScore.id}
                                className={`px-6 md:px-8 py-8 ${pillarScore.id < 3 ? 'border-b md:border-b-0 md:border-r border-neutral-200' : ''}`}
                            >
                                <div className="text-[0.6rem] uppercase tracking-[0.15em] text-neutral-400 mb-3 font-light">
                                    Pillar 0{pillarScore.id} — {pillar.title}
                                </div>
                                <div
                                    className="font-bold tracking-tight text-4xl md:text-5xl leading-none mb-1"
                                    style={{ color: scoreInfo.color }}
                                >
                                    {pillarScore.score} / 20
                                </div>
                                <div
                                    className="text-[0.65rem] uppercase tracking-[0.1em] mb-4"
                                    style={{ color: scoreInfo.color }}
                                >
                                    {scoreInfo.label}
                                </div>
                                <div className="h-1 bg-neutral-200 rounded-full mb-4">
                                    <div
                                        className="h-full rounded-full transition-all duration-500"
                                        style={{ width: `${percentage}%`, backgroundColor: scoreInfo.color }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </section>

                {/* Findings + Next Steps */}
                <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] border-b border-neutral-200">
                    {/* Key Findings */}
                    <div className="px-6 md:px-8 lg:px-12 py-12 border-b lg:border-b-0 lg:border-r border-neutral-200">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-[0.6rem] uppercase tracking-[0.2em] text-neutral-400 font-light">Key findings</span>
                            <div className="flex-1 h-px bg-neutral-200" />
                        </div>

                        <div className="space-y-8">
                            <div className="pb-8 border-b border-neutral-200">
                                <div className="text-[0.6rem] uppercase tracking-[0.15em] text-[#2d6a4f] mb-2 font-light">Strength</div>
                                <h3 className="font-bold tracking-tight text-lg mb-2">Profit intent is there</h3>
                                <p className="text-[0.82rem] text-neutral-500 leading-[1.65]">
                                    You&apos;re thinking about profit more deliberately than most founders at your stage. Pricing has been reviewed, you have some sense of margin by area, and you have a cash buffer. These aren&apos;t small things. Many founders I work with don&apos;t have any of them.
                                </p>
                            </div>

                            <div className="pb-8 border-b border-neutral-200">
                                <div className="text-[0.6rem] uppercase tracking-[0.15em] text-[#b45309] mb-2 font-light">Worth watching</div>
                                <h3 className="font-bold tracking-tight text-lg mb-2">Cost structure is silently growing</h3>
                                <p className="text-[0.82rem] text-neutral-500 leading-[1.65]">
                                    The team has grown and some roles have become undefined over time. This is very common and rarely deliberate. It usually happens when good people get hired for one purpose and quietly absorb tasks that belong somewhere else. The cost stays. The clarity goes.
                                </p>
                            </div>

                            <div>
                                <div className="text-[0.6rem] uppercase tracking-[0.15em] text-[#107f87] mb-2 font-light">Priority</div>
                                <h3 className="font-bold tracking-tight text-lg mb-2">The business lives in your head and it&apos;s costing you</h3>
                                <p className="text-[0.82rem] text-neutral-500 leading-[1.65]">
                                    Your systems score points to the most common and most expensive pattern I see in founder-led businesses: the founder is the system. Decisions wait for you. Processes aren&apos;t written down. Two weeks away would be genuinely hard. This isn&apos;t a personality flaw. It&apos;s a structural gap. And it doesn&apos;t fix itself by working harder. It fixes by building differently.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps + Capture */}
                    <div className="px-6 md:px-8 lg:px-10 py-12">
                        <div className="bg-neutral-50 border border-neutral-200 p-6 mb-6">
                            <div className="text-[0.6rem] uppercase tracking-[0.15em] text-neutral-400 mb-4 font-light">
                                Based on your results, here&apos;s what to do next
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-3 text-[0.78rem] text-neutral-600 leading-[1.55]">
                                    <span className="text-[0.6rem] text-[#107f87] font-light shrink-0">01</span>
                                    <span>Start with the systems pillar, not the numbers. Until decisions can be made without you, the other two pillars will keep underperforming.</span>
                                </div>
                                <div className="flex gap-3 text-[0.78rem] text-neutral-600 leading-[1.55]">
                                    <span className="text-[0.6rem] text-[#107f87] font-light shrink-0">02</span>
                                    <span>Map what you do in a week. Not your job title, what you actually do. Then ask which of those things should never be done by you again.</span>
                                </div>
                                <div className="flex gap-3 text-[0.78rem] text-neutral-600 leading-[1.55]">
                                    <span className="text-[0.6rem] text-[#107f87] font-light shrink-0">03</span>
                                    <span>Do a full cost per head calculation. Include tax, benefits, tools, and overhead. Compare it to what you know about output.</span>
                                </div>
                            </div>
                        </div>

                        {/* Email Capture */}
                        <div className="border-2 border-neutral-900 p-6 bg-white mb-6">
                            <h3 className="font-bold tracking-tight text-lg mb-2">Want the full written report?</h3>
                            <p className="text-[0.78rem] text-neutral-500 leading-[1.55] mb-4">
                                Enter your email and I&apos;ll send you a full breakdown of your results with specific recommendations for each pillar. No pitch. Just the report.
                            </p>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-neutral-200 px-4 py-3 text-[0.75rem] text-neutral-700 placeholder:text-neutral-400 bg-white focus:outline-none focus:border-neutral-400 mb-3"
                            />
                            <button className="w-full text-[0.7rem] uppercase tracking-[0.1em] bg-neutral-900 text-white px-6 py-3 font-light hover:bg-neutral-800 transition-colors">
                                Send me the report →
                            </button>
                            <p className="text-[0.58rem] text-neutral-400 mt-3 font-light">
                                I&apos;ll also let you know when new issues of the newsletter are out. You can unsubscribe any time.
                            </p>
                        </div>

                        {/* Book Conversation */}
                        <div className="border-t border-neutral-200 pt-6">
                            <div className="text-[0.6rem] uppercase tracking-[0.12em] text-neutral-400 mb-3 font-light">
                                Ready to go deeper?
                            </div>
                            <h3 className="font-bold tracking-tight text-base mb-2 leading-[1.3]">The assessment shows the pattern. The Audit goes inside it.</h3>
                            <p className="text-[0.78rem] text-neutral-500 leading-[1.55] mb-4">
                                If your score points to something you want to actually fix, let&apos;s have a real conversation about what that would look like.
                            </p>
                            <button className="w-full text-[0.7rem] uppercase tracking-[0.1em] bg-neutral-900 text-white px-6 py-3 font-light hover:bg-neutral-800 transition-colors">
                                Book a conversation →
                            </button>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className="bg-neutral-900 text-white px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-center">
                    <div>
                        <div className="text-[0.6rem] uppercase tracking-[0.2em] text-white/40 mb-4 font-light">
                            Alt Business Performance Framework
                        </div>
                        <h1 className="font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-4">
                            Find out where<br />
                            your business is<br />
                            <em className="italic text-white/50">quietly breaking.</em>
                        </h1>
                        <p className="text-[0.9rem] text-white/55 leading-[1.7] max-w-lg">
                            15 minutes. 15 questions. A personalised score across the three pillars that determine whether your business is financially healthy, structurally sound, and founder-proof. No sign-up to start.
                        </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-6 md:p-8">
                        <div className="space-y-3">
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-[0.6rem] uppercase tracking-[0.1em] text-white/35 font-light">Time</span>
                                <span className="text-[0.7rem] text-white/70 font-light">~15 minutes</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-[0.6rem] uppercase tracking-[0.1em] text-white/35 font-light">Questions</span>
                                <span className="text-[0.7rem] text-white/70 font-light">15 across 3 pillars</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-[0.6rem] uppercase tracking-[0.1em] text-white/35 font-light">Output</span>
                                <span className="text-[0.7rem] text-white/70 font-light">Scored report + findings</span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-white/10">
                                <span className="text-[0.6rem] uppercase tracking-[0.1em] text-white/35 font-light">Framework</span>
                                <span className="text-[0.7rem] text-white/70 font-light">Alt Business Model</span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                                <span className="text-[0.6rem] uppercase tracking-[0.1em] text-white/35 font-light">Cost</span>
                                <span className="text-[0.7rem] text-white/70 font-light">Free</span>
                            </div>
                        </div>
                        <button
                            onClick={() => document.getElementById('assessment-start')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full mt-6 text-[0.7rem] uppercase tracking-[0.1em] bg-[#107f87] text-white px-6 py-3 font-light hover:bg-[#0d6a72] transition-colors text-center"
                        >
                            Start the assessment →
                        </button>
                    </div>
                </div>
            </section>

            {/* Pillar Tabs */}
            <section id="assessment-start">
                <div className="px-6 md:px-8 lg:px-12 py-6 border-b border-neutral-200 bg-neutral-50">
                    <div className="text-[0.6rem] uppercase tracking-[0.15em] text-neutral-400 font-light">
                        Assessment structure — 3 pillars, 5 questions each
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 border-b border-neutral-200">
                    {pillars.map((pillar, index) => {
                        const currentPillarQuestions = pillar.questions.map((q) => q.id);
                        const answeredInPillar = currentPillarQuestions.filter((qid) => answers[qid] !== undefined).length;
                        const isActive = answeredInPillar < 5 && (index === 0 || answeredInPillar > 0 || pillarScores.slice(0, index).every((p) => p.score > 0));

                        return (
                            <div
                                key={pillar.id}
                                className={`px-6 md:px-8 py-6 ${index < 2 ? 'border-b md:border-b-0 md:border-r border-neutral-200' : ''} ${isActive ? 'bg-neutral-50' : ''}`}
                            >
                                <div className={`text-[0.58rem] uppercase tracking-[0.15em] mb-2 font-light ${isActive ? 'text-[#107f87]' : 'text-neutral-400'}`}>
                                    Pillar 0{pillar.id}
                                </div>
                                <h3 className="font-bold tracking-tight text-base mb-1">{pillar.title}</h3>
                                <p className="text-[0.75rem] text-neutral-500 leading-[1.5]">{pillar.desc}</p>
                                {isActive && <div className="h-[3px] bg-[#107f87] mt-4" />}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Progress Bar */}
            <section className="px-6 md:px-8 lg:px-12 py-4 border-b border-neutral-200 bg-neutral-50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    {Array.from({ length: totalQuestions }).map((_, i) => {
                        const questionId = i + 1;
                        const isDone = answers[questionId] !== undefined;
                        const isCurrent = !isDone && (i === 0 || answers[i] !== undefined);

                        return (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${
                                    isDone ? 'bg-[#107f87]' : isCurrent ? 'bg-neutral-900' : 'bg-neutral-200'
                                }`}
                            />
                        );
                    })}
                    <span className="text-[0.6rem] text-neutral-400 ml-2 font-light">
                        Question {Math.min(totalAnswered + 1, totalQuestions)} of {totalQuestions}
                    </span>
                </div>
                <div className="text-[0.6rem] text-neutral-400 font-light hidden md:block">
                    Pillar {Math.min(Math.floor(totalAnswered / 5) + 1, 3)} of 3 — {pillars[Math.min(Math.floor(totalAnswered / 5), 2)]?.title}
                </div>
            </section>

            {/* Questions */}
            {pillars.map((pillar) => (
                <section key={pillar.id} className="px-6 md:px-8 lg:px-12 py-10 border-b border-neutral-200">
                    <div className="text-[0.6rem] uppercase tracking-[0.2em] text-[#107f87] mb-2 font-light">
                        {pillar.subtitle}
                    </div>
                    <h2 className="font-bold tracking-tight text-2xl md:text-3xl mb-2">{pillar.title}</h2>
                    <p className="text-[0.85rem] text-neutral-500 leading-[1.65] max-w-2xl mb-8">
                        {pillar.id === 1 && "These questions look at how your business is designed to make money. Not whether you have revenue, but whether the way you generate and keep it is intentional or inherited by accident."}
                        {pillar.id === 2 && "These questions examine whether the cost of your people and operations is proportional to the output and growth they enable, or whether it's gradually suffocating the business."}
                        {pillar.id === 3 && "These questions get at the part founders most often avoid: how much of the business runs because of you, and what would actually happen if you weren't there. This is where most businesses quietly break."}
                    </p>

                    <div className="space-y-8">
                        {pillar.questions.map((question) => (
                            <div key={question.id} className="pb-8 border-b border-neutral-200 last:border-b-0 last:pb-0">
                                <div className="text-[0.58rem] text-neutral-400 mb-2 font-light">
                                    Question {String(question.id).padStart(2, '0')} / 15
                                </div>
                                <h3 className="font-bold tracking-tight text-lg md:text-xl mb-4 leading-[1.3]">{question.text}</h3>
                                <div className="flex flex-col gap-2">
                                    {question.options.map((option, optIndex) => {
                                        const isSelected = answers[question.id] === option.score;
                                        return (
                                            <button
                                                key={optIndex}
                                                onClick={() => handleAnswer(question.id, option.score)}
                                                className={`flex items-start gap-3 p-4 border text-left transition-colors ${
                                                    isSelected
                                                        ? 'bg-neutral-50 border-neutral-900'
                                                        : 'border-neutral-200 hover:bg-neutral-50'
                                                }`}
                                            >
                                                <div
                                                    className={`w-4 h-4 rounded-full border-2 shrink-0 mt-0.5 ${
                                                        isSelected ? 'bg-neutral-900 border-neutral-900' : 'border-neutral-300'
                                                    }`}
                                                />
                                                <span className="flex-1 text-[0.82rem] text-neutral-600 leading-[1.55]">
                                                    {option.text}
                                                </span>
                                                <span className="text-[0.58rem] text-neutral-400 shrink-0 font-light">
                                                    {option.score} pts
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            {/* Submit Section */}
            <section className="px-6 md:px-8 lg:px-12 py-8 bg-neutral-50 border-b border-neutral-200 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[0.82rem] text-neutral-500 leading-[1.6] max-w-md">
                    {allAnswered
                        ? "You've answered all 15 questions. Your report takes about 10 seconds to generate."
                        : `You've answered ${totalAnswered} of ${totalQuestions} questions. Complete all questions to see your results.`}
                </p>
                <button
                    onClick={handleSubmit}
                    disabled={!allAnswered}
                    className={`text-[0.75rem] uppercase tracking-[0.1em] px-8 py-4 font-light transition-colors ${
                        allAnswered
                            ? 'bg-[#107f87] text-white hover:bg-[#0d6a72]'
                            : 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                    }`}
                >
                    {allAnswered ? 'Generate my results →' : 'Complete all questions'}
                </button>
            </section>

            <Footer />
        </>
    );
}
