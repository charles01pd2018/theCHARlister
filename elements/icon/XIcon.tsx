// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';
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
        <SVG className={xIconClasses}
            data='static/icons/x.svg' alt='X icon'
            width={width} height={height} />
    )
}

export default XIcon;