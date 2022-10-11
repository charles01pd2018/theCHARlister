// dependencies
import { ReactNode } from 'react';


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