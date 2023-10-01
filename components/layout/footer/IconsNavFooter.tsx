// dependencies
import classNames from 'classnames';
import { useState } from 'react';
import Image from 'next/image';
// elements
import { IconLink, ToggleButton, XIcon } from 'elements';
// content
import { ICONS_NAV_CONTENT } from 'components/content';
// types
import type { IconsNavProps } from 'components/types';


/* CONSTANTS */
const ARIA_CONTROLS = 'icons-nav';

const IconsNavFooter = ( {
    className='',
    content=ICONS_NAV_CONTENT,
    activeIndex,
    iconSize=[ 33, 33 ],
}: IconsNavProps ) => {
    /* CONTENT */
    const { items } = content;
    const activeIconContent = items[activeIndex];
    const { color } = activeIconContent;
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
            <ToggleButton className={toggleButtonClasses} ariaExpanded={isOpen}
                onClick={toggleIsOpen} ariaControls={ARIA_CONTROLS}
                aria-label={`${isOpen ? 'Close' : 'Open'} Navigation`}>
                <XIcon />
                {
                    items.map( ( { icon }, index ) => {
                        /* CLASSNAMES */
                        const iconClasses = classNames(
                            'ref-icon',
                            index === activeIndex ? 'active' : 'not-active',
                        );

                        return (
                            <Image key={icon.alt} className={iconClasses}
                                src={icon.data} alt={icon.alt}
                                width={width} height={height} />
                        );
                    } )
                }
            </ToggleButton>
            <ul id={ARIA_CONTROLS} className='nav-icons-wrapper'>
                {
                    items.map( ( content ) => (
                        <li className={popoutLinkWrapperClasses} key={`footer:${content.href}`}>
                            <IconLink onClick={close}
                                content={content} type='background' />
                        </li>
                    ) )
                }
            </ul>
        </footer>
    );
}

export default IconsNavFooter;