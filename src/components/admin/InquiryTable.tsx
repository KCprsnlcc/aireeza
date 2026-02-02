'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import StatusBadge from './StatusBadge'
import { useTheme } from '@/contexts/ThemeContext'

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
  const { theme } = useTheme()
  
  if (inquiries.length === 0) {
    return (
      <div className={`border rounded-lg p-12 text-center fade-up ${
        theme === 'dark'
          ? 'bg-neutral-900/50 border-neutral-800'
          : 'bg-white border-neutral-200'
      }`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
          theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
        }`}>
          <Icon icon="ph:envelope-simple" className="w-6 h-6 text-neutral-400" />
        </div>
        <h3 className={`text-sm font-medium mb-1 ${
          theme === 'dark' ? 'text-white' : 'text-neutral-900'
        }`}>No inquiries yet</h3>
        <p className={`text-sm ${
          theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
        }`}>Inquiries from the contact form will appear here.</p>
      </div>
    )
  }

  return (
    <div className={`border rounded-lg overflow-hidden fade-up ${
      theme === 'dark'
        ? 'bg-neutral-900/50 border-neutral-800'
        : 'bg-white border-neutral-200'
    }`}>
      <table className="w-full">
        <thead>
          <tr className={`border-b ${
            theme === 'dark'
              ? 'border-neutral-800 bg-neutral-900'
              : 'border-neutral-200 bg-neutral-50'
          }`}>
            <th className={`text-left text-xs font-medium uppercase tracking-wider px-6 py-3 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              Role
            </th>
            <th className={`text-left text-xs font-medium uppercase tracking-wider px-6 py-3 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              Scale
            </th>
            <th className={`text-left text-xs font-medium uppercase tracking-wider px-6 py-3 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              Timing
            </th>
            <th className={`text-left text-xs font-medium uppercase tracking-wider px-6 py-3 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              Status
            </th>
            <th className={`text-left text-xs font-medium uppercase tracking-wider px-6 py-3 ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              Date
            </th>
            <th className="text-right text-xs font-medium text-neutral-500 uppercase tracking-wider px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className={`divide-y ${
          theme === 'dark' ? 'divide-neutral-800' : 'divide-neutral-200'
        }`}>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id} className={`transition-all duration-300 ${
              theme === 'dark'
                ? 'hover:bg-neutral-900/70'
                : 'hover:bg-neutral-50'
            }`}>
              <td className="px-6 py-4">
                <p className={`text-sm font-medium truncate max-w-[200px] ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {inquiry.role}
                </p>
              </td>
              <td className="px-6 py-4">
                <p className={`text-sm truncate max-w-[180px] ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  {inquiry.scale}
                </p>
              </td>
              <td className="px-6 py-4">
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-600'
                }`}>
                  {inquiry.timing || '—'}
                </p>
              </td>
              <td className="px-6 py-4">
                <StatusBadge status={inquiry.status} />
              </td>
              <td className="px-6 py-4">
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
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
                  className={`inline-flex items-center gap-1 text-sm transition-colors ${
                    theme === 'dark'
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
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
