// dependencies
import { ReactNode } from 'react';
// components
import { OverviewHeader, DisplayFooter } from 'components';
// elements
import { Breadcrumbs } from 'elements';
// types
import type { BreadcrumbsContent } from 'elements/types';
import type { ActivePage } from 'types';


/* TYPES */
export interface Content {
    breadcrumbsContent: BreadcrumbsContent;
}

export interface Props {
    children: ReactNode;
    content: Content;
    activePage?: ActivePage;
}

const DisplayLayout = ( {
    children,
    content,
    activePage,
}: Props ) => {
    /* CONTENT */
    const { breadcrumbsContent } = content;

    return (
        <>
            <OverviewHeader activePage={activePage} />
            <main className='overview-layout container'>
                <Breadcrumbs content={breadcrumbsContent} />
                {children}
            </main>
            <DisplayFooter activePage={activePage} />
        </>
    );
}

export default DisplayLayout;