/**
 * Have unique box-shadow color depending on project?
 */

// dependencies
import classNames from 'classnames';
import { useState } from 'react';
// elements
import { SVG, Text } from 'elements';
// types
import type { ArticleContent } from 'components/types';


/* TYPES */
export interface Content extends ArticleContent {
}

export interface Props {
    className?: string;
    content: Content;
    WrapperTag?: 'article' | 'div';
}

const Technologies = ( {
    className='',
    content,
    WrapperTag='article',
}: Props ) => {
    /* CONTENT */
    const { items } = content;

    /* HOOKS */
    const [ activeArticleIndex, setActiveArticleIndex ] = useState<number>( 0 );

    /* CLASSNAMES */
    const parallaxClasses = classNames(
        'parallax-container',
        className,
    );

    return (
        <section className={parallaxClasses}>
            <div className='parallax-wrapper'>
                <div className='media-wrapper'>
                    <SVG {...items[activeArticleIndex].media}
                        width={150} height={150} />
                </div>
                <WrapperTag className='text-container'>
                    {
                        items.map( ( { texts }, index ) => {
                            return (
                                <div className='text-wrapper' key={index}>
                                    {
                                        texts.map( ( textContent, innerIndex ) => (
                                            <Text key={`text:${innerIndex}`}
                                                content={textContent} />
                                        ) )
                                    }
                                </div>
                            )
                        } )
                    }
                </WrapperTag>
            </div>
        </section>
    )
}

export default Technologies;