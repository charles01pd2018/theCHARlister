// dependencies
import classNames from 'classnames';


export interface Props {
    className?: string;
}

const DisplayHeader = ( {
    className='',
}: Props ) => {
    /* CLASSNAMES */
    const displayHeaderClasses = classNames(
        'display-header',
        className,
    );

    return (
        <header className={displayHeaderClasses}>

        </header>
    )
}

export default DisplayHeader;