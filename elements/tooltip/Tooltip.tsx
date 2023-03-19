// dependencies
import { ReactNode, useEffect, forwardRef, useState,
    useCallback, RefObject, useRef } from 'react';
import classNames from 'classnames';
// types
import type { Colors } from 'types';


/* TYPES */
export type TooltipPositions = 'top' | 'bottom' | 'right' | 'left' | 
                                'bottom-left' | 'bottom-right' | 
                                'top-left' | 'top-right';

export interface Props {
    children: ReactNode;
    id: string;
    className?: string;
    animateType?: 'slide' | 'pop';
    initialActive?: boolean;
    position?: TooltipPositions
    includePointer?: boolean;
    tooltipPadding?: number;
    color?: Colors,
}

interface Styles {
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
}

/* FUNCTIONS */
interface GetTooltipStylesInput {
    ref:  RefObject<HTMLElement>;
    tooltipRef: RefObject<HTMLDivElement>;
    position: TooltipPositions;
    tooltipPadding: number;
}
const getTooltipStyles = ( input: GetTooltipStylesInput ) => {
    const { ref, tooltipRef, position, tooltipPadding } = input;
    const tooltipRect = tooltipRef.current?.getBoundingClientRect();
    const refRect = ref.current?.getBoundingClientRect();

    if ( tooltipRect && refRect ) {
        // TODO - simplify this
        if ( position === 'top' ) {
            return {
                left: `${refRect.width / 2 - tooltipRect.width / 2}px`,
                bottom: `${refRect.height + tooltipPadding}px`,
            }
        }
        else if ( position === 'bottom' ) {
            return {
                left: `${refRect.width / 2 - tooltipRect.width / 2}px`,
                top: `${refRect.height + tooltipPadding}px`,
            }
        }
        else if ( position === 'left' ) {
            return {
                top: `${refRect.height / 2 - tooltipRect.height / 2}px`,
                right: `${refRect.width + tooltipPadding}px`,
            }
        }
        else if ( position === 'right' ) {
            return {
                top: `${refRect.height / 2 - tooltipRect.height / 2}px`,
                left: `${refRect.width + tooltipPadding}px`,
            }
        }
        else if ( position === 'bottom-left' ) {
            return {
                left: `${refRect.width / 2 - tooltipRect.width}px`,
                top: `${refRect.height + tooltipPadding}px`,
            }
        }
        else if ( position === 'bottom-right' ) {
            return {
                left: `${refRect.width / 2}px`,
                top: `${refRect.height + tooltipPadding}px`,
            }
        }
        else if ( position === 'top-left' ) {
            return {
                right: `${refRect.width / 2}px`,
                bottom: `${refRect.height + tooltipPadding}px`,
            }
        }
        else if ( position === 'top-right' ) {
            return {
                left: `${refRect.width / 2}px`,
                bottom: `${refRect.height + tooltipPadding}px`,
            }
        }
    }


    return {};
}

const Tooltip = forwardRef<HTMLElement, Props>( ( {
    children,
    id,
    className='',
    animateType='slide',
    initialActive=false,
    position='left',
    includePointer=true,
    tooltipPadding=7,
    color,
}, ref ) => {
    /* HOOKS */
    const tooltipRef = useRef<HTMLDivElement>( null );
    const [ isActive, setIsActive ] = useState<boolean>( initialActive );
    const [ tooltipStyles, setTooltipStyles ] = useState<Styles>( {} );

    /* FUNCTIONS */
    const handlePointerOver = useCallback( () => {
        setIsActive( true );
    }, [ isActive ] );

    const handlePointerLeave = useCallback( () => {
        setIsActive( false );
    }, [ isActive ] );

    /* CLASSNAMES */
    const tooltipWrapperClasses = classNames(
        'tooltip-wrapper',
        isActive ? 'active' : 'not-active',
        animateType,
        position,
        className,
        color,
    );
    
    const pointerClasses = classNames(
        'pointer',
        position,
        color,
    );

    useEffect( () => {
        if (
            typeof ref !== 'function' &&
            ref?.current
        ) {
            ref.current?.addEventListener( 'pointerover', handlePointerOver );
            ref.current?.addEventListener( 'pointerleave', handlePointerLeave );
            ref.current?.addEventListener( 'focus', handlePointerOver );
            ref.current?.addEventListener( 'focusout', handlePointerLeave );
            window.addEventListener( 'blur', handlePointerLeave );
            window.addEventListener( 'focusout', handlePointerLeave );

            setTooltipStyles( getTooltipStyles( {
                ref,
                tooltipRef,
                position,
                tooltipPadding,
            } ) );

            return () => {
                ref.current?.removeEventListener( 'pointerover', handlePointerOver );
                ref.current?.removeEventListener( 'pointerleave', handlePointerLeave );
                ref.current?.removeEventListener( 'focus', handlePointerOver );
                ref.current?.removeEventListener( 'focusout', handlePointerLeave );
                window.removeEventListener( 'blur', handlePointerLeave );
                window.removeEventListener( 'focusout', handlePointerLeave );
            }
        }
    }, [ position, ref, tooltipPadding, children ] );

    return (
        <div id={id} ref={tooltipRef} className={tooltipWrapperClasses} 
            role='tooltip' style={tooltipStyles}>
            <span className='tooltip'>
                {children}
                {
                    includePointer ? (
                        <span className={pointerClasses}
                            aria-hidden={true} />
                    ) : ''
                }
            </span>
        </div>
    )
} );

export default Tooltip;