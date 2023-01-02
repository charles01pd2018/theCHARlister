// dependencies
import classNames from 'classnames';
// elements
import { ProjectPreview } from 'elements';
// constants
import { PROJECT_LIST_CONTENT } from 'components/content';
import type { ProjectPreviewContent } from 'elements/types';


/* TYPES */
interface Item {
    title: string;
    description: string;
    projectPreviewContent: ProjectPreviewContent;
}

export interface Content {
    items: Item[];
}

export interface Props {
    className?: string;
    content?: Content;
}

const ProjectList = ( {
    className='',
    content=PROJECT_LIST_CONTENT,
}: Props ) => {
    /* CONTENT */
    const { items } = content;

    /* CLASSNAMES */
    const projectListClasses = classNames(
        'project-list',
        className,
    );

    return (
        <section className={projectListClasses}>
            <ul className='projects-wrapper'>
                {
                    items.map( ( { title, description, projectPreviewContent } ) => (
                        <li className='project' key={title}>
                            <ProjectPreview content={projectPreviewContent}>
                                <h3 className='h1'>{title}</h3>
                                <p>{description}</p>
                            </ProjectPreview>
                        </li>
                    ) )
                }
            </ul>
        </section>
    );
}

export default ProjectList;