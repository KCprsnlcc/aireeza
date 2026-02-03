'use client';

import { usePathname } from 'next/navigation';
import Navbar from "./layout/Navbar";
import ScrollAnimationProvider from "./ScrollAnimationProvider";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAdminRoute = pathname?.startsWith('/admin');

    return (
        <>
            {isAdminRoute ? (
                <main>
                    {children}
                </main>
            ) : (
                <ScrollAnimationProvider>
                    <Navbar />
                    <main>
                        {children}
                    </main>
                </ScrollAnimationProvider>
            )}
        </>
    );
}
