// dependencies
import classNames from 'classnames';
import Link from 'next/link';
// elements
import { IconLogo } from 'elements';
// types
import type { IconLogoProps } from 'elements/types';


/* CONSTANTS */
const LOGO_LINK_TITLE = 'Navigate Home';

/* TYPES */
export interface Props extends IconLogoProps {
}

const IconLogoLink = ( {
    className='',
    ...rest
}: Props ) => {
    /* CLASSNAMES */
    const iconLogoLinkClasses = classNames(
        'icon-logo-link',
        className,
    );

    return (
        <Link className={iconLogoLinkClasses} href='/'
            title={LOGO_LINK_TITLE} aria-label={LOGO_LINK_TITLE}>
            <IconLogo {...rest} />
        </Link>
    );
}

export default IconLogoLink;