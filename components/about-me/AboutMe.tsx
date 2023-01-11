// dependencies
import classNames from 'classnames';
import { InView } from 'react-intersection-observer';
// elements
import { CTALink, Palette } from 'elements';
// content
import { ABOUT_ME_CONTENT } from 'components/content';
// lib
import { useClientWidth, BREAKPOINT_MEDIUM } from 'lib';
// types
import type { LinkData, InViewProps } from 'types';
import type { PaletteContent } from 'elements/types';


/* TYPES */
export interface Content {
    title: string;
    description: string;
    link: LinkData;
    paletteContent: PaletteContent;
}

export interface Props {
    id?: string;
    className?: string;
    content?: Content;
    inViewProps: InViewProps;
}

const AboutMe = ( {
    id='About-Me',
    className='',
    content=ABOUT_ME_CONTENT,
    inViewProps,
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
        <InView id={id} className={aboutMeClasses} as='section' {...inViewProps}>
            <div className='text-wrapper'>
                <h2 className='title big-heading'>{title}</h2>
                <p className='description text--lg' 
                    dangerouslySetInnerHTML={{ __html: description }} />
                <CTALink className='text--norm' content={link} type='rainbow-shadow' />
            </div>
            <Palette content={paletteContent} 
                iconSize={width < BREAKPOINT_MEDIUM ? [ 70, 70 ] : undefined} />
        </InView>
    )
}

export default AboutMe;