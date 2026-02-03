'use client'

import { createClient } from '@/lib/supabase/client'
import AdminNav from '@/components/admin/AdminNav'
import StatusBadge from '@/components/admin/StatusBadge'
import InquiryActions from './InquiryActions'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

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

export default function InquiryDetailPage() {
  const { theme } = useTheme()
  const params = useParams()
  const id = params.id as string
  const supabase = createClient()
  const [inquiry, setInquiry] = useState<Inquiry | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchInquiry() {
      const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .eq('id', id)
        .single()

      if (!error && data) {
        setInquiry(data)
      }
      setLoading(false)
    }

    fetchInquiry()
  }, [id])

  if (loading) {
    return (
      <div className={`min-h-screen transition-colors ${
        theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
      }`}>
        <AdminNav />
        <main className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center py-12">
            <Icon icon="ph:spinner" className="w-8 h-8 animate-spin mx-auto text-neutral-400" />
          </div>
        </main>
      </div>
    )
  }

  if (!inquiry) {
    return (
      <div className={`min-h-screen transition-colors ${
        theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
      }`}>
        <AdminNav />
        <main className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center py-12">
            <p className={theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'}>
              Inquiry not found
            </p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
    }`}>
      <AdminNav />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href="/admin/inquiries"
          className={`inline-flex items-center gap-1 text-sm mb-6 transition-colors ${
            theme === 'dark'
              ? 'text-neutral-400 hover:text-white'
              : 'text-neutral-600 hover:text-neutral-900'
          }`}
        >
          <Icon icon="ph:arrow-left" className="w-4 h-4" />
          Back to inquiries
        </Link>

        <div className={`border rounded-lg ${
          theme === 'dark'
            ? 'bg-neutral-900/50 border-neutral-800'
            : 'bg-white border-neutral-200'
        }`}>
          <div className={`px-6 py-4 border-b flex items-center justify-between ${
            theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
          }`}>
            <div>
              <h1 className={`text-lg font-semibold mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}>Inquiry Details</h1>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
              }`}>
                Submitted on {new Date(inquiry.created_at).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
            <StatusBadge status={inquiry.status} />
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  Role in Business
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>{inquiry.role}</p>
              </div>
              <div>
                <h3 className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  Business Scale
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>{inquiry.scale}</p>
              </div>
            </div>

            {inquiry.challenges && inquiry.challenges.length > 0 && (
              <div>
                <h3 className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  Primary Challenges
                </h3>
                <div className="flex flex-wrap gap-2">
                  {inquiry.challenges.map((challenge: string, index: number) => (
                    <span
                      key={index}
                      className={`inline-flex items-center px-2.5 py-1 rounded-md text-sm ${
                        theme === 'dark'
                          ? 'bg-neutral-800 text-neutral-300'
                          : 'bg-neutral-100 text-neutral-700'
                      }`}
                    >
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {inquiry.decision && (
              <div>
                <h3 className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  Decision They Are Facing
                </h3>
                <p className={`text-sm whitespace-pre-wrap ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-900'
                }`}>{inquiry.decision}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inquiry.prompt && (
                <div>
                  <h3 className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    What Prompted This
                  </h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-900'
                  }`}>{inquiry.prompt}</p>
                </div>
              )}
              {inquiry.timing && (
                <div>
                  <h3 className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    Timing & Urgency
                  </h3>
                  <p className={`text-sm ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-900'
                  }`}>{inquiry.timing}</p>
                </div>
              )}
            </div>

            {inquiry.advisors && (
              <div>
                <h3 className={`text-xs font-medium uppercase tracking-wider mb-2 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  How They Work With Advisors
                </h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-900'
                }`}>{inquiry.advisors}</p>
              </div>
            )}
          </div>

          <div className={`px-6 py-4 border-t ${
            theme === 'dark'
              ? 'border-neutral-800 bg-neutral-900'
              : 'border-neutral-200 bg-neutral-50'
          }`}>
            <InquiryActions inquiry={inquiry} />
          </div>
        </div>
      </main>
    </div>
  )
}
