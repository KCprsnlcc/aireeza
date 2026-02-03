'use client'

import { createClient } from '@/lib/supabase/client'
import AdminNav from '@/components/admin/AdminNav'
import StatsCard from '@/components/admin/StatsCard'
import InquiryTable from '@/components/admin/InquiryTable'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'
import { useScrubText } from '@/hooks/useScrubText'

interface Inquiry {
  id: string
  full_name: string | null
  email: string | null
  phone: string | null
  role: string | null
  scale: string | null
  challenges: string[]
  decision: string | null
  prompt: string | null
  timing: string | null
  advisors: string | null
  status: 'incomplete' | 'pending' | 'reviewed' | 'scheduled' | 'completed' | 'archived'
  notes: string | null
  created_at: string
  updated_at: string
}

export default function AdminDashboard() {
  const { theme } = useTheme()
  const supabase = createClient()
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [totalCount, setTotalCount] = useState(0)
  const [incompleteCount, setIncompleteCount] = useState(0)
  const [pendingCount, setPendingCount] = useState(0)
  const [scheduledCount, setScheduledCount] = useState(0)
  const [completedCount, setCompletedCount] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const [loading, setLoading] = useState(true)
  
  // Apply scrub text to dashboard headline
  const dashboardTitle = "DASHBOARD OVERVIEW"
  const { containerRef, spansHtml } = useScrubText(dashboardTitle, theme)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      try {
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

        const { count: incomplete } = await supabase
          .from('inquiries')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'incomplete')
        setIncompleteCount(incomplete || 0)

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
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className={`min-h-screen transition-colors relative overflow-hidden ${
      theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
    }`}>
      
      <AdminNav />
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Vogue-style header */}
        <div className="mb-16">
          <div className="flex items-center gap-8 mb-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">ADMIN</span>
            <div className={`h-px w-24 ${
              theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-300'
            }`}></div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">OVERVIEW</span>
          </div>
          
          <div 
            ref={containerRef}
            className={`scrub-text text-4xl md:text-6xl font-black tracking-tighter leading-[0.8] mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
            dangerouslySetInnerHTML={{ __html: spansHtml }}
          />
          
          <p className={`text-lg font-light leading-relaxed tracking-wide max-w-3xl ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
          }`}>Overview of your inquiry pipeline and client engagement metrics</p>
        </div>

        {loading ? (
          <div className="space-y-12">
            {/* Vogue-style Stats Cards Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`border rounded-2xl p-8 animate-pulse relative overflow-hidden ${
                  theme === 'dark' ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-200 bg-white'
                }`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className={`h-4 w-32 rounded mb-4 ${
                        theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
                      }`}></div>
                      <div className={`h-12 w-20 rounded ${
                        theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
                      }`}></div>
                    </div>
                    <div className={`w-14 h-14 rounded-2xl ${
                      theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
                    }`}></div>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-px w-full ${
                    theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
                  }`}></div>
                </div>
              ))}
            </div>

            {/* Vogue-style Table Skeleton */}
            <div className={`border rounded-2xl overflow-hidden relative ${
              theme === 'dark' ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-200 bg-white'
            }`}>
              <div className={`h-16 border-b ${
                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
              }`}></div>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className={`h-20 border-b animate-pulse ${
                  theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
                }`}></div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
              <StatsCard
                title="Total Inquiries"
                value={totalCount}
                icon="ph:envelope-simple"
              />
              <StatsCard
                title="Incomplete"
                value={incompleteCount}
                icon="ph:draft"
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

            {/* Vogue-style recent inquiries section */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className={`text-2xl font-black tracking-tight mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>Recent Inquiries</h2>
                <p className={`text-sm font-light leading-relaxed tracking-wide ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`}>Latest client submissions and engagement</p>
              </div>
              <Link
                href="/admin/inquiries"
                className={`inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 group ${
                  theme === 'dark'
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                <span>View all</span>
                <Icon icon="ph:arrow-right" className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
            </div>

            {error ? (
              <div className={`border rounded-2xl p-8 relative overflow-hidden ${
                theme === 'dark'
                  ? 'bg-red-900/30 border-red-800'
                  : 'bg-red-50 border-red-200'
              }`}>
                <p className={`text-sm font-light leading-relaxed tracking-wide ${
                  theme === 'dark' ? 'text-red-400' : 'text-red-600'
                }`}>Error loading inquiries: {error}</p>
              </div>
            ) : (
              <InquiryTable inquiries={inquiries} />
            )}
          </>
        )}
      </main>
    </div>
  )
}
