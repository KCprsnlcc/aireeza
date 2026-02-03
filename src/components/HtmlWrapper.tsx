'use client';

import { usePathname } from 'next/navigation';

export default function HtmlWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');
  
  return (
    <html lang="en" className={isAdminRoute ? '' : 'scroll-smooth'}>
      {children}
    </html>
  );
}
