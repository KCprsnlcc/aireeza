import type { Metadata } from "next";
import "./globals.css";
import LayoutContent from "../components/LayoutContent";
import HtmlWrapper from "../components/HtmlWrapper";

export const metadata: Metadata = {
  title: "AIREEZA - Financial Strategy & Performance",
  description: "Strategic finance and business performance advisory for founders and leadership teams who need clarity — not just reports.",
  icons: {
    icon: [
      { url: '/icon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/icon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/icon/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/icon/android-chrome-512x512.png' }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <HtmlWrapper>
      <body className="antialiased min-h-screen overflow-x-hidden">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </HtmlWrapper>
  );
}
