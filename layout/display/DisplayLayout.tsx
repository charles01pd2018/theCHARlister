// dependencies
import { ReactNode } from 'react';
// components
import { DisplayHeader, ContactFooter, 
    IconsNavFooter, IconsNavSidebar } from 'components/layout';


/* TYPES */
export interface Props {
    children: ReactNode;
}

const DisplayLayout = ( {
    children
}: Props ) => {

    return (
        <div className='display-layout-wrapper'>
            <DisplayHeader />
            <main className='display-layout'>
                {children}
            </main>
            <IconsNavSidebar activeItemIndex={0} />
            <IconsNavFooter activeItemIndex={0} />
            <ContactFooter />
        </div>
    );
}

export default DisplayLayout;