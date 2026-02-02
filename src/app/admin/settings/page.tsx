import { createClient } from '@/lib/supabase/server'
import AdminNav from '@/components/admin/AdminNav'
import { Icon } from '@iconify/react'

export default async function SettingsPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen bg-neutral-50">
      <AdminNav />
      <main className="max-w-2xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-neutral-900 mb-1">Settings</h1>
          <p className="text-sm text-neutral-500">Manage your admin account</p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 className="text-sm font-medium text-neutral-900">Account Information</h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center">
                <Icon icon="ph:user" className="w-6 h-6 text-neutral-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-900">{user?.email}</p>
                <p className="text-xs text-neutral-500">
                  Member since {user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', {
                    month: 'long',
                    year: 'numeric',
                  }) : 'Unknown'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-neutral-200 rounded-lg mt-6">
          <div className="px-6 py-4 border-b border-neutral-200">
            <h2 className="text-sm font-medium text-neutral-900">Quick Links</h2>
          </div>
          <div className="divide-y divide-neutral-200">
            <a
              href="https://supabase.com/dashboard/project/shmcebipkfudidrqkzaw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-4 hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Icon icon="simple-icons:supabase" className="w-5 h-5 text-neutral-600" />
                <span className="text-sm text-neutral-900">Supabase Dashboard</span>
              </div>
              <Icon icon="ph:arrow-square-out" className="w-4 h-4 text-neutral-400" />
            </a>
            <a
              href="/"
              className="flex items-center justify-between px-6 py-4 hover:bg-neutral-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Icon icon="ph:globe" className="w-5 h-5 text-neutral-600" />
                <span className="text-sm text-neutral-900">View Public Site</span>
              </div>
              <Icon icon="ph:arrow-square-out" className="w-4 h-4 text-neutral-400" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
