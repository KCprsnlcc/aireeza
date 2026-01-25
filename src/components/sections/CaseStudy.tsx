import { Icon } from "@iconify/react";

export default function CaseStudy() {
    return (
        <section className="animate-fade-up w-full pt-20 pb-0 gap-x-20 gap-y-20 lg:pb-0 lg:pt-0" style={{ animationDelay: "0.2s" }}>
            {/* Main CTA Card */}
            <div className="overflow-hidden min-h-[500px] lg:min-h-[600px] shadow-zinc-900/30 bg-zinc-900 rounded-[2rem] relative shadow-2xl">

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
                </div>

                {/* Content Container */}
                <div className="grid grid-cols-1 min-h-[500px] h-full relative gap-y-3 lg:grid-cols-1 lg:min-h-[600px]">

                    {/* Left: Text Content - Background image can be replaced with a car wash or generic business image */}
                    <div className="flex flex-col md:p-12 lg:p-16 bg-center bg-[url(https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1600&auto=format&fit=crop)] bg-cover pt-8 pr-8 pb-8 pl-8 saturate-50 justify-center relative">
                        <div className="absolute inset-0 bg-black/60 z-0"></div> {/* Overlay for readability */}

                        <div className="relative z-10">
                            <p className="leading-relaxed text-base font-medium text-zinc-50 mb-2">Case Study - Feasibility & Planning</p>
                            <h2 className="leading-tight md:text-4xl lg:text-5xl text-2xl font-normal text-white tracking-tight mb-8">
                                Splash 'n Go Car Wash: From Concept to Viable Venture.
                                <br className="hidden md:block" />
                                <span className="text-zinc-400">Validated operational logistics and financial projections.</span>
                            </h2>

                            <button className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                <span>View Analysis</span>
                                <Icon icon="ph:arrow-right" className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Trusted By / Skills */}
                            <div className="mt-12 pt-8 border-t border-white/10">
                                <p className="text-xs text-white/50 uppercase tracking-widest mb-4 font-medium">Core Skills Applied</p>
                                <div className="flex flex-wrap items-center gap-6 opacity-80 text-white">
                                    <span className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/10">
                                        <Icon icon="ph:chart-bar" /> Market Analysis
                                    </span>
                                    <span className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/10">
                                        <Icon icon="ph:money" /> Financial Projections
                                    </span>
                                    <span className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm border border-white/10">
                                        <Icon icon="ph:gear" /> Operations Management
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
