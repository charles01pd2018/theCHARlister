/**
 * https://codepen.io/team/jotform/pen/XWmqoMp
 */

// dependencies
import Head from 'next/head';
// layout
import { GenericLayout } from 'layout';
// components
import { Profile } from 'components';
// types
import type { GetStaticProps } from 'next';


interface Content {
    pageTitle: string;
}

interface Props {
    content: Content;
}

const AboutMe = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle } = content;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <GenericLayout activePage='About Me'>
                <Profile />
            </GenericLayout>
        </>
    );
}

export default AboutMe;

const content: Content = {
    pageTitle: 'About Me - theCHARlister',
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            content,
        }
    }
}