'use client'

import { Projects } from '@/lib/projects'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import { ToolCategory, tools } from '@/lib/tools'
import { clx } from '@/utilts'

type Props = {
  projectTools: Projects['tools']
}

export default function ProjectTools({ projectTools }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | null>(null)

  const toolsCategory = useMemo(
    () =>
      Array.from(
        new Set(
          projectTools.flatMap((toolSlug) => tools[toolSlug].category.map((category) => category))
        )
      ),
    [projectTools]
  )

  return (
    <div className="mt-8">
      <div className="flex flex-wrap justify-start items-stretch gap-x-8 gap-y-4">
        {projectTools.map((toolSlug, index) => {
          const tool = tools[toolSlug]

          return (
            <div
              key={index}
              className={clx(
                'transition-opacity duration-300 min-w-20',
                'flex flex-col justify-between',
                (selectedCategory && tool.category.includes(selectedCategory)) || !selectedCategory
                  ? 'opacity-100'
                  : 'opacity-20'
              )}
            >
              <Image
                src={`${tool.icon}`}
                alt={tool.name}
                width={44}
                height={44}
                className="mx-auto mb-2 rounded-full"
              />
              <p className="font-semibold text-center small-text">{tool.name}</p>
              {/* <p className='!text-gray-light text-center smallest-text'>{tool.category}</p> */}
            </div>
          )
        })}
      </div>
      <div className="flex flex-wrap gap-2 mt-8">
        {toolsCategory.map((category, index) => (
          <div
            onClick={() => setSelectedCategory((prv) => (prv === category ? null : category))}
            key={index}
            className={clx(
              'transition-colors duration-300 cursor-pointer rounded-full border',
              ' bg-gray-lightest dark:bg-gray-darkest px-4 py-1 border-gray-darkest dark:border-gray-light',
              selectedCategory === category && '!bg-gray-light dark:!bg-gray-dark'
            )}
          >
            <p className="font-semibold smallest-text">{category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
