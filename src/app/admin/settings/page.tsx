'use client'

import { createClient } from '@/lib/supabase/client'
import AdminNav from '@/components/admin/AdminNav'
import { Icon } from '@iconify/react'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'

interface User {
  email?: string
  created_at?: string
}

export default function SettingsPage() {
  const { theme } = useTheme()
  const supabase = createClient()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUser() {
      setLoading(true)
      try {
        const { data: { user: userData } } = await supabase.auth.getUser()
        setUser(userData)
      } finally {
        setLoading(false)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className={`min-h-screen transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
    }`}>
      <AdminNav />
      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className={`text-2xl font-semibold mb-1 ${
            theme === 'dark' ? 'text-white' : 'text-neutral-900'
          }`}>Settings</h1>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
          }`}>Manage your admin account</p>
        </div>

        {loading ? (
          <div className={`border rounded-lg ${
            theme === 'dark'
              ? 'bg-neutral-900/50 border-neutral-800'
              : 'bg-white border-neutral-200'
          }`}>
            <div className={`px-6 py-4 border-b ${
              theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
            }`}>
              <div className={`h-5 w-32 rounded animate-pulse ${
                theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
              }`}></div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full animate-pulse ${
                  theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
                }`}></div>
                <div className="flex-1 space-y-2">
                  <div className={`h-4 w-48 rounded animate-pulse ${
                    theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
                  }`}></div>
                  <div className={`h-3 w-32 rounded animate-pulse ${
                    theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
                  }`}></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={`border rounded-lg ${
            theme === 'dark'
              ? 'bg-neutral-900/50 border-neutral-800'
              : 'bg-white border-neutral-200'
          }`}>
            <div className={`px-6 py-4 border-b ${
              theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
            }`}>
              <h2 className={`text-sm font-medium ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}>Account Information</h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
                }`}>
                  <Icon icon="ph:user" className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                  }`} />
                </div>
                <div>
                  <p className={`text-sm font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-neutral-900'
                  }`}>{user?.email}</p>
                  <p className={`text-xs ${
                    theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
                  }`}>
                    Member since {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric',
                    }) : 'Unknown'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className={`border rounded-lg mt-6 ${
          theme === 'dark'
            ? 'bg-neutral-900/50 border-neutral-800'
            : 'bg-white border-neutral-200'
        }`}>
          <div className={`px-6 py-4 border-b ${
            theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
          }`}>
            <h2 className={`text-sm font-medium ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>Quick Links</h2>
          </div>
          <div className={`divide-y ${
            theme === 'dark' ? 'divide-neutral-800' : 'divide-neutral-200'
          }`}>
            <a
              href="https://supabase.com/dashboard/project/shmcebipkfudidrqkzaw"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
                theme === 'dark'
                  ? 'hover:bg-neutral-900/70'
                  : 'hover:bg-neutral-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon icon="simple-icons:supabase" className={`w-5 h-5 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`} />
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>Supabase Dashboard</span>
              </div>
              <Icon icon="ph:arrow-square-out" className={`w-4 h-4 ${
                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
              }`} />
            </a>
            <a
              href="/"
              className={`flex items-center justify-between px-6 py-4 transition-all duration-300 ${
                theme === 'dark'
                  ? 'hover:bg-neutral-900/70'
                  : 'hover:bg-neutral-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon icon="ph:globe" className={`w-5 h-5 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`} />
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-white' : 'text-neutral-900'
                }`}>View Public Site</span>
              </div>
              <Icon icon="ph:arrow-square-out" className={`w-4 h-4 ${
                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
              }`} />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
