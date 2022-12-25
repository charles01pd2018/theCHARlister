// dependencies
import classNames from 'classnames';
import { HTMLAttributes } from 'react';


/* TYPES */
export interface Props extends HTMLAttributes<HTMLObjectElement> {
    className?: string;
    data: string;
    alt: string;
    width: number | string;
    height: number | string;
    type?: 'image/svg+xml';
};

const SVG = ( {
    className='',
    data, // path to SVG
    alt,
    width,
    height,
    type='image/svg+xml',
    ...rest
}: Props ) => {
    /* CLASSNAMES */
    const svgClasses = classNames(
        'svg',
        className,
    );

    return (
        <object className={svgClasses}
            width={width} height={height}
            data={data} type={type} {...rest}>
            {alt}
        </object>
    );
}

export default SVG;