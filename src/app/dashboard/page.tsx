import { createClient } from '@/supabase/supabaseServer'
import { redirect } from 'next/navigation'
import { FloatingMenu } from '@/components/Buttons'
import ThemeProvider from '@/components/ThemeProvider'

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  // Fetch user theme preference
  const { data: profile } = await supabase
    .from('users')
    .select('theme')
    .eq('id', session.user.id)
    .single()

  return (
    <>
      <ThemeProvider userTheme={profile?.theme || 'light'} />
      <main className="p-8 min-h-screen" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold" style={{ color: 'var(--color-text)' }}>Dashboard</h1>
        </div>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          Logged in as: {session.user.email}
        </p>

        <FloatingMenu />
      </main>
    </>
  )
}