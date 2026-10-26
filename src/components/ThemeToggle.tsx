import { useEffect, useState } from 'react'

import { type Theme, applyTheme } from '#/lib/theme'

export function ThemeToggle() {
  // The server always renders the dark default; the real value is read after mount.
  const [theme, setTheme] = useState<Theme>('dark')
  useEffect(() => {
    if (document.documentElement.dataset.theme === 'light') setTheme('light')
  }, [])

  const next: Theme = theme === 'dark' ? 'light' : 'dark'
  return (
    <button
      type="button"
      onClick={() => {
        applyTheme(next)
        setTheme(next)
      }}
      className="flex h-9 w-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-ink/10 hover:text-ink"
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
} as const

function SunIcon() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg {...iconProps}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
