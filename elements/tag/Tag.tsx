// dependencies
import classNames from 'classnames';
import { ReactNode } from 'react';


/* TYPES */
export interface Props {
    children: ReactNode;
    className?: string;
}

const Tag = ( {
    children,
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const tagClasses = classNames(
        'tag',
        className,
    );

    return (
        <div className={tagClasses}>
            {children}
        </div>
    );
}

export default Tag;