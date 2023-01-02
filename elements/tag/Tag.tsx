// dependencies
import classNames from 'classnames';
import { ReactNode } from 'react';


/* TYPES */
export interface Props {
    children: ReactNode;
    className?: string;
    WrapperTag?: 'div' | 'li';
}

const Tag = ( {
    children,
    className='',
    WrapperTag='li',
}: Props ) => {
    /* CLASSNAMES */
    const tagClasses = classNames(
        'tag',
        className,
    );

    return (
        <WrapperTag className={tagClasses}>
            {children}
        </WrapperTag>
    );
}

export default Tag;