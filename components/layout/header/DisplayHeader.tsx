// dependencies
import classNames from 'classnames';
// elements
import { Switch, IconLogoLink } from 'elements';
// lib
import { useScroll } from 'lib';


/* TYPES */
export interface Props {
    className?: string;
}

const DisplayHeader = ( {
    className='',
}: Props ) => {
    /* HOOKS */
    const scrollDirection = useScroll();

    /* CLASSNAMES */
    const displayHeaderClasses = classNames(
        'display-header',
        `${scrollDirection === 'down' ? 'hide' : ''}`,
        className,
    );

    return (
        <header className={displayHeaderClasses}>
            <IconLogoLink />
        </header>
    )
}

export default DisplayHeader;