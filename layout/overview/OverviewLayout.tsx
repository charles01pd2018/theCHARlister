// dependencies
import { ReactNode } from 'react';
// components
import { DisplayHeader, DisplayFooter } from 'components/layout';


/* TYPES */
export interface Props {
    children: ReactNode;
}

const DisplayLayout = ( {
    children,
}: Props ) => {
    return (
        <>
            <DisplayHeader />
            <main className='overview-layout'>
                {children}
            </main>
            <DisplayFooter />
        </>
    );
}

export default DisplayLayout;