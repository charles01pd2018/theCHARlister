// dependencies
import Head from 'next/head';
// layout
import { GenericLayout } from 'layout';
// components
import { References } from 'components';
// types
import type { GetStaticProps } from 'next';


interface Content {
    pageTitle: string;
}

interface Props {
    content: Content;
}

const ReferencesPage = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle } = content;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <GenericLayout activePage='References'>
                <References />
            </GenericLayout>
        </>
    );
}

export default ReferencesPage;


const content: Content = {
    pageTitle: 'References - theCHARlister',
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            content,
        }
    }
}