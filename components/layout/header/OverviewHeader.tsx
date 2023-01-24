// dependencies
import classNames from 'classnames';
import { useState } from 'react';
// lib
import { useClickOutsideRef } from 'lib';
// elements
import { IconLogoLink, IconTextLink, HamburgerToggleButton } from 'elements';
// content
import { OVERVIEW_HEADER_CONTENT } from 'components/content';
// types
import type { ActivePage } from 'components/types';
import type { IconTextLinkContent } from 'elements/types';


/* CONSTANTS */
const NAV_ID = 'mobile-nav';

/* TYPES */
export interface Content {
    links: IconTextLinkContent[];
}

export interface Props {
    className?: string;
    content?: Content;
    activePage?: ActivePage;
}

const OverviewHeader = ( {
    className='',
    content=OVERVIEW_HEADER_CONTENT,
    activePage,
}: Props ) => {
    /* CONTENT */
    const { links } = content;

    /* FUNCTIONS */
    const closeMobileNav = () => {
        setIsMobileNavActive( false );
    }

    const toggleMobileNav = () => {
        setIsMobileNavActive( state => !state );
    }
    
    /* HOOKS */
    const [ ref ] = useClickOutsideRef( closeMobileNav );
    const [ isMobileNavActive, setIsMobileNavActive ] = useState<boolean>( false );

    /* CLASSNAMES */
    const overviewHeaderClasses = classNames(
        'header',
        'overview-header',
        className,
    );

    const linksClasses = classNames(
        'links',
        isMobileNavActive && 'active',
    );

    return (
        <header className={overviewHeaderClasses}>
            <IconLogoLink />
            <HamburgerToggleButton onClick={toggleMobileNav}
                 isActive={isMobileNavActive} ariaControls={NAV_ID} />
            <nav ref={ref} id={NAV_ID} className='nav'>
                <ul className={linksClasses}>
                    {
                        links.map( ( linkContent ) => (
                            <li key={linkContent.href} className='link-wrapper'>
                                <IconTextLink content={linkContent}
                                    isActive={activePage === linkContent.text}
                                    onClick={closeMobileNav} />
                            </li>
                        ) )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default OverviewHeader;