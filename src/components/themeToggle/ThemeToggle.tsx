// components/ThemeToggle.tsx
'use client'

import './ThemeToggle.css'
import { useTheme } from '@/hooks/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const enabled = theme === 'dark'

  return (
    <label className="theme-switch">
      <input type="checkbox" checked={enabled} onChange={toggleTheme} />
      <span className="border border-white slider">
        <span className="circle">
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
