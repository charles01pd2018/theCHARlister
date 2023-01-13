// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';
// lib
import { useIsSafari } from 'lib';
// types
import type { Colors } from 'types';


/* TYPES */
export interface Props extends HTMLAttributes<HTMLAnchorElement> {
    children: ReactNode;
    className?: string;
    href: string;
    type: 'rainbow-shadow';
    borderColor?: Colors;
    isActive?: boolean;
}

const CTALink = ( {
    children,
    className='',
    href,
    type,
    borderColor,
    isActive,
    ...rest
}: Props ) => {
    /* HOOKS */
    const isSafari = useIsSafari();

    /* CLASSNAMES */
    const ctaLinkClasses = classNames(
        'cta-link',
        type,
        isActive && 'active',
        borderColor && `border--${borderColor}`,
        !isSafari && 'transition-filter',
        className,
    );

    return (
        <Link className={ctaLinkClasses} href={href} {...rest}>
            {children}
        </Link>
    );
}

export default CTALink;