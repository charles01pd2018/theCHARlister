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
        articleContent: {
            items: [

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
                },
                {
                    data: '/static/icons/nodejs-bg-logo.svg',
                    alt: 'NodeJS Logo',
                },
                {
                    data: '/static/icons/react-bg-logo.svg',
                    alt: 'React Logo',
                },
                {
                    data: '/static/icons/html-bg-logo.svg',
                    alt: 'HTML Logo',
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