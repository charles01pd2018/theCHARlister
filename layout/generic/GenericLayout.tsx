// dependencies
import { ReactNode } from 'react';
// components
import { OverviewHeader, DisplayFooter } from 'components';
// types
import type { ActivePage } from 'types';


/* TYPES */
export interface Props {
    children: ReactNode;
    activePage?: ActivePage;
}

const GenericLayout = ( {
    children,
    activePage,
}: Props ) => {
    return (
        <>
            <OverviewHeader activePage={activePage} />
            <main className='generic-layout'>
                {children}
            </main>
            <DisplayFooter activePage={activePage} />
        </>
    );
}

export default GenericLayout;