import type { Metadata } from 'next'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Admin | Aireeza',
  description: 'Admin dashboard for managing inquiries',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <ScrollAnimationProvider>
        {children}
      </ScrollAnimationProvider>
    </ThemeProvider>
  )
}
