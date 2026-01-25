import { Icon } from "@iconify/react";
import GlassButton from "../ui/GlassButton";
import SpotlightCard from "../ui/SpotlightCard";

export default function Hero() {
    return (
        <section id="home" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 gap-x-12 gap-y-12">
            <div className="animate-clip-in lg:col-span-7 pb-4 space-y-8" style={{ animationDelay: "0.4s" }}>
                <h1 className="leading-[0.95] lg:text-7xl xl:text-7xl text-5xl font-medium text-neutral-900 tracking-tight">
                    Finance is not just about recording history; it is about creating the future.
                </h1>
                <p className="leading-snug lg:text-base text-xl font-normal text-neutral-500 max-w-[60ch]">
                    Aireeza Leonsul Tandih combines the analytical rigor of a Certified Management Accountant with the strategic foresight of an entrepreneur to bridge the gap between academic theory and practical business application.
                </p>
                <div className="flex gap-4">
                    <a href="#contact">
                        <GlassButton>
                            Work with Aireeza
                        </GlassButton>
                    </a>
                </div>

                {/* Credentials Marquee (Moved inside Left Column) */}
                <div className="animate-fade-up w-full my-6 space-y-2" style={{ animationDelay: "0.6s" }}>
                    <p className="text-base text-neutral-500">Credentials & Designations</p>

                    <div className="overflow-hidden mask-image-gradient w-full relative gap-x-4 gap-y-4">
                        {/* Gradient masks for fade effect */}
                        <div className="z-10 bg-gradient-to-r from-neutral-100 to-transparent w-32 h-full absolute top-0 left-0"></div>
                        <div className="bg-gradient-to-l from-neutral-100 to-transparent w-32 h-full z-10 absolute top-0 right-0"></div>

                        <div className="flex w-max animate-marquee hover:pause-animation">
                            {/* Batch 1 */}
                            <div className="flex pr-4 pl-4 items-center gap-x-2 lg:gap-4">
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:certificate" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">CMA</span>
                                        <span className="text-xs text-neutral-500">Certified Management Accountant</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:calculator" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">CAT</span>
                                        <span className="text-xs text-neutral-500">Certified Accounting Technician</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:graduation-cap" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">AdZU</span>
                                        <span className="text-xs text-neutral-500">Ateneo de Zamboanga University</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:chalkboard-teacher" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">Mentor</span>
                                        <span className="text-xs text-neutral-500">Academic Instructor</span>
                                    </div>
                                </SpotlightCard>
                            </div>
                            {/* Batch 2 (Duplicate) */}
                            <div className="flex pr-4 pl-4 items-center gap-x-2 lg:gap-4">
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:certificate" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">CMA</span>
                                        <span className="text-xs text-neutral-500">Certified Management Accountant</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:calculator" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">CAT</span>
                                        <span className="text-xs text-neutral-500">Certified Accounting Technician</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:graduation-cap" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">AdZU</span>
                                        <span className="text-xs text-neutral-500">Ateneo de Zamboanga University</span>
                                    </div>
                                </SpotlightCard>
                                <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                                    <Icon icon="ph:chalkboard-teacher" className="w-12 h-12 text-neutral-900 opacity-80" />
                                    <div className="flex flex-col">
                                        <span className="font-bold text-neutral-900 text-lg">Mentor</span>
                                        <span className="text-xs text-neutral-500">Academic Instructor</span>
                                    </div>
                                </SpotlightCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-4 flex flex-col animate-clip-in bg-stone-50 border-stone-200 border rounded-3xl pt-2 pr-2 pb-2 pl-2 space-y-8 gap-x-12 gap-y-12 justify-between" style={{ animationDelay: "0.5s", height: "fit-content" }}>
                <div className="overflow-hidden w-full border-stone-200 border rounded-2xl relative" style={{ paddingTop: '176.75%', position: 'relative' }}>
                    <img
                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51dd450a-0485-4587-89d8-c6078fb01266_1600w.jpg"
                        alt="Aireeza Leonsul Tandih - Financial Consultancy"
                        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
