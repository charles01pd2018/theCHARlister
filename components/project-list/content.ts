// lib
import { BEEMY_PROJECT_ENDPOINT, MUSIZI_PROJECT_ENDPOINT, CRYPTO_BLOCK_PROJECT_ENDPOINT } from 'lib';
// types
import type { ProjectListContent } from 'components/types';

export const PROJECT_LIST_CONTENT: ProjectListContent = {
    items: [
        {
            title: 'beemy',
            description: 'One click blog post publishing with built-in SEO and a rich editor experience',
            projectPreviewContent: {
                color: 'blue',
                imageLink: {
                    src: '/static/images/beemy-cover.png',
                    alt: 'beemy Project Cover',
                    href: BEEMY_PROJECT_ENDPOINT,
                },
            },
            tagListContent: {
                tags: [
                    {
                        text: 'FULLSTACK',
                        color: 'blue',
                    },
                    {
                        text: 'PERSONAL',
                        color: 'blue',
                    },
                ],
            },
            stackedIconsContent: {
                icons: [
                    {
                        data: '/static/icons/vercel-logo.svg',
                        alt: 'Vercel Logo',
                    },
                    {
                        data: '/static/icons/typescript-bg-logo.svg',
                        alt: 'Typescript Logo',
                    },
                    {
                        data: '/static/icons/graphql-bg-logo.svg',
                        alt: 'GraphQL Logo',
                    },
                    {
                        data: '/static/icons/mongodb-logo.svg',
                        alt: 'MongoDB Logo',
                    },
                ],
            },
        },
        {
            title: 'Musizi University',
            description: 'An upcoming Uganda University aiming to foster independent thinkers driven by empathy',
            projectPreviewContent: {
                color: 'pink',
                imageLink: {
                    src: '/static/images/musizi-cover.png',
                    alt: 'Musizi University Project Cover',
                    href: MUSIZI_PROJECT_ENDPOINT,
                },
            },
            tagListContent: {
                tags: [
                    {
                        text: 'MARKETING',
                        color: 'pink',
                    },
                    {
                        text: 'FREELANCE',
                        color: 'pink',
                    },
                ],
            },
            stackedIconsContent: {
                icons: [
                    {
                        data: '/static/icons/vercel-logo.svg',
                        alt: 'Vercel Logo',
                    },
                    {
                        data: '/static/icons/typescript-bg-logo.svg',
                        alt: 'Typescript Logo',
                    },
                    {
                        data: '/static/icons/sass-bg-logo.svg',
                        alt: 'Sass Logo',
                    },
                    {
                        data: '/static/icons/mailchimp-bg-logo.svg',
                        alt: 'Mailchimp Logo',
                    },
                ],
            },
        },
        {
            title: 'Crypto Block',
            description: 'Learn what’s possible in the world of cryptocurrency!',
            projectPreviewContent: {
                color: 'green',
                imageLink: {
                    src: '/static/images/crypto-block-cover.png',
                    alt: 'Crypto Block Project Cover',
                    href: CRYPTO_BLOCK_PROJECT_ENDPOINT,
                },
            },
            tagListContent: {
                tags: [
                    {
                        text: 'MARKETING',
                        color: 'green',
                    },
                    {
                        text: 'PERSONAL',
                        color: 'green',
                    },
                ],
            },
            stackedIconsContent: {
                icons: [
                    {
                        data: '/static/icons/heroku-bg-logo.svg',
                        alt: 'Heroku Logo',
                    },
                    {
                        data: '/static/icons/nodejs-bg-logo.svg',
                        alt: 'NodeJS Logo',
                    },
                    {
                        data: '/static/icons/react-bg-logo.svg',
                        alt: 'React Logo',
                    },
                    {
                        data: '/static/icons/html-bg-logo.svg',
                        alt: 'HTML Logo',
                    },
                ],
            },
        },
    ],
}