'use client';
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Sidebar() {
    return (
        <aside className="lg:w-64 lg:fixed lg:h-screen flex flex-col z-50 glass-panel lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:border-r w-full border-neutral-200/50 border-b pt-8 pr-8 pb-8 pl-8 justify-between">
            <div className="">
                <div className="mb-12 animate-clip-in" style={{ animationDelay: "0.1s" }}>
                    <Link href="/" className="block text-3xl tracking-tighter font-medium group text-neutral-900">
                        aireeza<span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">.tandih</span>
                    </Link>
                </div>

                <nav className="space-y-4 animate-clip-in" style={{ animationDelay: "0.2s" }}>
                    <Link href="#home" className="block text-lg text-neutral-900 font-medium hover:translate-x-1 transition-transform">
                        Home
                    </Link>
                    <Link href="#credentials" className="block text-lg text-neutral-500 hover:text-neutral-900 hover:translate-x-1 transition-all">
                        Credentials
                    </Link>
                    <Link href="#experience" className="block text-lg text-neutral-500 hover:text-neutral-900 hover:translate-x-1 transition-all">
                        experience
                    </Link>
                    <Link href="#services" className="block text-lg text-neutral-500 hover:text-neutral-900 hover:translate-x-1 transition-all">
                        Services
                    </Link>
                    <Link href="#leadership" className="block text-lg text-neutral-500 hover:text-neutral-900 hover:translate-x-1 transition-all">
                        Leadership
                    </Link>
                    <Link href="#contact" className="block hover:text-neutral-900 hover:translate-x-1 transition-all text-lg text-neutral-500">
                        Contact
                    </Link>
                </nav>
            </div>

            <div className="hidden lg:block space-y-2 animate-clip-in" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600">
                                <Icon icon="solar:user-circle-linear" width="16" height="16" />
                    </div>
                    {/* <img src="https://ui-avatars.com/api/?name=Aireeza+Tandih&background=random&color=fff" alt="User" class="w-8 h-8 rounded-full opacity-80"> */}
                    <div className="text-sm leading-tight">
                        <p className="font-medium text-neutral-900">Aireeza Tandih</p>
                        <p className="text-neutral-500">@aireeza</p>
                    </div>
                </div>
                <p className="text-xs text-neutral-400">
                    Based in Zamboanga City, Philippines.
                </p>
            </div>
        </aside>
    );
}
