// dependencies
import classNames from 'classnames';
import Link from 'next/link';


/* TYPES */
export interface Content {
    text: string;
    href: string;
}

export interface Props {
    className?: string;
    content: Content;
    type: 'arrow';
}

const LinkButton = ( {
    className='',
    content,
    type,
}: Props ) => {
    /* CONTENT */
    const { text, href } = content;

    /* CLASSNAMES */
    const linkButtonClasses = classNames(
        'link-button',
        type,
        className,
    );

    return (
        <Link className={linkButtonClasses} href={href}>
            {text}
        </Link>
    )
}

export default LinkButton;