import { Icon } from "@iconify/react";
import SpotlightCard from "../ui/SpotlightCard";

export default function Credentials() {
    return (
        <section id="credentials" className="animate-fade-up w-full my-6 space-y-6" style={{ animationDelay: "0.6s" }}>
            <p className="text-base text-neutral-500">Credentials & Designations</p>

            <div className="overflow-hidden mask-image-gradient w-full relative gap-x-4 gap-y-4">
                {/* Gradient masks for fade effect */}
                <div className="z-10 bg-gradient-to-r from-neutral-100 to-transparent w-32 h-full absolute top-0 left-0"></div>
                <div className="bg-gradient-to-l from-neutral-100 to-transparent w-32 h-full z-10 absolute top-0 right-0"></div>

                <div className="flex w-max animate-marquee hover:pause-animation">
                    {/* Batch 1 */}
                    <div className="flex pr-4 pl-4 items-center gap-x-2 lg:gap-4">

                        {/* CMA */}
                        <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                            <Icon icon="ph:certificate" className="w-12 h-12 text-neutral-900 opacity-80" />
                            <div className="flex flex-col">
                                <span className="font-bold text-neutral-900 text-lg">CMA</span>
                                <span className="text-xs text-neutral-500">Certified Management Accountant</span>
                            </div>
                        </SpotlightCard>

                        {/* CAT */}
                        <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                            <Icon icon="ph:calculator" className="w-12 h-12 text-neutral-900 opacity-80" />
                            <div className="flex flex-col">
                                <span className="font-bold text-neutral-900 text-lg">CAT</span>
                                <span className="text-xs text-neutral-500">Certified Accounting Technician</span>
                            </div>
                        </SpotlightCard>

                        {/* AdZU */}
                        <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                            <Icon icon="ph:graduation-cap" className="w-12 h-12 text-neutral-900 opacity-80" />
                            <div className="flex flex-col">
                                <span className="font-bold text-neutral-900 text-lg">AdZU</span>
                                <span className="text-xs text-neutral-500">Ateneo de Zamboanga University</span>
                            </div>
                        </SpotlightCard>

                        {/* Teacher */}
                        <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                            <Icon icon="ph:chalkboard-teacher" className="w-12 h-12 text-neutral-900 opacity-80" />
                            <div className="flex flex-col">
                                <span className="font-bold text-neutral-900 text-lg">Mentor</span>
                                <span className="text-xs text-neutral-500">Academic Instructor</span>
                            </div>
                        </SpotlightCard>

                    </div>

                    {/* Batch 2 (Duplicate for loop) */}
                    <div className="flex pr-4 pl-4 items-center gap-x-2 lg:gap-4">

                        {/* CMA */}
                        <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                            <Icon icon="ph:certificate" className="w-12 h-12 text-neutral-900 opacity-80" />
                            <div className="flex flex-col">
                                <span className="font-bold text-neutral-900 text-lg">CMA</span>
                                <span className="text-xs text-neutral-500">Certified Management Accountant</span>
                            </div>
                        </SpotlightCard>

                        {/* CAT */}
                        <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                            <Icon icon="ph:calculator" className="w-12 h-12 text-neutral-900 opacity-80" />
                            <div className="flex flex-col">
                                <span className="font-bold text-neutral-900 text-lg">CAT</span>
                                <span className="text-xs text-neutral-500">Certified Accounting Technician</span>
                            </div>
                        </SpotlightCard>

                        {/* AdZU */}
                        <SpotlightCard className="glass-panel flex hover:grayscale-0 transition-all duration-500 bg-neutral-50 w-64 h-32 rounded-2xl grayscale items-center justify-center p-6 gap-4 cursor-default">
                            <Icon icon="ph:graduation-cap" className="w-12 h-12 text-neutral-900 opacity-80" />
                            <div className="flex flex-col">
                                <span className="font-bold text-neutral-900 text-lg">AdZU</span>
                                <span className="text-xs text-neutral-500">Ateneo de Zamboanga University</span>
                            </div>
                        </SpotlightCard>

                        {/* Teacher */}
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
        </section>
    );
}
