// layout
import { OverviewLayout } from 'layout';
// lib
import { EXPERIENCE_ENDPOINT, URL } from 'lib';
// components
import { ExperienceList, PageSEO } from 'components';
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

const Experience = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle, description, overviewLayoutContent } = content;

    return (
        <>
            <PageSEO pageTitle={pageTitle} description={description}
                image='/static/images/open-graph.png'
                url={`${URL}${EXPERIENCE_ENDPOINT}`} />
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
    description: 'theCHARlister Proffesional Experience',
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