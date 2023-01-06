// dependencies
import Head from 'next/head';
// layout
import { ArticleLayout } from 'layout';
// lib
import { PROJECTS_ENDPOINT, BEEMY_PROJECT_ENDPOINT } from 'lib';
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

const Beemy = ( {
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

export default Beemy;


const content: Content = {
    pageTitle: 'beemy Project - theCHARlister',
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
                    text: 'beemy',
                    href: BEEMY_PROJECT_ENDPOINT,
                },
            ],
        },
        articleContent: {
            items: [
                {
                    title: 'Dingus',
                    texts: [
                        'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk hdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk hdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                        'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                        'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                        'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                        'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk hdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk hdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                        'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                        'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                        'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
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
                    text: 'FULLSTACK',
                    color: 'blue',
                },
                {
                    text: 'PERSONAL',
                    color: 'blue',
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
                    data: '/static/icons/graphql-bg-logo.svg',
                    alt: 'GraphQL Logo',
                    title: 'GraphQL',
                },
                {
                    data: '/static/icons/sendgrid-bg-logo.svg',
                    alt: 'Twilio SendGrid Logo',
                    title: 'Twilio SendGrid'
                },
                {
                    data: '/static/icons/mongodb-logo.svg',
                    alt: 'MongoDB Logo',
                    title: 'MongoDB',
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