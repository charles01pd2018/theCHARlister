// dependencies
import classNames from 'classnames';
import Link from 'next/link';
// types
import type { LinkData } from 'types';


export interface Content {
    links: LinkData[];
}

export interface Props {
    className?: string;
    content: Content;
}

const Breadcrumbs = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { links } = content;
    
    /* CLASSNAMES */
    const breadcrumbsClasses = classNames(
        'breadcrumbs',
        className,
    );

    return (
        <ul className={breadcrumbsClasses}>
            {
                links.map(( { text, href }, index ) => {
                    return (
                        <li className='link-wrapper'>
                            <Link className='link' href={href}>
                                {text}
                            </Link>
                            {
                                index !== links.length - 1 ? (
                                    <span className='seperator'>
                                        /
                                    </span>
                                ) : ''
                            }
                        </li>
                    )
                } )
            }
        </ul>
    )
}

export default Breadcrumbs;