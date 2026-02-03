'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { useTheme } from '@/contexts/ThemeContext'
import { useScrubText } from '@/hooks/useScrubText'

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
  
  // Apply scrub text to actions title
  const actionsTitle = "UPDATE STATUS"
  const { containerRef, spansHtml } = useScrubText(actionsTitle, theme)

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
    <div className="space-y-8">
      {/* Vogue-style status update section */}
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="flex-1">
          <div 
            ref={containerRef}
            className={`scrub-text text-xs font-black uppercase tracking-[0.3em] mb-4 pb-3 border-b ${
              theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
            }`}
            dangerouslySetInnerHTML={{ __html: spansHtml }}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as Status)}
            className={`w-full px-6 py-4 border-2 rounded-xl text-sm font-light tracking-wide focus:outline-none focus:ring-0 transition-all duration-500 ${
              theme === 'dark'
                ? 'bg-neutral-900 border-neutral-700 text-white focus:border-white'
                : 'bg-white border-neutral-300 text-neutral-900 focus:border-black'
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

      {/* Vogue-style notes section */}
      <div>
        <h3 className={`text-xs font-black uppercase tracking-[0.3em] mb-4 pb-3 border-b ${
          theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
        }`}>
          Internal Notes
        </h3>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
          placeholder="Add notes about this inquiry..."
          className={`w-full px-6 py-4 border-2 rounded-xl text-sm font-light tracking-wide focus:outline-none focus:ring-0 resize-none transition-all duration-500 ${
            theme === 'dark'
              ? 'bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-white'
              : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-black'
          }`}
        />
      </div>

      {/* Vogue-style actions section */}
      <div className="flex items-center gap-6">
        <button
          onClick={handleSave}
          disabled={saving}
          className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed group ${
            theme === 'dark'
              ? 'bg-white text-black hover:bg-neutral-200'
              : 'bg-black text-white hover:bg-neutral-800'
          }`}
        >
          {saving ? (
            <>
              <Icon icon="ph:spinner" className="w-4 h-4 animate-spin" />
              <span>Saving...</span>
            </>
          ) : (
            <>
              <Icon icon="ph:floppy-disk" className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" />
              <span>Save Changes</span>
            </>
          )}
        </button>
        
        {saved && (
          <div className={`flex items-center gap-2 text-xs font-light uppercase tracking-wide transition-all duration-500 ${
            theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
          }`}>
            <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
            <Icon icon="ph:check" className="w-4 h-4" />
            <span>Saved</span>
          </div>
        )}
      </div>
    </div>
  )
}
