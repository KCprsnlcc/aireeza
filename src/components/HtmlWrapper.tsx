'use client';

import { usePathname } from 'next/navigation';

export default function HtmlWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  
  return (
    <html lang="en" className={isAdminRoute ? '' : 'scroll-smooth'}>
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Async load Google Fonts to prevent render blocking */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          media="print"
          onLoad={(e) => { (e.target as HTMLLinkElement).media = 'all'; }}
        />
        
        {/* Fallback for noscript */}
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          />
        </noscript>
      </head>
      {children}
    </html>
  );
}
