import React from 'react'

export default async function NeonHeaderContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className={`relative isolate overflow-hidden px-6 lg:px-8 pt-14 `}>
      {/* Neon Lines */}
      <div className="z-0 absolute inset-0 overflow-hidden pointer-events-none">
        <div className="top- left-0 absolute bg-primary-light shadow-neon-purple rounded-2xl w-2 h-full max-h-[50%] sm:max-h-[80%] rotate-45" />
        <div className="top-0 right-0 absolute bg-neon-green shadow-neon-green rounded-2xl w-2 h-full max-h-[50%] sm:max-h-[80%] rotate-135" />
        <div className="top-[150px] right-0 absolute bg-neon-green shadow-neon-green rounded-2xl w-2 h-full max-h-[50%] sm:max-h-[80%] rotate-135" />
      </div>

      {/* Content */}
      <div className="z-10 relative mx-auto py-32 sm:py-48 lg:py-56 max-w-2xl text-center">
        {children}
      </div>
    </div>
  )
}
