'use client';

import { useState } from 'react';
import { Icon } from "@iconify/react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Do you offer consultations for small startups?",
        answer: "Yes, ALT Solutions specializes in providing 'Financial Intelligence' to startups and SMEs, helping you set up solid accounting systems and strategic profit planning from day one."
    },
    {
        question: "What is included in the mock board reviews?",
        answer: "Our academic mentoring includes rigorous practice exams, personalized feedback, and coaching on difficult topics to ensure you are fully prepared for the CPA licensure exams."
    },
    {
        question: "Can you help with business plan feasibility studies?",
        answer: "Absolutely. We critique market analysis, operational logistics, and financial projections to ensure your venture is viable, similar to our work with 'Splash 'n Go Car Wash'."
    },
    {
        question: "Are your services available outside Zamboanga?",
        answer: "Yes, while we are based in Zamboanga City, we are active on global networks and can provide remote consultancy and BPO services."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="animate-fade-up lg:pr-8 lg:pt-0 w-full mb-24 gap-x-20 gap-y-20">
            <div className="grid lg:grid-cols-12 lg:gap-4">
                <div className="lg:col-span-4 space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-neutral-900">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-[17px] text-neutral-500 leading-relaxed font-normal">
                        Everything you need to know about our services. Can't find the answer you're looking for? Please <a href="#contact" className="underline underline-offset-4 text-neutral-900 hover:text-neutral-600 transition-colors">contact us directly</a>.
                    </p>
                </div>

                <div className="lg:col-span-8">
                    <div className="bg-stone-50 border border-stone-200 rounded-3xl p-2 gap-2 flex flex-col">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-neutral-200/60 rounded-2xl p-6 cursor-pointer group hover:border-neutral-300 transition-colors"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base font-medium text-neutral-900">{faq.question}</h3>
                                    <Icon
                                        icon="ph:caret-down"
                                        className={`text-neutral-400 w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </div>
                                <div className={`mt-4 text-neutral-500 text-[15px] leading-relaxed transition-all duration-300 ${openIndex === index ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                                    {faq.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
