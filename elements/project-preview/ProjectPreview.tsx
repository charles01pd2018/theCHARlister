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
    children: ReactNode;
    className?: string;
    content: Content;
    size?: Size;
}

const ProjectPreview = ( {
    children,
    className='',
    content,
    size=[ 480, 360 ],
}: Props ) => {
    /* CONTENT */
    const { imageLink, color } = content;
    const { src, href, alt } = imageLink;
    const [ width, height ] = size;

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
                width={width} height={height} />
            <div className='overlay' style={{
                height,
            }}>
                <div className='text-wrapper'>
                    <StaggeredText>
                        {children}
                    </StaggeredText>
                </div>
            </div>
        </Link>
    );
}

export default ProjectPreview;