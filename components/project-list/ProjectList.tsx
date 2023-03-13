// dependencies
import classNames from 'classnames';
// elements
import { ProjectPreview, TagList, StackedIcons } from 'elements';
// constants
import { PROJECT_LIST_CONTENT } from 'components/content';
// types
import type { ProjectPreviewContent, TagListContent, 
    StackedIconsContent } from 'elements/types';


/* TYPES */
interface Item {
    title: string;
    description: string;
    projectPreviewContent: ProjectPreviewContent;
    tagListContent: TagListContent;
    stackedIconsContent: StackedIconsContent;
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
                    items.map( ( { 
                        title, 
                        description, 
                        projectPreviewContent,
                        tagListContent,
                        stackedIconsContent,
                    } ) => (
                        <li className='project' key={title}>
                            <ProjectPreview content={projectPreviewContent} textChildren={
                                <>
                                    <h3 className='h1'>{title}</h3>
                                    <p>{description}</p>
                                </>
                            }>
                                <div className='top-strip'>
                                    <TagList className='text--xxxs' content={tagListContent} />
                                    <StackedIcons content={stackedIconsContent} />
                                </div>
                            </ProjectPreview>
                        </li>
                    ) )
                }
            </ul>
        </section>
    );
}

export default ProjectList;