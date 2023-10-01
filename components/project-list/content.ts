// lib
import { BEEMY_PROJECT_ENDPOINT, MUSIZI_PROJECT_ENDPOINT, CRYPTO_BLOCK_PROJECT_ENDPOINT } from 'lib';
// types
import type { ProjectListContent } from 'components/types';
import type { StarredProjectListContent } from 'components/types';

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
                        title: 'Vercel',
                    },
                    {
                        data: '/static/icons/typescript-bg-logo.svg',
                        alt: 'Typescript Logo',
                        title: 'Typescript',
                    },
                    {
                        data: '/static/icons/graphql-bg-logo.svg',
                        alt: 'GraphQL Logo',
                        title: 'GraphQL',
                    },
                    {
                        data: '/static/icons/mongodb-logo.svg',
                        alt: 'MongoDB Logo',
                        title: 'MongoDB',
                    },
                ],
            },
        },
        {
            title: 'Musizi University',
            description: 'Upcoming Uganda University fostering independent thinkers driven by empathy',
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
                        title: 'Vercel',
                    },
                    {
                        data: '/static/icons/typescript-bg-logo.svg',
                        alt: 'Typescript Logo',
                        title: 'Typescript',
                    },
                    {
                        data: '/static/icons/sass-bg-logo.svg',
                        alt: 'Sass Logo',
                        title: 'Sass',
                    },
                    {
                        data: '/static/icons/mailchimp-bg-logo.svg',
                        alt: 'Mailchimp Logo',
                        title: 'Mailchimp',
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
                        title: 'Heroku',
                    },
                    {
                        data: '/static/icons/nodejs-bg-logo.svg',
                        alt: 'NodeJS Logo',
                        title: 'Javascript',
                    },
                    {
                        data: '/static/icons/react-bg-logo.svg',
                        alt: 'React Logo',
                        title: 'React',
                    },
                    {
                        data: '/static/icons/html-bg-logo.svg',
                        alt: 'HTML Logo',
                        title: 'HTML',
                    },
                ],
            },
        },
    ],
}

export const STARRED_PROJECT_LIST_CONTENT: StarredProjectListContent = {
    items: [
        {
            image: {
                src: '/static/icons/css-gen-preview.svg',
                alt: 'CSS Gen Shadow Page Preview Icon',
            },
            title: 'Shadow CSS Generator',
            description: 'Generate CSS for colorful box and text shadows that matches your content',
            href: 'https://css-gen-eight.vercel.app/',
        },
    ],
}