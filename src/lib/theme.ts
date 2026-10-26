export type Theme = 'dark' | 'light'

export const THEME_STORAGE_KEY = 'derby-pact-theme'

/**
 * Runs inline in <head> before first paint, so a reader who chose light mode
 * never sees a flash of the dark default.
 */
export const themeInitScript = `try{if(localStorage.getItem('${THEME_STORAGE_KEY}')==='light')document.documentElement.dataset.theme='light'}catch(e){}`

export function applyTheme(theme: Theme) {
  if (theme === 'light') document.documentElement.dataset.theme = 'light'
  else delete document.documentElement.dataset.theme
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable (private mode); the choice then lasts for this page only.
  }
}
