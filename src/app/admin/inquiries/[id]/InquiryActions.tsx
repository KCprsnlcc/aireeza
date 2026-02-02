'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { useTheme } from '@/contexts/ThemeContext'

type Status = 'pending' | 'reviewed' | 'scheduled' | 'completed' | 'archived'

interface InquiryActionsProps {
  inquiry: {
    id: string
    status: Status
    notes: string | null
  }
}

const statusOptions: { value: Status; label: string }[] = [
  { value: 'pending', label: 'Pending' },
  { value: 'reviewed', label: 'Reviewed' },
  { value: 'scheduled', label: 'Scheduled' },
  { value: 'completed', label: 'Completed' },
  { value: 'archived', label: 'Archived' },
]

export default function InquiryActions({ inquiry }: InquiryActionsProps) {
  const { theme } = useTheme()
  const [status, setStatus] = useState<Status>(inquiry.status)
  const [notes, setNotes] = useState(inquiry.notes || '')
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSave = async () => {
    setSaving(true)
    setSaved(false)

    const { error } = await supabase
      .from('inquiries')
      .update({ status, notes })
      .eq('id', inquiry.id)

    setSaving(false)

    if (!error) {
      setSaved(true)
      router.refresh()
      setTimeout(() => setSaved(false), 2000)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className={`block text-xs font-medium uppercase tracking-wider mb-2 ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
          }`}>
            Update Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 transition-colors ${
              theme === 'dark'
                ? 'bg-neutral-900 border-neutral-700 text-white focus:ring-white focus:border-white'
                : 'bg-white border-neutral-300 text-neutral-900 focus:ring-neutral-900 focus:border-transparent'
            }`}
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={`block text-xs font-medium uppercase tracking-wider mb-2 ${
          theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
        }`}>
          Internal Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Add notes about this inquiry..."
          className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 resize-none transition-colors ${
            theme === 'dark'
              ? 'bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:ring-white focus:border-white'
              : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:ring-neutral-900 focus:border-transparent'
          }`}
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
            theme === 'dark'
              ? 'bg-white text-black hover:bg-neutral-200'
              : 'bg-neutral-900 text-white hover:bg-neutral-800'
          }`}
        >
          {saving ? (
            <>
              <Icon icon="ph:spinner" className="w-4 h-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Icon icon="ph:floppy-disk" className="w-4 h-4" />
              Save Changes
            </>
          )}
        </button>
        {saved && (
          <span className={`flex items-center gap-1 text-sm ${
            theme === 'dark' ? 'text-green-400' : 'text-green-600'
          }`}>
            <Icon icon="ph:check" className="w-4 h-4" />
            Saved
          </span>
        )}
      </div>
    </div>
  )
}
