// dependencies
import classNames from 'classnames';
import { ReactNode } from 'react';
// lib
import { useScroll } from 'lib';


/* TYPES */
export interface Props {
    children: ReactNode;
    className?: string;
}

const DynamicHeader = ( {
    children,
    className='',
}: Props ) => {
    /* HOOKS */
    const scrollDirection = useScroll();

    /* CLASSNAMES */
    const dynamicHeaderClasses = classNames(
        'header',
        'dynamic-header',
        `${scrollDirection === 'down' ? 'hide' : ''}`,
        className,
    );

    return (
        <header className={dynamicHeaderClasses}>
            {children}
        </header>
    );
}

export default DynamicHeader;