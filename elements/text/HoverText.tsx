// dependencies
import { ReactNode } from 'react';
import classNames from 'classnames';
// types
import type { Colors } from 'types';


/* TYPES */
export interface Props {
    className?: string;
    children: ReactNode;
    color?: Colors;
}

const HoverText = ( {
    children,
    className='',
    color='orange',
}: Props ) => {
    /* CLASSNMAES */
    const textHighlightClasses = classNames(
        'hover-text',
        color,
        className,
    );

    return (
        <span className={textHighlightClasses}>{children}</span>
    );
}

export default HoverText;