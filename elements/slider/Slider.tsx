// dependencies
import classNames from 'classnames';
import { useEffect, useState, useRef, useMemo, ReactNode,
    MutableRefObject } from 'react';
// lib
import { useClientWidth, useIsSafari } from 'lib';
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
    id: string;
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

const getInitialActiveIndex = ( items: SliderItem[] ) => {
    for ( let i=0; i < items.length; i++ ) {
        if ( items[i].checked ) {
            return i;
        }
    }
}

const Slider = ( {
    id,
    className='',
    content,
    name,
    onChange,
    color='blue',
}: Props ) => {
    /* CONTENT */
    const { items } = content;
    const initialActiveIndex = useMemo( 
        () => getInitialActiveIndex( items ), [] ) as number;
    
    /* HOOKS */
    const ref = useRef<HTMLUListElement>( null );
    const activeIndex = useRef<number>( initialActiveIndex ) as MutableRefObject<number>;
    const [ itemWidths, setItemWidths ] = useState<number[]>();
    const [ activeItemWidth, setActiveItemWidth ] = useState<number>();
    const clientWidth = useClientWidth();
    const isSafari = useIsSafari();

    /* FUNCTIONS */
    const handleChange = ( index: number ) => {
        onChange( updateItems( items, index ) );
        activeIndex.current = index;
    }

    /* CLASSNAMES */
    const activeId = `${id}--checked`;
    const sliderClasses = classNames(
        'slider',
        color,
        className,
    );

    useEffect( () => {
        const activeItem = document.getElementById( activeId );

        if ( activeItem ) {
            setActiveItemWidth( activeItem.clientWidth );
        }
    }, [ items, clientWidth ] );

    useEffect( () => {
        const items = document
            .getElementsByClassName( id );

        setItemWidths( [ ...items ].map( ( { clientWidth } ) => clientWidth ) );
    }, [ items, clientWidth ] );

    const initialLeft = useMemo( () => calcPrevItemWidths( {
        activeIndex: initialActiveIndex,
        itemWidths,
    } ), [ itemWidths, clientWidth ] );

    const prevItemWidths = useMemo( () => calcPrevItemWidths( {
        activeIndex: activeIndex.current,
        initialNum: initialActiveIndex,
        itemWidths,
    } ), [ activeIndex, itemWidths, clientWidth ] );

    return (
        <ul ref={ref} className={sliderClasses}>
            <span className='background-slider'
                aria-hidden={true} style={{
                    left: initialLeft ? `${initialLeft}px` : undefined,
                    transform: prevItemWidths ? `translateX(${prevItemWidths}px)` : undefined,
                    width: activeItemWidth ? `${activeItemWidth}px` : undefined,
                }} />
            {
                items.map( ( { labelChildren, value, checked }, index ) => {
                    /* CLASSNAMES */
                    const itemClasses = classNames(
                        'slider-item',
                        id,
                        isSafari && 'offset-less',
                        checked ? 'active-slider-item' : 
                            'not-active-slider-item',
                    );

                    return (
                        <li id={checked ? activeId : undefined} key={value} 
                            className={itemClasses}>
                            <input id={name} className='input' type='radio'
                                name={name} value={value} checked={checked}
                                onChange={() => handleChange( index )} />
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