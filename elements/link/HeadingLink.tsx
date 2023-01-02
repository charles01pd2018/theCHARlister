// dependencies
import classNames from 'classnames';
import Link from 'next/link';
// types
import type { Headings, LinkData } from 'types';


/* TYPES */
export interface Props {
    className?: string;
    headingClassName?: string;
    content: LinkData;
    HeadingTag: Headings;
    target?: '_blank' | '_self';
}

const HeadingLink = ( {
    className='',
    headingClassName='',
    content,
    HeadingTag,
    target='_blank',
}: Props ) => {
    /* CONTENT */
    const { text, href } = content;

    /* CLASSNAMES */
    const headingLinkClasses = classNames(
        'heading-link',
        className,
    );

    return (
        <Link className={headingLinkClasses} href={href} target={target}>
            <HeadingTag className={headingClassName}>
                {text}
            </HeadingTag>
        </Link>
    );
}

export default HeadingLink;