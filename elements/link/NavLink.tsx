// dependencies
import classNames from 'classnames';
import Link from 'next/link';
// types
import type { LinkData } from 'types';


/* TYPES */
export interface Props {
    className?: string;
    content: LinkData;
}

const NavLink = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { href, text } = content;

    /* CLASSNAMES */
    const navLinkClasses = classNames(
        'nav-link',
        className,
    );

    return (
        <Link className={navLinkClasses} href={href}>
            {text}
        </Link>
    );
}

export default NavLink;