// dependencies
import classNames from 'classnames';


/* TYPES */
export interface Props {
    className?: string;
    isActive: boolean;
}

const HamburgerIcon = ( {
    className='',
    isActive,
}: Props ) => {
    /* CLASSNAMES */
    const hamburgerIconClasses = classNames(
        'hamburger-icon',
        isActive && 'active',
        className,
    );

    return (
        <span className={hamburgerIconClasses} aria-hidden={true}>
            <span className='line' />
            <span className='line' />
            <span className='line' />
        </span>

    );
}

export default HamburgerIcon;