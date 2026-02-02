'use client';

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export default function PointOfView() {
    return (
        <section id="point-of-view" className="w-full py-24 border-b border-neutral-200 bg-neutral-50">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-8">
                        <Icon icon="ph:lightbulb" className="w-16 h-16 text-neutral-400 mx-auto mb-6" />
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Point of View
                    </h2>
                    
                    <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
                        This is a content page for my thoughts on strategic finance, decision-making, and business performance.
                    </p>

                    <div className="inline-block bg-white border border-neutral-200 rounded-2xl p-6">
                        <p className="text-sm text-neutral-500 italic">
                            Content coming soon
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
