// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
// types
import type { Headings, LinkData } from 'types';


/* TYPES */
export interface Props extends HTMLAttributes<HTMLAnchorElement> {
    className?: string;
    headingClassName?: string;
    content: LinkData;
    HeadingTag: Headings;
    target?: '_blank' | '_self';
}

const HeadingLink = ( {
    className='',
    headingClassName='',
    content,
    HeadingTag,
    target='_blank',
    ...rest
}: Props ) => {
    /* CONTENT */
    const { text, href } = content;

    /* CLASSNAMES */
    const headingLinkClasses = classNames(
        'heading-link',
        className,
    );

    return (
        <Link className={headingLinkClasses} href={href} target={target}
            {...rest}>
            <HeadingTag className={headingClassName}>
                {text}
            </HeadingTag>
        </Link>
    );
}

export default HeadingLink;