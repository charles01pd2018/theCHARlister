// lib
import { EXPERIENCE_ENDPOINT } from 'lib';
// types
import type { AboutMeContent } from 'components/types';

export const ABOUT_ME_CONTENT: AboutMeContent = {
    title: 'About Me',
    description: `<u>Fullstack Product Engineer</u> specialized in React and design!`,
    link: {
        text: 'Career Experience',
        href: EXPERIENCE_ENDPOINT,
    },
    paletteContent: {
        icons: [
            {
                data: 'static/icons/react-logo.svg',
                alt: 'React Logo',
                title: 'React',
            },
            {
                data: 'static/icons/nextjs-logo.svg',
                alt: 'NextJS Logo',
                title: 'NextJS',
            },
            {
                data: 'static/icons/sass-logo.svg',
                alt: 'Sass Logo',
                title: 'Sass',
            },
            {
                data: 'static/icons/typescript-logo.svg',
                alt: 'Typescript Logo',
                title: 'Typescript',
            },
            {
                data: 'static/icons/nodejs-logo.svg',
                alt: 'NodeJS Logo',
                title: 'NodeJS',
            },
            {
                data: 'static/icons/html-logo.svg',
                alt: 'HTML Logo',
                title: 'HTML',
            },
            {
                data: 'static/icons/mongodb-logo.svg',
                alt: 'MongoDB Logo',
                title: 'MongoDB',
            },
            {
                data: 'static/icons/graphql-logo.svg',
                alt: 'GraphQL Logo',
                title: 'GraphQL',
            },
        ],
    },
}