// lib
import { BEEMY_PROJECT_ENDPOINT } from 'lib';
// types
import type { ProjectHighlightsContent } from 'components/types';

export const PROJECT_HIGHLIGHTS_CONTENT: ProjectHighlightsContent = {
    navText: 'Check Out',
    items: [
        {
            title: 'beemy',
            description: 'One click blog post publishing with built-in SEO and a rich editor experience.',
            iframeSrc: 'https://www.writebeemy.com/',
            href: BEEMY_PROJECT_ENDPOINT,
            projectId: 'beemy',
        },
        {
            title: 'Musizi University',
            description: 'One click blog post publishing with built-in SEO and a rich editor experience.',
            iframeSrc: 'https://www.musizi.ac.ug/',
            href: BEEMY_PROJECT_ENDPOINT,
            projectId: 'beemy',
        },
        {
            title: 'beemy',
            description: 'One click blog post publishing with built-in SEO and a rich editor experience.',
            iframeSrc: 'https://www.writebeemy.com/',
            href: BEEMY_PROJECT_ENDPOINT,
            projectId: 'beemy',
        },
    ],
}