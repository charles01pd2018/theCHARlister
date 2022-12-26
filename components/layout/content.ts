// types
import type { IconsNavContent } from 'components/types';

export const ICONS_NAV_CONTENT: IconsNavContent = {
    items: [
        {
            icon: {
                data: '/static/icons/about-me.svg',
                alt: 'Person Icon',
            },
            href: '#About-Me',
            tooltip: 'About Me',
            color: 'blue',
        },
        {
            icon: {
                data: '/static/icons/projects.svg',
                alt: 'Paper Icon',
            },
            href: '#Projects',
            tooltip: 'Notable Projects',
            color: 'pink',
        },
        {
            icon: {
                data: '/static/icons/contact.svg',
                alt: 'Phone Icon',
            },
            href: '#Contact',
            tooltip: 'Contact',
            color: 'green',
        },
    ],
}

export * from './footer/content';
export * from './header/content';