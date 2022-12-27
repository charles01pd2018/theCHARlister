// dependencies
import { ReactNode } from 'react';
// components
import { OverviewHeader, DisplayFooter } from 'components';
// types
import type { BreadcrumbsContent } from 'elements/types';

/* TYPES */
export interface Content {
    breadcrumbsContent: BreadcrumbsContent;
}

export interface Props {
    children: ReactNode;
    content: Content;
    activePage?: 'Projects' | 'Experience' | 'References';
}

const DisplayLayout = ( {
    children,
    content,
    activePage,
}: Props ) => {
    /* CONTENT */
    // const { breadCrumbsContent } = content;

    return (
        <>
            <OverviewHeader />
            <main className='overview-layout container'>
                {children}
            </main>
            <DisplayFooter activePage={activePage} />
        </>
    );
}

export default DisplayLayout;