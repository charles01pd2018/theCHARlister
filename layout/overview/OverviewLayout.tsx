// dependencies
import { ReactNode } from 'react';
// components
import { OverviewHeader, DisplayFooter } from 'components/layout';


/* TYPES */
export interface Props {
    children: ReactNode;
}

const DisplayLayout = ( {
    children,
}: Props ) => {
    return (
        <>
            <OverviewHeader />
            <main className='overview-layout container'>
                {children}
            </main>
            <DisplayFooter />
        </>
    );
}

export default DisplayLayout;