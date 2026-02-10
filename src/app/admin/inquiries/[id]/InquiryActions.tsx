'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { createClient } from '@/lib/supabase/client'

type Status = 'incomplete' | 'pending' | 'reviewed' | 'scheduled' | 'completed' | 'archived'

interface InquiryActionsProps {
  inquiry: {
    id: string
    status: Status
  }
  onUpdate: () => void
}

export default function InquiryActions({ inquiry, onUpdate }: InquiryActionsProps) {
  const router = useRouter()
  const supabase = createClient()
  const [isUpdating, setIsUpdating] = useState(false)
  const [showStatusMenu, setShowStatusMenu] = useState(false)

  const statusOptions: { value: Status; label: string; icon: string; color: string }[] = [
    { value: 'incomplete', label: 'Incomplete', icon: 'ph:draft', color: 'text-neutral-600' },
    { value: 'pending', label: 'Pending Review', icon: 'ph:clock', color: 'text-yellow-600' },
    { value: 'reviewed', label: 'Reviewed', icon: 'ph:eye', color: 'text-blue-600' },
    { value: 'scheduled', label: 'Scheduled', icon: 'ph:calendar', color: 'text-green-600' },
    { value: 'completed', label: 'Completed', icon: 'ph:check-circle', color: 'text-emerald-600' },
    { value: 'archived', label: 'Archived', icon: 'ph:archive', color: 'text-gray-600' },
  ]

  const currentStatus = statusOptions.find(option => option.value === inquiry.status)

  const updateStatus = async (newStatus: Status) => {
    setIsUpdating(true)
    try {
      const { error } = await supabase
        .from('inquiries')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', inquiry.id)

      if (error) {
        console.error('Error updating status:', error)
      } else {
        onUpdate()
      }
    } finally {
      setIsUpdating(false)
      setShowStatusMenu(false)
    }
  }

  const deleteInquiry = async () => {
    if (!confirm('Are you sure you want to delete this inquiry? This action cannot be undone.')) {
      return
    }

    setIsUpdating(true)
    try {
      const { error } = await supabase
        .from('inquiries')
        .delete()
        .eq('id', inquiry.id)

      if (error) {
        console.error('Error deleting inquiry:', error)
      } else {
        router.push('/admin/inquiries')
      }
    } finally {
      setIsUpdating(false)
    }
  }

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        {/* Status Badge */}
        <button
          onClick={() => setShowStatusMenu(!showStatusMenu)}
          disabled={isUpdating}
          className="inline-flex items-center gap-2 px-3 py-2 text-xs font-black uppercase tracking-[0.3em] rounded-lg transition-all duration-500 bg-neutral-100 text-neutral-900 hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed border border-neutral-300"
        >
          <Icon icon={currentStatus?.icon || 'ph:circle'} className="w-4 h-4" />
          <span>{currentStatus?.label || 'Unknown'}</span>
          <Icon icon="ph:caret-down" className="w-3 h-3" />
        </button>

        {/* Delete Button */}
        <button
          onClick={deleteInquiry}
          disabled={isUpdating}
          className="inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-500 bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50 disabled:cursor-not-allowed border border-red-200"
        >
          <Icon icon="ph:trash" className="w-4 h-4" />
        </button>
      </div>

      {/* Status Dropdown */}
      {showStatusMenu && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setShowStatusMenu(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-neutral-200 rounded-xl shadow-lg z-20 overflow-hidden">
            <div className="py-2">
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => updateStatus(option.value)}
                  disabled={isUpdating || option.value === inquiry.status}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent"
                >
                  <Icon icon={option.icon} className={`w-4 h-4 ${option.color}`} />
                  <span className="text-sm font-light tracking-wide text-neutral-900">{option.label}</span>
                  {option.value === inquiry.status && (
                    <Icon icon="ph:check" className="w-4 h-4 text-black ml-auto" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
