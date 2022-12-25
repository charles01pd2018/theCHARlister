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

    return (
        <DynamicHeader className={displayHeaderClasses}>
            <IconLogoLink />
            <div ref={toggleRef} className='toggle-wrapper'>
                <Switch id='animate-toggle' name='animate-toggle'
                    type='doggo' content={switchContent}
                    hideLabel={true} {...switchProps} />
            </div>
        </DynamicHeader>
    )
}

export default DisplayHeader;