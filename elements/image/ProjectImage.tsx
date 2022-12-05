// dependencies
import classNames from 'classnames';
import Image from 'next/image';


export interface Props {
    className?: string;
}

const ProjectImage = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const projectImageClasses = classNames(
        'project-image',
        className,
    );

    return (
        <div className={projectImageClasses}>

        </div>
    )
}

export default ProjectImage;