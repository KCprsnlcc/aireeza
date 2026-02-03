'use client'

import { useTheme } from '@/contexts/ThemeContext'

type Status = 'pending' | 'reviewed' | 'scheduled' | 'completed' | 'archived'

const statusStyles: Record<Status, { bgLight: string; textLight: string; bgDark: string; textDark: string }> = {
  pending: { 
    bgLight: 'bg-amber-50', 
    textLight: 'text-amber-800',
    bgDark: 'bg-amber-900/40',
    textDark: 'text-amber-300'
  },
  reviewed: { 
    bgLight: 'bg-blue-50', 
    textLight: 'text-blue-800',
    bgDark: 'bg-blue-900/40',
    textDark: 'text-blue-300'
  },
  scheduled: { 
    bgLight: 'bg-purple-50', 
    textLight: 'text-purple-800',
    bgDark: 'bg-purple-900/40',
    textDark: 'text-purple-300'
  },
  completed: { 
    bgLight: 'bg-emerald-50', 
    textLight: 'text-emerald-800',
    bgDark: 'bg-emerald-900/40',
    textDark: 'text-emerald-300'
  },
  archived: { 
    bgLight: 'bg-neutral-100', 
    textLight: 'text-neutral-600',
    bgDark: 'bg-neutral-800/60',
    textDark: 'text-neutral-400'
  },
}

export default function StatusBadge({ status }: { status: Status }) {
  const { theme } = useTheme()
  const style = statusStyles[status] || statusStyles.pending

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 ${
        theme === 'dark' 
          ? `${style.bgDark} ${style.textDark}` 
          : `${style.bgLight} ${style.textLight}`
      }`}
    >
      {/* Vogue-style decorative dot */}
      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
        theme === 'dark' ? 'bg-current opacity-60' : 'bg-current opacity-40'
      }`}></span>
      {status}
    </span>
  )
}
