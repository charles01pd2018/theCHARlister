// dependencies
import classNames from 'classnames';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
// elements
import { SVG } from 'elements';
// types
import type { Size, Colors, IconLink } from 'types';


/* TYPES */
export interface Content extends IconLink {
    title?: string
    color?: Colors;
}

export interface Props extends HTMLAttributes<HTMLAnchorElement> {
    className?: string;
    content: Content;
    iconSize?: Size;
    onClick?: () => void;
    type: 'background' | 'fill' | 'pop-out';
    target?: '_blank' | '_self';
    // only applies when type is specified as 'active'
    isActive?: boolean;
}

const LinkIconButton = ( {
    className='',
    content,
    iconSize=[ 30, 30 ],
    onClick,
    target,
    type,
    isActive,
    ...rest
}: Props ) => {
    /* CONTENT */
    const { href, color, icon, title } = content;
    const { data, alt } = icon;
    const [ width, height ] = iconSize;

    /* CLASSNAMES */
    const linkIconButtonClasses = classNames(
        'link-icon-button',
        type,
        color,
        isActive ? 'active' : 'not-active',
        className,
    );

    return (
        <Link className={linkIconButtonClasses} href={href} onClick={onClick}
            title={title} aria-label={title} target={target} {...rest}>
            <SVG data={data} alt={alt}
                width={width} height={height} />
        </Link>
    );
}

export default LinkIconButton;