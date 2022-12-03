// dependencies
import Head from 'next/head';
// types
import type { GetStaticProps } from 'next';

interface Content {
    pageTitle: string;
}

interface Props {
    content: Content;
}

const Beemy = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle } = content;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
        </>
    );
}

export default Beemy;

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {}
    }
}