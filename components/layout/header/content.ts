// lib
import { ABOUT_ME_ENDPOINT, PROJECTS_ENDPOINT, EXPERIENCE_ENDPOINT } from 'lib';
// types
import type { DisplayHeaderContent, OverviewHeaderContent } from 'components/types';

export const DISPLAY_HEADER_CONTENT: DisplayHeaderContent = {
    switchContent: {
        label: 'Toggle Animate',
    },
}

export const OVERVIEW_HEADER_CONTENT: OverviewHeaderContent = {
    links: [
        {
            href: ABOUT_ME_ENDPOINT,
            text: 'About Me',
            icon: {
                data: '/static/icons/about-me.svg',
                alt: 'Person Icon',
            },
            color: 'blue',
        },
        {
            href: EXPERIENCE_ENDPOINT,
            text: 'Experience',
            icon: {
                data: '/static/icons/career.svg',
                alt: 'Briefcase Icon',
            },
            color: 'pink',
        },
        {
            href: PROJECTS_ENDPOINT,
            text: 'Projects',
            icon: {
                data: '/static/icons/projects.svg',
                alt: 'Paper Icon',
            },
            color: 'green',
        },
    ],
}