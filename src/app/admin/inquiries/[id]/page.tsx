import { createClient } from '@/lib/supabase/server'
import AdminNav from '@/components/admin/AdminNav'
import StatusBadge from '@/components/admin/StatusBadge'
import InquiryActions from './InquiryActions'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function InquiryDetailPage({ params }: PageProps) {
  const { id } = await params
  const supabase = await createClient()

  const { data: inquiry, error } = await supabase
    .from('inquiries')
    .select('*')
    .eq('id', id)
    .single()

  if (error || !inquiry) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <AdminNav />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <Link
          href="/admin/inquiries"
          className="inline-flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 mb-6 transition-colors"
        >
          <Icon icon="ph:arrow-left" className="w-4 h-4" />
          Back to inquiries
        </Link>

        <div className="bg-white border border-neutral-200 rounded-lg">
          <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
            <div>
              <h1 className="text-lg font-semibold text-neutral-900 mb-1">Inquiry Details</h1>
              <p className="text-sm text-neutral-500">
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
                <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                  Role in Business
                </h3>
                <p className="text-sm text-neutral-900">{inquiry.role}</p>
              </div>
              <div>
                <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                  Business Scale
                </h3>
                <p className="text-sm text-neutral-900">{inquiry.scale}</p>
              </div>
            </div>

            {inquiry.challenges && inquiry.challenges.length > 0 && (
              <div>
                <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                  Primary Challenges
                </h3>
                <div className="flex flex-wrap gap-2">
                  {inquiry.challenges.map((challenge: string, index: number) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2.5 py-1 rounded-md bg-neutral-100 text-sm text-neutral-700"
                    >
                      {challenge}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {inquiry.decision && (
              <div>
                <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                  Decision They Are Facing
                </h3>
                <p className="text-sm text-neutral-900 whitespace-pre-wrap">{inquiry.decision}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inquiry.prompt && (
                <div>
                  <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                    What Prompted This
                  </h3>
                  <p className="text-sm text-neutral-900">{inquiry.prompt}</p>
                </div>
              )}
              {inquiry.timing && (
                <div>
                  <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                    Timing & Urgency
                  </h3>
                  <p className="text-sm text-neutral-900">{inquiry.timing}</p>
                </div>
              )}
            </div>

            {inquiry.advisors && (
              <div>
                <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
                  How They Work With Advisors
                </h3>
                <p className="text-sm text-neutral-900">{inquiry.advisors}</p>
              </div>
            )}
          </div>

          <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50">
            <InquiryActions inquiry={inquiry} />
          </div>
        </div>
      </main>
    </div>
  )
}
