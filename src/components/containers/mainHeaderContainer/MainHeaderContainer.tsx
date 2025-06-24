import React from 'react'
import RenderIf from '@/components/containers/renderIf/RenderIf'

export default function MainHeaderContainer({
  children,
  bluredBackground,
}: {
  children: React.ReactNode
  bluredBackground?: boolean
}) {
  return (
    <div>
      <div className="isolate relative px-6 lg:px-8 pt-14">
        <RenderIf condition={bluredBackground === true}>
          <div
            aria-hidden="true"
            className="-top-40 sm:-top-80 -z-10 absolute inset-x-0 blur-3xl overflow-hidden transform-gpu"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)] relative bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-144.5 sm:w-288.75 aspect-1155/678 rotate-30 -translate-x-1/2"
            />
          </div>
        </RenderIf>
        <div className="mx-auto py-32 sm:py-48 lg:py-56 max-w-2xl">{children}</div>
        <RenderIf condition={bluredBackground === true}>
          <div
            aria-hidden="true"
            className="top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)] -z-10 absolute inset-x-0 blur-3xl overflow-hidden transform-gpu"
          >
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="left-[calc(50%+3rem)] sm:left-[calc(50%+36rem)] relative bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 w-144.5 sm:w-288.75 aspect-1155/678 -translate-x-1/2"
            />
          </div>
        </RenderIf>
      </div>
    </div>
  )
}
