// dependencies
import classNames from 'classnames';
// elements
import { ToggleButton, HamburgerIcon } from 'elements';


/* TYPES */
export interface Props {
    className?: string;
    isActive: boolean;
    onClick: () => void;
    ariaControls: string;
}

const HamburgerToggleButton = ( {
    className='',
    isActive,
    onClick,
    ariaControls,
}: Props ) => {
    /* CLASSNAMES */
    const hamburgerToggleButtonClasses = classNames(
        'hamburger-toggle-button',
        className,
    );

    return (
        <ToggleButton className={hamburgerToggleButtonClasses}
            ariaExpanded={isActive} onClick={onClick} ariaControls={ariaControls}>
            <HamburgerIcon isActive={isActive} />
        </ToggleButton>
    );
}

export default HamburgerToggleButton;