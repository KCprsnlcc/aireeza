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
import { useScrubText } from '@/hooks/useScrubText'

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
  
  // Apply scrub text to detail headline
  const detailTitle = "INQUIRY DETAILS"
  const { containerRef, spansHtml } = useScrubText(detailTitle, theme)

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
      <div className={`min-h-screen transition-colors relative overflow-hidden ${
        theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
      }`}>
        
        <AdminNav />
        <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">
          <div className="text-center py-24">
            <Icon icon="ph:spinner" className="w-12 h-12 animate-spin mx-auto text-neutral-400" />
          </div>
        </main>
      </div>
    )
  }

  if (!inquiry) {
    return (
      <div className={`min-h-screen transition-colors relative overflow-hidden ${
        theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
      }`}>
        
        <AdminNav />
        <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">
          <div className="text-center py-24">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 transition-all duration-500 ${
              theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
            }`}>
              <Icon icon="ph:question-mark" className={`w-10 h-10 ${
                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-600'
              }`} />
            </div>
            <h2 className={`text-2xl font-black tracking-tighter mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>Inquiry Not Found</h2>
            <p className={`text-lg font-light leading-relaxed tracking-wide ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>The requested inquiry could not be located</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className={`min-h-screen transition-colors relative overflow-hidden ${
      theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
    }`}>
      
      <AdminNav />
      <main className="max-w-5xl mx-auto px-6 py-12 relative z-10">
        {/* Vogue-style back navigation */}
        <Link
          href="/admin/inquiries"
          className={`inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] mb-8 transition-all duration-500 group ${
            theme === 'dark'
              ? 'text-neutral-400 hover:text-white'
              : 'text-neutral-600 hover:text-black'
          }`}
        >
          <Icon icon="ph:arrow-left" className="w-4 h-4 transition-transform duration-500 group-hover:-translate-x-1" />
          <span>Back to inquiries</span>
        </Link>

        {/* Vogue-style inquiry details card */}
        <div className={`border rounded-2xl relative overflow-hidden ${
          theme === 'dark'
            ? 'bg-neutral-900/50 border-neutral-800'
            : 'bg-white border-neutral-200'
        }`}>
          
          <div className={`px-8 py-6 border-b flex items-center justify-between relative z-10 ${
            theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
          }`}>
            <div>
              <div 
                ref={containerRef}
                className={`scrub-text text-2xl font-black tracking-tighter leading-[0.8] mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}
                dangerouslySetInnerHTML={{ __html: spansHtml }}
              />
              <p className={`text-sm font-light leading-relaxed tracking-wide ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
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

          {/* Vogue-style content sections */}
          <div className="p-8 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-4 pb-3 border-b ${
                  theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                }`}>
                  Role in Business
                </h3>
                <p className={`text-sm font-light leading-relaxed tracking-wide ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>{inquiry.role}</p>
              </div>
              <div>
                <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-4 pb-3 border-b ${
                  theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                }`}>
                  Business Scale
                </h3>
                <p className={`text-sm font-light leading-relaxed tracking-wide ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>{inquiry.scale}</p>
              </div>
            </div>

            {inquiry.challenges && inquiry.challenges.length > 0 && (
              <div>
                <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-6 pb-3 border-b ${
                  theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                }`}>
                  Primary Challenges
                </h3>
                <div className="flex flex-wrap gap-3">
                  {inquiry.challenges.map((challenge: string, index: number) => (
                    <span
                      key={index}
                      className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-light tracking-wide transition-all duration-500 hover:scale-105 ${
                        theme === 'dark'
                          ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      {/* Vogue-style decorative dot */}
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        theme === 'dark' ? 'bg-current opacity-60' : 'bg-current opacity-40'
                      }`}></span>
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {inquiry.decision && (
              <div>
                <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-6 pb-3 border-b ${
                  theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                }`}>
                  Decision They Are Facing
                </h3>
                <p className={`text-sm font-light leading-relaxed tracking-wide whitespace-pre-wrap ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-900'
                }`}>{inquiry.decision}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {inquiry.prompt && (
                <div>
                  <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-6 pb-3 border-b ${
                    theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                  }`}>
                    What Prompted This
                  </h3>
                  <p className={`text-sm font-light leading-relaxed tracking-wide ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-900'
                  }`}>{inquiry.prompt}</p>
                </div>
              )}
              {inquiry.timing && (
                <div>
                  <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-6 pb-3 border-b ${
                    theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                  }`}>
                    Timing & Urgency
                  </h3>
                  <p className={`text-sm font-light leading-relaxed tracking-wide ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-900'
                  }`}>{inquiry.timing}</p>
                </div>
              )}
            </div>

            {inquiry.advisors && (
              <div>
                <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-6 pb-3 border-b ${
                  theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                }`}>
                  How They Work With Advisors
                </h3>
                <p className={`text-sm font-light leading-relaxed tracking-wide ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-900'
                }`}>{inquiry.advisors}</p>
              </div>
            )}
          </div>

          {/* Vogue-style actions section */}
          <div className={`px-8 py-6 border-t relative overflow-hidden ${
            theme === 'dark'
              ? 'border-neutral-800 bg-neutral-900'
              : 'border-neutral-200 bg-neutral-50'
          }`}>
            
            <div className="relative z-10">
              <InquiryActions inquiry={inquiry} />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
