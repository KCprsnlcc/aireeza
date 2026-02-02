'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useTheme } from '@/contexts/ThemeContext'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: 'ph:house' },
  { href: '/admin/inquiries', label: 'Inquiries', icon: 'ph:envelope-simple' },
  { href: '/admin/settings', label: 'Settings', icon: 'ph:gear' },
]

export default function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()
  const { theme, toggleTheme } = useTheme()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <nav className={`border-b transition-colors ${
      theme === 'dark' ? 'bg-black border-neutral-900' : 'bg-white border-neutral-200'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-8">
            <Link href="/admin" className={`font-semibold transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>
              Aireeza Admin
            </Link>
            <div className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/admin' && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-neutral-900 text-white'
                          : 'bg-neutral-100 text-neutral-900'
                        : theme === 'dark'
                          ? 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                    }`}
                  >
                    <Icon icon={item.icon} className="w-4 h-4" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-md transition-all duration-300 ${
                theme === 'dark'
                  ? 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
              aria-label="Toggle theme"
            >
              <Icon 
                icon={theme === 'dark' ? 'ph:sun' : 'ph:moon'} 
                className="w-5 h-5" 
              />
            </button>
            <button
              onClick={handleSignOut}
              className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-all duration-300 ${
                theme === 'dark'
                  ? 'text-neutral-400 hover:text-white hover:bg-neutral-900/50'
                  : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
              }`}
            >
              <Icon icon="ph:sign-out" className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
