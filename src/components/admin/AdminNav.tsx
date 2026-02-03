'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useTheme } from '@/contexts/ThemeContext'
import { useScrubText } from '@/hooks/useScrubText'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: 'solar:home-angle-linear' },
  { href: '/admin/inquiries', label: 'Inquiries', icon: 'solar:letter-linear' },
  { href: '/admin/settings', label: 'Settings', icon: 'solar:settings-linear' },
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
    <nav className={`border-b transition-all duration-700 relative overflow-hidden ${
      theme === 'dark' ? 'bg-black border-neutral-900' : 'bg-white border-neutral-200'
    }`}>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-20 py-4">
          <div className="flex items-center gap-12">
            {/* Vogue-style admin title */}
            <Link href="/admin" className="group flex items-center gap-3">
              <img 
                src={theme === 'dark' ? '/logo/aireeza-logo-w.svg' : '/logo/aireeza-logo-b.svg'}
                alt="AIREEZA"
                className="h-6 w-auto"
              />
              <span className={`text-2xl font-black tracking-tighter leading-[0.8] transition-all duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                ADMIN
              </span>
            </Link>
            
            {/* Vogue-style navigation */}
            <div className="flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href || 
                  (item.href !== '/admin' && pathname.startsWith(item.href))
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 ${
                      isActive
                        ? theme === 'dark'
                          ? 'bg-neutral-900 text-white border border-neutral-800'
                          : 'bg-neutral-100 text-black border border-neutral-300'
                        : theme === 'dark'
                          ? 'text-neutral-600 hover:text-white hover:bg-neutral-900/50'
                          : 'text-neutral-500 hover:text-black hover:bg-neutral-50'
                    }`}
                  >
                    <Icon icon={item.icon} className="w-4 h-4 transition-transform duration-500 group-hover:scale-110" />
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
          
          {/* Vogue-style actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-lg transition-all duration-500 group ${
                theme === 'dark'
                  ? 'text-neutral-600 hover:text-white hover:bg-neutral-900/50'
                  : 'text-neutral-500 hover:text-black hover:bg-neutral-100'
              }`}
              aria-label="Toggle theme"
            >
              <Icon 
                icon={theme === 'dark' ? 'solar:sun-linear' : 'solar:moon-linear'} 
                className="w-5 h-5 transition-transform duration-500 group-hover:rotate-180" 
              />
            </button>
            <button
              onClick={handleSignOut}
              className={`flex items-center gap-3 px-4 py-3 text-xs font-black uppercase tracking-[0.3em] rounded-lg transition-all duration-500 group ${
                theme === 'dark'
                  ? 'text-neutral-600 hover:text-white hover:bg-neutral-900/50 border border-transparent hover:border-neutral-800'
                  : 'text-neutral-500 hover:text-black hover:bg-neutral-100 border border-transparent hover:border-neutral-300'
              }`}
            >
              <Icon icon="solar:logout-3-linear" className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              Sign out
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
