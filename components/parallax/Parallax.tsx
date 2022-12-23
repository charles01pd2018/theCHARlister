// dependencies
import classNames from 'classnames';
import { useState } from 'react';
// components
import { Article } from 'components';
// elements
import { SVG } from 'elements';
// types
import type { ArticleContent } from 'components/types';
import type { IconData } from 'types';


/* TYPES */
interface Item {
    articleContent: ArticleContent;
    icon: IconData;
}

export interface Content {
    items: Item[];
}

export interface Props {
    className?: string;
    content: Content;
}

const Technologies = ( {
    className='',
    content,
}: Props ) => {
    /* CONTENT */
    const { items } = content;

    /* HOOKS */
    const [ activeArticleIndex, setActiveArticleIndex ] = useState<number>( 0 );

    /* CLASSNAMES */
    const parallaxClasses = classNames(
        'parallax-wrapper',
        className,
    );

    return (
        <section className={parallaxClasses}>
            <ul className='parallax'>
                {
                    items.map( ( { articleContent, icon } ) => {
                        // TODO - use in view
                        return (
                            <li className='item'>
                                <Article content={articleContent} />
                                <SVG {...icon}
                                    width={100} height={100} />
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Technologies;