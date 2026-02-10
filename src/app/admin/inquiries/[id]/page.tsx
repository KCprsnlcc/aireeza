'use client'

import { createClient } from '@/lib/supabase/client'
import AdminNav from '@/components/admin/AdminNav'
import InquiryActions from './InquiryActions'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
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

export default function InquiryDetailPage() {
  const params = useParams()
  const supabase = createClient()
  const [inquiry, setInquiry] = useState<Inquiry | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Apply scrub text to detail headline
  const detailTitle = "INQUIRY DETAILS"
  const { containerRef, spansHtml } = useScrubText(detailTitle)

  useEffect(() => {
    async function fetchInquiry() {
      if (!params.id) return

      setLoading(true)
      try {
        const { data, error } = await supabase
          .from('inquiries')
          .select('*')
          .eq('id', params.id)
          .single()

        if (error) {
          setError(error.message)
        } else {
          setInquiry(data)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchInquiry()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen transition-colors relative overflow-hidden bg-neutral-50">
        <AdminNav />
        <main className="max-w-4xl mx-auto px-6 py-12 relative z-10">
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="h-8 w-48 rounded animate-pulse bg-neutral-200"></div>
              <div className="h-4 w-32 rounded animate-pulse bg-neutral-200"></div>
            </div>
            <div className="border rounded-2xl overflow-hidden relative border-neutral-200 bg-white">
              <div className="h-16 border-b border-neutral-200"></div>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="h-20 border-b animate-pulse border-neutral-200"></div>
              ))}
            </div>
          </div>
        </main>
      </div>
    )
  }

  if (error || !inquiry) {
    return (
      <div className="min-h-screen transition-colors relative overflow-hidden bg-neutral-50">
        <AdminNav />
        <main className="max-w-4xl mx-auto px-6 py-12 relative z-10">
          <div className="border rounded-2xl p-8 relative overflow-hidden bg-red-50 border-red-200">
            <div className="flex items-center gap-4 mb-4">
              <Icon icon="ph:warning-circle" className="w-5 h-5 text-red-600" />
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-red-600">Error Loading Inquiry</h3>
            </div>
            <p className="text-sm font-light leading-relaxed tracking-wide text-red-600 mb-6">
              {error || 'Inquiry not found'}
            </p>
            <Link
              href="/admin/inquiries"
              className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 group text-red-600 hover:text-red-700"
            >
              <Icon icon="ph:arrow-left" className="w-4 h-4" />
              <span>Back to Inquiries</span>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen transition-colors relative overflow-hidden bg-neutral-50">
      
      <AdminNav />
      <main className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Vogue-style header */}
        <div className="mb-16">
          <div className="flex items-center gap-8 mb-8">
            <Link
              href="/admin/inquiries"
              className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 group text-neutral-500 hover:text-black"
            >
              <Icon icon="ph:arrow-left" className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1" />
              <span>Back to Inquiries</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-8 mb-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">ADMIN</span>
            <div className="h-px w-24 bg-neutral-300"></div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">INQUIRY</span>
          </div>
          
          <div 
            ref={containerRef}
            className="scrub-text text-4xl md:text-6xl font-black tracking-tighter leading-[0.8] mb-8 text-black"
            dangerouslySetInnerHTML={{ __html: spansHtml }}
          />
          
          <p className="text-lg font-light leading-relaxed tracking-wide max-w-3xl text-neutral-700">
            Detailed information about this client inquiry
          </p>
        </div>

        {/* Vogue-style inquiry details card */}
        <div className="border rounded-2xl relative overflow-hidden bg-white border-neutral-200 mb-8">
          
          <div className="px-8 py-6 border-b relative z-10 border-neutral-200">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-black tracking-tight mb-2 text-black">
                  {inquiry.full_name || 'Anonymous'}
                </h2>
                <p className="text-sm font-light leading-relaxed tracking-wide text-neutral-600">
                  Submitted {new Date(inquiry.created_at).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <InquiryActions inquiry={inquiry} onUpdate={() => window.location.reload()} />
            </div>
          </div>

          <div className="p-8 space-y-8">
            {/* Contact Information */}
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-black">Contact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {inquiry.email && (
                  <div className="flex items-center gap-3">
                    <Icon icon="ph:envelope" className="w-5 h-5 text-neutral-600" />
                    <span className="text-sm font-light tracking-wide text-neutral-900">{inquiry.email}</span>
                  </div>
                )}
                {inquiry.phone && (
                  <div className="flex items-center gap-3">
                    <Icon icon="ph:phone" className="w-5 h-5 text-neutral-600" />
                    <span className="text-sm font-light tracking-wide text-neutral-900">{inquiry.phone}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Professional Information */}
            {(inquiry.role || inquiry.scale) && (
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-black">Professional Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {inquiry.role && (
                    <div>
                      <p className="text-xs font-light uppercase tracking-wide text-neutral-500 mb-2">Role</p>
                      <p className="text-sm font-light tracking-wide text-neutral-900">{inquiry.role}</p>
                    </div>
                  )}
                  {inquiry.scale && (
                    <div>
                      <p className="text-xs font-light uppercase tracking-wide text-neutral-500 mb-2">Scale</p>
                      <p className="text-sm font-light tracking-wide text-neutral-900">{inquiry.scale}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Challenges */}
            {inquiry.challenges && inquiry.challenges.length > 0 && (
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-black">Challenges</h3>
                <div className="flex flex-wrap gap-2">
                  {inquiry.challenges.map((challenge, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 text-xs font-light tracking-wide rounded-full bg-neutral-100 text-neutral-900"
                    >
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Information */}
            {(inquiry.decision || inquiry.prompt || inquiry.timing || inquiry.advisors) && (
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-black">Additional Information</h3>
                <div className="space-y-4">
                  {inquiry.decision && (
                    <div>
                      <p className="text-xs font-light uppercase tracking-wide text-neutral-500 mb-2">Decision Timeline</p>
                      <p className="text-sm font-light tracking-wide text-neutral-900">{inquiry.decision}</p>
                    </div>
                  )}
                  {inquiry.prompt && (
                    <div>
                      <p className="text-xs font-light uppercase tracking-wide text-neutral-500 mb-2">Prompt</p>
                      <p className="text-sm font-light tracking-wide text-neutral-900">{inquiry.prompt}</p>
                    </div>
                  )}
                  {inquiry.timing && (
                    <div>
                      <p className="text-xs font-light uppercase tracking-wide text-neutral-500 mb-2">Timing</p>
                      <p className="text-sm font-light tracking-wide text-neutral-900">{inquiry.timing}</p>
                    </div>
                  )}
                  {inquiry.advisors && (
                    <div>
                      <p className="text-xs font-light uppercase tracking-wide text-neutral-500 mb-2">Advisors</p>
                      <p className="text-sm font-light tracking-wide text-neutral-900">{inquiry.advisors}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Notes */}
            {inquiry.notes && (
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-4 text-black">Notes</h3>
                <p className="text-sm font-light tracking-wide text-neutral-900 leading-relaxed">{inquiry.notes}</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
