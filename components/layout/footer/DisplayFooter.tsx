// dependencies
import classNames from 'classnames';
// elements
import { NavLink, IconLink, IconLogoLink, GithubLink } from 'elements';
// content
import { DISPLAY_FOOTER_CONTENT } from 'components/content';
// types
import type { LinkData } from 'types';
import type { IconLinkContent } from 'elements/types';
import type { ActivePage } from 'components/types';


/* TYPES */
export interface Content {
    email: string;
    textLinks: LinkData[];
    iconLinks: IconLinkContent[];
}

export interface Props {
    className?: string;
    content?: Content;
    activePage?: ActivePage;
}

const DisplayFooter = ( {
    className='',
    content=DISPLAY_FOOTER_CONTENT,
    activePage,
}: Props ) => {
    /* CONTENT */
    const { email, textLinks, iconLinks } = content;

    /* CLASSNAMES */
    const displayFooterClasses = classNames(
        'display-footer',
        className,
    );

    return (
        <footer className={displayFooterClasses}>
            <div className='main-links-wrapper'>
                <nav className='site-nav-wrapper'>
                    <ul className='site-nav'>
                        {
                            textLinks.map( ( linkContent ) => {
                                return (
                                    <li className='link-wrapper text--norm' key={linkContent.href}>
                                        <NavLink type='lift-underline' content={linkContent}
                                            isActive={activePage === linkContent.text} />
                                    </li>
                                )
                            } )
                        }
                    </ul>
                </nav>
                <div className='contact-wrapper'>
                    <address className='email-wrapper'>
                        <NavLink type='lift-underline' content={{
                            text: email,
                            href: `mailto:${email}` }} />
                    </address>
                    <nav className='contact-icons-wrapper'>
                        <ul className='contact-icons'>
                            {
                                iconLinks.map( ( linkContent ) => {
                                    return (
                                        <li className='icon-wrapper' key={linkContent.href}>
                                            <IconLink content={linkContent}
                                                type='pop-out' target='_blank' />
                                        </li>
                                    )
                                } )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
            <IconLogoLink type='regular' />
            <GithubLink />
        </footer>
    )
}

export default DisplayFooter;