// dependencies
import classNames from 'classnames';
// constants
import { CONTACT_FOOTER_CONTENT } from 'components/content';
// types
import type { LinkData, IconLink } from 'types';


/* TYPES */
export interface Content {
    email: string;
    textLinks: LinkData[];
    iconLinks: IconLink[];
}

export interface Props {
    className?: string;
    content?: Content;
}

const ContactFooter = ( {
    className='',
    content=CONTACT_FOOTER_CONTENT,
}: Props ) => {
    /* CONTENT */
    const { email, textLinks, iconLinks } = content;

    /* CLASSNAMES */
    const contactFooterClasses = classNames(
        'contact-footer',
        className,
    );

    return (
        <footer className={contactFooterClasses}>

        </footer>
    )
}

export default ContactFooter;