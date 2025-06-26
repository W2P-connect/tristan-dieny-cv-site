'use client'

import SectionContainer from '@/components/containers/sectionContainer/SectionContainer'
import { skillCards } from '@/lib/skills'
import React, { useEffect, useRef, useState } from 'react'

export default function ClientSkills({ id }: { id: string }) {

    const timouOutId = useRef<NodeJS.Timeout>(undefined)
    const [right, setRight] = useState<number>(0)
    const [progressWidth, setProgressWidth] = useState<number>(0)
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false)

    const scrollDelay = 7000


    const iteration = useRef(0)

    const animateProgressBar = () => {
        setIsTransitioning(false);
        setProgressWidth(prv => 0);

        setTimeout(() => {
            setIsTransitioning(true);
            setProgressWidth(prv => 101);
        }, 50);
    }

    useEffect(() => {
        animateProgressBar()

        timouOutId.current = setInterval(() => {
            const skillContainer = document.querySelector(`#${id}`) as HTMLElement | null;

            const firstSkill = skillContainer?.children[1]
            if (!firstSkill) return

            const { width } = firstSkill.getBoundingClientRect();
            const blogWidth = width + 24

            setRight(prev => prev > blogWidth * (skillCards.length - 2) ? 0 : prev + (blogWidth))
            animateProgressBar()

        }, scrollDelay)

        return () => clearInterval(timouOutId.current)
    }, [])

    useEffect(() => {
        const blogContainer = document.querySelector(`#${id}`) as HTMLElement | null;
        if (!blogContainer) return
        blogContainer.style.right = `${right}px`;

        const firstChild = blogContainer.children[iteration.current];
        //SI déjà cloné une fois, pas besoin de recloner
        if (firstChild && blogContainer.childNodes.length < skillCards.length * 2) {
            const clone = firstChild.cloneNode(true); // true = copie profonde
            blogContainer.appendChild(clone);
            iteration.current++
        }
    }, [right])

    return (
        <>
            <SectionContainer className='!py-0'>
                <div className='bg-wite mt-4 rounded-md h-[5px] overflow-hidden'>
                    <div
                        className='bg-primary-500 h-full'
                        style={{
                            width: `${progressWidth}%`,
                            transition: `width ${isTransitioning ? scrollDelay : 0}ms ease-in-out`,
                        }}
                    ></div>
                </div>
            </SectionContainer>
        </>
    )
}
