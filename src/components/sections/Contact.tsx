import { Icon } from "@iconify/react";
import GlassButton from "../ui/GlassButton";

export default function Contact() {
    return (
        <section id="contact" className="animate-fade-up w-full pt-12 pb-20" style={{ animationDelay: "1s" }}>
            <div className="bg-neutral-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[200%] bg-gradient-to-r from-blue-900 via-purple-900 to-neutral-900 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Ready to elevate your financial intelligence?</h2>
                    <p className="text-neutral-400 text-lg">
                        Whether you are an investor looking for a viable venture, a business owner needing a financial health check, or a student aiming for the board exams.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8">
                        <div className="flex items-center gap-3">
                            <Icon icon="ph:map-pin" className="text-neutral-400 w-6 h-6" />
                            <span>Zamboanga City, Philippines</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <a href="https://beamstart.com" target="_blank" rel="noopener noreferrer">
                            <GlassButton className="!bg-white/10 hover:!bg-white/20 !text-white">
                                <span className="flex items-center gap-2">
                                    <Icon icon="simple-icons:beamstart" />
                                    Beamstart Profile
                                </span>
                            </GlassButton>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <GlassButton className="!bg-white/10 hover:!bg-white/20 !text-white">
                                <span className="flex items-center gap-2">
                                    <Icon icon="foundation:social-linkedin" />
                                    LinkedIn
                                </span>
                            </GlassButton>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
