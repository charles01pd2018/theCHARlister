// dependencies
import classNames from 'classnames';
// lib
import { COLORS } from 'lib';
// types
import type { IconProps } from './types';


const BlobIcon = ( {
    className='',
    color,
}: IconProps ) => {
    /* CONTENT */
    const fill = COLORS[ color ][ 4 ];

    /* CLASSNAMES */
    const blobIconClasses = classNames(
        'blob-icon',
        className,
    );

    return (
        <svg className={blobIconClasses} width={3000} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill={fill}
                d="M48.2,-41.8C60.8,-22.7,68.1,-2.8,64.9,16.3C61.7,35.3,48.1,53.4,31.8,58.2C15.6,62.9,-3.2,54.4,-24.2,45.9C-45.1,37.5,-68.2,29.1,-76.1,12.3C-84,-4.6,-76.8,-30,-61.6,-49.8C-46.4,-69.5,-23.2,-83.5,-2.7,-81.4C17.8,-79.3,35.7,-61,48.2,-41.8Z" 
                transform="translate(100 100)" />
        </svg>
    )
}

export default BlobIcon;