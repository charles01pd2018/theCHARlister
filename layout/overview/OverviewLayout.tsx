// dependencies
import { ReactNode } from 'react';
import classNames from 'classnames';
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
    className?: string;
    content: Content;
    activePage?: ActivePage;
}

const DisplayLayout = ( {
    children,
    className='',
    content,
    activePage,
}: Props ) => {
    /* CONTENT */
    const { breadcrumbsContent } = content;

    /* CLASSNAMES */
    const overviewLayoutClasses = classNames(
        'overview-layout',
        'container',
        className,
    );

    return (
        <>
            <OverviewHeader activePage={activePage} />
            <main className={overviewLayoutClasses}>
                <Breadcrumbs content={breadcrumbsContent} />
                {children}
            </main>
            <DisplayFooter activePage={activePage} />
        </>
    );
}

export default DisplayLayout;