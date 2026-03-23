'use client'

import { useEffect, useState } from 'react'
import { theme } from '@/styles/theme'

const applyTheme = (isDark: boolean) => {
  const selectedTheme = isDark ? theme.dark : theme.light
  const root = document.documentElement

  // Set the dark class
  if (isDark) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }

  // Inject CSS variables from the theme object
  const colors = selectedTheme.colors
  
  // Set all color variables
  Object.entries(colors).forEach(([key, value]) => {
    // Convert camelCase to kebab-case for CSS variables
    const cssVarName = key.replace(/([A-Z])/g, '-$1').toLowerCase()
    if (typeof value === 'string') {
      root.style.setProperty(`--theme-${cssVarName}`, value)
    }
  })

  // Set legacy CSS variables for backward compatibility
  root.style.setProperty('--color-primary', colors.primary)
  root.style.setProperty('--color-primary-hover', colors.primaryHover)
  root.style.setProperty('--color-primary-active', colors.primaryActive)
  root.style.setProperty('--color-secondary', colors.secondary)
  root.style.setProperty('--color-secondary-hover', colors.secondaryHover)
  root.style.setProperty('--color-secondary-active', colors.secondaryActive)
  root.style.setProperty('--color-accent', colors.accent)
  root.style.setProperty('--color-error', colors.error)
  root.style.setProperty('--color-success', colors.success)
  root.style.setProperty('--color-warning', colors.warning)
  root.style.setProperty('--color-text', colors.text)
  root.style.setProperty('--color-text-secondary', colors.textSecondary)
  root.style.setProperty('--color-text-light', colors.textTertiary)
  root.style.setProperty('--color-bg', colors.background)
  root.style.setProperty('--color-surface', colors.surface)
  root.style.setProperty('--color-surface-secondary', colors.surfaceRaised)
  root.style.setProperty('--color-border', colors.border)
  root.style.setProperty('--color-border-light', colors.borderSubtle)
  root.style.setProperty('--input-bg', colors.inputBg)
  root.style.setProperty('--input-border', colors.inputBorder)
  root.style.setProperty('--input-placeholder', colors.inputPlaceholder)
  root.style.setProperty('--gradient-start', colors.gradientStart)
  root.style.setProperty('--gradient-mid', colors.gradientMid)
  root.style.setProperty('--gradient-end', colors.gradientEnd)
  root.style.setProperty('--gradient-light', colors.gradientLight)
}

export default function ThemeProvider({ userTheme }: { userTheme: 'light' | 'dark' }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    applyTheme(userTheme === 'dark')
  }, [userTheme])

  if (!mounted) {
    return null
  }

  return null
}

export { applyTheme }
