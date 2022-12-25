// dependencies
import classNames from 'classnames';
import { useRef } from 'react';
// elements
import { Switch, IconLogoLink, Tooltip } from 'elements';
// consants
import { DISPLAY_HEADER_CONTENT } from 'components/content'
// lib
import { useScroll } from 'lib';
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
    switchProps?: SwitchProps;
}

const DisplayHeader = ( {
    className='',
    content=DISPLAY_HEADER_CONTENT,
    switchProps,
}: Props ) => {
    /* CONTENT */
    const { switchContent } = content;

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
            {
                switchProps ? (
                    <Switch id='animate-toggle' name='animate-toggle'
                        type='doggo' content={switchContent} 
                        hideLabel={true} {...switchProps} />
                ) : ''
            }
        </header>
    )
}

export default DisplayHeader;