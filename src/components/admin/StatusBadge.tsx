'use client'

type Status = 'incomplete' | 'pending' | 'reviewed' | 'scheduled' | 'completed' | 'archived'

const statusStyles: Record<Status, { bg: string; text: string }> = {
  incomplete: { 
    bg: 'bg-slate-50', 
    text: 'text-slate-700'
  },
  pending: { 
    bg: 'bg-amber-50', 
    text: 'text-amber-800'
  },
  reviewed: { 
    bg: 'bg-blue-50', 
    text: 'text-blue-800'
  },
  scheduled: { 
    bg: 'bg-purple-50', 
    text: 'text-purple-800'
  },
  completed: { 
    bg: 'bg-emerald-50', 
    text: 'text-emerald-800'
  },
  archived: { 
    bg: 'bg-neutral-100', 
    text: 'text-neutral-600'
  },
}

export default function StatusBadge({ status }: { status: Status }) {
  const style = statusStyles[status] || statusStyles.pending

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 hover:scale-105 ${style.bg} ${style.text}`}
    >
      {/* Vogue-style decorative dot */}
      <span className="w-1.5 h-1.5 rounded-full mr-2 bg-current opacity-40"></span>
      {status}
    </span>
  )
}
