type Status = 'pending' | 'reviewed' | 'scheduled' | 'completed' | 'archived'

const statusStyles: Record<Status, { bg: string; text: string }> = {
  pending: { bg: 'bg-amber-50', text: 'text-amber-700' },
  reviewed: { bg: 'bg-blue-50', text: 'text-blue-700' },
  scheduled: { bg: 'bg-purple-50', text: 'text-purple-700' },
  completed: { bg: 'bg-green-50', text: 'text-green-700' },
  archived: { bg: 'bg-neutral-100', text: 'text-neutral-500' },
}

export default function StatusBadge({ status }: { status: Status }) {
  const style = statusStyles[status] || statusStyles.pending

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize ${style.bg} ${style.text}`}
    >
      {status}
    </span>
  )
}
