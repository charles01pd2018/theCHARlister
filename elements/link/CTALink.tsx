// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
// types
import type { LinkData } from 'types';


/* TYPES */
export interface Props extends HTMLAttributes<HTMLAnchorElement> {
    className?: string;
    content: LinkData;
    type: 'rainbow-shadow';
    isActive?: boolean;
}

const CTALink = ( {
    className='',
    content,
    type,
    isActive,
    ...rest
}: Props ) => {
    /* CONTENT */
    const { href, text } = content;

    /* CLASSNAMES */
    const ctaLinkClasses = classNames(
        'cta-link',
        type,
        isActive && 'active',
        className,
    );

    return (
        <Link className={ctaLinkClasses} href={href} {...rest}>
            {text}
        </Link>
    );
}

export default CTALink;