// components/ThemeToggle.tsx
'use client'

import './ThemeToggle.css'
import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  if (!theme) return null

  const enabled = theme === 'dark'
  
  return (
    <label className="theme-switch">
      <input type="checkbox" checked={enabled} onChange={toggleTheme} />
      <span className="bg-white dark:bg-gray-darkest border border-gray-light dark:border-white rounded-2xl slider">
        <span className="bg-status-warning dark:bg-gray-lightest-2 circle">
          <span className="shine shine-1"></span>
          <span className="shine shine-2"></span>
          <span className="shine shine-3"></span>
          <span className="shine shine-4"></span>
          <span className="shine shine-5"></span>
          <span className="shine shine-6"></span>
          <span className="shine shine-7"></span>
          <span className="shine shine-8"></span>
          <span className="moon"></span>
        </span>
      </span>
    </label>
  )
}
