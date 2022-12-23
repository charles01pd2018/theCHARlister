// dependencies
import classNames from 'classnames';
import { ReactNode, HTMLAttributes } from 'react';


export interface Props extends HTMLAttributes<HTMLButtonElement>  {
    children: ReactNode;
    className?: string;
    onClick: () => void;
    ariaControls: string;
}

const ToggleButton = ( {
    children,
    className='',
    onClick,
    ariaControls,
    ...rest
}: Props ) => {
    /* CLASSNAMES */
    const toggleButtonClasses = classNames(
        'toggle-button',
        className,
    );

    return (
        <button className={toggleButtonClasses} onClick={onClick}
            aria-controls={ariaControls} {...rest}>
            {children}
        </button>
    )
}

export default ToggleButton;