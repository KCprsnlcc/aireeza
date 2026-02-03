'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import StatusBadge from './StatusBadge'
import { useTheme } from '@/contexts/ThemeContext'

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
  const { theme } = useTheme()
  
  if (inquiries.length === 0) {
    return (
      <div className={`border rounded-2xl p-20 text-center relative overflow-hidden ${
        theme === 'dark'
          ? 'bg-neutral-900/50 border-neutral-800'
          : 'bg-white border-neutral-200'
      }`}>
        
        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8 transition-all duration-500 ${
            theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
          }`}>
            <Icon icon="solar:letter-linear" className={`w-8 h-8 transition-colors duration-500 ${
              theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
            }`} />
          </div>
          <h3 className={`text-lg font-black tracking-tighter mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>No inquiries yet</h3>
          <p className={`text-sm font-light leading-relaxed tracking-wide ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
          }`}>Inquiries from the contact form will appear here.</p>
        </div>
      </div>
    )
  }

  return (
    <div className={`border rounded-2xl overflow-hidden relative ${
      theme === 'dark'
        ? 'bg-neutral-900/50 border-neutral-800'
        : 'bg-white border-neutral-200'
    }`}>
      
      <table className="w-full relative z-10">
        <thead>
          <tr className={`border-b transition-all duration-700 ${
            theme === 'dark'
              ? 'border-neutral-800 bg-neutral-900'
              : 'border-neutral-200 bg-neutral-50'
          }`}>
            <th className={`text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Contact
            </th>
            <th className={`text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Role
            </th>
            <th className={`text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Scale
            </th>
            <th className={`text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Timing
            </th>
            <th className={`text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Status
            </th>
            <th className={`text-left text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              Date
            </th>
            <th className="text-right text-xs font-black uppercase tracking-[0.3em] px-8 py-6 leading-relaxed text-neutral-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className={`divide-y ${
          theme === 'dark' ? 'divide-neutral-800' : 'divide-neutral-200'
        }`}>
          {inquiries.map((inquiry, index) => (
            <tr key={inquiry.id} className={`transition-all duration-500 hover:bg-opacity-50 ${
              theme === 'dark'
                ? 'hover:bg-neutral-900/70'
                : 'hover:bg-neutral-50'
            }`}>
              <td className="px-8 py-6">
                <div className="space-y-1">
                  {inquiry.full_name && (
                    <p className={`text-sm font-light leading-relaxed tracking-wide truncate max-w-[200px] transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                      {inquiry.full_name}
                    </p>
                  )}
                  {inquiry.email && (
                    <p className={`text-xs font-light leading-relaxed tracking-wide truncate max-w-[200px] transition-colors duration-500 ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                      {inquiry.email}
                    </p>
                  )}
                  {inquiry.phone && (
                    <p className={`text-xs font-light leading-relaxed tracking-wide transition-colors duration-500 ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`}>
                      {inquiry.phone}
                    </p>
                  )}
                  {!inquiry.full_name && !inquiry.email && !inquiry.phone && (
                    <p className={`text-xs font-light leading-relaxed tracking-wide transition-colors duration-500 ${
                      theme === 'dark' ? 'text-neutral-500' : 'text-neutral-500'
                    }`}>
                      No contact info
                    </p>
                  )}
                </div>
              </td>
              <td className="px-8 py-6">
                <p className={`text-sm font-light leading-relaxed tracking-wide truncate max-w-[240px] transition-colors duration-500 ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>
                  {inquiry.role || '—'}
                </p>
              </td>
              <td className="px-8 py-6">
                <p className={`text-xs font-light leading-relaxed tracking-wide truncate max-w-[200px] transition-colors duration-500 ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  {inquiry.scale || '—'}
                </p>
              </td>
              <td className="px-8 py-6">
                <p className={`text-xs font-light leading-relaxed tracking-wide transition-colors duration-500 ${
                  theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                }`}>
                  {inquiry.timing || '—'}
                </p>
              </td>
              <td className="px-8 py-6">
                <StatusBadge status={inquiry.status} />
              </td>
              <td className="px-8 py-6">
                <p className={`text-xs font-light leading-relaxed tracking-wide transition-colors duration-500 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                }`}>
                  {new Date(inquiry.created_at).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </td>
              <td className="px-8 py-6 text-right">
                <Link
                  href={`/admin/inquiries/${inquiry.id}`}
                  className={`inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 group ${
                    theme === 'dark'
                      ? 'text-neutral-400 hover:text-white'
                      : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  View
                  <Icon icon="solar:arrow-right-linear" className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
