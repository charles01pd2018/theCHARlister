// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';
// types
import type { LinkData } from 'types';


/* TYPES */
export interface Props extends HTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    className?: string;
    href: string;
    type: 'rainbow-shadow';
    isActive?: boolean;
}

const CTALink = ( {
    children,
    className='',
    href,
    type,
    isActive,
    ...rest
}: Props ) => {
    /* CLASSNAMES */
    const ctaLinkClasses = classNames(
        'cta-link',
        type,
        isActive && 'active',
        className,
    );

    return (
        <Link className={ctaLinkClasses} href={href} {...rest}>
            {children}
        </Link>
    );
}

export default CTALink;