// dependencies
import classNames from 'classnames';
import Link from 'next/link';
// elements
import { SVG } from 'elements';
// types
import type { Size, Colors, IconData } from 'types';


/* TYPES */
export interface Content {
    icon: IconData;
    href: string;
    color: Colors;
}

export interface Props {
    className?: string;
    content: Content;
    iconSize?: Size;
    onClick?: () => void;
    type: 'background' | 'fill';
    // only applies when type is specified as 'active'
    isActive?: boolean;
}

const LinkIconButton = ( {
    className='',
    content,
    iconSize=[ 30, 30 ],
    onClick,
    type,
    isActive,
}: Props ) => {
    /* CONTENT */
    const { href, color, icon } = content;
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
        // TODO - look into passing classNames
        // would prefer to just pass className into <Link>
        <div className={linkIconButtonClasses}>
            <Link href={href} onClick={onClick}>
                <SVG data={data} alt={alt}
                    width={width} height={height} />
            </Link>
        </div>
    );
}

export default LinkIconButton;