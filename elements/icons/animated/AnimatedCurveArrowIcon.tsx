// dependencies
import classNames from 'classnames';


export interface Props {
    className?: string;
    direction: 'bl-tr';
    color: string;
}

const AnimatedCurveArrowIcon = ( {
    className='',
    direction,
    color
}: Props ) => {
    /* CLASSNAMES */
    const animatedCurveArrowIconClasses = classNames(
        'animated-curve-arrow-icon',
        direction,
        className,
    );

    return (
        <svg className={animatedCurveArrowIconClasses} viewBox="0 0 800 800">
            <g stroke-width="12" stroke="hsl(227, 71%, 57%)" fill="none" 
                stroke-linecap="round" stroke-linejoin="round">
                <path className='line-path'
                    d="M250 250Q450 350 400 400Q294 533 550 550 " 
                    marker-end="url(#SvgjsMarker1141)" />
            </g>
            <defs>
                <marker className='arrow-tip'
                    markerWidth="10" markerHeight="10" refX="5" refY="5" 
                    viewBox="0 0 10 10" orient="auto" id="SvgjsMarker1141">
                    <polyline points="0,5 5,2.5 0,0" fill="none" 
                        stroke-width="1.6666666666666667" 
                        stroke="hsl(227, 71%, 57%)" 
                        stroke-linecap="round" 
                        transform="matrix(1,0,0,1,1.6666666666666667,2.5)" 
                        stroke-linejoin="round" />
                </marker>
            </defs>
        </svg>
    )
}

export default AnimatedCurveArrowIcon;