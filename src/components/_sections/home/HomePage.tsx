import { NeonHeader } from '@/components/_sections/home/NeonHeader'
import Skills from '@/components/_sections/home/skills/Skills'
import MainHeaderContainer from '@/components/containers/mainContainer/MainContainer'
import { Locale } from '@/context/LanguageContext'
import { headers } from 'next/headers'
import React from 'react'
import Projects from './projects/Projects'

export default async function HomePage() {
  const header = await headers()
  const locale = header.get('x-locale') as Locale

  return (
    <>
      <div className="z-10 relative">
        <NeonHeader locale={locale} />
      </div>
      <MainHeaderContainer bluredBackground>
        <Skills locale={locale} />
        <Projects locale={locale} />
      </MainHeaderContainer>
    </>
  )
}
