// dependencies
import { useEffect, useRef, RefObject } from 'react';

/* TYPES */
export type Options = {
    enableEscape?: boolean;
    numRefs?: number;
    deps?: any[];
    conditional?: boolean;
}

/**
 * Returns refs that calls an onClick function everytime a click is made outside of that HTML Element.
 * Defaults to 1 ref returned - all refs are returned in an array.
 * numRefs only takes positive numbers.
 */
export const useClickOutsideRef = <T extends HTMLElement>( 
    onClick: () => void,
    options: Options={},
): RefObject<T>[] => {
    /* CONTENT */
    const { enableEscape=true, 
        numRefs=1,
        deps=[],
        conditional=true } = options;

    if ( numRefs < 1 ) {
        throw(`numRefs needs to be a positive number. You specified numRefs as ${numRefs}.`)
    }
    
    const refList: RefObject<T>[] = [];

    for ( let i=0; i < numRefs; i++ ) {
        refList.push( useRef<T>( null ) );
    }

    useEffect( () => {
        const clickOutsideFn = ( event: PointerEvent ): void => {
            // if the HTMLElement ref is clicked, isClicked will be false
            // by default, we assume the HTMLElement ref is clicked (false)
            let isClicked: boolean = false;

            for ( const ref of refList ) {
                // when you navigate to a new page, for some reason a nullish ref gets added to the beginning of the refs
                if ( !ref.current ) continue;
                if ( !ref.current ) isClicked = true;
                if ( ref.current.contains( event.target as T ) ) isClicked = true;
            }
            // the HTMLElement was not clicked - call the onClick function
            if ( !isClicked ) onClick();
        }

        if ( conditional ) {
            document.addEventListener( 'pointerdown', clickOutsideFn );

            return () => {
                document.removeEventListener( 'pointerdown', clickOutsideFn );
            }
        }
    }, deps );

    // escape key
    useEffect( () => {
        if ( !enableEscape ) {
            return;
        }

        const handleEscape = ( event: KeyboardEvent ) => {
            if ( event.key === 'Escape' ) {
                onClick();
            }
        }

        if ( conditional ) {
            document.addEventListener( 'keydown', handleEscape );

            return () => {
                document.removeEventListener( 'keydown', handleEscape );
            }
        }
    }, deps );

    return refList;
}