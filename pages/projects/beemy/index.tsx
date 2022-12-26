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
        parallaxContent: {
            items: [
                {
                    articleContent: {
                        texts: [
                            {
                                text: 'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk hdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk hdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                            },
                            {
                                text: 'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                            },
                            {
                                text: 'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                            },
                            {
                                text: 'fhdsjkahfjkasfj fsdjkhfkjsd asjkfh skjdfh jk',
                            },
                        ],
                    },
                    icon: {
                        data: '/static/icons/contact.svg',
                        alt: '',
                    }
                }
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