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

const ProjectSection = ( {
    children,
    id,
    color,
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const projectSectionClasses = classNames(
        'project-section',
        color,
        className,
    );

    return (
        <section id={id} className={projectSectionClasses}>
            {children}
        </section>
    )
}

export default ProjectSection;