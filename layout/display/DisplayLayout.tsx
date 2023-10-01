// dependencies
import { ReactNode, useEffect } from 'react';
// components
import { DisplayHeader, DisplayFooter, 
    IconsNavFooter, IconsNavSidebar } from 'components';
// lib
import { useClientWidth, BREAKPOINT_MEDIUM } from 'lib';
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
    const width = useClientWidth();

    useEffect( () => {
        document.body.classList.add( 'hide-scrollbar' );
    }, [] );

    return (
        <div className='display-layout-wrapper'>
            <DisplayHeader switchProps={displayHeaderSwitchProps} />
            <main className='display-layout'>
                {children}
            </main>
            <IconsNavSidebar activeIndex={activeIndex} />
            { width < BREAKPOINT_MEDIUM ? (
                <IconsNavFooter activeIndex={activeIndex} />
            ) : '' }
            <DisplayFooter />
        </div>
    );
}

export default DisplayLayout;