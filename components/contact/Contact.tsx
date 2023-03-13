// dependencies
import classNames from 'classnames';
import { InView } from 'react-intersection-observer';
import Link from 'next/link';
// content
import { CONTACT_CONTENT } from 'components/content';
// elements
import { HoverText } from 'elements';
// types
import type { InViewProps } from 'types';


/* TYPES */
export interface Content {
    title: string;
    email: string;
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
    content=CONTACT_CONTENT,
    inViewProps,
}: Props ) => {
    /* CONTENT */
    const { title, email } = content;

    /* CLASSNAMES */
    const contactClasses = classNames(
        'contact',
        'container',
        className,
    );

    return (
        <InView id={id} className={contactClasses} as='section' {...inViewProps}>
            <h3 className='title h1'>{title}</h3>
            <HoverText className='email-wrapper'>
                <Link className='email text--norm' href={`mailto:${email}`}>
                    {email}
                </Link>
            </HoverText>
        </InView>
    );
}

export default Contact;