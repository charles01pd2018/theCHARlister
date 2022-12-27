// dependencies
import Head from 'next/head';
// layout
import { OverviewLayout } from 'layout';
// types
import type { GetStaticProps } from 'next';


interface Content {
    pageTitle: string;
}

interface Props {
    content: Content;
}

const Projects = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle } = content;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <OverviewLayout activePage='Projects'>

            </OverviewLayout>
        </>
    );
}

export default Projects;

const content: Content = {
    pageTitle: 'Projects - theCHARlister',
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            content,
        }
    }
}