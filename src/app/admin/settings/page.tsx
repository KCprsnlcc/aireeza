'use client'

import { createClient } from '@/lib/supabase/client'
import AdminNav from '@/components/admin/AdminNav'
import { Icon } from '@iconify/react'
import { useTheme } from '@/contexts/ThemeContext'
import { useEffect, useState } from 'react'
import { useScrubText } from '@/hooks/useScrubText'

interface User {
  email?: string
  created_at?: string
}

export default function SettingsPage() {
  const { theme } = useTheme()
  const supabase = createClient()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  
  // Apply scrub text to settings headline
  const settingsTitle = "ADMIN SETTINGS"
  const { containerRef, spansHtml } = useScrubText(settingsTitle, theme)

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
    <div className={`min-h-screen transition-colors relative overflow-hidden ${
      theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
    }`}>
      {/* Vogue-style background decoration */}
      <div className={`absolute top-0 right-0 w-48 h-full opacity-5 ${
        theme === 'dark' ? 'text-white' : 'text-black'
      }`}>
        <div className="text-8xl font-black tracking-tighter writing-mode-vertical">
          SETTINGS
        </div>
      </div>
      
      <AdminNav />
      <main className="max-w-4xl mx-auto px-6 py-12 relative z-10">
        {/* Vogue-style header */}
        <div className="mb-16">
          <div className="flex items-center gap-8 mb-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">ADMIN</span>
            <div className={`h-px w-24 ${
              theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-300'
            }`}></div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">MANAGE</span>
          </div>
          
          <div 
            ref={containerRef}
            className={`scrub-text text-4xl md:text-6xl font-black tracking-tighter leading-[0.8] mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}
            dangerouslySetInnerHTML={{ __html: spansHtml }}
          />
          
          <p className={`text-lg font-light leading-relaxed tracking-wide max-w-3xl ${
            theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
          }`}>Manage your admin account and access system settings</p>
        </div>

        {loading ? (
          <div className={`border rounded-2xl relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-neutral-900/50 border-neutral-800'
              : 'bg-white border-neutral-200'
          }`}>
            {/* Vogue-style background decoration */}
            <div className={`absolute top-0 right-0 w-32 h-full opacity-5 ${
              theme === 'dark' ? 'text-white' : 'text-black'
            }`}>
              <div className="text-6xl font-black tracking-tighter writing-mode-vertical">
                LOADING
              </div>
            </div>
            
            <div className={`px-8 py-6 border-b relative z-10 ${
              theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
            }`}>
              <div className={`h-5 w-40 rounded animate-pulse ${
                theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-200'
              }`}></div>
            </div>
            <div className="p-8 space-y-6">
              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 rounded-full animate-pulse ${
                  theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
                }`}></div>
                <div className="flex-1 space-y-3">
                  <div className={`h-4 w-56 rounded animate-pulse ${
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
          <>
            {/* Vogue-style account information card */}
            <div className={`border rounded-2xl relative overflow-hidden mb-8 ${
              theme === 'dark'
                ? 'bg-neutral-900/50 border-neutral-800'
                : 'bg-white border-neutral-200'
            }`}>
              {/* Vogue-style background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-full opacity-5 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                <div className="text-6xl font-black tracking-tighter writing-mode-vertical">
                  ACCOUNT
                </div>
              </div>
              
              <div className={`px-8 py-6 border-b relative z-10 ${
                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
              }`}>
                <h2 className={`text-sm font-black uppercase tracking-[0.3em] ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>Account Information</h2>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-110 ${
                    theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
                  }`}>
                    <Icon icon="ph:user" className={`w-8 h-8 transition-colors duration-500 ${
                      theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                    }`} />
                  </div>
                  <div>
                    <p className={`text-sm font-black tracking-tight mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>{user?.email}</p>
                    <p className={`text-xs font-light uppercase tracking-wide ${
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

            {/* Vogue-style quick links card */}
            <div className={`border rounded-2xl relative overflow-hidden ${
              theme === 'dark'
                ? 'bg-neutral-900/50 border-neutral-800'
                : 'bg-white border-neutral-200'
            }`}>
              {/* Vogue-style background decoration */}
              <div className={`absolute top-0 right-0 w-32 h-full opacity-5 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                <div className="text-6xl font-black tracking-tighter writing-mode-vertical">
                  LINKS
                </div>
              </div>
              
              <div className={`px-8 py-6 border-b relative z-10 ${
                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
              }`}>
                <h2 className={`text-sm font-black uppercase tracking-[0.3em] ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>Quick Links</h2>
              </div>
              <div className={`divide-y relative z-10 ${
                theme === 'dark' ? 'divide-neutral-800' : 'divide-neutral-200'
              }`}>
                <a
                  href="https://supabase.com/dashboard/project/shmcebipkfudidrqkzaw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-between px-8 py-6 transition-all duration-500 group ${
                    theme === 'dark'
                      ? 'hover:bg-neutral-900/70'
                      : 'hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                      theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
                    }`}>
                      <Icon icon="simple-icons:supabase" className={`w-5 h-5 transition-colors duration-500 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                      }`} />
                    </div>
                    <span className={`text-sm font-light tracking-wide ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>Supabase Dashboard</span>
                  </div>
                  <Icon icon="ph:arrow-square-out" className={`w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 ${
                    theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
                  }`} />
                </a>
                <a
                  href="/"
                  className={`flex items-center justify-between px-8 py-6 transition-all duration-500 group ${
                    theme === 'dark'
                      ? 'hover:bg-neutral-900/70'
                      : 'hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
                      theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
                    }`}>
                      <Icon icon="ph:globe" className={`w-5 h-5 transition-colors duration-500 ${
                        theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                      }`} />
                    </div>
                    <span className={`text-sm font-light tracking-wide ${
                      theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>View Public Site</span>
                  </div>
                  <Icon icon="ph:arrow-square-out" className={`w-5 h-5 transition-transform duration-500 group-hover:translate-x-1 ${
                    theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
                  }`} />
                </a>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
