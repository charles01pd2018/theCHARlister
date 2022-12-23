// dependencies
import classNames from 'classnames';
// constants
import { PROJECT_LIST_CONTENT } from 'components/content';
// types
import type { ProjectPreviewContent } from 'elements/types';


/* TYPES */
export interface Content {
    items: ProjectPreviewContent[];
}

export interface Props {
    className?: string;
}

const ProjectList = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const projectListClasses = classNames(
        'project-list',
        className,
    );

    return (
        <section className={projectListClasses}>

        </section>
    );
}

export default ProjectList;