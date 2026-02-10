'use client';

import { usePathname } from 'next/navigation';

export default function HtmlWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  
  const criticalCSS = `
/* Critical CSS for above-the-fold content - inlined to prevent render blocking */

/* Base styles */
:root {
  --background: #ffffff;
  --foreground: #000000;
  --accent: #ff3333;
  --border: #e5e5e5;
  --border-light: #d4d4d4;
  --muted: #a3a3a3;
  --muted-foreground: #525252;
}

/* Body and typography */
body {
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  background-color: #ffffff;
  color: #000000;
  margin: 0;
  padding: 0;
}

/* Majesty Font */
@font-face {
  font-family: 'Majesty';
  src: url('/font/majesty-regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.font-majesty {
  font-family: 'Majesty', serif;
}

/* Anti-aliasing */
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Min height for full viewport */
.min-h-screen {
  min-height: 100vh;
}

/* Hide overflow */
.overflow-x-hidden {
  overflow-x: hidden;
}

/* Selection colors */
::selection {
  background-color: #ff3333;
  color: white;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
`;
  
  return (
    <html lang="en" className={isAdminRoute ? '' : 'scroll-smooth'}>
      <head>
        {/* Inline critical CSS to prevent render blocking */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
        
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
