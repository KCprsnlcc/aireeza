'use client'

import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { useScrubText } from '@/hooks/useScrubText'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

export default function AdminLogin() {
  const router = useRouter()
  const supabase = createClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Apply scrub text to login headline
  const loginTitle = "ADMIN ACCESS"
  const { containerRef, spansHtml } = useScrubText(loginTitle)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        setError(error.message)
      } else {
        router.push('/admin')
        router.refresh()
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`,
        }}></div>
      </div>

      <div className="w-full max-w-md px-6 relative z-10">
        {/* Vogue-style header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">AIREEZA</span>
            <div className="h-px w-20 bg-neutral-300"></div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-neutral-500">ADMIN</span>
          </div>
          
          <div 
            ref={containerRef}
            className="scrub-text text-4xl md:text-5xl font-black tracking-tighter leading-[0.8] mb-6 text-black"
            dangerouslySetInnerHTML={{ __html: spansHtml }}
          />
          
          <p className="text-sm font-light leading-relaxed tracking-wide text-neutral-600">
            Secure access to admin dashboard
          </p>
        </div>

        {/* Vogue-style login form */}
        <div className="border rounded-2xl overflow-hidden bg-white border-neutral-200">
          <div className="p-8">
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <div className="border rounded-xl p-4 bg-red-50 border-red-200">
                  <p className="text-sm font-light leading-relaxed tracking-wide text-red-600">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-xs font-black uppercase tracking-[0.3em] mb-3 text-black">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg transition-all duration-500 bg-white border-neutral-200 text-black placeholder-neutral-400 focus:border-black focus:outline-none"
                  placeholder="admin@aireeza.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-black uppercase tracking-[0.3em] mb-3 text-black">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg transition-all duration-500 bg-white border-neutral-200 text-black placeholder-neutral-400 focus:border-black focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 text-xs font-black uppercase tracking-[0.3em] rounded-lg transition-all duration-500 bg-black text-white hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed border border-black"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Authenticating...</span>
                  </>
                ) : (
                  <>
                    <Icon icon="ph:lock" className="w-4 h-4" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Vogue-style footer */}
        <div className="text-center mt-8">
          <p className="text-xs font-light leading-relaxed tracking-wide text-neutral-500">
            Protected by secure authentication
          </p>
        </div>
      </div>
    </div>
  )
}
