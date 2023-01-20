// components
import { PageSEO } from 'components';
// lib
import { PROJECTS_ENDPOINT, CRYPTO_BLOCK_PROJECT_ENDPOINT, URL } from 'lib';
// layout
import { ArticleLayout } from 'layout';
// types
import type { GetStaticProps } from 'next';
import type { ArticleLayoutContent } from 'layout/types';


interface Content {
    pageTitle: string;
    description: string;
    articleLayoutContent: ArticleLayoutContent;
}

interface Props {
    content: Content;
}

const CryptoBlock = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle, description, articleLayoutContent } = content;

    return (
        <>
            <PageSEO pageTitle={pageTitle} description={description}
                image='/static/images/open-graph.png'
                url={`${URL}${CRYPTO_BLOCK_PROJECT_ENDPOINT}`} />
            <ArticleLayout className='crypto-block'
                content={articleLayoutContent} />
        </>
    );
}

export default CryptoBlock;

const content: Content = {
    pageTitle: 'Crypto Block - theCHARlister',
    description: 'Crypto Block Personal Project - theCHARlister',
    articleLayoutContent: {
        projectLinkContent: {
            logo: {
                data: '/static/icons/crypto-block-logo.svg',
                alt: 'Crypto Block Logo',
            },
            href: 'https://charles01pd2018.github.io/crypto-block',
            ariaLabel: 'Crypto Block Website',
        },
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
                            text: 'Learn what’s possible in the world of cryptocurrency!',
                        },
                        {
                            WrapperTag: 'p',
                            text: 'This project will always have a special place in my heart 💕 because it was the first fully-built website I made using React based on my interest of cryptocurrency.',
                        },
                    ],
                },
                {
                    title: 'Compiling Content',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'Research went into the the background of Bitcoin, the most prominent cryptocurrency exchanges, as well as the best hardware wallets for cold storage.',
                        },
                    ],

                },
            ],        },
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

                },
                {
                    title: 'React SPA',
                    texts: [
                        {                            WrapperTag: 'p',
                            text: 'Learning the difference between an SPA and a Server-rendered application. In hindseight - this should have been an SSR app for SEO.',
                        },
                    ],

                },
                {
                    title: 'Leveraging an existing framework',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'Used a small framework (cruip) as a base for project structure and components. Learned how to navigate a pre-existing codebase.',
                        },                    ],

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
                    text: 'PERSONAL',                    color: 'green',
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