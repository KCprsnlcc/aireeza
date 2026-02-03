'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { useTheme } from '@/contexts/ThemeContext'
import { useScrubText } from '@/hooks/useScrubText'

export default function AdminLogin() {
  const { theme } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [mode, setMode] = useState<'login' | 'magic'>('login')
  const [magicLinkSent, setMagicLinkSent] = useState(false)
  const router = useRouter()
  const supabase = createClient()
  
  // Apply scrub text to login headline
  const loginTitle = "ADMIN ACCESS"
  const { containerRef, spansHtml } = useScrubText(loginTitle, theme)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/admin')
      router.refresh()
    }
  }

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setMagicLinkSent(true)
      setLoading(false)
    }
  }

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 transition-colors relative overflow-hidden ${
      theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
    }`}>
      
      <div className="w-full max-w-md relative z-10">
        <div className={`border rounded-2xl p-12 relative overflow-hidden transition-all duration-700 ${
          theme === 'dark'
            ? 'bg-neutral-900/50 border-neutral-800'
            : 'bg-white border-neutral-200'
        }`}>
          
          <div className="text-center mb-12 relative z-10">
            <div 
              ref={containerRef}
              className={`scrub-text text-3xl font-black tracking-tighter leading-[0.8] mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}
              dangerouslySetInnerHTML={{ __html: spansHtml }}
            />
            <p className={`text-lg font-light leading-relaxed tracking-wide ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
            }`}>Sign in to manage inquiries</p>
          </div>

          {magicLinkSent ? (
            <div className="text-center py-12 relative z-10">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8 transition-all duration-500 ${
                theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
              }`}>
                <Icon icon="ph:envelope" className={`w-10 h-10 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`} />
              </div>
              <h2 className={`text-2xl font-black tracking-tighter mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>Check your email</h2>
              <p className={`text-lg font-light leading-relaxed tracking-wide ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
              }`}>
                We sent a magic link to <strong>{email}</strong>
              </p>
              <button
                onClick={() => setMagicLinkSent(false)}
                className={`mt-8 text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 hover:scale-105 ${
                  theme === 'dark'
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-600 hover:text-black'
                }`}
              >
                Try a different email
              </button>
            </div>
          ) : (
            <>
              {/* Vogue-style mode selector */}
              <div className={`flex border-b mb-8 relative z-10 ${
                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
              }`}>
                <button
                  onClick={() => setMode('login')}
                  className={`flex-1 pb-4 text-xs font-black uppercase tracking-[0.3em] border-b-2 transition-all duration-500 ${
                    mode === 'login'
                      ? theme === 'dark'
                        ? 'border-white text-white'
                        : 'border-black text-black'
                      : theme === 'dark'
                        ? 'border-transparent text-neutral-500 hover:text-neutral-300'
                        : 'border-transparent text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  Password
                </button>
                <button
                  onClick={() => setMode('magic')}
                  className={`flex-1 pb-4 text-xs font-black uppercase tracking-[0.3em] border-b-2 transition-all duration-500 ${
                    mode === 'magic'
                      ? theme === 'dark'
                        ? 'border-white text-white'
                        : 'border-black text-black'
                      : theme === 'dark'
                        ? 'border-transparent text-neutral-500 hover:text-neutral-300'
                        : 'border-transparent text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  Magic Link
                </button>
              </div>

              {/* Vogue-style form */}
              <form onSubmit={mode === 'login' ? handleLogin : handleMagicLink} className="space-y-8 relative z-10">
                <div>
                  <label htmlFor="email" className={`block text-xs font-black uppercase tracking-[0.3em] mb-4 pb-3 border-b ${
                    theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                  }`}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full px-6 py-4 border-2 rounded-xl text-sm font-light tracking-wide focus:outline-none focus:ring-0 transition-all duration-500 ${
                      theme === 'dark'
                        ? 'bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-white'
                        : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-black'
                    }`}
                    placeholder="admin@example.com"
                  />
                </div>

                {mode === 'login' && (
                  <div>
                    <label htmlFor="password" className={`block text-xs font-black uppercase tracking-[0.3em] mb-4 pb-3 border-b ${
                      theme === 'dark' ? 'border-neutral-800 text-white' : 'border-neutral-200 text-black'
                    }`}>
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className={`w-full px-6 py-4 border-2 rounded-xl text-sm font-light tracking-wide focus:outline-none focus:ring-0 transition-all duration-500 ${
                        theme === 'dark'
                          ? 'bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-white'
                          : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:border-black'
                      }`}
                      placeholder="••••••••"
                    />
                  </div>
                )}

                {error && (
                  <div className={`border rounded-xl p-6 relative overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-red-900/30 border-red-800'
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <p className={`text-sm font-light leading-relaxed tracking-wide relative z-10 ${
                      theme === 'dark' ? 'text-red-400' : 'text-red-600'
                    }`}>{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-[0.3em] transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group ${
                    theme === 'dark'
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-black text-white hover:bg-neutral-800'
                  }`}
                >
                  {loading ? (
                    <>
                      <Icon icon="ph:spinner" className="w-4 h-4 animate-spin" />
                      <span>{mode === 'login' ? 'Signing in...' : 'Sending...'}</span>
                    </>
                  ) : (
                    <>
                      <span>{mode === 'login' ? 'Sign in' : 'Send Magic Link'}</span>
                      <Icon icon="ph:arrow-right" className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>

        <p className={`text-center text-xs font-light tracking-wide mt-8 relative z-10 ${
          theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
        }`}>
          Protected admin area for authorized users only
        </p>
      </div>
    </div>
  )
}
