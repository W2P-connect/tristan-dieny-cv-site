'use client'

import FrenchFlag from 'public/img/icons/flag/FrenchFlag'
import UKFlag from 'public/img/icons/flag/UKFlag'
import React, { useState } from 'react'
import { clx } from '@/utilts'
import { useLanguage } from '@/context/LanguageContext'

export default function LanguageToggle() {
  const { locale, setNewLocale } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)

  const isFrench = locale === 'fr'

  return (
    <div onMouseLeave={() => setIsHovered(false)} className="relative">
      <div
        onMouseEnter={() => setIsHovered(true)}
        className="relative rounded-xl w-[40px] h-[40px] overflow-hidden cursor-pointer"
        onClick={() => setNewLocale(isFrench ? 'fr' : 'en')}
      >
        {isFrench ? <FrenchFlag size={40} /> : <UKFlag size={40} />}
      </div>

      <div
        className={clx(
          'absolute opacity-0 transition-all duration-300 rounded-xl overflow-hidden',
          isHovered && 'opacity-100 cursor-pointer'
        )}
        onClick={() => setNewLocale(isFrench ? 'en' : 'fr')}
      >
        {isFrench ? <UKFlag size={40} /> : <FrenchFlag size={40} />}
      </div>
    </div>
  )
}
