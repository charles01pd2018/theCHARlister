// dependencies
import Head from 'next/head';
// layout
import { OverviewLayout } from 'layout';
// components
import { ExperienceList } from 'components';
// types
import type { GetStaticProps } from 'next';


interface Content {
    pageTitle: string;
}

interface Props {
    content: Content;
}

const Experience = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle } = content;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <OverviewLayout>
                <ExperienceList />
            </OverviewLayout>
        </>
    );
}

export default Experience;

const content: Content = {
    pageTitle: 'Experience - theCHARlister',
};

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            content,
        }
    }
}