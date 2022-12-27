/**
 * 1. Codepen Portal: https://codepen.io/jasesmith/pen/qqgvZe
 * 2. Heading Gradient: https://colorffy.com/text-gradient-generator
 * 3. Slanted Background + Pick color for that backgrond
 * 4. Sub out for code icons - https://codepen.io/ykadosh/pen/PoBPKvJ
 */
// dependencies
import classNames from 'classnames';
// elements
import { NavLink, Palette } from 'elements';
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
            <div className='text-wrapper'>
                <h2 className='title big-heading'>{title}</h2>
                <p className='description text--lg'>{description}</p>
                <NavLink className='text--norm' content={link} type='arrow' />
            </div>
            <Palette />
        </section>
    )
}

export default AboutMe;