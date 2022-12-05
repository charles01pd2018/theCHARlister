// dependencies
import classNames from 'classnames';
// types
import type { IconProps } from './types';


const BlobIcon = ( {
    className='',
}: IconProps ) => {
    /* CLASSNAMES */
    const blobIconClasses = classNames(
        'blob-icon',
        className,
    );

    return (
        <div className={blobIconClasses}>

        </div>
    )
}

export default BlobIcon;