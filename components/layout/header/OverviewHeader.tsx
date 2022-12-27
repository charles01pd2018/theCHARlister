// dependencies
import classNames from 'classnames';
// elements
import { IconLogoLink, IconTextLink } from 'elements';
// content
import { OVERVIEW_HEADER_CONTENT } from 'components/content';
// types
import type { ActivePage } from 'components/types';
import type { IconTextLinkContent } from 'elements/types';


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

    /* CLASSNAMES */
    const overviewHeaderClasses = classNames(
        'header',
        'overview-header',
        className,
    );

    return (
        <header className={overviewHeaderClasses}>
            <IconLogoLink />
            <nav className='nav'>
                <ul className='links'>
                    {
                        links.map( ( linkContent ) => (
                            <li className='link-wrapper'>
                                <IconTextLink key={linkContent.href} content={linkContent}
                                    isActive={activePage === linkContent.text} />
                            </li>
                        ) )
                    }
                </ul>
            </nav>
        </header>
    )
}

export default OverviewHeader;