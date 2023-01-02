// lib
import { BEEMY_PROJECT_ENDPOINT, MUSIZI_PROJECT_ENDPOINT, CRYPTO_BLOCK_PROJECT_ENDPOINT } from 'lib';
// types
import type { ProjectListContent } from 'components/types';

export const PROJECT_LIST_CONTENT: ProjectListContent = {
    items: [
        {
            title: 'beemy',
            description: 'One click blog post publishing with built-in SEO and a rich editor experience.',
            projectPreviewContent: {
                color: 'blue',
                imageLink: {
                    src: '/static/images/beemy-cover.png',
                    alt: 'beemy Project Cover',
                    href: BEEMY_PROJECT_ENDPOINT,
                },
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
        },
    ],
}