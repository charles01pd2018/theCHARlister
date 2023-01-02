// dependencies
import classNames from 'classnames';
import { useRef } from 'react';
// components
import DynamicHeader from './DynamicHeader';
// elements
import { Switch, IconLogoLink, Tooltip } from 'elements';
// content
import { DISPLAY_HEADER_CONTENT } from 'components/content';
// types
import type { SwitchContent } from 'elements/types';


/* CONSTANTS */
const SWITCH_ID = 'animate-toggle';
const TOOLTIP_ID = `${SWITCH_ID}-tooltip`;

/* TYPES */
export interface SwitchProps {
    onChange: () => void;
    checked: boolean;
}

export interface Content {
    switchContent: SwitchContent;
}

export interface Props {
    className?: string;
    content?: Content;
    switchProps: SwitchProps;
}

const DisplayHeader = ( {
    className='',
    content=DISPLAY_HEADER_CONTENT,
    switchProps,
}: Props ) => {
    /* CONTENT */
    const { switchContent } = content;

    /* HOOKS */
    const toggleRef = useRef<HTMLDivElement>( null );

    /* CLASSNAMES */
    const displayHeaderClasses = classNames(
        'display-header',
        className,
    );

    const tooltipClasses = classNames(
        'text--xxs',
        !switchProps.checked && 'not-checked',
    );

    return (
        <DynamicHeader className={displayHeaderClasses}>
            <IconLogoLink />
            <div ref={toggleRef} className='toggle-wrapper'>
                <Switch id={SWITCH_ID} name={SWITCH_ID}
                    type='doggo' content={switchContent}
                    hideLabel={true} aria-labelledby={TOOLTIP_ID} 
                    {...switchProps} />
                <Tooltip id={TOOLTIP_ID} ref={toggleRef}
                    className={tooltipClasses} animateType='pop'
                    position='bottom-left' includePointer={false}>
                    Toggle Animation
                </Tooltip>
            </div>
        </DynamicHeader>
    )
}

export default DisplayHeader;