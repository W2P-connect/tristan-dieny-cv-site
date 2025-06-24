import Cookies from 'js-cookie';
import { useEffect, useState } from 'react'

export function useTheme() {

  const [theme, setTheme] = useState<'light' | 'dark'>()

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    if (!theme) return
    document.documentElement.classList.toggle('dark', theme === 'dark')
    theme && localStorage.setItem('theme', theme)
    Cookies.set('tdcv-theme', theme, { expires: 365 });
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}
