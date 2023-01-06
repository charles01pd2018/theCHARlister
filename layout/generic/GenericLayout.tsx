// dependencies
import { ReactNode } from 'react';
import classNames from 'classnames';
// components
import { OverviewHeader, DisplayFooter } from 'components';
// types
import type { ActivePage } from 'types';


/* TYPES */
export interface Props {
    children: ReactNode;
    className?: string;
    activePage?: ActivePage;
}

const GenericLayout = ( {
    children,
    className='',
    activePage,
}: Props ) => {
    /* CLASSNAMES */
    const genericLayoutClasses = classNames(
        'generic-layout',
        className,
    );

    return (
        <>
            <OverviewHeader activePage={activePage} />
            <main className={genericLayoutClasses}>
                {children}
            </main>
            <DisplayFooter activePage={activePage} />
        </>
    );
}

export default GenericLayout;