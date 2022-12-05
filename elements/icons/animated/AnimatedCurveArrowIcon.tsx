// dependencies
import classNames from 'classnames';


export interface Props {
    className?: string;
}

const AnimatedCurveArrowIcon = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const animatedCurveArrowIconClasses = classNames(
        'animated-curve-arrow-icon',
        className,
    );

    return (
        <div className={animatedCurveArrowIconClasses}>

        </div>
    )
}

export default AnimatedCurveArrowIcon;