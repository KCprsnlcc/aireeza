import GlassButton from "../ui/GlassButton";

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
            </div>

            <div className="lg:col-span-4 flex flex-col animate-clip-in bg-stone-50 border-stone-200 border rounded-3xl p-2 space-y-8 gap-x-12 gap-y-12 justify-between h-fit" style={{ animationDelay: "0.5s" }}>
                <div className="aspect-[16/9] overflow-hidden w-full border-stone-200 border rounded-2xl relative">
                    <img
                        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c053fe9-7127-4df7-ae87-36ae206fe067_1600w.jpg"
                        alt="Aireeza Leonsul Tandih - Financial Consultancy"
                        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
