import { createClient } from '@/lib/supabase/server'
import AdminNav from '@/components/admin/AdminNav'
import StatsCard from '@/components/admin/StatsCard'
import InquiryTable from '@/components/admin/InquiryTable'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default async function AdminDashboard() {
  const supabase = await createClient()

  const { data: inquiries, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5)

  const { count: totalCount } = await supabase
    .from('inquiries')
    .select('*', { count: 'exact', head: true })

  const { count: pendingCount } = await supabase
    .from('inquiries')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'pending')

  const { count: scheduledCount } = await supabase
    .from('inquiries')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'scheduled')

  const { count: completedCount } = await supabase
    .from('inquiries')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'completed')

  return (
    <div className="min-h-screen bg-neutral-50">
      <AdminNav />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-neutral-900 mb-1">Dashboard</h1>
          <p className="text-sm text-neutral-500">Overview of your inquiry pipeline</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatsCard
            title="Total Inquiries"
            value={totalCount || 0}
            icon="ph:envelope-simple"
          />
          <StatsCard
            title="Pending Review"
            value={pendingCount || 0}
            icon="ph:clock"
          />
          <StatsCard
            title="Scheduled"
            value={scheduledCount || 0}
            icon="ph:calendar"
          />
          <StatsCard
            title="Completed"
            value={completedCount || 0}
            icon="ph:check-circle"
          />
        </div>

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-neutral-900">Recent Inquiries</h2>
          <Link
            href="/admin/inquiries"
            className="flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            View all
            <Icon icon="ph:arrow-right" className="w-4 h-4" />
          </Link>
        </div>

        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-600">Error loading inquiries: {error.message}</p>
          </div>
        ) : (
          <InquiryTable inquiries={inquiries || []} />
        )}
      </main>
    </div>
  )
}
