// dependencies
import classNames from 'classnames';
import Link from 'next/link';
// elements
import { NavLink } from 'elements';
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
                links.map(( linkContent, index ) => {
                    const isLastLink = index === links.length - 1;

                    return (
                        <li className='link-wrapper'>
                            <NavLink className={isLastLink ? 'text--sm' : ''}
                                type={!isLastLink ? 'blue-background' : null} 
                                content={linkContent} />
                            {
                                !isLastLink ? (
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