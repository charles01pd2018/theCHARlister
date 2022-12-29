// dependencies
import classNames from 'classnames';
// elements
import { ProjectPreview } from 'elements';
// constants
import { PROJECT_LIST_CONTENT } from 'components/content';


/* TYPES */
interface Item {
    
}

export interface Content {
    items: ProjectPreviewContent[];
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
                <li className='project'>
                    <ProjectPreview iframeSrc='https://www.writebeemy.com/' href=''>
                        <h1>beemy</h1>
                        <p>One click blog post publishing with built-in SEO and a rich editor experience.</p>
                    </ProjectPreview>
                </li>
            </ul>
        </section>
    );
}

export default ProjectList;