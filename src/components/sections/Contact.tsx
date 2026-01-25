import { Icon } from "@iconify/react";

export default function Contact() {
    return (
        <section id="contact" className="animate-fade-up w-full pt-12 pb-20" style={{ animationDelay: "1s" }}>
            <div className="bg-zinc-900 rounded-3xl p-12 text-center text-white relative overflow-hidden bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5387a0b-52c6-40c2-b3be-ef86329b19cc_1600w.webp)] bg-cover bg-center saturate-0">
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 z-0"></div>

                <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight">Ready to elevate your financial intelligence?</h2>
                    <p className="text-neutral-300 text-lg">
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
                            <button className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                <Icon icon="simple-icons:beamstart" />
                                <span>Beamstart Profile</span>
                            </button>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <button className="group flex items-center gap-3 bg-white hover:bg-zinc-100 transition-all text-zinc-900 text-sm font-medium rounded-full px-6 py-3 w-fit shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                                <Icon icon="foundation:social-linkedin" />
                                <span>LinkedIn</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
