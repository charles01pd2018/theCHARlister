// dependencies
import Head from 'next/head';
// lib
import { PROJECTS_ENDPOINT, MUSIZI_PROJECT_ENDPOINT } from 'lib';
// layout
import { ArticleLayout } from 'layout';
// types
import type { GetStaticProps } from 'next';
import type { ArticleLayoutContent } from 'layout/types';


interface Content {
    pageTitle: string;
    articleLayoutContent: ArticleLayoutContent;
}

interface Props {
    content: Content;
}

const Musizi = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle, articleLayoutContent } = content;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <ArticleLayout content={articleLayoutContent} />
        </>
    );
}

export default Musizi;

const content: Content = {
    pageTitle: 'Musizi - theCHARlister',
    articleLayoutContent: {
        breadcrumbsContent: {
            links: [
                {
                    text: 'Home',
                    href: '/',
                },
                {
                    text: 'Projects',
                    href: PROJECTS_ENDPOINT,
                },
                {
                    text: 'Crypto Block',
                    href: MUSIZI_PROJECT_ENDPOINT,
                },
            ],
        },
        articleContent: {
            items: [

            ],
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
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            content,
        }
    }
}