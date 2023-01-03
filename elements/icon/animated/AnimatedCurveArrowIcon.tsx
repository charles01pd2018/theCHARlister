// dependencies
import classNames from 'classnames';
// lib
import { COLORS } from 'lib';
// types
import type { Colors } from 'types';


export interface Props {
    className?: string;
    animate?: boolean;
    direction: 'bl-tr';
    color: Colors;
}

const AnimatedCurveArrowIcon = ( {
    className='',
    animate,
    direction,
    color,
}: Props ) => {
    /* CONTENT */
    const stroke = COLORS[ color ][ 4 ];

    /* CLASSNAMES */
    const animatedCurveArrowIconClasses = classNames(
        'animated-curve-arrow-icon',
        animate && 'animate',
        direction,
        className,
    );

    return (
        <svg className={animatedCurveArrowIconClasses} viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg">
            <g strokeWidth="12" stroke={stroke} fill="none" 
                strokeLinecap="round" strokeLinejoin="round">
                <path className='line-path'
                    d="M250 250Q450 350 400 400Q294 533 550 550 " 
                    markerEnd="url(#SvgjsMarker1141)" />
            </g>
            <defs>
                <marker className='arrow-tip'
                    markerWidth="10" markerHeight="10" refX="5" refY="5" 
                    viewBox="0 0 10 10" orient="auto" id="SvgjsMarker1141">
                    <polyline points="0,5 5,2.5 0,0" fill="none" 
                        strokeWidth="1.6666666666666667" 
                        stroke={stroke}
                        strokeLinecap="round" 
                        transform="matrix(1,0,0,1,1.6666666666666667,2.5)" 
                        strokeLinejoin="round" />
                </marker>
            </defs>
        </svg>
    )
}

export default AnimatedCurveArrowIcon;