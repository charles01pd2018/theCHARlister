// lib
import { ABOUT_ME_ENDPOINT } from 'lib';
// types
import type { AboutMeContent } from 'components/types';

export const ABOUT_ME_CONTENT: AboutMeContent = {
    title: 'About Me',
    description: `Fullstack Developer specialized in React with experience developing and architecting SPA’s + client-server applications.`,
    link: {
        text: 'Learn More About Me',
        href: ABOUT_ME_ENDPOINT,
    },
    paletteContent: {
        icons: [
            {
                data: 'static/icons/react-logo.svg',
                alt: '',
                title: 'React',
            },
            {
                data: 'static/icons/nextjs-logo.svg',
                alt: '',
                title: 'React',
            },
            {
                data: 'static/icons/sass-logo.svg',
                alt: '',
                title: 'React',
            },
            {
                data: 'static/icons/typescript-logo.svg',
                alt: '',
                title: 'React',
            },
            {
                data: 'static/icons/nodejs-logo.svg',
                alt: '',
                tooltip: '',
                id: 'nodejs',
            },
            {
                data: 'static/icons/html-logo.svg',
                alt: '',
                tooltip: '',
                id: 'html',
            },
            {
                data: 'static/icons/mongodb-logo.svg',
                alt: '',
                tooltip: '',
                id: 'mongodb',
            },
            {
                data: 'static/icons/graphql-logo.svg',
                alt: '',
                tooltip: '',
                id: 'graphql',
            },
        ],
    },
}