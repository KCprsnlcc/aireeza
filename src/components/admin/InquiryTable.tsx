'use client'

import { createClient } from '@/lib/supabase/client'
import { Icon } from '@iconify/react'
import Link from 'next/link'
import StatusBadge from './StatusBadge'

export interface Inquiry {
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

interface InquiryTableProps {
  inquiries: Inquiry[]
}

export default function InquiryTable({ inquiries }: InquiryTableProps) {
  const supabase = createClient()
  
  const handleQuickStatusChange = async (inquiryId: string, newStatus: string) => {
    const { error } = await supabase
      .from('inquiries')
      .update({ status: newStatus })
      .eq('id', inquiryId)
    
    if (!error) {
      window.location.reload()
    }
  }
  
  if (inquiries.length === 0) {
    return (
      <div className="border rounded-2xl p-20 text-center relative overflow-hidden bg-white border-neutral-200">
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 transition-all duration-500 bg-neutral-100">
            <Icon icon="solar:letter-linear" className="w-8 h-8 transition-colors duration-500 text-neutral-400" />
          </div>
          <h3 className="text-lg font-black tracking-tighter mb-4 text-black">No inquiries yet</h3>
          <p className="text-sm font-light leading-relaxed tracking-wide text-neutral-600">Inquiries from the contact form will appear here.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="border rounded-2xl overflow-hidden relative bg-white border-neutral-200">
      <div 
        className="overflow-x-auto scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-transparent vanilla-scroll"
        data-vanilla-scroll="true"
      >
        <table className="w-full relative z-10 min-w-[800px]">
          <thead>
            <tr className="border-b transition-all duration-700 border-neutral-200 bg-neutral-50">
              <th className="text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed text-neutral-600">
                Contact
              </th>
              <th className="text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed text-neutral-600">
                Role
              </th>
              <th className="text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed text-neutral-600">
                Scale
              </th>
              <th className="text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed text-neutral-600">
                Timing
              </th>
              <th className="text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed text-neutral-600">
                Status
              </th>
              <th className="text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed text-neutral-600">
                Date
              </th>
              <th className="text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed text-neutral-600">
                Quick Actions
              </th>
              <th className="text-right text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed text-neutral-600">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-200">
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="transition-all duration-500 hover:bg-opacity-50 hover:bg-neutral-50">
                <td className="px-8 py-6">
                  <div className="space-y-1">
                    {inquiry.full_name && (
                      <p className="text-sm font-light leading-relaxed tracking-wide truncate max-w-[200px] transition-colors duration-500 text-neutral-900">
                        {inquiry.full_name}
                      </p>
                    )}
                    {inquiry.email && (
                      <p className="text-xs font-light leading-relaxed tracking-wide truncate max-w-[200px] transition-colors duration-500 text-neutral-600">
                        {inquiry.email}
                      </p>
                    )}
                    {inquiry.phone && (
                      <p className="text-xs font-light leading-relaxed tracking-wide transition-colors duration-500 text-neutral-600">
                        {inquiry.phone}
                      </p>
                    )}
                    {!inquiry.full_name && !inquiry.email && !inquiry.phone && (
                      <p className="text-xs font-light leading-relaxed tracking-wide transition-colors duration-500 text-neutral-500">
                        No contact info
                      </p>
                    )}
                  </div>
                </td>
                <td className="px-8 py-6">
                  <p className="text-sm font-light leading-relaxed tracking-wide truncate max-w-[240px] transition-colors duration-500 text-neutral-900">
                    {inquiry.role || '—'}
                  </p>
                </td>
                <td className="px-8 py-6">
                  <p className="text-xs font-light leading-relaxed tracking-wide truncate max-w-[200px] transition-colors duration-500 text-neutral-700">
                    {inquiry.scale || '—'}
                  </p>
                </td>
                <td className="px-8 py-6">
                  <p className="text-xs font-light leading-relaxed tracking-wide transition-colors duration-500 text-neutral-700">
                    {inquiry.timing || '—'}
                  </p>
                </td>
                <td className="px-8 py-6">
                  <StatusBadge status={inquiry.status} />
                </td>
                <td className="px-8 py-6">
                  <p className="text-xs font-light leading-relaxed tracking-wide transition-colors duration-500 text-neutral-500">
                    {new Date(inquiry.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </td>
                <td className="px-8 py-6">
                  <div className="flex items-center gap-3">
                    {inquiry.status === 'incomplete' && (
                      <button
                        onClick={() => handleQuickStatusChange(inquiry.id, 'pending')}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-light uppercase tracking-wide transition-all duration-500 hover:scale-105 bg-amber-50 text-amber-700 hover:bg-amber-100"
                        title="Mark as pending"
                      >
                        <Icon icon="ph:check-circle" className="w-3 h-3" />
                        Review
                      </button>
                    )}
                    {inquiry.status === 'pending' && (
                      <button
                        onClick={() => handleQuickStatusChange(inquiry.id, 'reviewed')}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-light uppercase tracking-wide transition-all duration-500 hover:scale-105 bg-blue-50 text-blue-700 hover:bg-blue-100"
                        title="Mark as reviewed"
                      >
                        <Icon icon="ph:eye" className="w-3 h-3" />
                        Reviewed
                      </button>
                    )}
                    {inquiry.status === 'reviewed' && (
                      <button
                        onClick={() => handleQuickStatusChange(inquiry.id, 'scheduled')}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-light uppercase tracking-wide transition-all duration-500 hover:scale-105 bg-purple-50 text-purple-700 hover:bg-purple-100"
                        title="Schedule meeting"
                      >
                        <Icon icon="ph:calendar" className="w-3 h-3" />
                        Schedule
                      </button>
                    )}
                    {['scheduled', 'completed'].includes(inquiry.status) && (
                      <button
                        onClick={() => handleQuickStatusChange(inquiry.id, 'archived')}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-light uppercase tracking-wide transition-all duration-500 hover:scale-105 bg-neutral-50 text-neutral-700 hover:bg-neutral-100"
                        title="Archive inquiry"
                      >
                        <Icon icon="ph:archive" className="w-3 h-3" />
                        Archive
                      </button>
                    )}
                  </div>
                </td>
                <td className="px-8 py-6 text-right">
                  <Link
                    href={`/admin/inquiries/${inquiry.id}`}
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 group text-neutral-600 hover:text-black"
                  >
                    Details
                    <Icon icon="solar:arrow-right-linear" className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
