import { clx } from '@/utilts'
import React from 'react'

type Props = {
  children: React.ReactNode
  className?: string
}

export default function SectionContainer({ children, className }: Props) {
  return (
    <div className={clx('mx-auto px-8 sm:px-24 py-32 sm:py-48 lg:py-56 max-w-7xl', className)}>
      {children}
    </div>
  )
}
