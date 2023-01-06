/**
 * https://codepen.io/team/jotform/pen/XWmqoMp
 */

// dependencies
import Head from 'next/head';
// layout
import { GenericLayout } from 'layout';
// lib
import { EXPERIENCE_ENDPOINT, PROJECTS_ENDPOINT } from '@lib/constants';
// components
import { Profile } from 'components';
// elements
import { CTALink } from 'elements';
// types
import type { GetStaticProps } from 'next';
import type { LinkData } from 'types';


interface Content {
    pageTitle: string;
    introText: string;
    texts: string[];
    ctaLinks: LinkData[];
}

interface Props {
    content: Content;
}

const AboutMe = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle, introText, texts, ctaLinks } = content;

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <GenericLayout className='about-me-layout' activePage='About Me'>
                <Profile className='spacing--v' />
                <section className='container text--lg'>
                    <p className='text--xlg spacing--v txt-center'>{introText}</p>
                    {
                        texts.map( ( txt, index ) => (
                            <p key={index} className='spacing--v'
                                dangerouslySetInnerHTML={{ __html: txt }} />
                        ) )
                    }
                </section>
                <section className='cta-links spacing--vXlg text--xlg'>
                    {
                        ctaLinks.map( ( linkContent ) => (
                            <CTALink key={linkContent.href} content={linkContent} 
                                type='rainbow-shadow' />
                        ) )
                    }
                </section>
            </GenericLayout>
        </>
    );
}

export default AboutMe;

const content: Content = {
    pageTitle: 'About Me - theCHARlister',
    introText: 'Hello! 👋',
    texts: [
        '🖥️ I love building meaningful projects and crafting great user experiences. My work on the front-end consists of ideating <mark class="green">designs</mark> that matches an applications content + requirements and then translating those designs into a <mark class="pink">tangible interface</mark>. On the backend, I pride myself in writing <b>secure</b>, <b>scalable</b>, and <b>usable</b> code.',
        '🤓 I started off as a <u>self-taught developer</u> in an attempt to break into Software Engineering. I graduated from the University of California, Irvine (zot!) as a Business Administration major with a couple of Sales internships. From my humble beginnings of mindlessly going through tutorial after tutorial, it’s safe to say I’ve come a long way in my programming journey.',
        '🤗 In my free time I enjoy cooking, playing basketball, and trying new foods!',
    ],
    ctaLinks: [
        {
            text: 'Career Experience',
            href: EXPERIENCE_ENDPOINT,
        },
        {
            text: 'Projects',
            href: PROJECTS_ENDPOINT,
        },
    ],
}

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            content,
        }
    }
}