export default function Metrics() {
    return (
        <section className="animate-fade-up w-full pt-12 pb-12" style={{ animationDelay: "0.1s" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-stone-50 border-stone-200 border rounded-3xl p-2 gap-x-2 gap-y-4">
                {/* Metric 1 */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                    <h3 className="text-2xl font-medium text-neutral-900 tracking-tight mb-2">10+ Years</h3>
                    <p className="text-[15px] leading-relaxed text-neutral-500">
                        Professional experience in accounting and academic instruction.
                    </p>
                </div>
                {/* Metric 2 */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                    <h3 className="text-2xl font-medium text-neutral-900 tracking-tight mb-2">2 Certifications</h3>
                    <p className="text-[15px] leading-relaxed text-neutral-500">
                        Certified Management Accountant (CMA) and Certified Accounting Technician (CAT).
                    </p>
                </div>
                {/* Metric 3 */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                    <h3 className="text-2xl font-medium text-neutral-900 tracking-tight mb-2">BS Accountancy</h3>
                    <p className="text-[15px] leading-relaxed text-neutral-500">
                        Ateneo de Zamboanga University graduate.
                    </p>
                </div>
                {/* Metric 4 */}
                <div className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition-shadow duration-300">
                    <h3 className="text-2xl font-medium text-neutral-900 tracking-tight mb-2">Regional Leader</h3>
                    <p className="text-[15px] leading-relaxed text-neutral-500">
                        Former Regional President at NFJPIA Region 9.
                    </p>
                </div>
            </div>
        </section>
    );
}
