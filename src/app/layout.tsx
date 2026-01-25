import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google"; // Assuming these fonts are available or used in the original. HTML used 'Geist'. 
// If Geist is not available in next/font/google in this version, I might need to remove it or use standard Inter. 
// The HTML said <link ... href="...fonts.googleapis.com...Geist...">. 
// Standard Next.js create-app usually sets up Geist local fonts. I'll stick to what was there in the original layout.tsx file view.
// It had: import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/layout/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Professional Dossier: Aireeza Leonsul Tandih",
  description: "Certified Management Accountant, Academic Leader, and Entrepreneur based in Zamboanga Peninsula.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen overflow-x-hidden selection:bg-neutral-300 selection:text-neutral-900 text-neutral-900 bg-neutral-100 relative`}
      >
        {/* Background Grid Lines */}
        <div className="fixed grid-lines w-full h-full top-0 right-0 bottom-0 left-0 pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col lg:flex-row min-h-screen max-w-[1600px] mx-auto">
          <Sidebar />
          <main className="flex-1 lg:ml-64 lg:p-16 flex flex-col gap-20 lg:gap-12 overflow-hidden pt-6 pr-6 pb-6 pl-6 gap-x-20 gap-y-20">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
