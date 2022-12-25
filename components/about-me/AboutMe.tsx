/**
 * 1. Codepen Portal: https://codepen.io/jasesmith/pen/qqgvZe
 * 2. Heading Gradient: https://colorffy.com/text-gradient-generator
 * 3. Slanted Background + Pick color for that backgrond
 */
// dependencies
import classNames from 'classnames';
// content
import { ABOUT_ME_CONTENT } from 'components/content';
// types
import type { LinkData } from 'types';


/* TYPES */
export interface Content {
    title: string;
    description: string;
    link: LinkData;
}

export interface Props {
    className?: string;
    content?: Content;
}

const AboutMe = ( {
    className='',
    content=ABOUT_ME_CONTENT,
}: Props ) => {
    /* CONTENT */
    const { title, description, link } = content;

    /* CLASSNAMES */
    const aboutMeClasses = classNames(
        'about-me',
        className,
    );

    return (
        <section className={aboutMeClasses}>

        </section>
    )
}

export default AboutMe;