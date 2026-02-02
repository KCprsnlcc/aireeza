'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import StatusBadge from './StatusBadge'

export interface Inquiry {
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

interface InquiryTableProps {
  inquiries: Inquiry[]
}

export default function InquiryTable({ inquiries }: InquiryTableProps) {
  if (inquiries.length === 0) {
    return (
      <div className="bg-white border border-neutral-200 rounded-lg p-12 text-center">
        <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon icon="ph:envelope-simple" className="w-6 h-6 text-neutral-400" />
        </div>
        <h3 className="text-sm font-medium text-neutral-900 mb-1">No inquiries yet</h3>
        <p className="text-sm text-neutral-500">Inquiries from the contact form will appear here.</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50">
            <th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
              Role
            </th>
            <th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
              Scale
            </th>
            <th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
              Timing
            </th>
            <th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
              Status
            </th>
            <th className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
              Date
            </th>
            <th className="text-right text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200">
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id} className="hover:bg-neutral-50 transition-colors">
              <td className="px-6 py-4">
                <p className="text-sm text-neutral-900 font-medium truncate max-w-[200px]">
                  {inquiry.role}
                </p>
              </td>
              <td className="px-6 py-4">
                <p className="text-sm text-neutral-600 truncate max-w-[180px]">
                  {inquiry.scale}
                </p>
              </td>
              <td className="px-6 py-4">
                <p className="text-sm text-neutral-600">
                  {inquiry.timing || '—'}
                </p>
              </td>
              <td className="px-6 py-4">
                <StatusBadge status={inquiry.status} />
              </td>
              <td className="px-6 py-4">
                <p className="text-sm text-neutral-500">
                  {new Date(inquiry.created_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </td>
              <td className="px-6 py-4 text-right">
                <Link
                  href={`/admin/inquiries/${inquiry.id}`}
                  className="inline-flex items-center gap-1 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                >
                  View
                  <Icon icon="ph:arrow-right" className="w-4 h-4" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
