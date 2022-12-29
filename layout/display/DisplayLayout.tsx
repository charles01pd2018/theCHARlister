// dependencies
import { ReactNode } from 'react';
// components
import { DisplayHeader, DisplayFooter, 
    IconsNavFooter, IconsNavSidebar } from 'components';
// types
import type { DisplayHeaderSwitchProps } from 'components/types';


/* TYPES */
export interface Props {
    children: ReactNode;
    activeIndex: number;
    displayHeaderSwitchProps: DisplayHeaderSwitchProps;
}

const DisplayLayout = ( {
    children,
    activeIndex,
    displayHeaderSwitchProps,
}: Props ) => {

    return (
        <div className='display-layout-wrapper'>
            <DisplayHeader switchProps={displayHeaderSwitchProps} />
            <main className='display-layout'>
                {children}
            </main>
            <IconsNavSidebar activeIndex={activeIndex} />
            <IconsNavFooter activeIndex={activeIndex} />
            <DisplayFooter />
        </div>
    );
}

export default DisplayLayout;