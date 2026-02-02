'use client'

import { createClient } from '@/lib/supabase/client'
import AdminNav from '@/components/admin/AdminNav'
import StatsCard from '@/components/admin/StatsCard'
import InquiryTable from '@/components/admin/InquiryTable'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'

interface Inquiry {
  id: string
  role: string
  scale: string
  challenges: string[]
  decision: string | null
  prompt: string | null
  timing: string | null
  advisors: string | null
  status: 'pending' | 'reviewed' | 'scheduled' | 'completed' | 'archived'
  notes: string | null
  created_at: string
  updated_at: string
}

export default function AdminDashboard() {
  const { theme } = useTheme()
  const supabase = createClient()
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [pendingCount, setPendingCount] = useState(0)
  const [scheduledCount, setScheduledCount] = useState(0)
  const [completedCount, setCompletedCount] = useState(0)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      const { data: inquiriesData, error: inquiriesError } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5)

      if (inquiriesError) {
        setError(inquiriesError.message)
      } else {
        setInquiries(inquiriesData || [])
      }

      const { count: total } = await supabase
        .from('inquiries')
        .select('*', { count: 'exact', head: true })
      setTotalCount(total || 0)

      const { count: pending } = await supabase
        .from('inquiries')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'pending')
      setPendingCount(pending || 0)

      const { count: scheduled } = await supabase
        .from('inquiries')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'scheduled')
      setScheduledCount(scheduled || 0)

      const { count: completed } = await supabase
        .from('inquiries')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'completed')
      setCompletedCount(completed || 0)
    }

    fetchData()
  }, [])

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
    }`}>
      <AdminNav />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 fade-up">
          <h1 className={`text-2xl font-semibold mb-1 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>Dashboard</h1>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
          }`}>Overview of your inquiry pipeline</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Total Inquiries"
            value={totalCount}
            icon="ph:envelope-simple"
          />
          <StatsCard
            title="Pending Review"
            value={pendingCount}
            icon="ph:clock"
          />
          <StatsCard
            title="Scheduled"
            value={scheduledCount}
            icon="ph:calendar"
          />
          <StatsCard
            title="Completed"
            value={completedCount}
            icon="ph:check-circle"
          />
        </div>

        <div className="flex items-center justify-between mb-4 fade-up">
          <h2 className={`text-lg font-medium ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>Recent Inquiries</h2>
          <Link
            href="/admin/inquiries"
            className={`flex items-center gap-1 text-sm transition-colors ${
              theme === 'dark'
                ? 'text-neutral-400 hover:text-white'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            View all
            <Icon icon="ph:arrow-right" className="w-4 h-4" />
          </Link>
        </div>

        {error ? (
          <div className={`border rounded-lg p-4 fade-up ${
            theme === 'dark'
              ? 'bg-red-900/30 border-red-800'
              : 'bg-red-50 border-red-200'
          }`}>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-red-400' : 'text-red-600'
            }`}>Error loading inquiries: {error}</p>
          </div>
        ) : (
          <InquiryTable inquiries={inquiries} />
        )}
      </main>
    </div>
  )
}
