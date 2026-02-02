'use client'

import { useTheme } from '@/contexts/ThemeContext'

type Status = 'pending' | 'reviewed' | 'scheduled' | 'completed' | 'archived'

const statusStyles: Record<Status, { bgLight: string; textLight: string; bgDark: string; textDark: string }> = {
  pending: { 
    bgLight: 'bg-amber-50', 
    textLight: 'text-amber-700',
    bgDark: 'bg-amber-900/30',
    textDark: 'text-amber-400'
  },
  reviewed: { 
    bgLight: 'bg-blue-50', 
    textLight: 'text-blue-700',
    bgDark: 'bg-blue-900/30',
    textDark: 'text-blue-400'
  },
  scheduled: { 
    bgLight: 'bg-purple-50', 
    textLight: 'text-purple-700',
    bgDark: 'bg-purple-900/30',
    textDark: 'text-purple-400'
  },
  completed: { 
    bgLight: 'bg-green-50', 
    textLight: 'text-green-700',
    bgDark: 'bg-green-900/30',
    textDark: 'text-green-400'
  },
  archived: { 
    bgLight: 'bg-neutral-100', 
    textLight: 'text-neutral-500',
    bgDark: 'bg-neutral-800',
    textDark: 'text-neutral-400'
  },
}

export default function StatusBadge({ status }: { status: Status }) {
  const { theme } = useTheme()
  const style = statusStyles[status] || statusStyles.pending

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize transition-colors ${
        theme === 'dark' 
          ? `${style.bgDark} ${style.textDark}` 
          : `${style.bgLight} ${style.textLight}`
      }`}
    >
      {status}
    </span>
  )
}
