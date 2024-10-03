import { MUSIZI_PROJECT_ENDPOINT } from 'lib/constants';
import type { ExperienceListContent } from 'components/types';

export const EXPERIENCE_LIST_CONTENT: ExperienceListContent = {
    items: [
        {
            logo: {
                data: '/static/images/centric-software-logo.jpg',
                alt: 'Centric Software Logo',
                width: 120,
                height: 60,
            },
            company: {
                text: 'Centric Software',
                href: 'https://www.centricsoftware.com/',
            },
            roles: [
                {
                    title: 'Software Engineer 2',
                    dateRange: 'Sep 2024 - Present',
                    bullets: [],
                },
            ],
        },
        {
            logo: {
                data: '/static/icons/avery-logo.svg',
                alt: 'Avery Logo',
            },
            company: {
                text: 'Avery',
                href: 'https://app.print.avery.com/dpo8',
            },
            roles: [
                {
                    title: 'Software Developement Engineer 2',
                    dateRange: 'Jan 2024 - Sep 2024',
                    bullets: [
                        'Leading the migration to Google Analytics 4, communicating with key stakeholders and 3rd party vendor to ensure optimal data transfer of 50+ hard-coded events',
                    ],
                    technologies: {
                        icons: [
                            {
                                data: '/static/icons/angular-bg-logo.svg',
                                alt: 'Angular Logo',
                                title: 'Angular',
                            },
                            {
                                data: '/static/icons/backbonejs-bg-logo.svg',
                                alt: 'BackboneJS Logo',
                                title: 'BackboneJS',
                            },
                            {
                                data: '/static/icons/sass-bg-logo.svg',
                                alt: 'Sass Logo',
                                title: 'Sass',
                            },
                            {
                                data: '/static/icons/nodejs-bg-logo.svg',
                                alt: 'NodeJS Logo',
                                title: 'NodeJS',
                            },
                            {
                                data: '/static/icons/storybook-bg-logo.svg',
                                alt: 'Storybook Logo',
                                title: 'Storybook',
                            },
                        ],
                    },
                },
                {
                    title: 'Software Developement Engineer 1',
                    dateRange: 'Oct 2022 - Jan 2024',
                    bullets: [
                        'Contributed to the launch of the new user interface for the Digital Print Online application - addressing stories and defects relating to virtual lists, resizable popups, inputs, etc.',
                        'Documented and created a standard on localization for 1500+ locale keys ',
                        'Collaborated with the software and design team to build out new UI components consisting of new dialog boxes, radio buttons, numbered lists, etc. as well as documented those components within Storybook'
                    ],
                },
            ]
        },
        {
            logo: {
                data: '/static/icons/knowt-logo.svg',
                alt: 'Knowt Logo',
            },
            company: {
                text: 'Knowt',
                href: 'https://knowt.com/',
            },
            roles: [
                {
                    title: 'Software Engineer',
                    dateRange: 'Oct 2022 - June 2023',
                    technologies: {
                        icons: [
                            {
                                data: '/static/icons/nextjs-bg-logo.svg',
                                alt: 'NextJS Logo',
                                title: 'NextJS',
                            },
                            {
                                data: '/static/icons/typescript-bg-logo.svg',
                                alt: 'Typescript Logo',
                                title: 'Typescript',
                            },
                            {
                                data: '/static/icons/motion-bg-logo.svg',
                                alt: 'Framer Motion Logo',
                                title: 'Framer Motions',
                            },
                            {
                                data: '/static/icons/mui-bg-logo.svg',
                                alt: 'Material UI Logo',
                                title: 'Material UI',
                            },
                            {
                                data: '/static/icons/aws-bg-logo.svg',
                                alt: 'AWS Logo',
                                title: 'AWS',
                            },
                            {
                                data: '/static/icons/prosemirror-bg-logo.svg',
                                alt: 'ProseMirror Logo',
                                title: 'ProseMirror',
                            },
                        ],
                    },
                    bullets: [
                        'Ideated and implemented product flows for <b><u>Knowt AI</u></b> assistant to create flashcards and notes with <b><u>generative AI</u></b> through custom prompts, resulting in hundreds of paid user signups over 3 months',
                        'Led one of the first revenue sources through <b><u>Google Adsense</b></u> and Amazon Associates display advertisements - configuring ads in both a testing and production environment',
                        'Launched several key note-editor features including a new <b><u>toolbar</b></u> look with shortcut tooltips, <mark class="pink">background marks</mark>, and a resizable navigation panel - creating a 30% lift in new notes created over the course of 2 months after launch',
                        'Repurposed existing note-editor to launch the new <b><u>flashcard editor</u></b> with custom ✨ markdown parsing',
                        'Fixed multiple note-editor bugs consisting of ✨ markdown parsing, saving, custom key inputs, paste parsing, image resizing + rendering + reordering, list conversions for nested lists, node popup selections, and google drive imports',
                        'Created a better saving experience by enabling <b><u>manual shortcut saving</u></b> (command+S) in combination with debounce saving for both the note and flashcard editor',
                        'Contributed to the migration of Python backend to Typescript and optimized server speed through batch operations 🧑‍💻, increasing server speed and leading to a better user experience',
                    ],
                }
            ]
        },
        {
            logo: {
                data: '/static/images/musizi-logo.png',
                alt: 'Musizi University Logo',
                width: 140,
                height: 34.2,
            },
            company: {
                text: 'Musizi',
                href: 'https://www.musizi.ac.ug/',
            },
            roles: [
                {
                    title: 'Lead Developer (Freelance)',
                    dateRange: 'Mar 2022 - Aug 2022',
                    bullets: [
                        `Led a team of 2 developers to build out website from scratch based on Figma design using best accessibility practices - <a class="article-text text--norm" href=${MUSIZI_PROJECT_ENDPOINT}>Project Writeup</a>`,
                    ],
                    technologies: {
                        icons: [
                            {
                                data: '/static/icons/nextjs-bg-logo.svg',
                                alt: 'NextJS Logo',
                                title: 'NextJS',
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
            ]
        },
    ],
}