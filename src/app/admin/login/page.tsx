'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'
import { useTheme } from '@/contexts/ThemeContext'

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
    <div className={`min-h-screen flex items-center justify-center p-6 transition-colors ${
      theme === 'dark' ? 'bg-black' : 'bg-neutral-50'
    }`}>
      <div className="w-full max-w-md">
        <div className={`border rounded-lg p-8 transition-colors ${
          theme === 'dark'
            ? 'bg-neutral-900/50 border-neutral-800'
            : 'bg-white border-neutral-200'
        }`}>
          <div className="text-center mb-8">
            <h1 className={`text-2xl font-semibold mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-neutral-900'
            }`}>Admin Access</h1>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
            }`}>Sign in to manage inquiries</p>
          </div>

          {magicLinkSent ? (
            <div className="text-center py-8">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${
                theme === 'dark' ? 'bg-neutral-800' : 'bg-neutral-100'
              }`}>
                <Icon icon="ph:envelope" className={`w-6 h-6 ${
                  theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                }`} />
              </div>
              <h2 className={`text-lg font-medium mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-neutral-900'
              }`}>Check your email</h2>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-500'
              }`}>
                We sent a magic link to <strong>{email}</strong>
              </p>
              <button
                onClick={() => setMagicLinkSent(false)}
                className={`mt-6 text-sm underline transition-colors ${
                  theme === 'dark'
                    ? 'text-neutral-400 hover:text-white'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                Try a different email
              </button>
            </div>
          ) : (
            <>
              <div className={`flex border-b mb-6 ${
                theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'
              }`}>
                <button
                  onClick={() => setMode('login')}
                  className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${
                    mode === 'login'
                      ? theme === 'dark'
                        ? 'border-white text-white'
                        : 'border-neutral-900 text-neutral-900'
                      : theme === 'dark'
                        ? 'border-transparent text-neutral-500 hover:text-neutral-300'
                        : 'border-transparent text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  Password
                </button>
                <button
                  onClick={() => setMode('magic')}
                  className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${
                    mode === 'magic'
                      ? theme === 'dark'
                        ? 'border-white text-white'
                        : 'border-neutral-900 text-neutral-900'
                      : theme === 'dark'
                        ? 'border-transparent text-neutral-500 hover:text-neutral-300'
                        : 'border-transparent text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  Magic Link
                </button>
              </div>

              <form onSubmit={mode === 'login' ? handleLogin : handleMagicLink} className="space-y-4">
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-1.5 ${
                    theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                  }`}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 transition-colors ${
                      theme === 'dark'
                        ? 'bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:ring-white focus:border-white'
                        : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:ring-neutral-900 focus:border-transparent'
                    }`}
                    placeholder="admin@example.com"
                  />
                </div>

                {mode === 'login' && (
                  <div>
                    <label htmlFor="password" className={`block text-sm font-medium mb-1.5 ${
                      theme === 'dark' ? 'text-neutral-300' : 'text-neutral-700'
                    }`}>
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 transition-colors ${
                        theme === 'dark'
                          ? 'bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:ring-white focus:border-white'
                          : 'bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400 focus:ring-neutral-900 focus:border-transparent'
                      }`}
                      placeholder="••••••••"
                    />
                  </div>
                )}

                {error && (
                  <div className={`p-3 border rounded-md ${
                    theme === 'dark'
                      ? 'bg-red-900/30 border-red-800'
                      : 'bg-red-50 border-red-200'
                  }`}>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-red-400' : 'text-red-600'
                    }`}>{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-2.5 rounded-md text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${
                    theme === 'dark'
                      ? 'bg-white text-black hover:bg-neutral-200'
                      : 'bg-neutral-900 text-white hover:bg-neutral-800'
                  }`}
                >
                  {loading ? (
                    <>
                      <Icon icon="ph:spinner" className="w-4 h-4 animate-spin" />
                      {mode === 'login' ? 'Signing in...' : 'Sending...'}
                    </>
                  ) : (
                    mode === 'login' ? 'Sign in' : 'Send Magic Link'
                  )}
                </button>
              </form>
            </>
          )}
        </div>

        <p className={`text-center text-xs mt-6 ${
          theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
        }`}>
          Protected admin area for authorized users only
        </p>
      </div>
    </div>
  )
}
