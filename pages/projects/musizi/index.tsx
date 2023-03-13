// components
import { SEO } from 'components';
// lib
import { PROJECTS_ENDPOINT, MUSIZI_PROJECT_ENDPOINT } from 'lib';
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

const Musizi = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle, description, articleLayoutContent } = content;

    return (
        <>
            <SEO pageTitle={pageTitle} description={description}
                url={`${process.env.NEXT_PUBLIC_URI}${MUSIZI_PROJECT_ENDPOINT}`} />
            <ArticleLayout className='musizi'
                content={articleLayoutContent} />
        </>
    );
}

export default Musizi;

const content: Content = {
    pageTitle: 'Musizi - theCHARlister',
    description: 'Musizi Unviersity Personal Project - theCHARlister',
    articleLayoutContent: {
        projectLinkContent: {
            logo: {
                data: '/static/icons/musizi-logo.svg',
                alt: 'Musizi University Logo',
            },
            href: 'https://www.musizi.ac.ug/',
            ariaLabel: 'Musizi Website',
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
                    text: 'Musizi University',
                    href: MUSIZI_PROJECT_ENDPOINT,
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
                            text: 'An upcoming Uganda University aiming to foster independent thinkers driven by empathy.',
                        },
                    ],
                },
                {
                    title: 'Communication',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'I joined the team when the design was completed and ready to be translated into code. Because of this, I had to catch up on the vision and make sure that the website matched the design specs. This included overall theming, <mark class="green">color schemes</mark>, and animating a static design file.',
                        },
                    ],
                },
                {
                    title: 'Collaborating and Translating Design',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'There was continuous communication of progress throughout the development cycle consisting of meeting and written updates. To make sure both parties were on the same page, regular preview deployments occurred so that everyone could walkthrough the various checkpoints of the website. Small tweaks and updates were made both during development and after pushing live.',
                        },
                    ],

                },
            ],        },
        technicalArticleContent: {
            items: [
                {
                    title: 'Project Structure and Procedures',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'As the lead developer for this collaborative project, I was responsible for writing out documentation and developing a workflow for code contributions. This included:',
                        },
                        {
                            WrapperTag: 'ul',
                            text: '<li>A detailed readME about project structure.</li>' +
                                '<li>Pull request template.</li>' +
                                '<li>Assigning tasks based off individual member interest and skillset.</li>' +
                                '<li>CI/CD pipelines and regular intervals for preview deployments.</li>',
                        },
                    ],

                },
                {
                    title: 'Custom Mailchimp API Implementation',
                    texts: [
                        {                            WrapperTag: 'p',
                            text: 'In order to adhere to the custom design of the website, our email submission form makes a custom call to the Mailchimp API.',
                        },
                        {
                            WrapperTag: 'p',
                            text: 'A custom mailchimp backend API route + enviroment secrets were configured to make this work.',
                        },
                    ],

                },
                {
                    title: 'Responsive Design',
                    texts: [
                        {
                            WrapperTag: 'p',
                            text: 'The design included many relatively positioned images of various sizes. Because of this, there was a lot of back and forth between the client in order to make sure the website looked pixel perfect no matter the screen width.',
                        },                    ],

                },
            ],
        },
        tagListContent: {
            tags: [
                {
                    text: 'MARKETING',
                    color: 'pink',
                },
                {
                    text: 'FREELANCE',                    color: 'pink',
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