// dependencies
import classNames from 'classnames';
import Image from 'next/image';


/* TYPES */
export interface Content {

}

export interface Props {
    className?: string;
    content: Content;
}

const ProjectPreview = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const projectPreviewClasses = classNames(
        'project-preview',
        className,
    );

    return (
        <div className={projectPreviewClasses}>

        </div>
    );
}

export default ProjectPreview;