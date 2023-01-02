// dependencies
import Head from 'next/head';
// lib
import { PROJECTS_ENDPOINT } from 'lib';
// layout
import { OverviewLayout } from 'layout';
// components
import { ProjectList } from 'components';
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

const Projects = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle, overviewLayoutContent } = content;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <OverviewLayout activePage='Projects'
                content={overviewLayoutContent}>
                <ProjectList />
            </OverviewLayout>
        </>
    );
}

export default Projects;

const content: Content = {
    pageTitle: 'Projects - theCHARlister',
    overviewLayoutContent: {
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
            ]
        }
    }
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            content,
        }
    }
}