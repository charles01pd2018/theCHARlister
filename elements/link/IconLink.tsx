// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import { HTMLAttributes, forwardRef } from 'react';
// types
import type { Size, Colors, IconLinkData } from 'types';


/* TYPES */
export interface Content extends IconLinkData {
    title?: string
    color?: Colors;
}

export interface Props extends HTMLAttributes<HTMLAnchorElement> {
    className?: string;
    content: Content;
    iconSize?: Size;
    type: 'background' | 'fill' | 'pop-out';
    target?: '_blank' | '_self';
    // only applies when type is specified as 'active'
    isActive?: boolean;
}

const IconLink = forwardRef<HTMLAnchorElement, Props>( ( {
    className='',
    content,
    iconSize=[ 30, 30 ],
    type,
    isActive,
    ...rest
}, ref ) => {
    /* CONTENT */
    const { href, color, icon, title } = content;
    const { data, alt } = icon;
    const [ width, height ] = iconSize;

    /* CLASSNAMES */
    const iconLinkClasses = classNames(
        'icon-link',
        type,
        color,
        isActive ? 'active' : 'not-active',
        className,
    );

    return (
        <Link ref={ref} className={iconLinkClasses} href={href}
            title={title} aria-label={title} {...rest}>
            <Image src={data} alt={alt}
                width={width} height={height} />
        </Link>
    );
} );

export default IconLink;