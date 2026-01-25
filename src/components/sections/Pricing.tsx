import { Icon } from "@iconify/react";

export default function Pricing() {
    return (
        <section className="animate-fade-up w-full pb-0 gap-x-20 gap-y-20 lg:pb-0 lg:pt-0 mb-24">
            <div className="grid lg:grid-cols-12 lg:gap-4">
                <div className="lg:col-span-4 space-y-6">
                    <h2 className="lg:text-4xl text-3xl font-medium text-neutral-900 tracking-tight">
                        Growth for businesses built to last.
                    </h2>
                    <p className="text-[17px] leading-relaxed font-normal text-neutral-500">
                        Dedicated financial advisor.
                        <br />
                        Strategic foresight.
                        <br />
                        Operational efficiency.
                        <br />
                        Long-term wealth creation.
                    </p>
                </div>
                <div className="lg:col-span-8">
                    <div className="flex flex-col gap-2 bg-stone-50 border-stone-200 border rounded-[32px] pt-2 pr-2 pb-2 pl-2 gap-x-2 gap-y-2">
                        {/* Top Pricing Card */}
                        <div className="bg-white border-neutral-200/60 border rounded-3xl pt-4 pr-4 pb-4 pl-4">
                            <div className="flex items-center gap-3 mb-4">
                                <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
                                    Strategic Retainer
                                </h3>
                                <span className="bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full text-xs font-medium border border-neutral-200/50">
                                    Most Popular
                                </span>
                            </div>
                            <p className="text-[15px] text-neutral-500 mb-8">
                                Perfect for SMEs and Startups scaling up operations.
                            </p>
                            <div className="text-2xl font-semibold text-neutral-900 tracking-tight mb-4">
                                Custom / month
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="flex-1 bg-neutral-900 text-white font-medium px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 text-[15px]">
                                    Start Today
                                    <Icon icon="ph:arrow-right" />
                                </button>
                                <button className="flex-1 bg-white text-neutral-900 border border-neutral-200 font-medium px-6 py-3 rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2 text-[15px]">
                                    <Icon icon="ph:calendar" />
                                    Book a Call
                                </button>
                            </div>
                        </div>

                        {/* Features Card */}
                        <div className="bg-white border-neutral-200/60 border rounded-3xl pt-4 pr-4 pb-4 pl-4">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                                    <Icon icon="ph:check" className="text-neutral-400 shrink-0 w-5 h-5" />
                                    <span>Priority analysis & reporting <span className="text-neutral-400 ml-1 cursor-help" title="Info">ⓘ</span></span>
                                </li>
                                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                                    <Icon icon="ph:check" className="text-neutral-400 shrink-0 w-5 h-5" />
                                    <span>
                                        <span className="border-b border-neutral-300">All core services</span>,
                                        tailored to your needs
                                    </span>
                                </li>
                                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                                    <Icon icon="ph:check" className="text-neutral-400 shrink-0 w-5 h-5" />
                                    <span>Quarterly reviews and strategy adjustments</span>
                                </li>
                                <li className="flex items-start gap-3 text-[15px] text-neutral-600">
                                    <Icon icon="ph:check" className="text-neutral-400 shrink-0 w-5 h-5" />
                                    <span>1:1 communication and optional weekly sync</span>
                                </li>

                            </ul>
                        </div>

                        {/* Bottom Grid */}
                        <div className="grid sm:grid-cols-2 gap-2">
                            <div className="bg-white border-neutral-200/60 border rounded-3xl pt-6 pr-6 pb-6 pl-6">
                                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-4 text-neutral-900">
                                    <Icon icon="ph:pause" width="16" height="16" />
                                </div>
                                <h4 className="text-base font-medium text-neutral-900 mb-2">Flexible Engagement</h4>
                                <p className="text-[14px] leading-relaxed text-neutral-500">
                                    Scale your retainer up or down based on your current business cycle and needs.
                                </p>
                            </div>
                            <div className="bg-white border border-neutral-200/60 rounded-3xl p-6">
                                <div className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center mb-4 text-neutral-900">
                                    <Icon icon="ph:shield-check" width="16" height="16" />
                                </div>
                                <h4 className="text-base font-medium text-neutral-900 mb-2">Initial Consultation</h4>
                                <p className="text-[14px] leading-relaxed text-neutral-500">
                                    If we're not the right fit after the first week, we'll help you transition smoothly.
                                </p>
                            </div>
                        </div>

                        {/* Powered by Stripe (Mock) */}
                        <div className="flex justify-center py-2 items-center gap-1.5 opacity-60">
                            <Icon icon="ph:lock-key" className="text-neutral-500 w-3 h-3" />
                            <span className="text-[11px] font-medium text-neutral-500">Secure invoicing & payments</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
