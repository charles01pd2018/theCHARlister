/**
 * 3D Hoverable: https://codepen.io/joshsalazar/details/GROEmRj
 * https://codepen.io/simeydotme/details/PrQKgo
 * Text appear hover: https://codepen.io/simeydotme/pen/abqYGWa
 */

// dependencies
import classNames from 'classnames';
import { ReactNode } from 'react';
import Link from 'next/link';
// elements
import { StaggeredText } from 'elements';
// types
import type { Size } from 'types';


/* TYPES */
export interface Props {
    children: ReactNode;
    className?: string;
    iframeSrc: string;
    href: string;
    size?: Size;
}

const ProjectPreview = ( {
    children,
    className='',
    iframeSrc,
    size=[ 500, 500 ],
    href,
}: Props ) => {
    /* CONTENT */
    const [ width, height ] = size;

    /* CLASSNAMES */
    const projectPreviewClasses = classNames(
        'project-preview',
        className,
    );

    return (
        <Link className={projectPreviewClasses} href={href}>
            <iframe className='iframe'
                src={iframeSrc}
                width={width} height={height}
                tabIndex={-1} />
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