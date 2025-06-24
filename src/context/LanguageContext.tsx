'use client'
import React, { createContext, useContext, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export type Locale = 'fr' | 'en'

interface LanguageContextProps {
  locale: Locale
  setNewLocale: (newLocal: Locale) => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const router = useRouter()

  const initialLocale = (pathname?.split('/')[1] as Locale) ?? undefined
  const [locale, setLocale] = useState<Locale>(initialLocale)

  const setNewLocale = (newLocale: Locale) => {
    if (newLocale === locale) return

    setLocale(newLocale)
    const newPath = pathname?.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`
    router.push(newPath)
  }

  return (
    <LanguageContext.Provider value={{ locale, setNewLocale }}>{children}</LanguageContext.Provider>
  )
}

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
