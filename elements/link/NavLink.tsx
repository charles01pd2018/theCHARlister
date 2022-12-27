// dependencies
import classNames from 'classnames';
import Link from 'next/link';
// types
import type { LinkData } from 'types';


/* TYPES */
export interface Props {
    className?: string;
    content: LinkData;
    type: 'lift-underline' | 'arrow' | 'blue-background' | null;
    isActive?: boolean;
}

const NavLink = ( {
    className='',
    content,
    type,
    isActive,
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
        <Link className={navLinkClasses} href={href}>
            {text}
        </Link>
    );
}

export default NavLink;