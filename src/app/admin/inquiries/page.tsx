'use client'

import { createClient } from '@/lib/supabase/client'
import AdminNav from '@/components/admin/AdminNav'
import InquiryTable from '@/components/admin/InquiryTable'
import { Icon } from '@iconify/react'
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

export default function InquiriesPage() {
  const supabase = createClient()
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  // Apply scrub text to inquiries headline
  const inquiriesTitle = "ALL INQUIRIES"
  const { containerRef, spansHtml } = useScrubText(inquiriesTitle)

  useEffect(() => {
    async function fetchInquiries() {
      setLoading(true)
      try {
        const { data, error } = await supabase
          .from('inquiries')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          setError(error.message)
        } else {
          setInquiries(data || [])
        }
      } finally {
        setLoading(false)
      }
    }

    fetchInquiries()
  }, [])

  return (
    <div className="min-h-screen transition-colors relative overflow-hidden bg-neutral-50">
      
      <AdminNav />
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Vogue-style header */}
        <div className="mb-16">
          <div className="flex items-center gap-8 mb-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">ADMIN</span>
            <div className="h-px w-24 bg-neutral-300"></div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">INQUIRIES</span>
          </div>
          
          <div 
            ref={containerRef}
            className="scrub-text text-4xl md:text-6xl font-black tracking-tighter leading-[0.8] mb-8 text-black"
            dangerouslySetInnerHTML={{ __html: spansHtml }}
          />
          
          <p className="text-lg font-light leading-relaxed tracking-wide max-w-3xl text-neutral-700">Complete overview of all client inquiries and their current status</p>
        </div>

        {loading ? (
          <div className="space-y-12">
            {/* Vogue-style Table Skeleton */}
            <div className="border rounded-2xl overflow-hidden relative border-neutral-200 bg-white">
              <div className="h-16 border-b border-neutral-200"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-20 border-b animate-pulse border-neutral-200"></div>
              ))}
            </div>
          </div>
        ) : (
          <>
            {error ? (
              <div className="border rounded-2xl p-8 relative overflow-hidden bg-red-50 border-red-200">
                <div className="flex items-center gap-4 mb-4">
                  <Icon icon="ph:warning-circle" className="w-5 h-5 text-red-600" />
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-red-600">Error Loading Data</h3>
                </div>
                <p className="text-sm font-light leading-relaxed tracking-wide text-red-600">{error}</p>
              </div>
            ) : inquiries.length === 0 ? (
              <div className="border rounded-2xl p-16 relative overflow-hidden bg-white border-neutral-200 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-neutral-100">
                  <Icon icon="ph:envelope-simple" className="w-8 h-8 text-neutral-400" />
                </div>
                <h3 className="text-xl font-black tracking-tight mb-4 text-black">No Inquiries Yet</h3>
                <p className="text-sm font-light leading-relaxed tracking-wide text-neutral-600 max-w-md mx-auto">
                  Client inquiries will appear here once they start submitting through the website.
                </p>
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
