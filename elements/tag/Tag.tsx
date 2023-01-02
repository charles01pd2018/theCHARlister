// dependencies
import classNames from 'classnames';
import { ReactNode } from 'react';
// types
import type { Colors } from 'types';


/* TYPES */
export interface ColorTag {
    text: string;
    color: Colors;
}

export interface Props {
    children: ReactNode;
    color: Colors;
    className?: string;
    WrapperTag?: 'div' | 'li';
}

const Tag = ( {
    children,
    color,
    className='',
    WrapperTag='li',
}: Props ) => {
    /* CLASSNAMES */
    const tagClasses = classNames(
        'tag',
        color,
        className,
    );

    return (
        <WrapperTag className={tagClasses}>
            {children}
        </WrapperTag>
    );
}

export default Tag;