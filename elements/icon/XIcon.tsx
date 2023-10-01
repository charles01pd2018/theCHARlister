// dependencies
import classNames from 'classnames';
import Image from 'next/image';
// types
import type { BaseIconProps } from './types';


const XIcon = ( {
    className='',
    iconSize=[ 23, 23 ],
}: BaseIconProps ) => {
    /* CONTENT */
    const [ width, height ] = iconSize;

    /* CLASSNAMES */
    const xIconClasses = classNames(
        'x-icon',
        className,
    );

    return (
        <Image className={xIconClasses}
            src='/static/icons/x.svg' alt='X icon'
            width={width} height={height} />
    )
}

export default XIcon;