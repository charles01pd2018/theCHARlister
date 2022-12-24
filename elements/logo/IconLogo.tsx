// dependencies
import classNames from 'classnames';
// elements
import { SVG } from 'elements';
// types
import type { Size } from 'types';


/* TYPES */
export interface Props {
    className?: string;
    type?: 'backgrond' | 'regular';
    iconSize?: Size;
}

const IconLogo = ( {
    className='',
    type='backgrond',
    iconSize=[ 50, 50 ],
}: Props ) => {
    /* CONTENT */
    const [ width, height ] = iconSize;

    /* CLASSNAMES */
    const iconLogoClasses = classNames(
        'icon-logo',
        className,
    );

    return (
        <SVG className={iconLogoClasses}
            data={`static/icons/${type === 'backgrond' ? 'background-' : ''}logo.svg`}
            alt='theCHARlister pofo logo'
            width={width} height={height} />
    );
}

export default IconLogo;