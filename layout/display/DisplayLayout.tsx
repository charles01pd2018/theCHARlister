// dependencies
import { ReactNode } from 'react';
// components
import { ContactFooter, IconsNavFooter, IconsNavSidebar } from 'components/layout';


/* TYPES */
export interface Props {
    children: ReactNode;
}

const DisplayLayout = ( {
    children
}: Props ) => {

    return (
        <main className='display-layout'>
            {children}
        </main>
    );
}

export default DisplayLayout;