import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";
import LayoutContent from "../components/LayoutContent";

export const metadata: Metadata = {
  title: "AIREEZA - Financial Strategy & Performance",
  description: "Strategic finance and business performance advisory for founders and leadership teams who need clarity — not just reports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen overflow-x-hidden">
        <ThemeProvider>
          <LayoutContent>{children}</LayoutContent>
        </ThemeProvider>
      </body>
    </html>
  );
}
