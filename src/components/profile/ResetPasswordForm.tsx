'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/supabase/supabaseClient'

export default function ResetPasswordForm() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    const supabase = createClient()

    const { error } = await supabase.auth.updateUser({
      password
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    setSuccess(true)
    setLoading(false)

    // redirect to dashboard after 2 seconds
    setTimeout(() => {
      router.push('/dashboard')
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {success && (
        <div className="text-sm px-4 py-3 rounded-lg transition-colors duration-200" style={{
          backgroundColor: 'var(--color-success)' + '20',
          color: 'var(--color-success)'
        }}>
          Password updated successfully. Redirecting to dashboard...
        </div>
      )}

      {error && (
        <div className="text-sm px-4 py-3 rounded-lg transition-colors duration-200" style={{
          backgroundColor: 'var(--color-error)' + '20',
          color: 'var(--color-error)'
        }}>
          {error}
        </div>
      )}

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium transition-colors duration-200" style={{ color: 'var(--color-text)' }}>
          New password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter new password"
          required
          className="border rounded-lg px-3 py-2 text-sm transition-all duration-200 focus:outline-none"
          style={{
            borderColor: 'var(--input-border)',
            backgroundColor: 'var(--input-bg)',
            color: 'var(--color-text)',
          }}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium transition-colors duration-200" style={{ color: 'var(--color-text)' }}>
          Confirm new password
        </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm new password"
          required
          className="border rounded-lg px-3 py-2 text-sm transition-all duration-200 focus:outline-none"
          style={{
            borderColor: 'var(--input-border)',
            backgroundColor: 'var(--input-bg)',
            color: 'var(--color-text)',
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading || success}
        className="text-white py-2.5 rounded-lg font-medium transition-all duration-200"
        style={{
          backgroundColor: 'var(--color-primary)',
          opacity: loading || success ? 0.6 : 1,
        }}
      >
        {loading ? 'Updating...' : 'Update password'}
      </button>

    </form>
  )
}