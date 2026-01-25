import { Icon } from "@iconify/react";

export default function Services() {
    return (
        <section id="services" className="animate-scaleIn animation-delay-300 sm:pl-2 sm:pr-2 sm:pt-2 sm:pb-2 bg-stone-50 w-full max-w-none z-10 border-stone-200 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl mt-12 mb-12">
            {/* Header */}
            <div className="flex animate-fadeInUp sm:pt-6 sm:pr-6 sm:pb-6 sm:pl-6 pt-6 pr-1 pb-6 pl-1 gap-x-6 gap-y-6 items-center">
                <h2 className="text-[44px] leading-[0.9] sm:text-6xl lg:text-7xl xl:text-5xl text-zinc-950 tracking-tighter">
                    Core Competencies
                </h2>
                <span aria-hidden="true" role="separator" aria-orientation="vertical" className="w-px bg-neutral-200 h-10"></span>
                <p className="sm:text-base text-sm text-zinc-950 tracking-tight mt-1">
                    The three pillars of my professional practice
                </p>
            </div>

            <div className="grid grid-cols-1 z-10 mt-6 relative items-stretch gap-x-2 lg:grid-cols-12 sm:gap-2 sm:mt-8">
                {/* STEP 1: Financial Strategy */}
                <div className="lg:col-span-4 sm:p-8 hover-lift flex flex-col bg-white h-full border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
                    <span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-800 tracking-tight">STRATEGY</span>
                    {/* Visual Mockup - Chart/Analysis */}
                    <div className="relative h-48 sm:h-56 rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden p-6 flex items-center justify-center">
                        <div className="bg-white border border-neutral-200 rounded-xl p-4 w-full shadow-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Icon icon="ph:chart-line-up-bold" width="16" height="16" />
                                </div>
                                <div className="h-2 w-24 bg-neutral-100 rounded"></div>
                            </div>
                            <div className="space-y-2">
                                <div className="h-2 w-full bg-neutral-100 rounded"></div>
                                <div className="h-2 w-3/4 bg-neutral-100 rounded"></div>
                                <div className="h-2 w-1/2 bg-neutral-100 rounded"></div>
                            </div>
                        </div>
                    </div>

                    <h3 className="sm:text-4xl text-3xl text-neutral-900 tracking-tighter mt-6">Financial Strategy</h3>
                    <p className="sm:text-base text-sm text-neutral-600 tracking-tight max-w-[52ch] mt-2">
                        Cost-Benefit Analysis, Investment Decision Support, and Profitability Analysis.
                    </p>
                </div>

                {/* STEP 2: Business Operations */}
                <div className="lg:col-span-4 sm:p-8 hover-lift flex flex-col bg-white h-full border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
                    <span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-800 tracking-tight">OPERATIONS</span>

                    <div className="relative h-48 sm:h-56 rounded-2xl border border-neutral-200 overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 p-4">
                        <div className="grid grid-cols-2 gap-3 h-full">
                            <div className="bg-white border border-neutral-200 rounded-lg p-2 shadow-sm flex flex-col justify-center items-center">
                                <Icon icon="ph:gears-bold" className="text-emerald-500 mb-2 w-6 h-6" />
                                <div className="h-1 w-12 bg-neutral-200 rounded"></div>
                            </div>
                            <div className="bg-white border border-neutral-200 rounded-lg p-2 shadow-sm flex flex-col justify-center items-center">
                                <Icon icon="ph:shield-check-bold" className="text-emerald-500 mb-2 w-6 h-6" />
                                <div className="h-1 w-12 bg-neutral-200 rounded"></div>
                            </div>
                            <div className="bg-white border border-neutral-200 rounded-lg p-2 shadow-sm flex flex-col justify-center items-center col-span-2">
                                <div className="w-full flex justify-between items-center mb-1">
                                    <div className="h-1 w-8 bg-neutral-200 rounded"></div>
                                    <div className="h-1 w-4 bg-emerald-400 rounded"></div>
                                </div>
                                <div className="w-full h-1 bg-neutral-100 rounded">
                                    <div className="w-2/3 h-full bg-emerald-500 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h3 className="sm:text-4xl text-3xl text-neutral-900 tracking-tighter mt-6">Business Operations</h3>
                    <p className="sm:text-base text-sm text-neutral-600 tracking-tight max-w-[52ch] mt-2">
                        Internal Control Systems, SME Process Optimization, and Regulatory Compliance.
                    </p>
                </div>

                {/* STEP 3: Academic/Training */}
                <div className="lg:col-span-4 sm:p-8 hover-lift flex flex-col bg-white h-full border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative">
                    <span className="absolute -top-4 left-6 inline-flex items-center px-4 py-1.5 rounded-full border border-neutral-200 bg-white text-xs sm:text-sm text-neutral-800 tracking-tight">ACADEMIC</span>

                    <div className="relative h-48 sm:h-56 rounded-2xl bg-neutral-100 border border-neutral-200 overflow-hidden p-4 flex items-center justify-center">
                        <div className="bg-white p-4 rounded-xl shadow-lg border border-neutral-200 w-full max-w-[200px] text-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 text-purple-600">
                                <Icon icon="ph:student-bold" width="24" height="24" />
                            </div>
                            <div className="h-2 w-20 bg-neutral-200 rounded mx-auto mb-2"></div>
                            <div className="h-2 w-24 bg-neutral-100 rounded mx-auto"></div>
                        </div>
                    </div>

                    <h3 className="sm:text-4xl text-3xl text-neutral-900 tracking-tighter mt-6">Academic & Training</h3>
                    <p className="sm:text-base text-sm text-neutral-600 tracking-tight max-w-[52ch] mt-2">
                        Mock Board Reviews, Business Plan Consulting, and Mentorship.
                    </p>
                </div>
            </div>
        </section>
    );
}
