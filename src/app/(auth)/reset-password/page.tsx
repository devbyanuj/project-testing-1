import ResetPasswordForm from '@/components/profile/ResetPasswordForm'

export default function ResetPasswordPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Reset password</h1>
          <p className="text-gray-400 text-sm mt-1">
            Enter your new password below
          </p>
        </div>
        <ResetPasswordForm />
      </div>
    </main>
  )
}