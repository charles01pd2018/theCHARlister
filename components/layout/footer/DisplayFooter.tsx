// dependencies
import classNames from 'classnames';
// elements
import { NavLink, LinkIconButton, IconLogoLink } from 'elements';
// content
import { DISPLAY_FOOTER_CONTENT } from 'components/content';
// types
import type { LinkData } from 'types';
import type { LinkIconButtonContent } from 'elements/types';


/* TYPES */
export interface Content {
    email: string;
    textLinks: LinkData[];
    iconLinks: LinkIconButtonContent[];
}

export interface Props {
    className?: string;
    content?: Content;
}

const DisplayFooter = ( {
    className='',
    content=DISPLAY_FOOTER_CONTENT,
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
                                        <NavLink type='lift-underline' content={linkContent} />
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
                                            <LinkIconButton content={linkContent}
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
        </footer>
    )
}

export default DisplayFooter;