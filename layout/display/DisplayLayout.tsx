// dependencies
import { ReactNode } from 'react';
// components
import { DisplayHeader, DisplayFooter, 
    IconsNavFooter, IconsNavSidebar } from 'components/layout';
// types
import type { DisplayHeaderSwitchProps } from 'components/types';


/* TYPES */
export interface Props {
    children: ReactNode;
    displayHeaderSwitchProps: DisplayHeaderSwitchProps;
}

const DisplayLayout = ( {
    children,
    displayHeaderSwitchProps,
}: Props ) => {

    return (
        <div className='display-layout-wrapper'>
            <DisplayHeader switchProps={displayHeaderSwitchProps} />
            <main className='display-layout'>
                {children}
            </main>
            <IconsNavSidebar activeItemIndex={0} />
            <IconsNavFooter activeItemIndex={0} />
            <DisplayFooter />
        </div>
    );
}

export default DisplayLayout;