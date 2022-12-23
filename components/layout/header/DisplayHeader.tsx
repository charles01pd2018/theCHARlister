// dependencies
import classNames from 'classnames';
// elements
import { IconLogo, Switch } from 'elements';


/* TYPES */
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
            <IconLogo />

        </header>
    )
}

export default DisplayHeader;