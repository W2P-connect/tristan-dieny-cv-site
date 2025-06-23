'use client'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

type Locale = 'fr' | 'en'

interface LanguageContextProps {
    locale: Locale
    setNewLocale: (newLocal: Locale) => void
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    const router = useRouter()
    const [locale, setLocale] = useState<Locale>('fr')

    useEffect(() => {
        const detected = pathname?.split('/')[1] as Locale
        if (detected === 'en' || detected === 'fr') {
            setLocale(detected)
        }
    }, [pathname])

    const setNewLocale = (newLocale: Locale) => {
        if (newLocale === locale) return

        const newPath = pathname?.replace(`/${locale}`, `/${newLocale}`) || `/${newLocale}`
        router.push(newPath)
    }

    return (
        <LanguageContext.Provider value={{ locale, setNewLocale }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext)
    if (!context) throw new Error('useLanguage must be used within LanguageProvider')
    return context
}
