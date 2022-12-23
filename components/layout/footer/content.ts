// lib
import { PROJECT_ENDPOINT, EXPERIENCE_ENDPOINT } from '@lib/constants';
// types
import type { ContactFooterContent } from 'components/types';


export const CONTACT_FOOTER_CONTENT: ContactFooterContent = {
    email: 'theCHARlsiter@gmail.com',
    textLinks: [
        {
            href: PROJECT_ENDPOINT,
            text: 'Projects',
        },
        {
            href: PROJECT_ENDPOINT,
            text: 'Experience',
        },
    ],
    iconLinks: [
        {
            icon: {
                data: '',
                alt: 'github',
            },
            href: '',
        },
        {
            icon: {
                data: '',
                alt: 'npm',
            },
            href: '',
        },
        {
            icon: {
                data: '',
                alt: 'twitter',
            },
            href: '',
        },
    ],
}