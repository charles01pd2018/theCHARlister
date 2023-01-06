// dependencies
import { useState, useEffect } from 'react';
import { useThrottledCallback } from 'use-debounce';
import classNames from 'classnames';
// utils
import calcPagePosition from './calcPagePosition';


/* TYPES */
interface Styles {
    progressColor?: string;
    backgroundColor?: string;
}

export interface Props {
    className?: string;
    styles?: Styles;
    ariaLabel?: string;
}

/**
 * Tracks the scroll position of the page via a progress bar.
 * Useful for blog pages.
 */
const ProgressBar = ( {
    className='',
    styles: {
        progressColor='#87b6ff',
        backgroundColor='#e0ecff',
    }={},
    ariaLabel='Page Progress',
}: Props ) => {
    /* HOOKS */
    const [ progress, setProgress ] = useState<number>( 0 );

    /* FUNCTIONS */
    const handleScroll = useThrottledCallback( 
        () => setProgress( calcPagePosition() ),
        15
    );

    /* CLASSNAMES */
    const containerClasses = classNames(
        'progress-bar-wrapper',
        className,
    );

    /* STYLES */
    const styles = {
        background: `linear-gradient( to right, ${progressColor} ${progress}%, ${backgroundColor} 0% )`,
    }

    useEffect( () => {
        document.addEventListener( 'scroll', handleScroll );
        return () => {
            document.removeEventListener( 'scroll', handleScroll );
        }
    }, [ progress ] );

    return (
        <section className={containerClasses}>
            <div className='progress-bar' role='progressbar'
                style={styles} aria-label={ariaLabel} />
        </section>
    );
}

export default ProgressBar;