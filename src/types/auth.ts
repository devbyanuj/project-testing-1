export type SignupFormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export type LoginFormData = {
  email: string
  password: string
}

export type UpdateProfileData = {
  firstName: string
  lastName: string
  theme: 'light' | 'dark'
}

export type UserProfile = {
  id: string
  email: string
  first_name: string | null
  last_name: string | null
  full_name: string | null
  theme: 'light' | 'dark'
  role: string
  is_active: boolean
  created_at: string
}

export type AuthResult = {
  success: boolean
  error?: string
   user?: {
    id: string
    email: string
  }
}