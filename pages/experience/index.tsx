// layout
import { OverviewLayout } from 'layout';
// lib
import { EXPERIENCE_ENDPOINT } from 'lib';
// components
import { ExperienceList, SEO } from 'components';
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
            <SEO pageTitle={pageTitle} description={description}
                url={`${process.env.NEXT_PUBLIC_URI}${EXPERIENCE_ENDPOINT}`} />
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