// dependencies
import classNames from 'classnames';
import { useEffect, useState, useRef, useMemo, ReactNode,
    MutableRefObject } from 'react';
// types
import type { Colors } from 'types';


/* TYPES */
export interface SliderItem {
    labelChildren: ReactNode;
    value: string;
    checked?: boolean;
}

export interface Content {
    items: SliderItem[];
}

export interface Props {
    className?: string;
    content: Content;
    name: string;
    onChange: ( newItems: SliderItem[] ) => void;
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

const updateItems = ( items: SliderItem[], index: number ) => {
    return items.map( ( item, i ) => ( {
        ...item,
        checked: index === i,
    } ) );
}

const Slider = ( {
    className='',
    content,
    name,
    onChange,
    color='blue',
}: Props ) => {
    /* CONTENT */
    const { items } = content;
    
    /* HOOKS */
    const ref = useRef<HTMLUListElement>( null );
    const initialActiveIndex = useRef<number>( null ) as MutableRefObject<number>;
    const activeIndex = useRef<number>( null ) as MutableRefObject<number>;
    const [ itemWidths, setItemWidths ] = useState<number[]>();
    const [ activeItemWidth, setActiveItemWidth ] = useState<number>();
 
    items.forEach( ( { checked }, index ) => {
        if ( checked ) {
            initialActiveIndex.current = index;
            activeIndex.current = index;
        }
    } );

    /* CLASSNAMES */
    const sliderClasses = classNames(
        'slider',
        color,
        className,
    );

    useEffect( () => {
        const activeItem = document
            .getElementsByClassName( 'active-slider-item' )[0];

        if ( activeItem ) {
            setActiveItemWidth( activeItem.clientWidth );
        }
    }, [ items ] );

    useEffect( () => {
        const htmlItems = document
            .getElementsByClassName( 'slider-item' );

        setItemWidths( [ ...htmlItems ].map( ( { clientWidth } ) => clientWidth ) );
    }, [ items ] );

    const initialLeft = useMemo( () => calcPrevItemWidths( {
        activeIndex: initialActiveIndex.current,
        itemWidths,
    } ), [ itemWidths, initialActiveIndex ] );

    const prevItemWidths = useMemo( () => calcPrevItemWidths( {
        activeIndex: activeIndex.current,
        initialNum: initialActiveIndex.current,
        itemWidths,
    } ), [ activeIndex, initialActiveIndex, itemWidths ] );

    return (
        <ul ref={ref} className={sliderClasses}>
            <span className='background-slider'
                aria-hidden={true} style={{
                    left: typeof initialLeft === 'number' ? 
                        `${initialLeft}px` : undefined,
                    transform: typeof prevItemWidths === 'number' ? 
                        `translateX(${prevItemWidths}px)` : undefined,
                    width: typeof activeItemWidth === 'number' ? 
                        `${activeItemWidth}px`: undefined,
                }} />
            {
                items.map( ( { labelChildren, value, checked }, index ) => {
                    /* CLASSNAMES */
                    const itemClasses = classNames(
                        'slider-item',
                        checked ? 'active-slider-item' : 
                            'not-active-slider-item',
                    );

                    return (
                        <li key={value} className={itemClasses}>
                            <input id={name} className='input' type='radio'
                                name={name} value={value} checked={checked}
                                onChange={() => onChange( updateItems( items, index ) ) } />
                            <label className='label' htmlFor={name}>
                                {labelChildren}
                            </label>
                        </li>
                    )
                } )
            }
        </ul>
    );
}

export default Slider;