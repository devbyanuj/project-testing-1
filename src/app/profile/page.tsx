import { createClient } from '@/supabase/supabaseServer'
import { redirect } from 'next/navigation'
import ProfileForm from '@/components/profile/ProfileForm'
import { FloatingMenu } from '@/components/Buttons'
import ThemeProvider from '@/components/ThemeProvider'
import type { UserProfile } from '@/types/auth'

export default async function ProfilePage() {
  const supabase = await createClient()

  const { data: { session } } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  // fetch current user data from public.users
  const { data: profile, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', session.user.id)
    .single()

  if (error) {
    return (
      <main className="p-8">
        <p className="text-red-500">Failed to load profile: {error.message}</p>
      </main>
    )
  }

  return (
    <>
      <ThemeProvider userTheme={profile.theme} />
      <main 
        className="min-h-screen flex flex-col items-center justify-center px-4" 
        style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}
      >
        <div 
          className="w-full max-w-md rounded-2xl shadow-sm border p-8"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold" style={{ color: 'var(--color-text)' }}>Profile</h1>
            <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>
              Update your personal information
            </p>
          </div>

          {/* Avatar placeholder */}
          <div className="flex items-center gap-4 mb-8">
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--color-primary)' + '20' }}
            >
              <span 
                className="text-xl font-semibold"
                style={{ color: 'var(--color-primary)' }}
              >
                {profile.first_name?.charAt(0)?.toUpperCase() ?? '?'}
              </span>
            </div>
            <div>
              <p className="font-medium" style={{ color: 'var(--color-text)' }}>
                {profile.full_name ?? 'No name set'}
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{session.user.email}</p>
              <span 
                className="text-xs px-3 py-1 rounded-full mt-1 inline-block font-medium"
                style={{ 
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffffff'
                }}
              >
                {profile.role}
              </span>
            </div>
          </div>

          {/* Form */}
          <ProfileForm profile={profile as UserProfile} />

        </div>

        <FloatingMenu />
      </main>
    </>
  )
}