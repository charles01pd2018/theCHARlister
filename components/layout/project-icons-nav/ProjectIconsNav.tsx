// dependencies
import classNames from 'classnames';
// types
import type { IconData } from 'types';


/* TYPES */
export interface Content {
    icons: IconData;
}

export interface Props {
    id: string;
    className?: string;
    content: Content;
    Tag: 'aside' | 'footer';
}

const ProjectIconsNav = ( {
    id,
    className='',
    content,
    Tag,
}: Props ) => {
    /* CONTENT */
    const { icons } = content;

    /* CLASSNAMES */
    const projectIconsNavClasses = classNames(
        'project-icons-nav-wrapper',
        className,
    );

    return (
        <Tag id={id} className={projectIconsNavClasses}>
            <nav className='project-icons-nav'>

            </nav>
        </Tag>
    )
}

export default ProjectIconsNav;