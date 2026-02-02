'use client';

import Navbar from "./layout/Navbar";
import ScrollAnimationProvider from "./ScrollAnimationProvider";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
    return (
        <ScrollAnimationProvider>
            <Navbar />
            <main>
                {children}
            </main>
        </ScrollAnimationProvider>
    );
}
