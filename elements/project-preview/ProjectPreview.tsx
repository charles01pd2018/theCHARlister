/**
 * 3D Hoverable: https://codepen.io/joshsalazar/details/GROEmRj
 * https://codepen.io/simeydotme/details/PrQKgo
 * Text appear hover: https://codepen.io/simeydotme/pen/abqYGWa
 */

// dependencies
import classNames from 'classnames';
import { ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// lib
import { useClientWidth, BREAKPOINT_EXTRA_SMALL } from 'lib';
// elements
import { StaggeredText } from 'elements';
// types
import type { Size, ImageLinkData, Colors } from 'types';


/* TYPES */
export interface Content {
    imageLink: ImageLinkData;
    color: Colors;
}

export interface Props {
    textChildren: ReactNode;
    children?: ReactNode;
    className?: string;
    content: Content;
    size?: Size;
}

const ProjectPreview = ( {
    textChildren,
    children,
    className='',
    content,
    size=[ 480, 360 ],
}: Props ) => {
    /* HOOKS */
    const clientWidth = useClientWidth();

    /* CONTENT */
    const { imageLink, color } = content;
    const { src, href, alt } = imageLink;
    const [ width, height ] = size;
    const actualHeight = clientWidth < BREAKPOINT_EXTRA_SMALL ? height / 1.3 : height;

    /* CLASSNAMES */
    const projectPreviewClasses = classNames(
        'project-preview',
        color,
        className,
    );

    return (
        <Link className={projectPreviewClasses} href={href}>
            <Image className='image'
                src={src} alt={alt || ''}
                width={width} height={actualHeight} />
            <div className='overlay' style={{
                height: actualHeight,
            }}>
                {children || ''}
                <p className='text-wrapper'>
                    <StaggeredText>
                        {textChildren}
                    </StaggeredText>
                </p>
            </div>
        </Link>
    );
}

export default ProjectPreview;