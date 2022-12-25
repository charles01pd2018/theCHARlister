// dependencies
import classNames from 'classnames';
import { useRef, ReactNode } from 'react';
// elements
import { Tooltip, SVG } from 'elements';
// types
import type { IconData, Size, Colors } from 'types';
import type { TooltipProps } from 'elements/types';


/* TYPES */
export interface Content {
    icon: IconData;
    color?: Colors;
}

export interface Props {
    children: ReactNode;
    id: string;
    className?: string;
    content: Content;
    iconSize?: Size;
    tooltipProps?: Partial<Omit<TooltipProps, 'children' | 'id' | 'color'>>;
}

const TooltipIcon = ( {
    children,
    id,
    className='',
    content,
    iconSize=[ 60, 60 ],
    tooltipProps={},
}: Props ) => {
    /* CONTENT */
    const { icon, color } = content;
    const { data, alt } = icon;
    const [ width, height ] = iconSize;
    const tooltipId = `${id}-tooltip`;

    /* HOOKS */
    const ref = useRef<HTMLDivElement>( null );

    /* CLASSNAMES */
    const tooltipIconClasses = classNames(
        'tooltip-icon',
        className,
    );

    return (
        <div ref={ref} className={tooltipIconClasses}>
            <SVG className='icon'
                data={data} alt={alt}
                width={width} height={height}
                aria-labelledby={tooltipId} />
            <Tooltip id={tooltipId} ref={ref}
                position='top-left' includePointer={false}
                animateType='pop' {...tooltipProps} color={color}>
                {children}
            </Tooltip>
        </div>
    );
}

export default TooltipIcon;