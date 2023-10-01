// dependencies
import classNames from 'classnames';
import { HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// types
import type { IconData, Size } from 'types';


/* TYPES */
export interface Content {
    logo: IconData;
    href: string;
    ariaLabel: string;
}

export interface Props extends HTMLAttributes<HTMLAnchorElement> {
    className?: string;
    content: Content;
    target?: '_blank' | '_self';
    logoSize?: Size;
    shareIconSize?: Size;
}

const ProjectLink = ( {
    className='',
    content,
    target='_blank',
    logoSize=[ 60, 60 ],
    shareIconSize=[ 20, 20 ],
    ...rest
}: Props ) => {
    /* CONTENT */
    const { logo, href, ariaLabel } = content;
    const { data, alt } = logo;
    const [ width, height ] = logoSize;

    /* CLASSNAMES */
    const projectLinkClasses = classNames(
        'project-link',
        className,
    );

    return (
        <Link className={projectLinkClasses} href={href} 
            target={target} aria-label={ariaLabel} title={ariaLabel} {...rest}>
            <Image src={data} alt={alt} 
                width={width} height={height} />
        </Link>
    );
}

export default ProjectLink;