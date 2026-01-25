import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Footer() {
    return (
        <footer className="pt-0 pb-0">
            <div className="container lg:pl-0 lg:pr-0 mx-auto pr-0 pl-0">
                <div className="lg:px-10 lg:py-12 bg-white border-neutral-200 border rounded-3xl pt-10 pr-6 pb-10 pl-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]">
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Brand */}
                        <div className="lg:w-1/3 space-y-5">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center text-white">
                                    <Icon icon="ph:plant-fill" width="20" height="20" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-neutral-900 tracking-tight">aireeza.tandih</span>
                                    <span className="text-[11px] uppercase text-neutral-400 tracking-[0.16em]">Financial Intelligence</span>
                                </div>
                            </div>
                            <p className="text-sm text-neutral-500 max-w-sm">
                                Empowering startups, SMEs, and students with financial clarity and strategic mentorship.
                            </p>
                            <div className="flex items-center gap-3 text-neutral-500">
                                <a href="#" className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-400 hover:text-neutral-900 transition-colors">
                                    <Icon icon="simple-icons:x" />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center hover:border-neutral-400 hover:text-neutral-900 transition-colors">
                                    <Icon icon="simple-icons:linkedin" />
                                </a>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                            <div className="space-y-3">
                                <h3 className="uppercase text-xs font-medium text-neutral-400 tracking-[0.16em]">Services</h3>
                                <ul className="space-y-2 text-neutral-600">
                                    <li><Link href="#services" className="hover:text-neutral-900 transition-colors">Financial Strategy</Link></li>
                                    <li><Link href="#services" className="hover:text-neutral-900 transition-colors">Business Operations</Link></li>
                                    <li><Link href="#services" className="hover:text-neutral-900 transition-colors">Academic Training</Link></li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h3 className="uppercase text-xs font-medium text-neutral-400 tracking-[0.16em]">Company</h3>
                                <ul className="space-y-2 text-neutral-600">
                                    <li><Link href="#about" className="hover:text-neutral-900 transition-colors">About</Link></li>
                                    <li><Link href="#experience" className="hover:text-neutral-900 transition-colors">Experience</Link></li>
                                    <li><Link href="#contact" className="hover:text-neutral-900 transition-colors">Contact</Link></li>
                                </ul>
                            </div>

                            <div className="space-y-3">
                                <h3 className="uppercase text-xs font-medium text-neutral-400 tracking-[0.16em]">Legal</h3>
                                <ul className="space-y-2 text-neutral-600">
                                    <li><Link href="#" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link></li>
                                    <li><Link href="#" className="hover:text-neutral-900 transition-colors">Terms of Service</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
                        <p>© {new Date().getFullYear()} ALT Solutions. All rights reserved.</p>
                        <p>Based in Zamboanga City, Philippines.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
