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