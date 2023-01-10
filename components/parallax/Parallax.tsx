/**
 * Have unique box-shadow color depending on project?
 */

// dependencies
import classNames from 'classnames';
import { useState } from 'react';
// elements
import { SVG, Media, TagList, StackedIcons,
    ArticleText } from 'elements';
// types
import type { ArticleContent } from 'components/types';
import type { StackedIconsContent, TagListContent } from 'elements/types';


/* TYPES */
export interface Content extends ArticleContent {
    stackedIconsContent: StackedIconsContent;
    tagListContent: TagListContent;
}

export interface Props {
    className?: string;
    content: Content;
    WrapperTag?: 'article' | 'div';
}

const Parallax = ( {
    className='',
    content,
    WrapperTag='article',
}: Props ) => {
    /* CONTENT */
    const { items, stackedIconsContent, tagListContent } = content;

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
                <div className='content-wrapper'>
                    <div className='top'>
                        <TagList content={tagListContent} />
                        <StackedIcons content={stackedIconsContent} />
                    </div>
                    <WrapperTag className='text-container'>
                        {
                            items.map( ( { title, texts }, index ) => {
                                return (
                                    <div className='text-wrapper' key={index}>
                                        <h3 className='title'>{title}</h3>
                                        {
                                            texts.map( ( textProps, innerIndex ) => (
                                                <ArticleText key={`text:${innerIndex}`} 
                                                    {...textProps} />
                                            ) )
                                        }
                                    </div>
                                )
                            } )
                        }
                    </WrapperTag>
                </div>
            </div>
        </section>
    )
}

export default Parallax;