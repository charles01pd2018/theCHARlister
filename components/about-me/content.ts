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
}