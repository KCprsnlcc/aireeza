import { Icon } from "@iconify/react";

export default function Leadership() {
    return (
        <section id="leadership" className="animate-fade-up w-full pt-12 pb-12" style={{ animationDelay: "0.8s" }}>
            <h2 className="lg:text-5xl text-4xl font-medium text-neutral-900 tracking-tight mb-12">
                Leadership & Advocacy
            </h2>

            <div className="bg-stone-50 border-stone-200 border rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Icon icon="ph:users-three" width="200" height="200" />
                </div>

                <div className="relative z-10">
                    <span className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2 block">Regional President (2014-2015)</span>
                    <h3 className="text-3xl font-medium text-neutral-900 mb-4">National Federation of Junior Philippine Institute of Accountants (NFJPIA) - Region 9</h3>

                    <p className="text-lg text-neutral-600 mb-8 max-w-2xl">Led the student accounting body for the entire Western Mindanao region, serving as the bridge between student chapters and the professional regulating body (PICPA).</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-200/50">
                            <Icon icon="ph:microphone-stage" className="w-8 h-8 text-neutral-700 mb-2" />
                            <p className="font-medium text-neutral-900">Public Speaking</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-200/50">
                            <Icon icon="ph:confetti" className="w-8 h-8 text-neutral-700 mb-2" />
                            <p className="font-medium text-neutral-900">Event Management</p>
                        </div>
                        <div className="bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-200/50">
                            <Icon icon="ph:handshake" className="w-8 h-8 text-neutral-700 mb-2" />
                            <p className="font-medium text-neutral-900">Network Building</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
