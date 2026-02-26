'use client';

export default function Ticker() {
    const items = [
        'Profit Clarity',
        'Financial Health',
        'Structural Soundness',
        'Founder Empathy',
        'Alt Business',
        'BrightCEO',
        'Built From Nothing',
        'Real Business. Real Advice.',
        'Honest Operator',
    ];

    const tickerText = items.join('  —  ');

    return (
        <div className="bg-black text-white py-3 overflow-hidden border-y border-neutral-200 select-none">
            <div className="flex whitespace-nowrap animate-marquee">
                <span className="text-xs font-light uppercase tracking-[0.15em] px-4">
                    {tickerText}  —  {tickerText}  —
                </span>
                <span className="text-xs font-light uppercase tracking-[0.15em] px-4">
                    {tickerText}  —  {tickerText}  —
                </span>
            </div>
        </div>
    );
}
