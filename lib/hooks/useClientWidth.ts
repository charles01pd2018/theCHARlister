// dependencies
import { useState, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';


/**
 * Tracks the width of the window.
 * Useful for appling conditional styles or props in JSX
 */
export const useClientWidth = ( debounceTime: number=100 ) => {
    /* HOOKS */
    const [ width, setWidth ] = useState<number>( 0 );

    /* FUNCTIONS */
    const handleWindowResize = useDebouncedCallback( () => {
        setWidth( window.innerWidth );
    }, debounceTime );

    useEffect( () => {
        setWidth( window.innerWidth );
        window.addEventListener( 'resize', handleWindowResize );

        return () => {
            window.removeEventListener( 'resize', handleWindowResize );
        }
    }, [] );

    return width;
}