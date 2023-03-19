import type { ExperienceListContent } from 'components/types';

export const EXPERIENCE_LIST_CONTENT: ExperienceListContent = {
    items: [
        {
            logo: {
                data: '/static/icons/knowt-logo.svg',
                alt: 'Knowt Logo',
            },
            company: {
                text: 'Knowt',
                href: 'https://knowt.io/',
            },
            role: 'Software Engineer',
            dateRange: 'Oct 2022 - Present',
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
                'Acted as a key participant in the launch of <b><u>Knowt AI</u></b> by enabling dynamic positioning of the AI Input Menu and custom handlers to manipulate existing editor data',
                'Led one of the first revenue sources through <b><u>Google Adsense</b></u> and Amazon Associates display advertisements - configuring ads in both a testing and production environment',
                'Launched several key note-editor features including a new <b><u>toolbar</b></u> look with shortcut tooltips, <mark class="pink">background marks</mark>, and a resizable navigation panel',
                'Repurposed existing note-editor to launch the new <b><u>flashcard editor</u></b> with custom ✨ markdown parsing',
                'Fixed multiple note-editor bugs consisting of ✨ markdown parsing, saving, custom key inputs, paste parsing, image resizing + rendering + reordering, list conversions for nested lists, node popup selections, and google drive imports',
                'Created a better saving experience by enabling <b><u>manual shortcut saving</u></b> (command+S) in combination with debounce saving for both the note and flashcard editor',
                'Contributed to the migration of Python backend to Typescript and increased server speed from 🧑‍💻 O(n2) → O(n) through code optimization'
            ],
        },
        {
            logo: {
                data: '/static/icons/avery-logo.svg',
                alt: 'Avery Logo',
            },
            company: {
                text: 'Avery',
                href: 'https://www.avery.com/',
            },
            role: 'Software Developement Engineer I',
            dateRange: 'Oct 2022 - Present',
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
            bullets: [
                'Collaborated with the software and design team to build out new UI components consisting of new dialog boxes, radio buttons, numbered lists, etc. as well as documented those components within Storybook',
                'Troubleshooted authentication event tracking with Marketing team, manager and third-party technical representative',
                'Made several updates to our internal tools that correspond to business needs',
            ],
        },
    ],
}