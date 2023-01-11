// lib
import { ABOUT_ME_ENDPOINT, PROJECTS_ENDPOINT, EXPERIENCE_ENDPOINT } from '@lib/constants';
// types
import type { DisplayFooterContent } from 'components/types';


export const DISPLAY_FOOTER_CONTENT: DisplayFooterContent = {
    email: 'theCHARlister@gmail.com',
    textLinks: [
        {
            href: ABOUT_ME_ENDPOINT,
            text: 'About Me',
        },
        {
            href: EXPERIENCE_ENDPOINT,
            text: 'Experience',
        },
        {
            href: PROJECTS_ENDPOINT,
            text: 'Projects',
        },
    ],
    iconLinks: [
        {
            icon: {
                data: '/static/icons/github-logo.svg',
                alt: 'Github logo icon',
            },
            title: 'Github',
            href: 'https://github.com/charles01pd2018',
        },
        {
            icon: {
                data: '/static/icons/twitter-logo.svg',
                alt: 'Twitter logo icon',
            },
            title: 'Twitter',
            href: 'https://twitter.com/theCHARlister',
        },
        {
            icon: {
                data: '/static/icons/linkedin-logo.svg',
                alt: 'LinkedIn logo icon',
            },
            title: 'LinkedIn',
            href: 'https://www.linkedin.com/in/charleslu2021/',
        },
        {
            icon: {
                data: '/static/icons/npm-logo.svg',
                alt: 'npm logo icon',
            },
            title: 'npm',
            href: 'https://www.npmjs.com/~charles01pd2018',
        },
    ],
}