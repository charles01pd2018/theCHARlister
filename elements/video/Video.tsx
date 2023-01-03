// dependencies
import classNames from 'classnames';
import { HTMLAttributes } from 'react';


/* TYPES */
export interface Props extends HTMLAttributes<HTMLVideoElement> {
    className?: string;
}

const Video = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const videoClasses = classNames(
        'video',
        className,
    );

    return (
        <video className={videoClasses}>
        </video>
    );
}

export default Video;