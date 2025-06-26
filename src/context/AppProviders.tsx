'use client'

import { ReactNode } from 'react'
import { LanguageProvider } from '@/context/LanguageContext'
import { ModalProvider } from '@/context/ModalContext'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <ModalProvider>{children}</ModalProvider>
    </LanguageProvider>
  )
}
