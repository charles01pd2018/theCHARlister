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
    type: 'lift-underline' | 'blue-background' | null;
    isActive?: boolean;
}

const NavLink = ( {
    className='',
    content,
    type,
    isActive,
    ...rest
}: Props ) => {
    /* CONTENT */
    const { href, text } = content;

    /* CLASSNAMES */
    const navLinkClasses = classNames(
        'nav-link',
        type,
        isActive && 'active',
        className,
    );

    return (
        <Link className={navLinkClasses} href={href} {...rest}>
            {text}
        </Link>
    );
}

export default NavLink;