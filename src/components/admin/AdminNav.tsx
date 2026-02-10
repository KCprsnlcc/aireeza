'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: 'solar:home-angle-linear' },
  { href: '/admin/inquiries', label: 'Inquiries', icon: 'solar:letter-linear' },
  { href: '/admin/settings', label: 'Settings', icon: 'solar:settings-linear' },
]

export default function AdminNav() {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }

  return (
    <nav className="border-b transition-all duration-700 relative overflow-hidden bg-white border-neutral-200">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex items-center justify-between h-20 py-4">
          <div className="flex items-center gap-12">
            {/* Vogue-style admin title */}
            <Link href="/admin" className="group flex items-center gap-3">
              <span className="font-majesty font-normal text-black" style={{ fontSize: '1.5rem', lineHeight: '1' }}>
                Airee<span style={{ color: '#ff3333' }}>za</span>
              </span>
              <span className="text-2xl font-black tracking-tighter leading-[0.8] transition-all duration-500 text-black">
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
                        ? 'bg-neutral-100 text-black border border-neutral-300'
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
              onClick={handleSignOut}
              className="flex items-center gap-3 px-4 py-3 text-xs font-black uppercase tracking-[0.3em] rounded-lg transition-all duration-500 group text-neutral-500 hover:text-black hover:bg-neutral-100 border border-transparent hover:border-neutral-300"
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
