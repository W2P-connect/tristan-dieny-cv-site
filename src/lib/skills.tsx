import {
    CodeBracketIcon,
    ServerIcon,
    CloudIcon,
    ArrowPathIcon,
    CircleStackIcon,
    AdjustmentsHorizontalIcon,
    WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export const skillCards = [
    {
        icon: <CodeBracketIcon width={24} />,
        title: 'Front-End',
        technologies: ['React', 'Next.js', 'React Native', 'CSS', 'JavaScript'],
    },
    {
        icon: <ServerIcon width={24} />,
        title: 'Back-End',
        technologies: ['Node.js', 'PHP', 'Next.js'],
    },
    {
        icon: <CircleStackIcon width={24} />,
        title: 'Databases',
        technologies: ['Prisma', 'SQL', 'Supabase'],
    },
    {
        icon: <CloudIcon width={24} />,
        title: 'Deployment & DevOps',
        technologies: ['Vercel', 'Azure', 'Firebase', 'EAS', 'Synology', 'Redis'],
    },
    {
        icon: <ArrowPathIcon width={24} />,
        title: 'Integrations & APIs',
        technologies: ['Stripe API', 'Pipedrive', 'WordPress', 'WooCommerce'],
    },
    {
        icon: <AdjustmentsHorizontalIcon width={24} />,
        title: 'Code Quality & Workflow',
        technologies: ['ESLint', 'Prettier', 'Husky', 'Git', 'GitHub'],
    },
    {
        icon: <WrenchScrewdriverIcon width={24} />,
        title: 'UI Libraries',
        technologies: ['Tailwind', 'Framer Motion', 'Headless UI'],
    },
];