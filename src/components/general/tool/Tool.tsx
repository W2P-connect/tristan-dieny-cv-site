import { Tool as ToolType } from '@/lib/tools'
import Image from 'next/image'
import React from 'react'

type Props = {
  tool: ToolType
}
export default function Tool({ tool }: Props) {
  return (
    <div className={'min-w-20 flex flex-col justify-between'}>
      <Image
        src={`${tool.icon}`}
        alt={tool.name}
        width={44}
        height={44}
        className="mx-auto mb-2 rounded-full"
      />
      <p className="font-semibold text-center small-text">{tool.name}</p>
    </div>
  )
}
