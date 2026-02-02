import type { Metadata } from 'next'
import { ThemeProvider } from '@/contexts/ThemeContext'
import ScrollAnimationProvider from '@/components/ScrollAnimationProvider'
import AdminLoader from '@/components/admin/AdminLoader'
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
        <AdminLoader />
        {children}
      </ScrollAnimationProvider>
    </ThemeProvider>
  )
}
