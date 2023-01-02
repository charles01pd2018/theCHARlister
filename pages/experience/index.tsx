// dependencies
import Head from 'next/head';
// layout
import { OverviewLayout } from 'layout';
// lib
import { EXPERIENCE_ENDPOINT } from 'lib';
// components
import { ExperienceList } from 'components';
// types
import type { GetStaticProps } from 'next';
import type { OverviewLayoutContent } from 'layout/types';


interface Content {
    pageTitle: string;
    overviewLayoutContent: OverviewLayoutContent;
}

interface Props {
    content: Content;
}

const Experience = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle, overviewLayoutContent } = content;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <OverviewLayout content={overviewLayoutContent}
                activePage='Experience'>
                <ExperienceList />
            </OverviewLayout>
        </>
    );
}

export default Experience;

const content: Content = {
    pageTitle: 'Experience - theCHARlister',
    overviewLayoutContent: {
        breadcrumbsContent: {
            links: [
                {
                    text: 'Home',
                    href: '/',
                },
                {
                    text: 'Experience',
                    href: EXPERIENCE_ENDPOINT,
                },
            ],
        },
    },
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            content,
        }
    }
}