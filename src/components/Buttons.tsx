'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { resetPassword } from '@/services/auth.service'

export function SignupButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/signup')}
      className="px-4 py-2 rounded-lg font-medium text-white transition-all duration-200"
      style={{
        backgroundColor: 'var(--color-primary)',
      }}
    >
      Create account
    </button>
  )
}

export function LoginButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/login')}
      className="px-4 py-2 rounded-lg font-medium transition-all duration-200 border"
      style={{
        backgroundColor: 'var(--color-surface)',
        color: 'var(--color-text)',
        borderColor: 'var(--color-border)',
      }}
    >
      Log in
    </button>
  )
}

export function DashboardButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/dashboard')}
      className="px-4 py-2 rounded-lg font-medium text-white transition-all duration-200"
      style={{
        backgroundColor: 'var(--color-primary)',
      }}
    >
      Go to Dashboard
    </button>
  )
}

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    const { createClient } = await import('@/supabase/supabaseClient')
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 rounded-lg font-medium text-white transition-all duration-200"
      style={{
        backgroundColor: 'var(--color-error)',
      }}
    >
      Log out
    </button>
  )
}

export default function ResetPasswordButton({ email }: { email: string }) {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  async function handleReset() {
    setLoading(true)
    setError('')

    const result = await resetPassword(email)

    if (!result.success) {
      setError(result.error ?? 'Something went wrong')
      setLoading(false)
      return
    }

    setSent(true)
    setLoading(false)
  }

  if (sent) {
    return (
      <p className="text-sm px-4 py-2 rounded-lg transition-all duration-200" 
        style={{ 
          color: 'var(--color-success)', 
          backgroundColor: 'rgba(16, 185, 129, 0.1)' 
        }}>
        Reset link sent to {email}
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      {error && (
        <p className="text-xs transition-colors duration-200" style={{ color: 'var(--color-error)' }}>
          {error}
        </p>
      )}
      <button
        type="button"
        onClick={handleReset}
        disabled={loading}
        className="w-full py-2 rounded-lg text-sm font-medium transition-all duration-200 border"
        style={{
          color: 'var(--color-text)',
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          opacity: loading ? 0.5 : 1,
        }}
      >
        {loading ? 'Sending...' : 'Send reset link'}
      </button>
    </div>
  )
}

export function FloatingMenu() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Check if dark mode is enabled
  React.useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    checkDarkMode()
    
    // Watch for class changes
    const observer = new MutationObserver(checkDarkMode)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    
    return () => observer.disconnect()
  }, [])

  async function handleLogout() {
    const { createClient } = await import('@/supabase/supabaseClient')
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <div className="fixed top-8 right-8 flex flex-col items-end gap-3">
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200"
        style={{
          backgroundColor: 'var(--color-primary)',
          color: 'var(--color-text)',
        }}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Menu card with glass morphism effect */}
      {open && (
        <div
          className="rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md border py-2 transition-all duration-200"
          style={{
            backgroundColor: isDark ? 'rgba(26, 47, 37, 0.95)' : 'rgba(247, 253, 248, 0.95)',
            borderColor: 'var(--color-border)',
            backdropFilter: 'blur(10px)',
            minWidth: '200px',
          }}
        >
          {/* Home */}
          <button
            onClick={() => {
              router.push('/')
              setOpen(false)
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-200"
            style={{
              color: 'var(--color-text)',
              backgroundColor: isDark ? 'transparent' : 'transparent'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(50, 142, 110, 0.1)' : 'rgba(176, 235, 180, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7m-9 5v6h4v-6m-4 0H9" />
            </svg>
            <span className="text-sm font-medium">Home</span>
          </button>

          {/* Dashboard */}
          <button
            onClick={() => {
              router.push('/dashboard')
              setOpen(false)
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-200"
            style={{
              color: 'var(--color-text)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(50, 142, 110, 0.1)' : 'rgba(176, 235, 180, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
            </svg>
            <span className="text-sm font-medium">Dashboard</span>
          </button>

          {/* Profile */}
          <button
            onClick={() => {
              router.push('/profile')
              setOpen(false)
            }}
            className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-200"
            style={{
              color: 'var(--color-text)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(50, 142, 110, 0.1)' : 'rgba(176, 235, 180, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm font-medium">Profile</span>
          </button>

          {/* Logout */}
          <div style={{ borderTop: `1px solid var(--color-border)`, margin: '0.5rem 0' }} />
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-200"
            style={{
              color: 'var(--color-error)',
              backgroundColor: 'transparent',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? 'rgba(217, 79, 79, 0.1)' : 'rgba(217, 79, 79, 0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
            </svg>
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      )}
    </div>
  )
}

