// dependencies
import classNames from 'classnames';
import Link from 'next/link';
// elements
import { SVG } from 'elements';
// types
import type { IconTextLinkData, Size, Colors } from 'types';


/* TYPES */
export interface Content extends IconTextLinkData {
    color: Colors;
}

export interface Props {
    className?: string;
    content: Content;
    iconSize?: Size;
    isActive?: boolean;
    onClick?: () => void;
}

const IconTextLink = ( {
    className='',
    content,
    iconSize=[ 17, 17 ],
    isActive,
    onClick,
}: Props ) => {
    /* CONTENT */
    const { href, icon, text, color } = content;
    const [ width, height ] = iconSize;

    /* CLASSNAMES */
    const iconTextLinkClasses = classNames(
        'icon-text-link',
        color,
        isActive && 'active',
        className,
    );

    const iconWrapperClasses = classNames(
        'icon-wrapper',
        color,
    );

    return (
        <Link className={iconTextLinkClasses} href={href}
            onClick={onClick}>
            <div className={iconWrapperClasses}>
                <SVG {...icon} width={width} height={height} />
            </div>
            <span className='text text--norm'>{text}</span>
        </Link>
    );
}

export default IconTextLink;