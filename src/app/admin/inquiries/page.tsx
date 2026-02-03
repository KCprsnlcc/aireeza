'use client'

import { createClient } from '@/lib/supabase/client'
import AdminNav from '@/components/admin/AdminNav'
import InquiryTable from '@/components/admin/InquiryTable'
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

export default function InquiriesPage() {
  const { theme } = useTheme()
  const supabase = createClient()
  const [inquiries, setInquiries] = useState<Inquiry[]>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

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
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
    }`}>
      <AdminNav />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className={`text-2xl font-semibold mb-1 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>Inquiries</h1>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
          }`}>Manage all client inquiries from the contact form</p>
        </div>

        {loading ? (
          <div className={`border rounded-lg overflow-hidden ${
            theme === 'dark' ? 'border-neutral-800 bg-neutral-900/50' : 'border-neutral-200 bg-white'
          }`}>
            <div className={`h-12 border-b ${
              theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
            }`}></div>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`h-16 border-b animate-pulse ${
                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
              }`}></div>
            ))}
          </div>
        ) : error ? (
          <div className={`border rounded-lg p-4 ${
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
