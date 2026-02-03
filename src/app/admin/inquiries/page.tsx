'use client'

import { createClient } from '@/lib/supabase/client'
import AdminNav from '@/components/admin/AdminNav'
import InquiryTable from '@/components/admin/InquiryTable'
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

export default function InquiriesPage() {
  const { theme } = useTheme()
  const supabase = createClient()
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  // Apply scrub text to inquiries headline
  const inquiriesTitle = "CLIENT INQUIRIES"
  const { containerRef, spansHtml } = useScrubText(inquiriesTitle, theme)

  useEffect(() => {
    async function fetchInquiries() {
      setLoading(true)
      try {
        const { data, error: fetchError } = await supabase
          .from('inquiries')
          .select('*')
          .order('created_at', { ascending: false })

        if (fetchError) {
          setError(fetchError.message)
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
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">MANAGE</span>
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
          }`}>Manage all client inquiries from the contact form with sophisticated tracking and status management</p>
        </div>

        {loading ? (
          <div className={`border rounded-2xl overflow-hidden relative ${
            theme === 'dark' ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-200 bg-white'
          }`}>
            
            <div className={`h-20 border-b ${
              theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
            }`}></div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`h-24 border-b animate-pulse ${
                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
              }`}></div>
            ))}
          </div>
        ) : error ? (
          <div className={`border rounded-2xl p-12 relative overflow-hidden ${
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
      </main>
    </div>
  )
}
