'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Icon } from '@iconify/react'

export default function AdminLogin() {
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
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white border border-neutral-200 rounded-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-neutral-900 mb-2">Admin Access</h1>
            <p className="text-sm text-neutral-500">Sign in to manage inquiries</p>
          </div>

          {magicLinkSent ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon icon="ph:envelope" className="w-6 h-6 text-neutral-600" />
              </div>
              <h2 className="text-lg font-medium text-neutral-900 mb-2">Check your email</h2>
              <p className="text-sm text-neutral-500">
                We sent a magic link to <strong>{email}</strong>
              </p>
              <button
                onClick={() => setMagicLinkSent(false)}
                className="mt-6 text-sm text-neutral-600 hover:text-neutral-900 underline"
              >
                Try a different email
              </button>
            </div>
          ) : (
            <>
              <div className="flex border-b border-neutral-200 mb-6">
                <button
                  onClick={() => setMode('login')}
                  className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${
                    mode === 'login'
                      ? 'border-neutral-900 text-neutral-900'
                      : 'border-transparent text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  Password
                </button>
                <button
                  onClick={() => setMode('magic')}
                  className={`flex-1 pb-3 text-sm font-medium border-b-2 transition-colors ${
                    mode === 'magic'
                      ? 'border-neutral-900 text-neutral-900'
                      : 'border-transparent text-neutral-400 hover:text-neutral-600'
                  }`}
                >
                  Magic Link
                </button>
              </div>

              <form onSubmit={mode === 'login' ? handleLogin : handleMagicLink} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                    placeholder="admin@example.com"
                  />
                </div>

                {mode === 'login' && (
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent"
                      placeholder="••••••••"
                    />
                  </div>
                )}

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-md">
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-neutral-900 text-white py-2.5 rounded-md text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

        <p className="text-center text-xs text-neutral-400 mt-6">
          Protected admin area for authorized users only
        </p>
      </div>
    </div>
  )
}
