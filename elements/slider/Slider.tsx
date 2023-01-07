// dependencies
import classNames from 'classnames';
import { useEffect, useState, useRef, useMemo } from 'react';
// types
import type { Colors } from 'types';


/* TYPES */
interface Item {
    type: string;
    text: string;
    isActive?: boolean;
}

export interface Content {
    items: Item[];
}

export interface Props {
    id?: string;
    className?: string;
    content: Content;
    onClick: ( sectionType: string ) => void;
    activeIndex: number;
    color?: Colors;
}

interface CalcPrevItemWidthsInput {
    activeIndex: number;
    initialNum?: number;
    itemWidths?: number[];
}

/* UTILS FUNCTIONS */
const calcPrevItemWidths = ( input: CalcPrevItemWidthsInput ) => {
    /* VARS */
    const { activeIndex, initialNum=0, itemWidths } = input;

    let width = 0;

    if ( !itemWidths )
        return width;
    
    if ( initialNum > activeIndex )
        for ( let i=activeIndex; i < initialNum; i++ ) {
            width -= itemWidths[i];
        }
    else
        for ( let i=initialNum; i < itemWidths.length; i++ ) {
            if ( i === activeIndex )
                break;
            
            width += itemWidths[i];
        }

    return width;
}


const Slider = ( {
    className='',
    content,
    onClick,
    activeIndex,
    color='blue',
}: Props ) => {
    /* CONTENT */
    const { items } = content;
    
    /* HOOKS */
    const ref = useRef<HTMLUListElement>( null );
    const initialActiveIndex = useRef<number>( activeIndex );
    const [ itemWidths, setItemWidths ] = useState<number[]>();
    const [ activeItemWidth, setActiveItemWidth ] = useState<number>();
 
    /* CLASSNAMES */
    const sliderClasses = classNames(
        'slider',
        color,
        className,
    );

    useEffect( () => {
        const activeItem = document
            .getElementsByClassName( 'active-slide-state-nav-item' )[0];

        setActiveItemWidth( activeItem.clientWidth );
    }, [ items ] );

    useEffect( () => {
        const items = document
            .getElementsByClassName( 'slide-state-nav-item' );

        setItemWidths( 
            [ ...items ].map( ( { clientWidth } ) => clientWidth ) );
    }, [] );

    const initialLeft = useMemo( () => calcPrevItemWidths( {
        activeIndex: initialActiveIndex.current,
        itemWidths,
    } ), [ itemWidths ] );

    const prevItemWidths = useMemo( () => calcPrevItemWidths( {
        activeIndex,
        initialNum: initialActiveIndex.current,
        itemWidths,
    } ), [ activeIndex ] );

    return (
        <ul ref={ref} className={sliderClasses}>
            <span className='background-slider'
                aria-hidden={true} style={{
                    left: `${initialLeft}px`,
                    transform: `translateX(${prevItemWidths}px)`,
                    width: `${activeItemWidth}px`,
                }} />
            {
                items.map( ( { type, isActive, text } ) => {
                    /* CLASSNAMES */
                    const itemClasses = classNames(
                        'slide-state-nav-item',
                        isActive ? 'active-slide-state-nav-item' : 
                            'not-active-slide-state-nav-item',
                    );

                    return (
                        <li key={type} className={itemClasses}>
                            <button onClick={() => onClick( type )} 
                                aria-pressed={!!isActive}>
                                {text}
                            </button>
                        </li>
                    )
                } )
            }
        </ul>
    );
}

export default Slider;