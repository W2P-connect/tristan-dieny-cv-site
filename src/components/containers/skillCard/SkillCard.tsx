import { clx } from '@/utilts';
import React from 'react';

type SkillCardProps = {
    icon: React.ReactNode;
    title: string;
    technologies: string[];
    onClick?: () => void
};

export const SkillCard = ({ icon, title, technologies, onClick }: SkillCardProps) => {
    return (
        <div className={clx(
            "bg-gray-dark dark:bg-gray-darkest dark:shadow-gray-darkest p-6 dark:border dark:border-gray-light",
            "rounded-lg w-full sm:w-56 min-w-56 shadow-lg cursor-pointer"
        )}
            {...(onClick ? { onClick } : {})}
        >
            <div className="mb-2">{icon}</div>
            <h3 className="mb-2 font-semibold !text-gray-lightest text-lg">{title}</h3>
            <p className="font-light !text-gray-light leading-relaxed">
                {technologies.map((tech, index) => (
                    <span key={index}>
                        {tech}
                        {index < technologies.length - 1 && ', '}
                    </span>
                ))}
            </p>
        </div >
    );
};
