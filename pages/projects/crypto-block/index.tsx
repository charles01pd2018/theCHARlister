// dependencies
import Head from 'next/head';
// lib
import { PROJECTS_ENDPOINT, CRYPTO_BLOCK_PROJECT_ENDPOINT } from 'lib';
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

const CryptoBlock = ( {
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

export default CryptoBlock;

const content: Content = {
    pageTitle: 'Crypto Block - theCHARlister',
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
                    href: CRYPTO_BLOCK_PROJECT_ENDPOINT,
                },
            ],
        },
        productArticleContent: {
            items: [
                {
                    title: 'Overview',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'This project will always have a special place in my heart 💕 because it was the first fully-built website I made using React based on my interest of cryptocurrency.',
                        },
                    ],
                    media: {
                        data: '/static/icons/contact.svg',
                        alt: '',
                    },
                },
                {
                    title: 'Compiling Content',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'Research went into the the background of Bitcoin, the most prominent cryptocurrency exchanges, as well as the best hardware wallets for cold storage.',
                        },
                    ],
                    media: {
                        data: '/static/icons/contact.svg',
                        alt: '',
                    },
                },
            ],
        },
        technicalArticleContent: {
            items: [
                {
                    title: 'Fetching Data from Public API',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'Fetched data from public CoinGecko API for live Bitcoin price.',
                        },
                    ],
                    media: {
                        data: '/static/icons/contact.svg',
                        alt: '',
                    },
                },
                {
                    title: 'React SPA',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'Learning the difference between an SPA and a Server-rendered application. In hindseight - this should have been an SSR app for SEO.',
                        },
                    ],
                    media: {
                        data: '/static/icons/contact.svg',
                        alt: '',
                    },
                },
                {
                    title: 'Leveraging an existing framework',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'Used a small framework (cruip) as a base for project structure and components. Learned how to navigate a pre-existing codebase.',
                        },
                    ],
                    media: {
                        data: '/static/icons/contact.svg',
                        alt: '',
                    },
                },
            ],
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
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            content,
        }
    }
}