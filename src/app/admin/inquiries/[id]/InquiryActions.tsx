'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'

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
          <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
            Update Status
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
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
        <label className="block text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2">
          Internal Notes
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          placeholder="Add notes about this inquiry..."
          className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent resize-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="inline-flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
          <span className="flex items-center gap-1 text-sm text-green-600">
            <Icon icon="ph:check" className="w-4 h-4" />
            Saved
          </span>
        )}
      </div>
    </div>
  )
}
