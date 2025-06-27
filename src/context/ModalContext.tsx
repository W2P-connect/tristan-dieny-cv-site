'use client'

import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

type ModalContextType = {
  visible: boolean
  children: ReactNode
  show: (content: ReactNode) => void
  hide: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false)
  const [modalChildren, setModalChildren] = useState<ReactNode>(null)

  const show = (content: ReactNode) => {
    setModalChildren(content)
    setVisible(true)
  }

  const hide = () => {
    setVisible(false)
    setTimeout(() => setModalChildren(null), 200)
  }

  return (
    <ModalContext.Provider value={{ visible, children: modalChildren, show, hide }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal must be used within a ModalProvider')
  return context
}
