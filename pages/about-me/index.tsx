// layout
import { GenericLayout } from 'layout';
// lib
import { EXPERIENCE_ENDPOINT, PROJECTS_ENDPOINT, ABOUT_ME_ENDPOINT, URL } from 'lib';
// components
import { Profile, SEO } from 'components';
// elements
import { CTALink, ArticleText, SVG } from 'elements';
// types
import type { GetStaticProps } from 'next';
import type { CTALinkIconContent } from 'types';
import type { ArticleTextProps } from 'elements/types';


/* TYPES */
interface Content {
    pageTitle: string;
    description: string
    introText: string;
    texts: ArticleTextProps[];
    ctaLinks: CTALinkIconContent[];
}

interface Props {
    content: Content;
}

const AboutMe = ( {
    content,
}: Props ) => {
    /* CONTENT */
    const { pageTitle, description, introText, texts, ctaLinks } = content;

    return (
        <>
            <SEO pageTitle={pageTitle} description={description}
                image='/static/images/open-graph.png'
                url={`${URL}${ABOUT_ME_ENDPOINT}`} />
            <GenericLayout className='about-me-layout' activePage='About Me'>
                <Profile className='spacing--v' />
                <section className='container text--lg'>
                    <p className='text--xlg spacing--v txt-center'>{introText}</p>
                    {
                        texts.map( ( textProps, index ) => (
                            <ArticleText key={index} className='spacing--v'
                                {...textProps} />
                        ) )
                    }
                </section>
                <section className='cta-links spacing--vXlg text--xlg'>
                    {
                        ctaLinks.map( ( { link, icon, borderColor } ) => (
                            <CTALink key={link.href} href={link.href} type='rainbow-shadow'
                                borderColor={borderColor}>
                                <SVG {...icon} width={22} height={22} />
                                {link.text}
                            </CTALink>
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
    description: 'More about theCHARlister!',
    introText: 'Hello! 👋',
    texts: [
        {
            WrapperTag: 'p',
            text: '🖥️ I love building meaningful projects and crafting great user experiences. My work on the front-end consists of ideating <mark class="green">designs</mark> that matches an applications content + requirements and then translating those designs into a <mark class="pink">tangible interface</mark>. On the backend, I pride myself in writing <b>secure</b>, <b>scalable</b>, and <b>usable</b> code.',
        },
        {
            WrapperTag: 'p',
            text: '🤓 I started off as a <u>self-taught developer</u> in an attempt to break into Software Engineering. I graduated from the University of California, Irvine (zot!) as a Business Administration major with a couple of Sales internships. From my humble beginnings of mindlessly going through tutorial after tutorial, it’s safe to say I’ve come a long way in my programming journey.',
        },
        {
            WrapperTag: 'p',
            text: '🤗 In my free time I enjoy cooking, playing basketball, and trying new foods!',
        },
    ],
    ctaLinks: [
        {
            link: {
                text: 'Career Experience',
                href: EXPERIENCE_ENDPOINT,
            },
            icon: {
                data: '/static/icons/career.svg',
                alt: 'Briefcase Icon',
            },
            borderColor: 'pink',
        },
        {
            link: {
                text: 'Projects',
                href: PROJECTS_ENDPOINT,
            },
            icon: {
                data: '/static/icons/projects.svg',
                alt: 'Paper Icon',
            },
            borderColor: 'green',
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