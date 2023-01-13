// dependencies
import { useState, useEffect } from 'react';
import { useThrottledCallback } from 'use-debounce';

/**
 * Tracks whether the user last scrolled up or down.
 */
export const useScroll = ( throttleTime: number=150 ) => {
    /* HOOKS */
    const [ scrollPos, setScrollPos ] = useState<number>( 0 );
    const [ scrollDirection, setScrollDirection ] = useState<'up' | 'down' | null>( null );

    /* FUNCTIONS */
    const handleScroll = ( prevScrollPos: number ): void => {
        const currScrollPos = window.scrollY;
        const scrollDirection = currScrollPos >= prevScrollPos && currScrollPos > 0 ? 'down' : 'up';
        
        setScrollPos( currScrollPos );
        setScrollDirection( scrollDirection );
    }

    const throttleScroll = useThrottledCallback( 
        () => handleScroll( scrollPos ), 
        throttleTime,
    );

    useEffect( () => {
        document.addEventListener( 'scroll', throttleScroll );
        return () => {
            document.removeEventListener( 'scroll', throttleScroll );
        }
    }, [ scrollPos ] );

    return scrollDirection;
}