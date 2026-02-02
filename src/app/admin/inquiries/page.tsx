import { createClient } from '@/lib/supabase/server'
import AdminNav from '@/components/admin/AdminNav'
import InquiryTable from '@/components/admin/InquiryTable'

export default async function InquiriesPage() {
  const supabase = await createClient()

  const { data: inquiries, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-neutral-50">
      <AdminNav />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-neutral-900 mb-1">Inquiries</h1>
          <p className="text-sm text-neutral-500">Manage all client inquiries from the contact form</p>
        </div>

        {error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-red-600">Error loading inquiries: {error.message}</p>
          </div>
        ) : (
          <InquiryTable inquiries={inquiries || []} />
        )}
      </main>
    </div>
  )
}
