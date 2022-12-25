/**
 * Doggo wants a treat: https://codepen.io/oliviale/pen/xxboXzo
 */
// dependencies
import classNames from 'classnames';


export interface Props {
    className?: string;
}

const Switch = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const switchClasses = classNames(
        'switch',
        className,
    );

    return (
        <div className={switchClasses}>

        </div>
    )
}

export default Switch;