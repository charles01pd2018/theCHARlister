/**
 * 2. Heading Gradient: https://colorffy.com/text-gradient-generator
 * 3. shadows.brumm
 * 4. Sub out for code icons - https://codepen.io/ykadosh/pen/PoBPKvJ
 */
// dependencies
import classNames from 'classnames';
// elements
import { CTALink, Palette } from 'elements';
// content
import { ABOUT_ME_CONTENT } from 'components/content';
// lib
import { useClientWidth, BREAKPOINT_MEDIUM } from 'lib';
// types
import type { LinkData } from 'types';
import type { PaletteContent } from 'elements/types';


/* TYPES */
export interface Content {
    title: string;
    description: string;
    link: LinkData;
    paletteContent: PaletteContent;
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
    const { title, description, link, paletteContent } = content;

    /* HOOKS */
    const width = useClientWidth();

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
                <CTALink className='text--norm' content={link} type='rainbow-shadow' />
            </div>
            <Palette content={paletteContent} 
                iconSize={width < BREAKPOINT_MEDIUM ? [ 70, 70 ] : undefined} />
        </section>
    )
}

export default AboutMe;