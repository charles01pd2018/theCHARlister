// lib
import { PROJECTS_ENDPOINT } from 'lib';
// layout
import { OverviewLayout } from 'layout';
// components
import { ProjectList, StarredProjectList, SEO } from 'components';
// types
import type { GetStaticProps } from 'next';
import type { OverviewLayoutContent } from 'layout/types';


interface Content {
    pageTitle: string;
    description: string;
    overviewLayoutContent: OverviewLayoutContent;
}

interface Props {
    content: Content;
}

const Projects = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle, description, overviewLayoutContent } = content;

    return (
        <>
            <SEO pageTitle={pageTitle} description={description}
                url={`${process.env.NEXT_PUBLIC_URI}${PROJECTS_ENDPOINT}`} />
            <OverviewLayout className='projects' activePage='Projects'
                content={overviewLayoutContent}>
                <StarredProjectList />
                <ProjectList />
            </OverviewLayout>
        </>
    );
}

export default Projects;

const content: Content = {
    pageTitle: 'Projects - theCHARlister',
    description: 'theCHARlister Personal Projects',
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