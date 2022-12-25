/**
 * https://codepen.io/oraclesnarky/pen/GYMmxb
 */
// dependencies
import { ReactNode } from 'react';
import classNames from 'classnames';


/* TYPES */
export interface Props {
    children: ReactNode;
    id: string;
    color: 'blue' | 'dark';
    className?: string;
}

const ProjectHighlights = ( {
    children,
    id,
    color,
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const projectHighlightsClasses = classNames(
        'project-highlights',
        color,
        className,
    );

    return (
        <section id={id} className={projectHighlightsClasses}>
            {children}
        </section>
    )
}

export default ProjectHighlights;