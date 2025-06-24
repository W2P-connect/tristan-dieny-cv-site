import MainHeaderContainer from '@/components/containers/mainHeaderContainer/MainHeaderContainer'
import React from 'react'

export default function page() {
  return (
    <MainHeaderContainer bluredBackground={true}>
      <div className="text-center">
        <h1>Data to enrich your online business</h1>
        <p className="mt-8 font-medium text-gray-500 text-lg sm:text-xl/8 text-pretty">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat.
        </p>
        <div className="flex justify-center items-center gap-x-6 mt-10">
          <a href="#">Get started</a>
          <a href="#">
            Learn more <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </MainHeaderContainer>
  )
}
