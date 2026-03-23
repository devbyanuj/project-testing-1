// ============================================================
//  Design System — ColorHunt Dual Palette
//
//  Palette A (Mint Radiance): #ACE1AF · #B0EBB4 · #BFF6C3 · #E0FBE2
//  Palette B (Forest Depth):  #328E6E · #67AE6E · #90C67C · #E1EEBC
//
//  Strategy
//  ─────────
//  • Palette B (deep greens) drives interactive & brand elements
//  • Palette A (mint) drives surfaces, tints & light-mode atmospheres
//  • Both palettes inform dark-mode gradient & accent layers
// ============================================================

export const theme = {

  // ── LIGHT MODE ─────────────────────────────────────────────
  light: {
    colors: {

      // ── Brand / Gradient ───────────────────────────────────
      // Deep forest anchor → lush mid-green → mint highlight
      gradientStart:  '#328E6E',   // Palette B — deep teal-green
      gradientMid:    '#67AE6E',   // Palette B — vibrant forest green
      gradientEnd:    '#90C67C',   // Palette B — fresh lime-green
      gradientLight:  '#BFF6C3',   // Palette A — mint bloom
      gradientSurface:'#E0FBE2',   // Palette A — whisper mint (bg wash)

      // ── Primary Actions ────────────────────────────────────
      primary:        '#328E6E',   // Deep forest — high contrast CTA
      primaryHover:   '#27755A',   // 12% darker
      primaryActive:  '#1E5C46',   // 24% darker
      primaryFocus:   '#328E6E40', // Focus ring (25 % opacity)

      // ── Secondary Actions ──────────────────────────────────
      secondary:      '#67AE6E',   // Mid forest green
      secondaryHover: '#57988E',   // Muted step down
      secondaryActive:'#47825D',

      // ── Accent (mint pop for badges, tags, highlights) ─────
      accent:         '#ACE1AF',   // Palette A — soft mint
      accentHover:    '#8FD494',
      accentActive:   '#72C77A',
      accentSubtle:   '#E0FBE2',   // Palette A lightest — bg tint

      // ── States ─────────────────────────────────────────────
      error:          '#D94F4F',
      errorSubtle:    '#FEE2E2',
      success:        '#328E6E',   // Re-uses brand for success coherence
      successSubtle:  '#E0FBE2',
      warning:        '#D97706',
      warningSubtle:  '#FEF3C7',
      info:           '#0369A1',
      infoSubtle:     '#E0F2FE',

      // ── Typography ─────────────────────────────────────────
      text:            '#0F2318',  // Near-black with green undertone
      textSecondary:   '#3D5A47',  // Forest-tinted mid grey
      textTertiary:    '#6B8A74',  // Muted label / placeholder
      textInverse:     '#FFFFFF',
      textOnAccent:    '#0F2318',  // Dark text on mint surfaces
      textLink:        '#328E6E',
      textLinkHover:   '#27755A',

      // ── Backgrounds ────────────────────────────────────────
      background:      '#FFFFFF',
      backgroundTint:  '#F3FDF4',  // Barely-there mint wash
      surface:         '#F7FDF8',  // Card / panel base
      surfaceRaised:   '#EDFBEE',  // Elevated card
      surfaceOverlay:  '#E0FBE2',  // Tooltip / popover bg

      // ── Borders ────────────────────────────────────────────
      border:          '#B0EBB4',  // Palette A — natural mint border
      borderStrong:    '#90C67C',  // Divider / focused border
      borderSubtle:    '#E0FBE2',  // Ghost borders

      // ── Inputs ─────────────────────────────────────────────
      inputBg:         '#FFFFFF',
      inputBorder:     '#ACE1AF',
      inputBorderFocus:'#328E6E',
      inputPlaceholder:'#6B8A74',
      inputText:       '#0F2318',

      // ── Shadows (HSL-based for composability) ──────────────
      shadowColor:     '150 42% 20%', // hsl(150 42% 20%) — forest green
      shadow:          '0 1px 3px 0 hsl(150 42% 20% / 0.10), 0 1px 2px -1px hsl(150 42% 20% / 0.10)',
      shadowMd:        '0 4px 6px -1px hsl(150 42% 20% / 0.10), 0 2px 4px -2px hsl(150 42% 20% / 0.10)',
      shadowLg:        '0 10px 15px -3px hsl(150 42% 20% / 0.10), 0 4px 6px -4px hsl(150 42% 20% / 0.06)',
    }
  },

  // ── DARK MODE ──────────────────────────────────────────────
  dark: {
    colors: {

      // ── Brand / Gradient ───────────────────────────────────
      gradientStart:  '#1E5C46',   // Deeper forest for dark bg
      gradientMid:    '#328E6E',   // Brand anchor
      gradientEnd:    '#67AE6E',   // Lifted mid for contrast
      gradientLight:  '#90C67C',   // Luminous highlight
      gradientSurface:'#1A3028',   // Dark card background wash

      // ── Primary Actions ────────────────────────────────────
      primary:        '#67AE6E',   // Lifted so it reads on dark
      primaryHover:   '#7DC184',
      primaryActive:  '#90C67C',
      primaryFocus:   '#67AE6E40',

      // ── Secondary Actions ──────────────────────────────────
      secondary:      '#90C67C',
      secondaryHover: '#ACE1AF',
      secondaryActive:'#BFF6C3',

      // ── Accent ─────────────────────────────────────────────
      accent:         '#ACE1AF',
      accentHover:    '#BFF6C3',
      accentActive:   '#E0FBE2',
      accentSubtle:   '#1A3028',

      // ── States ─────────────────────────────────────────────
      error:          '#FF6B6B',
      errorSubtle:    '#3B1212',
      success:        '#67AE6E',
      successSubtle:  '#0F2318',
      warning:        '#FBBF24',
      warningSubtle:  '#2D1F04',
      info:           '#38BDF8',
      infoSubtle:     '#082032',

      // ── Typography ─────────────────────────────────────────
      text:            '#E0FBE2',  // Lightest mint — primary reading
      textSecondary:   '#ACE1AF',  // Palette A mid
      textTertiary:    '#67AE6E',  // Muted / metadata
      textInverse:     '#0F2318',
      textOnAccent:    '#0F2318',
      textLink:        '#90C67C',
      textLinkHover:   '#ACE1AF',

      // ── Backgrounds ────────────────────────────────────────
      background:      '#0C1E14',  // Deep forest black-green
      backgroundTint:  '#111E17',
      surface:         '#162A1E',  // Card base
      surfaceRaised:   '#1E3828',  // Elevated card
      surfaceOverlay:  '#243D2E',  // Tooltip / popover

      // ── Borders ────────────────────────────────────────────
      border:          '#2C4D38',
      borderStrong:    '#3D6E4E',
      borderSubtle:    '#1A3028',

      // ── Inputs ─────────────────────────────────────────────
      inputBg:         '#162A1E',
      inputBorder:     '#2C4D38',
      inputBorderFocus:'#67AE6E',
      inputPlaceholder:'#4A7A5A',
      inputText:       '#E0FBE2',

      // ── Shadows ────────────────────────────────────────────
      shadowColor:     '150 50% 5%',
      shadow:          '0 1px 3px 0 hsl(150 50% 5% / 0.40), 0 1px 2px -1px hsl(150 50% 5% / 0.40)',
      shadowMd:        '0 4px 6px -1px hsl(150 50% 5% / 0.40), 0 2px 4px -2px hsl(150 50% 5% / 0.40)',
      shadowLg:        '0 10px 15px -3px hsl(150 50% 5% / 0.50), 0 4px 6px -4px hsl(150 50% 5% / 0.30)',
    }
  },

  // ── SPACING ────────────────────────────────────────────────
  spacing: {
    '2xs': '0.125rem',   //  2px
    xs:    '0.25rem',    //  4px
    sm:    '0.5rem',     //  8px
    md:    '1rem',       // 16px
    lg:    '1.5rem',     // 24px
    xl:    '2rem',       // 32px
    '2xl': '3rem',       // 48px
    '3xl': '4rem',       // 64px
  },

  // ── BORDER RADIUS ──────────────────────────────────────────
  borderRadius: {
    none: '0',
    sm:   '0.25rem',   //  4px
    md:   '0.5rem',    //  8px
    lg:   '0.75rem',   // 12px
    xl:   '1rem',      // 16px
    '2xl':'1.5rem',    // 24px
    full: '9999px',
  },

  // ── TYPOGRAPHY SCALE ───────────────────────────────────────
  fontSize: {
    xs:   ['0.75rem',  { lineHeight: '1rem' }],
    sm:   ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem',     { lineHeight: '1.5rem' }],
    lg:   ['1.125rem', { lineHeight: '1.75rem' }],
    xl:   ['1.25rem',  { lineHeight: '1.75rem' }],
    '2xl':['1.5rem',   { lineHeight: '2rem' }],
    '3xl':['1.875rem', { lineHeight: '2.25rem' }],
    '4xl':['2.25rem',  { lineHeight: '2.5rem' }],
  },

  // ── TRANSITIONS ────────────────────────────────────────────
  transition: {
    fast:   '100ms ease',
    base:   '200ms ease',
    slow:   '350ms ease',
    spring: '300ms cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
}


// ── HELPERS ────────────────────────────────────────────────────────────────

export const getTheme = (isDark = false) => isDark ? theme.dark : theme.light


// ── COMPONENT STYLE PRIMITIVES ────────────────────────────────────────────
// These are Tailwind className strings. Replace with CSS-in-JS as needed.

export const buttonStyles = {
  base: `
    inline-flex items-center justify-center gap-2
    font-medium rounded-lg
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:pointer-events-none
  `,

  primary: `
    px-4 py-2 text-white
    bg-[var(--color-primary)]
    hover:bg-[var(--color-primary-hover)]
    active:bg-[var(--color-primary-active)]
    focus-visible:ring-[var(--color-primary)]
    rounded-lg
  `,

  secondary: `
    px-4 py-2
    bg-[var(--color-secondary)]
    hover:bg-[var(--color-secondary-hover)]
    active:bg-[var(--color-secondary-active)]
    text-[var(--color-text)]
    focus-visible:ring-[var(--color-secondary)]
    rounded-lg
  `,

  accent: `
    px-4 py-2
    bg-[var(--color-accent)]
    hover:bg-[var(--color-accent-hover)]
    text-[var(--color-text-on-accent)]
    focus-visible:ring-[var(--color-accent)]
    rounded-lg
  `,

  ghost: `
    px-4 py-2
    bg-transparent
    hover:bg-[var(--color-accent-subtle)]
    text-[var(--color-primary)]
    border border-[var(--color-border)]
    focus-visible:ring-[var(--color-primary)]
  `,

  destructive: `
    px-4 py-2 text-white
    bg-[var(--color-error)]
    hover:opacity-90
    focus-visible:ring-[var(--color-error)]
  `,

  sm:  'px-3 py-1.5 text-sm',
  md:  'px-4 py-2 text-sm',
  lg:  'px-6 py-3 text-base',
  xl:  'px-8 py-4 text-lg',

  input: `
    w-full px-3 py-2 rounded-lg
    bg-white dark:bg-[#162A1E]
    border border-[#d1d5db] dark:border-[#2C4D38]
    text-[#1f2937] dark:text-[#E0FBE2]
    placeholder:text-[#9ca3af] dark:placeholder:text-[#4A7A5A]
    focus:outline-none
    focus:ring-2 focus:ring-[#328E6E]/20
  `,
}

export const inputStyles = {
  base: `
    w-full px-3 py-2 rounded-lg text-sm
    bg-[var(--color-input-bg)]
    text-[var(--color-input-text)]
    border border-[var(--color-input-border)]
    placeholder:text-[var(--color-input-placeholder)]
    focus:outline-none
    focus:border-[var(--color-input-border-focus)]
    focus:ring-2 focus:ring-[var(--color-input-border-focus)]/20
  `,

  error: `border-[var(--color-error)] focus:ring-[var(--color-error)]/20`,
  success: `border-[var(--color-success)] focus:ring-[var(--color-success)]/20`,
}

export const cardStyles = {
  base: `
    rounded-xl border border-[var(--color-border)]
    bg-[var(--color-surface)]
    shadow-[var(--shadow)]
  `,
  raised: `
    rounded-xl border border-[var(--color-border-subtle)]
    bg-[var(--color-surface-raised)]
    shadow-[var(--shadow-md)]
  `,
  interactive: `
    rounded-xl border border-[var(--color-border)]
    bg-[var(--color-surface)]
    shadow-[var(--shadow)]
    hover:shadow-[var(--shadow-md)]
    hover:border-[var(--color-border-strong)]
    cursor-pointer
  `,
}

export const badgeStyles = {
  base: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
  mint:    'bg-[var(--color-accent-subtle)] text-[var(--color-primary)]',
  success: 'bg-[var(--color-success-subtle)] text-[var(--color-success)]',
  error:   'bg-[var(--color-error-subtle)]   text-[var(--color-error)]',
  warning: 'bg-[var(--color-warning-subtle)] text-[var(--color-warning)]',
  info:    'bg-[var(--color-info-subtle)]    text-[var(--color-info)]',
}

export const glassStyles = `
  backdrop-blur-md
  bg-white/10 dark:bg-black/20
  border border-white/20 dark:border-white/10
  shadow-[var(--shadow-lg)]
`


// ── CSS CUSTOM PROPERTIES GENERATOR ──────────────────────────────────────
// Call injectCSSVariables(isDark) once at root to write all tokens to :root

export function buildCSSVariables(isDark = false): string {
  const t = getTheme(isDark)
  const c = t.colors

  return `
    /* ── Brand ─── */
    --color-gradient-start:    ${c.gradientStart};
    --color-gradient-mid:      ${c.gradientMid};
    --color-gradient-end:      ${c.gradientEnd};
    --color-gradient-light:    ${c.gradientLight};
    --color-gradient-surface:  ${c.gradientSurface};

    /* ── Buttons ─── */
    --color-primary:           ${c.primary};
    --color-primary-hover:     ${c.primaryHover};
    --color-primary-active:    ${c.primaryActive};
    --color-primary-focus:     ${c.primaryFocus};
    --color-secondary:         ${c.secondary};
    --color-secondary-hover:   ${c.secondaryHover};
    --color-secondary-active:  ${c.secondaryActive};
    --color-accent:            ${c.accent};
    --color-accent-hover:      ${c.accentHover};
    --color-accent-active:     ${c.accentActive};
    --color-accent-subtle:     ${c.accentSubtle};

    /* ── States ─── */
    --color-error:             ${c.error};
    --color-error-subtle:      ${c.errorSubtle};
    --color-success:           ${c.success};
    --color-success-subtle:    ${c.successSubtle};
    --color-warning:           ${c.warning};
    --color-warning-subtle:    ${c.warningSubtle};
    --color-info:              ${c.info};
    --color-info-subtle:       ${c.infoSubtle};

    /* ── Text ─── */
    --color-text:              ${c.text};
    --color-text-secondary:    ${c.textSecondary};
    --color-text-tertiary:     ${c.textTertiary};
    --color-text-inverse:      ${c.textInverse};
    --color-text-on-accent:    ${c.textOnAccent};
    --color-text-link:         ${c.textLink};
    --color-text-link-hover:   ${c.textLinkHover};

    /* ── Backgrounds ─── */
    --color-background:        ${c.background};
    --color-background-tint:   ${c.backgroundTint};
    --color-surface:           ${c.surface};
    --color-surface-raised:    ${c.surfaceRaised};
    --color-surface-overlay:   ${c.surfaceOverlay};

    /* ── Borders ─── */
    --color-border:            ${c.border};
    --color-border-strong:     ${c.borderStrong};
    --color-border-subtle:     ${c.borderSubtle};

    /* ── Inputs ─── */
    --color-input-bg:          ${c.inputBg};
    --color-input-border:      ${c.inputBorder};
    --color-input-border-focus:${c.inputBorderFocus};
    --color-input-placeholder: ${c.inputPlaceholder};
    --color-input-text:        ${c.inputText};

    /* ── Shadows ─── */
    --shadow:                  ${c.shadow};
    --shadow-md:               ${c.shadowMd};
    --shadow-lg:               ${c.shadowLg};

    /* ── Gradients (ready-made) ─── */
    --gradient-brand:
      linear-gradient(135deg, ${c.gradientStart} 0%, ${c.gradientMid} 50%, ${c.gradientEnd} 100%);
    --gradient-brand-soft:
      linear-gradient(135deg, ${c.gradientLight} 0%, ${c.gradientSurface} 100%);
    --gradient-brand-radial:
      radial-gradient(ellipse at top left, ${c.gradientEnd} 0%, ${c.gradientStart} 100%);
  `
}

export function injectCSSVariables(isDark = false): void {
  const styleId = 'ds-theme-vars'
  let el = document.getElementById(styleId) as HTMLStyleElement | null
  if (!el) {
    el = document.createElement('style')
    el.id = styleId
    document.head.appendChild(el)
  }
  el.textContent = `:root { ${buildCSSVariables(isDark)} }`
}
