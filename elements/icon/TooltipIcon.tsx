// dependencies
import classNames from 'classnames';
// elements
import { Tooltip, SVG } from 'elements';
// types
import type { IconData, Size, Colors } from 'types';


/* TYPES */
export interface Content {
    icon: IconData;
    tooltip: string;
    color: Colors;
}

export interface Props {
    className?: string;
    content: Content;
    iconSize?: Size;
}

const TooltipIcon = ( {
    className='',
    content,
    iconSize=[ 33, 33 ],
}: Props ) => {
    /* CONTENT */
    const { icon, tooltip } = content;
    const { data, alt } = icon;
    const [ width, height ] = iconSize;

    /* CLASSNAMES */
    const tooltipIconClasses = classNames(
        'tooltip-icon',
        className,
    );

    return (
        <div className={tooltipIconClasses}>
            <SVG className='icon'
                data={data} alt={alt}
                width={width} height={height} />
        </div>
    );
}

export default TooltipIcon;