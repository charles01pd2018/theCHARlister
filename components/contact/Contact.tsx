/**
 * 3D Text - https://codepen.io/zitrusfrisch/pen/kBNEag
 *  https://codepen.io/shubniggurath/pen/OoYQBJ
 * Text Highlight - https://github.com/pofoo/react-elements/blob/main/elements/text/TextHighlight.tsx
 *  https://github.com/pofoo/react-elements/blob/main/styles/elements/text/_TextHighlight.scss
 */
// dependencies
import classNames from 'classnames';
import { InView } from 'react-intersection-observer';
// content
import { CONTACT_CONTENT } from 'components/content';
// types
import type { InViewProps } from 'types';


/* TYPES */
export interface Content {

}

export interface Props {
    id?: string;
    className?: string;
    content?: Content;
    inViewProps: InViewProps;
}

const Contact = ( {
    id='Contact',
    className='',
    content,
    inViewProps,
}: Props ) => {
    /* CLASSNAMES */
    const contactClasses = classNames(
        'contact',
        className,
    );

    return (
        <InView id={id} className={contactClasses} as='section' {...inViewProps}>

        </InView>
    );
}

export default Contact;