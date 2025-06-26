'use client';

import { SkillCard } from './SkillCard';

export function ClientSkillCardWrapper(props: React.ComponentProps<typeof SkillCard>) {
    const handleClick = () => {
        console.log('Clicked on:', props.title);
        // Tu peux faire autre chose ici (modal, scroll, etc.)
    };

    return <SkillCard {...props} onClick={handleClick} />;
}
