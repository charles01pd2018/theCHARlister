// dependencies
import classNames from 'classnames';
import { useState } from 'react';
// elements
import { IconLink, ToggleButton, SVG, XIcon } from 'elements';
// content
import { ICONS_NAV_CONTENT } from 'components/content';
// types
import type { IconsNavProps } from 'components/types';


/* CONSTANTS */
const ARIA_CONTROLS = 'icons-nav';

const IconsNavFooter = ( {
    className='',
    content=ICONS_NAV_CONTENT,
    activeItemIndex,
    iconSize=[ 33, 33 ],
}: IconsNavProps ) => {
    /* CONTENT */
    const { items } = content;
    const activeIconContent = items[activeItemIndex];
    const { color, icon } = activeIconContent;
    const { data, alt } = icon;
    const [ width, height ] = iconSize;

    /* HOOKS */
    const [ isOpen, setIsOpen ] = useState<boolean>( false );

    /* FUNCTIONS */
    const toggleIsOpen = () => {
        setIsOpen( state => !state );
    }

    const close = () => {
        setIsOpen( false );
    }

    /* CLASSNAMES */
    const isActiveClass = isOpen ? 'active' : 'not-active';

    const iconsNavFooterClasses = classNames(
        'icons-nav-footer',
        className,
    );

    const toggleButtonClasses = classNames(
        color,
        isActiveClass,
    );

    const popoutLinkWrapperClasses = classNames(
        'popout-link-wrapper',
        isActiveClass,
    );

    return (
        <footer className={iconsNavFooterClasses}>
            <ToggleButton className={toggleButtonClasses}
                onClick={toggleIsOpen} ariaControls={ARIA_CONTROLS}
                aria-label={`${isOpen ? 'Close' : 'Open'} Navigation`}>
                <XIcon />
                <SVG className='ref-icon'
                    data={data} alt={alt}
                    width={width} height={height} />
            </ToggleButton>
            <ul id={ARIA_CONTROLS} className='nav-icons-wrapper'>
                {
                    items.map( ( content ) => {
                        return (
                            <li className={popoutLinkWrapperClasses} key={`footer:${content.href}`}>
                                <IconLink onClick={close}
                                    content={content} type='background' />
                            </li>
                        )
                    } )
                }
            </ul>
        </footer>
    );
}

export default IconsNavFooter;