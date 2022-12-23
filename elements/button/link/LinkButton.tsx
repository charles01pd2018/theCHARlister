// dependencies
import classNames from 'classnames';
import Link from 'next/link';


/* TYPES */
export interface Content {
    text: string;
}

export interface Props {
    className?: string;
    content: Content;
    href: string;
}

const LinkButton = ( {
    className='',
    content,
    href,
}: Props ) => {
    /* CONTENT */
    const { text } = content;

    /* CLASSNAMES */
    const linkButtonClasses = classNames(
        'link-button',
        className,
    );

    return (
        <Link className={linkButtonClasses} href={href}>
            {text}
        </Link>
    )
}

export default LinkButton;