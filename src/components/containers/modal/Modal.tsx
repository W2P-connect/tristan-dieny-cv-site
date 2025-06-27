'use client'

import { useModal } from '@/context/ModalContext'
import { clx } from '@/utilts'
import { useEffect } from 'react'

const Modal = () => {
  const { visible, hide, children } = useModal()

  useEffect(() => {
    const htmlTag = document.querySelector('html')
    if (htmlTag) {
      if (visible) {
        htmlTag.style.overflow = 'hidden'
      } else {
        htmlTag.style.overflow = 'auto'
      }
    }
    return () => {
      if (htmlTag) {
        htmlTag.style.overflow = 'auto'
      }
    }
  }, [visible])
  return (
    <div
      onClick={() => hide()}
      className={clx(
        'fixed inset-0 z-50 backdrop-blur-xs overflow-y-auto py-24',
        'cursor-pointer opacity-0 transition-opacity duration-200',
        visible ? 'opacity-100' : 'pointer-events-none'
      )}
    >
      <div className="flex items-center justify-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className={clx(
            'bg-gray-lightest-2 dark:bg-black rounded-lg shadow-lg',
            'max-w-md w-full relative cursor-default'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal
